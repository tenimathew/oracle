---
id: Section 20. Query Tuning
sidebar_position: 20
description: Query Tuning
---

## SELECT AS OF Clause

```sql
SELECT * FROM table_name
AS OF TIMESTAMP(SYSTIMESTAMP-INTERVAL '1' MINUTE);
```

## Modes of Locking

### Exclusive Lock

- If a lock is acquired on a data item to perform a write operation, then it is an exclusive lock

### Shared Lock

- Read locks are shared because no data value is being changed

## Hard parse vs. soft parse

### Hard parse

- If a session executes an SQL statement that does not exist in the shared pool, then Oracle has to do a hard parse.
- Oracle must then:
  - Allocate memory for the statement from the shared pool.
  - Check the statement syntactically
  - Check if the user trying to execute the statement has the necessary rights to execute it
- A hard parse is expensive in both terms of CPU used and number of shared pool latch and library cache latch it needs to acquire and release. It should be avoided whenever possible.

### Soft parse

- If a session executes an SQL statement that exists in the shared pool and there is a version of the statement that can be used, then this is referred to as a soft parse.

### Identical Statements

- A statement is identical to another statement, if there is absolutely no difference between the letters. For example select x from y and SELECT X FROM Y are not identical, although they clearly do the same thing.
- Even if two statements are identical, this doesn't mean they are shareable. In order for two identical statements to be shareable, the following must be true
  - Object names must resolve the same actual objects
  - The optimizer goal is the same
  - Types and length of bind variables is similar
  - The NLS environment is the same

### Versions of statements

- If two statements are identical but not shareable, they have different versions of the statement. High version counts for sqlstatements should be avoided. The number of versions for a statement can be found in v$sqlarea:

```sql
SELECT SQL_TEXT FROM V$SQLAREA WHERE VERSION_COUNT > 1;
```

### Parent and Child Cursors

- For each SQL statement that you execute, Oracle engine will generate two cursors: parent and child cursor.
- Two cursors are generated because, there could be differences like there can be different bind variables or two different schema or different literals etc in same SQL statement.
- The parent cursor will hold the SQL statement and the child cursor will hold the information related to the differences.
- This makes the child cursor as deciding factor as to SQL statement to go for hard or soft parse.

### Parameter cursor_sharing

- The parameter cursor_sharing affects the behavior of un-identical sql statements. As of 9i, valid values for this parameter are: exact, force and similar.

```sql
ALTER SYSTEM SET CURSOR_SHARING='EXACT';
ALTER SYSTEM FLUSH SHARED_POOL;
SHO PARAMETER CURSOR_SHARING
```

- **EXACT**:Only allows statements with identical text to share the same cursor.
- **FORCE**:the requirement for two statements to be identical is relaxed: statements that differ in some literals, but are otherwise identical, are regarded as identical statements (and can share a cursor. So, the following two statements might be considered identical: select x from f where a='foo' and select x from f where a='bar'.
- Sometimes, this is too much of a relaxation because a user might actually want two statements to be different (as they might have a different execution plan). This can be avoided with `SIMILAR`
- **SIMILAR**: Statements that differ in literals are consider identical unless the execution plan is different for the statements..
- If you set `CURSOR_SHARING`, then Oracle recommends the `FORCE` setting unless you are in a DSS environment. `FORCE` limits the growth of child cursors that can occur when the setting is `SIMILAR`.

```sql
DROP TABLE TEST PURGE;
CREATE TABLE TEST (ID1 NUMBER, ID2 NUMBER, TXT CHAR(1000));
INSERT INTO TEST VALUES (1,1, 'one');

BEGIN
    FOR I IN 1..1000 LOOP
        INSERT INTO TEST VALUES (2,2, 'two');
        INSERT INTO TEST VALUES (3,3, 'three');
    END LOOP;
END;
/
INSERT INTO TEST SELECT * FROM TEST WHERE ID1=3;
COMMIT;
CREATE INDEX TEST_IDX1 ON TEST(ID1);
CREATE INDEX TEST_IDX2 ON TEST(ID2);
```

```sql
SELECT ID1,ID2, COUNT(*)
FROM TEST
GROUP BY ID1,ID2;

--Parent Cursor
COL SQL_TEXT FOR A30 WORD_WRAPPED

SELECT SQL_TEXT , SQL_ID, VERSION_COUNT, HASH_VALUE,PLAN_HASH_VALUE
FROM V$SQLAREA
WHERE UPPER(SQL_TEXT) LIKE 'SELECT COUNT(*) FROM TEST%'
    AND UPPER(SQL_TEXT) NOT LIKE '%HASH%';

--Child Cursor
COL CHILD_NUMBER FOR 99

SELECT SQL_TEXT, SQL_ID, CHILD_NUMBER CHILD#, HASH_VALUE, PLAN_HASH_VALUE
FROM V$SQL
WHERE UPPER(SQL_TEXT) LIKE 'SELECT COUNT(*) FROM TEST%'
    AND UPPER(SQL_TEXT) NOT LIKE '%HASH%';
```

### CURSOR_SHARING = EXACT

- Two statements are identical if they are textually identical (All bind variable and value in where clause are same). This is as is described above
- Causes maximum memory usage in library cache as two cursors –one parent and one child cursor are created for each distinct value of the bind variable.
- Gives best performance as optimizer creates different execution plan for each value of the bind variable.
- If histogram on a column is created with only one bucket, i.e. it does not know about the skew in data, only one child cursor will be created. If histogram is created on a column with >1 buckets i.e. it knows about skew in data in that column, it will create one child cursor for each statement even of the execution plan is same

### CURSOR_SHARING = SIMILAR reduces the number of parent cursors

- If there is skew (data is not evenly distributed. "Shuffled") in data
  - If histogram on the column containing skewed data is there
    - multiple child cursors may be created –one for each value of the bind variable
  - else (histogram is not available)
    - only one child cursor will be created
- else (Data is not skewed)
  - only one child cursor will be created.
- Reduces memory usage in library cache as only one parent cursor is created .

- If data is not skewed or the optimizer is not aware of the skew (without histogram), optimizer peeks at the value of the bind variable on the first execution of the statement and that plan is used for all the values of the bind variable.
- Thus only one child cursor is created resulting in minimum memory usage by child cursors.
- In this case performance will be affected if there is skew in the data.

- If data is skewed and the optimizer is aware of the skew (with histogram), multiple child cursor are created –one for each distinct value of the bind variable.
- In this case performance will be the best as optimizer creates different execution plan for each value of the bind variable.
- But in this case we will have multiple child cursors created for the same execution plan.

### CURSOR_SHARING = FORCE IN 10g

```sql
ALTER SYSTEM SET OPTIMIZER_FEATURES_ENABLE='10.2.0.3';
```

- Causes minimum memory usage in library cache as only one parent cursor and only one child cursor are created .
- In this case performance will be affected if there is skew in the data.

### CURSOR_SHARING = FORCE IN 11g (ADAPTIVE CURSOR SHARING)

```sql
ALTER SYSTEM SET OPTIMIZER_FEATURES_ENABLE='11.2.0.1';
```

- Reduces memory usage in library cache as only one parent cursor and only one child cursor are created .
- If data is not skewed or the optimizer is not aware of the skew, optimizer peeks at the value of the bind variable on the first execution of the statement and that plan is used for all the values of the bind variable.
- Thus only one child cursor is created resulting in minimum memory usage by child cursors.
- In this case performance will be affected if there is skew in the data. (same scenario as cursor_sharing=similar )

- If data is skewed and the optimizer is aware of the skew, multiple child cursor are created for different values of the bind variable –one for each distinct execution plan .
- In this case performance will be the best as optimizer creates different execution plans for different values of the bind variable.
- But in this case we will have only child cursor created for the same execution plan thereby resulting in optimum memory usage by child cursors

### Histograms

- A histogram is a special type of column statistic that provides more detailed information about the data distribution in a table column.
- By default, Oracle collects general information about column data such as high value, low value, number of distinct values, but does not always collect information about the distribution of data within column.
- A histogram sorts values into "buckets," as you might sort coins into buckets.
- If the data is data is unevenly distributed, the optimizer might need a histogram to determine best plan.
- **Height-Balanced Histograms**:The columns are divided into buckets so that each bucket contains approximately the same number of rows.
- **Frequency Histograms**: Each value of the column corresponds to a single bucket of the histogram. Each bucket contains the number of occurrences of this single value. Oracle automatically creates frequency histograms if the number of distinct values is less than or equal to the number of histogram buckets specified (maximum buckets is 254).

```sql
SELECT COLUMN_NAME, NUM_DISTINCT, NUM_BUCKETS, HISTOGRAM FROM DBA_TAB_COL_STATISTICS
WHERE TABLE_NAME = 'EMPLOYEES';
```

| COLUMN_NAME | NUM_DISTINCT | NUM_BUCKETS | HISTOGRAM |
| ----------- | ------------ | ----------- | --------- |
| EMPLOYEE_ID | 107          | 1           | NONE      |
| FIRST_NAME  | 91           | 1           | NONE      |
| LAST_NAME   | 102          | 102         | FREQUENCY |

```sql
SELECT ENDPOINT_NUMBER, ENDPOINT_VALUE
FROM DBA_TAB_HISTOGRAMS
WHERE TABLE_NAME = 'EMPLOYEES'
ORDER BY ENDPOINT_NUMBER;
```

| ENDPOINT_NUMBER | ENDPOINT_VALUE      |
| --------------- | ------------------- |
| 0               | 0.1                 |
| 0               | 100                 |
| 0               | 3.39535255630759E35 |
| 1               | 206                 |
| 1               | 10                  |
| 1               | 4.53868230530328E35 |

### METHOD_OPT

```sql
FOR ALL [INDEXED] [HIDDEN] COLUMNS SIZE [SIZE_CLAUSE] FOR COLUMNS SIZE SIZE_VALUE COLUMN_NAME
```

- The default, `FOR ALL COLUMNS`, will collects base column statistics for all of the columns (including hidden columns) in the table.
- `FOR ALL INDEXED COLUMNS` limits base column gathering to only those columns that are included in an index.
- `FOR ALL HIDDEN COLUMNS` limits base column statistics gathering to only the virtual columns that have been created on a table.
- The SIZE part of the `METHOD_OPT`
  - `AUTO` means Oracle will automatically determines the columns that need histograms based on the column usage information (SYS.COL_USAGE$), and the presence of a data skew.
  - An integer value indicates that a histogram will be created with at most the specified number of buckets. Must be in the range [1,254].
  - `SIZE` 1 means no histogram will be created.
  - `REPEAT` ensures a histogram will only be created for any column that already has one. This will limit the maximum number of buckets used for the newly created histograms.
  - `SKEWONLY` automatically creates a histogram on any column that shows a skew in its data distribution.

```sql
BEGIN DBMS_STATS.GATHER_TABLE_STATS('SH', 'SALES',
    METHOD_OPT => 'FOR ALL COLUMNS SIZE 1 FOR COLUMNS SIZE 254 CUST_ID'); --Histogram created for CUST_ID column and not for any other columns
END;
------
BEGIN
    DBMS_STATS.DELETE_COLUMN_STATS('SH', 'SALES', 'PROD_ID'); --Delete statistics
END;
------
BEGIN
    DBMS_STATS.GATHER_TABLE_STATS('SH', 'SALES',
        METHOD_OPT => 'FOR COLUMNS SIZE 254 CUST_ID TIME_ID CHANNEL_ID PROMO_ID'); --Histogram created for CUST_ID, TIME_ID, CHANNEL_ID, PROMO_ID columns
END;
------
EXEC DBMS_STATS.GATHER_TABLE_STATS(OWNNAME => 'HR',-
    TABNAME => 'TEST',-
    ESTIMATE_PERCENT =>NULL,-
    METHOD_OPT => 'FOR COLUMNS SIZE 1 ID1');
------
EXEC DBMS_STATS.GATHER_TABLE_STATS(OWNNAME => 'HR',-
    TABNAME => 'TEST',-
    ESTIMATE_PERCENT =>NULL,-
    CASCADE => TRUE,-
    METHOD_OPT => 'FOR COLUMNS SIZE 4 ID2');
```

### Bind Peeking

- Bind peeking or bind variable peeking, is when a query uses bind variable, the optimizer must select the best plan without the presence of literals in the SQL text.
- This plan might not be efficient for different bind variables.
- Oracle 11g Adaptive Cursor Sharing attempts to resolve this issue created by bind peeking.
- In this, if the optimizer detects that a SQL might perform better with different execution plans when provided with different bind variables, it will mark the SQL as bind sensitive cursor.
- So different execution plans are created for different bind variables.
- Bind aware cursorsare bind sensitive cursors which are eligible to use different plans for different bind values.
- After a cursor has been made bind aware, the optimizer chooses plans for future executions based on the bind variable and its selective estimate.
- If the database marks the cursor as bind aware, then the next time, it generates new plan for new bind variable and marks the original cursor generated for the statement as not sharable (IS_SHAREABLE = N in V$SQL) and the cursor is no longer will be useable and will be among the first to be expired out of the shared SQL area.

## Performance Tuning Tools

### Execution Plan:

- It is the sequence of steps that the optimizer determines how to execute a SQL statement. Using Explain plan command, you can identify the execution plan oracle applies to a particular SQL statement.

```sql
EXPLAIN PLAN
    [SET STATEMENT_ID = 'statement_id'] [INTO table_name]
    FOR SELECT * FROM employees;

SELECT * FROM PLAN_TABLE; --PLAN_TABLE is a Global Temporary table. Users cannot see the plans inserted by other sessions.

--Below query will show execution plan without considering the affects of bind variables used in the query.
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);--for better formatted output -like a report

--To see actual execution plan used by the database
GRANT SELECT ON v_$session TO hr;
GRANT SELECT ON v_$sql_plan_statistics_all to hr;
GRANT SELECT ON v_$sql_plan to hr;
GRANT SELECT ON v_$sql to hr;

SELECT * FROM V$SQL WHERE LOWER(SQL_TEXT) LIKE 'SELECT * FROM EMPLOYEES %';
--SQL ID: 1XTYZRSTP37SU
--CHILD NUMBER: 0

SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR('1XTYZRSTP37SU',0));

--We can access these dynamic performance views individually by:
SELECT * FROM v$session;
select * from v$sql_plan_statistics_all;
select * from v$sql_plan;
select * from v$sql;
```

```sql
EXPLAIN PLAN FOR
SELECT * FROM members
WHERE last_name = 'Harse';
```

```sql
SELECT PLAN_TABLE_OUTPUT
FROM TABLE(DBMS_XPLAN.DISPLAY());
```

## Query Optimization

### Rule Based Optimizer (RBO)

- Predefined set of conditions to determine what plan it is going to use. Default optimization is Rule based.

### Cost Based Optimizer(CBO)

- Pick up a plan according to least cost.

```sql
SQL> SET AUTOTRACE ON
--If any error comes, that mean, PLAN_TABLE is not defined.
--utlxplan.sql will create schema for this PLAN_TABLE
SQL> SET TIMING ON
--To turn on time elapsed
```

## Table Compression

- Oracle 9i onward allows whole tables or individual table partitions to be compressed to reduce disk space requirements.

```sql
CREATE TABLE test_tab (
    id NUMBER(10) NOT NULL,
    description VARCHAR2(100) NOT NULL,
    created_date DATE NOT NULL,
    created_by VARCHAR2(50) NOT NULL,
    updated_date DATE ,
    updated_by VARCHAR2(50)
)COMPRESS;
```

```sql
CREATE TABLE test_tab (
    id NUMBER(10) NOT NULL,
    description VARCHAR2(100) NOT NULL,
    created_date DATE NOT NULL,
    created_by VARCHAR2(50) NOT NULL,
    updated_date DATE ,
    updated_by VARCHAR2(50)
)COMPRESS
PARTITION BY RANGE (created_date) (
PARTITION test_tab_q1 VALUES LESS THAN (TO_DATE('01/04/2003', 'DD/MM/YYYY')),
PARTITION test_tab_q2 VALUES LESS THAN (MAXVALUE) --Default partition
);
```

```sql
ALTER TABLE test_tab NOCOMPRESS;
ALTER TABLE test_tab COMPRESS; --Basic Compression
ALTER TABLE test_tab COMPRESS FOR ALL OPERATIONS; --Advanced Compression
```

- Advanced compression enables table for all operations including DML with minimal performance loss. Advanced compression is a licensed feature.
- This doesn't affect the compression of existing data, but will affect the compression of new data that is loaded by direct path loads. If you want to compress existing data, you must perform a move operation, so the data gets compressed during the copy.

```sql
ALTER TABLE test_tab MOVE NOCOMPRESS;
ALTER TABLE test_tab MOVE COMPRESS;
```

- A similar action could be performed for an individual partition of a partitioned table.

```sql
ALTER TABLE test_tab MOVE PARTITION test_tab_q2 COMPRESS;
ALTER TABLE test_tab MOVE PARTITION test_tab_q2 NOCOMPRESS;
```

- If you use the keyword `MOVE` and there are indexes on the table, those indexes will become corrupt.
- This corruption occurs because you’re changing the row location in the table when you proactively compress the data.
- To fix this problem, after a `MOVE` compression action, rebuild the indexes.
- This is one reason you may choose to compress the data for future operations now and then move it later when you can incur downtime to rebuild the indexes.

```sql
SELECT compression, compress_for FROM USER_TABLES WHERE table_name = 'TEST_TAB';

SELECT partition_name, compression, compress_for FROM USER_TAB_PARTITIONS
WHERE table_name = 'TEST_TAB' ORDER BY 1;
```

```sql
SELECT SEGMENT_NAME, BYTES FROM USER_SEGMENTS WHERE SEGMENT_NAME = 'EMP'; --To check size of table
```

## Partitioning an existing table

- Create a new partition table with same structure of the table which you want to partition.
- The `DBMS_REDEFINITION` package provides an interface to perform an online redefinition of tables.

```sql
BEGIN
    DBMS_REDEFINITION.CAN_REDEF_TABLE('DEVIROTR', 'IRD_TXN_DTS_AUD'); --Determines if a given table can be redefined online
END;

BEGIN
    DBMS_REDEFINITION.START_REDEF_TABLE( --Initiates the redefinition process
        UNAME => 'DEVIROTR', --Schema name
        ORIG_TABLE => 'IRD_TXN_DTS_AUD', --Original Table
        INT_TABLE => 'IRD_TXN_DTS_AUD_P'); --Temporary table created with partition
END;

BEGIN
    DBMS_REDEFINITION.SYNC_INTERIM_TABLE( --Keeps the interim table synchronized with the original table
        UNAME => 'DEVIROTR', ORIG_TABLE => 'IRD_TXN_DTS_AUD',
        INT_TABLE => 'IRD_TXN_DTS_AUD_P');
END;

BEGIN
    DBMS_REDEFINITION.FINISH_REDEF_TABLE( --Completes the redefinition process
        UNAME => 'DEVIROTR', ORIG_TABLE => 'IRD_TXN_DTS_AUD',
        INT_TABLE => 'IRD_TXN_DTS_AUD_P');
END;

BEGIN
    DBMS_REDEFINITION.ABORT_REDEF_TABLE( --Cleans up errors that occur during the redefinition process and removes all temporary objects created by the reorganization process
        UNAME => 'DEVIROTR', ORIG_TABLE => 'IRD_TXN_DTS_AUD',
        INT_TABLE => 'IRD_TXN_DTS_AUD_P');
END;

BEGIN
    DBMS_STATS.GATHER_TABLE_STATS('DEVIROTR', 'IRD_TXN_DTS_AUD', CASCADE => TRUE, GRANULARITY=>'ALL'); --Gather statitstics for new table
END;

ALTER TABLE DEVIROTR.IRD_TXN_DTS_AUD ENABLE ROW MOVEMENT; --If any row is updated, ROW MOVEMENT enables that row to be moved to its corresponding partition.
```

## Split Partition

- `SPLIT PARTITION` command to divide a single partition into two partitions, and redistribute the partitions contents between the new partitions

### Splitting Range Partitions

```sql
ALTER TABLE IRD_TXN_DTS_AUD SPLIT PARTITION "PMAX" AT
    (TO_DATE('01/01/2021','DD/MM/YYYY')) INTO (PARTITION "2020", PARTITION "PMAX"); --Suppose PMAX is the default partition name and we want to move the data from default partition to different partition. 2020 will receive the rows that meet the subpartitioning constraints specified (Rows LESS THAN 01/01/2021) and PMAX will receive the rows are not directed to 2020.
```

### Splitting List Partitions

```sql
ALTER TABLE IRD_TXN_DTS_AUD SPLIT PARTITION "PMAX" VALUES
    (10,20,30) INTO (PARTITION "2020", PARTITION "PMAX");'
```

### Splitting Hash Partitions

- `SPLIT PARTITION` command cannot add a partition to a `HASH` partitioned table.
- There is no upper limit to the number of partitions that a table may have.

## Oracle Partitions

- Partitioning allows tables, indexes and index-organized tables to be subdivided into smaller pieces, enabling these database objects to be managed and accessed at a finer level of granularity (Indexing will be ineffective for large amount of data).
- Partition pruningis the act of eliminating, or ignoring partitions that are irrelevant to the SQL statements' selection criteria
- Mainly used in data warehousing area (More `SELECT` less DML)

### List Partition

- Enables rows to be allocated to partitions based on nominated lists of values
- This is similar but more flexible than range partitioning and enables non-adjacent partition key rows to be stored in the same partition. Ex: partition based on sales region; US sales, Mumbai sales; department wise

```sql
CREATE TABLE table_name (deptno NUMBER(4), dname VARCHAR2(20))
    PARTITION BY LIST(deptno)
    (PARTITION p1 VALUES ('10'), --PARTITION "2018" VALUES ('10'), --It will throw error ("invalid partition name") if we try to give partition name starting with number without quotes
    PARTITION p2 VALUES ('20'), --PARTITION "2019" VALUES ('20'),
    PARTITION p3 VALUES ('30'), --PARTITION "2020" VALUES ('30'),
    PARTITION p4 VALUES ('40'), --PARTITION "2021" VALUES ('40')
    PARTITION region_null VALUES (NULL), --NULL values
    PARTITION region_unknown VALUES (DEFAULT) --Default values
)ENABLE ROW MOVEMENT;
----
SELECT * FROM table_name PARTITION(p1);
```

### Hash Partition

- Allocates rows based on a mathematical hash function. This helps to ensure that each partition is of the same but tends to reduce the possibility of partition elimination for range scans.
- Have to specify number of partitions and oracle will divide the data into partitions using its algorithm.

```sql
CREATE TABLE table_name(empno, sal...)
PARTITION BY HASH(empno)
PARTITIONS 4
ENABLE ROW MOVEMENT;
----
SELECT * FROM table_name;
```

### Range Partition

- Allows rows to be allocated to partitions based on contiguous ranges of the partition key
- Range partition on a time-based column is common because it enables us to quickly purge older data by dropping a partition. Ex: keep only last 3 years of data; delete partition for 2014; Employee ID from 1 to 10,000 -10,000 to 40,000

```sql
CREATE TABLE table_name (empid, sal...)
    PARTITION BY RANGE(sal)
    INTERVAL (1000) --In future if the data is increasing, oracle will create partitions when it reach this interval
    (PARTITION p1 VALUES LESS THAN (1000),
    PARTITION p2 VALUES LESS THAN (2000),
    PARTITION p3 VALUES LESS THAN (3000),
    PARTITION p4 VALUES LESS THAN (4000),
    PARTITION p5 VALUES LESS THAN (MAXVALUE)--default value
)ENABLE ROW MOVEMENT; --inside partition, rows are allowed to move when the value changes. Ex: when the sal increases, that row moves to different partition. Otherwise it won't allow to update sal.
----
SELECT * FROM table_name PARTITION(p1);
```

## Composite Partitioning (Sub-partitioning)

- Doing partitioning inside a partition is called composite partitioning. Ex: Range then hash; Range then list etc.

```sql
CREATE TABLE table_name (empid, sal...)
    PARTITION BY RANGE(hiredate)
    SUBPARTITION BY LIST(deptno)
    (PARTITION p1 VALUES LESS THAN (TO_DATE('01-JAN-1980','dd-MON-yyyy'))
            (SUBPARTITION sp1 VALUES ('10'),
            SUBPARTITION sp2 VALUES ('20'),
            SUBPARTITION sp3 VALUES ('30'),
            SUBPARTITION sp4 VALUES ('40')),
        PARTITION p2 VALUES LESS THAN (TO_DATE('01-JAN-1990','dd-MON-yyyy'))
            (SUBPARTITION sp1 VALUES ('10'),
            SUBPARTITION sp2 VALUES ('20'),
            SUBPARTITION sp3 VALUES ('30'),
            SUBPARTITION sp4 VALUES ('40'))
    )ENABLE ROW MOVEMENT;
```

```sql
ALTER TABLE employee ADD PARTITION p5 VALUES LESS THAN (50);
----
ALTER TABLE employee DROP PARTITION p4;
----
ALTER TABLE employee RENAME PARTITION p3 tp p4;
----
ALTER TABLE employee TRUNCATE PARTITION p4;
----
ALTER TABLE employee SPLIT PARTITION p2 AT(15) INTO (PARTITION p21, PARTITION p22);
----
ALTER TABLE employee EXCHANGE PARTITION p21 WITH TABLE employee2
----
ALTER TABLE employee MOVE PARTITION p21 TABLESPACE SYSAUX;
```

## Oracle Hints

- Hints are used to explicitly instruct the oracle optimizer to use certain execution plan rather than oracle chooses by itself.
- More than one hints can be used at the same time.
- Use the hints when you are absolutely sure that the hints lead to a significant performance boost.
- Oracle recommends to use hints sparingly (less), and onlyafter you have collected statistics on the relevant tables and evaluated the optimizer plan without hints using the `EXPLAIN PLAN` statement.

### Hints for Optimization Approaches and Goals

| HINT     | DESCRIPTION                                                                                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ALL_ROWS | The ALL_ROWS hint explicitly chooses the cost-based approach to optimize a statement block with a goal of best throughput(that is, minimum total resource consumption). |

```sql
SELECT /*+ ALL_ROWS */ * FROM employees; --Cardinality: 107
```

| HINT          | DESCRIPTION                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| FIRST_ROWS(n) | Instructs Oracle to choose the plan that returns the first n rows most efficiently (best response time). |

```sql
SELECT /*+ FIRST_ROWS(10) */ * FROM employees; --Cardinality: 10; All rows will be selected but first 10 rows will be returned most effectively
```

- Oracle ignores `FIRST_ROWS` in all `DELETE` and `UPDATE` statements and in `SELECT` statement blocks that include sorts and/or groupings, as it needs to fetch all relevant data anyway.

### Hints for Access Paths

#### Cluster Index

- An table cluster that uses an index to locate data. The cluster index is a B-tree index on the cluster key.

#### Cluster Scan

- A cluster is a schema object that contains data from one or more tables, all of which have one or more columns in common.
- Oracle Database stores together all the rows from all the tables that share the same cluster key.
- In an indexed table cluster, Oracle Database first obtains the rowid of one of the selected rows by scanning the cluster index.
- Oracle Database then locates the rows based on this rowid.

#### Hash Scan

- The database uses a hash scan to locate rows in a hash cluster based on a hash value.In a hash cluster, all rows with the same hash value are stored in the same data block.
- Oracle Database first obtains the hash value by applying a hash function to a cluster key value specified by the statement, and then scans the data blocks containing rows with that hash value.

### Hints for Join Operation

#### Hashing

- Hashing is the process of converting an input of any length into a fixed size string of text using an algorithm (hash function).
- Hashing is used to index and retrieve items in a database because it is faster to find the item using the shorter hashed key than to find it using the original value.
- It can be also used for encrypting password and data.

#### Nested Loop Join

- A Nested Loops join works in the same way as nested loops.
- One of the joining tables is designated as the outer table (small table) and another one as the inner table (large table).
- For each row of the outer table, all the rows from the inner table are matched one by one if the row matches it is included in the result-set otherwise it is ignored.

#### Merge Join

- Merge join requires both inputs to be sorted.
- Because the rows are pre-sorted, a Merge join immediately begins the matching process.
- It reads a row from one input and compares it with the row of another input.
- If the rows match, that matched row is considered in the result-set.

#### To alter the degree of parallelism of a table

```sql
ALTER TABLE employees PARALLEL 4;
```

#### Hash Join

- A Hash join is performed in two phases; the Build phase (small table) and the Probe phase(large table).
- During the build phase, joining keys of all the rows of the build table are scanned.
- Hashes are generated and placed in an in-memory hash table.
- No rows are returned until this point. During the probe phase, joining keys of each row of the probe table are scanned.
- Again hashes are generated (using the same hash function as above) and compared against the corresponding hash table for a match.
- A Hash function requires significant amount of CPU cycles to generate hashes and memory resources to store the hash table

| HINT          | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FULL          | The FULL hint explicitly chooses a full table scan for the specified table. `SELECT /*+ FULL */ * FROM employees; `                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ROW_ID        | The ROWID hint explicitly chooses a table scan by rowid for the specified table. `SELECT /*+ROWID(employees)*/ * FROM employees WHERE rowid > 'AAAAtkAABAAAFNTAAA'; `                                                                                                                                                                                                                                                                                                                                                                |
| CLUSTER       | The CLUSTER hint explicitly chooses a cluster scan to access the specified table. It applies only to clustered objects. ```SELECT /*+ CLUSTER */ employees.last_name, department_id FROM employees, departments WHERE department_id = 10 AND employees.department_id = departments.department_id; `                                                                                                                                                                                                                                  |
| HASH          | The HASH hint explicitly chooses a hash scan to access the specified table. It applies only to tables stored in a cluster. ` /_+ HASH (table_name) _/ ```                                                                                                                                                                                                                                                                                                                                                                            |
| INDEX         | The INDEX hint explicitly chooses an index scan for the specified table. If a list of indexes specified, the optimizer chooses the one with lowest cost. If no index is specified, then the optimizer chooses the available index for the table with the lowest cost. You can use the INDEX hint for domain, B-tree, bitmap, and bitmap join indexes. However, Oracle recommends using INDEX_COMBINE rather than INDEX for bitmap indexes, because it is a more versatile hint. `SELECT /*+ INDEX(e,emp_dept_idx) */ * FROM emp e; ` |
| INDEX_ASC     | The INDEX_ASC hint explicitly chooses to scan the index entries in ascending order of their indexed values.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| INDEX_DESC    | The INDEX_DESC hint explicitly chooses to scan the index entries in descending order of their indexed values. In a partitioned index, the results are in descending order within each partition.                                                                                                                                                                                                                                                                                                                                     |
| INDEX_COMBINE | The INDEX_COMBINE hint explicitly chooses a bitmap access path for the table. If no indexes are given as arguments for the INDEX_COMBINE hint, then the optimizer uses whatever Boolean combination of bitmap indexes has the best cost estimate for the table. If certain indexes are given as arguments, then the optimizer tries to use some Boolean combination of those particular bitmap indexes.                                                                                                                              |
| NO_INDEX      | The NO_INDEX hint explicitly disallows a set of indexes for the specified table. `SELECT /*+ NO_INDEX(emp emp_dept_idx) */ * FROM emp, dept WHERE emp.deptno = dept.deptno; `                                                                                                                                                                                                                                                                                                                                                        |

| HINTS             | DESCRIPTION                                                                                                                                                                                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| USE_HASH          | The USE_HASH hint causes Oracle to join each specified table with another row source, using a hash join. `SELECT /*+ USE_HASH(employees departments)*/ * FROM employees, departments WHERE employees.department_id = departments.department_id; `                                                                                                   |
| USE_MERGE         | The USE_MERGE hint causes Oracle to join each specified table with another row source, using a sort-merge join. `SELECT /*+USE_MERGE(employees departments)*/ * FROM employees, departments WHERE employees.department_id = departments.department_id; `                                                                                            |
| USE_NL            | The USE_NL hint causes Oracle to join each specified table to another row source with a nested loops join, using the specified table as the inner table. `SELECT /*+USE_NL(employees departments)*/ * FROM employees, departments WHERE employees.department_id = departments.department_id; `                                                      |
| USE_NL_WITH_INDEX | The USE_NL_WITH_INDEX hint instructs the optimizer to join specified table to another row source with a nested loops join, using the specified table as the inner table and will use index `SELECT /*+ USE_NL_WITH_INDEX(e emp_department_idx) */ FROM employees e,departments d WHERE e.department_id = d.department_id and e.department_id= 40; ` |
| NO_USE_NL         | It instructs the optimizer to not to use nested loop joins when joining each specified table to another row source using the specified table as the inner table. `SELECT /*+NO_USE_NL(employees departments)*/ * FROM employees, departments WHERE employees.department_id = departments.department_id; `                                           |
| NO_USE_HASH       | It instructs the optimizer to not to use hash join. `SELECT /*+ NO_USE_HASH(employees departments)*/ * FROM employees, departments WHERE employees.department_id = departments.department_id; `                                                                                                                                                     |
| NO_USE_MERGE      | It instructs the optimizer to not to use sort merge join . `SELECT /*+NO_USE_MERGE(employees departments)*/ * FROM employees, departments WHERE employees.department_id = departments.department_id; `                                                                                                                                              |

### Hints for Join Orders

| HINTS   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LEADING | The LEADING hint causes Oracle to use the specified table as the first table in the join order. If you specify two or more LEADING hints on different tables, then all of them are ignored. If you specify the ORDERED hint, then it overrides all LEADING hints. `SELECT /*+ LEADING(e j) */ * FROM employees e, departments d, job_history j WHERE e.department_id = d.department_id AND e.hire_date = j.hire_date; `                                                                                   |
| ORDERED | The ORDERED hint causes Oracle to join tables in the order in which they appear in the FROM clause. If you omit the ORDERED hint from a SQL statement performing a join, then the optimizer chooses the order in which to join the tables. You might want to use the ORDERED hint to specify a join order if you know something about the number of rows selected from each table that the optimizer does not. Such information lets you choose an inner and outer table better than the optimizer could. |

### Hints for Parallel Execution

- Parallel hint enables a SQL statement to be simultaneously processed by multiple threads or processes.

| HINTS       | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PARALLEL    | The PARALLEL hint lets you specify the desired number of concurrent servers that can be used for a parallel operation. The hint applies to the SELECT, INSERT, UPDATE, and DELETE portions of a statement, as well as to the table scan portion. The database computes the degree of parallelism which can be 2 or greater. `SELECT /*+ PARALLEL */ last_name, first_name, salary FROM employees; ` |
| NO_PARALLEL | The NO_PARALLEL hint overrides a PARALLEL parameter in the DDL that created or altered the table. It uses SERIAL plan. `SELECT /*+ NO_PARALLEL(e) */ FROM employees e; `                                                                                                                                                                                                                            |

## SQL Performance Tuning & Tips

- Ensure the OS has enough I/O bandwidth, CPU power and swap space (Swap space is the portion of virtual memory that is on the hard disk, used when RAM is full)
- Operating systems, provide data caches which will consume memory while offering little or no performance benefit for the database. By default, all database I/O goes through the file system cache. On some Linux and UNIX systems, direct I/O is available which will allow the database files to be accessed by bypassing the file system cache. So it can save CPU resources and memory and allows file system cache to be dedicated to non-database activity.
- But in some cases, database does not use the database buffer cache then the direct I/O may yield worst performance than using OS cache.
- Use SQL_TRACE, AWR to find the performance problem.
- Look for wait events.
- Find columns that should be indexed.
- Verify statistics are current (`DBMS_STATS`)
- Determine whether the SQL queries can be improved
- Use `TRUNCATE` instead of `DELETE` if you need to delete whole content of the table
- Use `ROWID` while deleting duplicate rows
- Use frequent `COMMIT` while performing batch transactions; so the temporary space will be released
- Use `COUNT(column_name)` instead of `COUNT(*)` or `COUNT(1)`
- Use `WHERE` clause instead of `HAVING` clause (Except `GROUP BY` function)
- Minimize the lookups in `WHERE` clause queries
- Use multi column `UPDATE` while doing updates (UPDATE employees SET salary = 40000, email='skings' WHERE employee_id = 100;)
- Use `EXISTS` instead of `IN`
- Use `NOT EXISTS` instead of `NOT IN`
- Use `IN` in place of `OR` in `WHERE` clause filter
- Avoid `IS NULL` or `IS NOT NULL` on indexed column
- Use Oracle hints
- Avoid number-to-character conversions because numbers and characters compare differently and lead to performance downgrade.
- Never use `SELECT *` in production code. At some point, someone will come and modify the table or view you’re querying from. You might be fetching more columns than you actually need and it will create unnecessary overhead in the database.
- Use meaningful aliases, use `AS` for defining alias for easy reading
- Create your indexes carefully on all the tables where you have frequent search operations. Avoid index on the tables where you have less number of search operations and more number of insert and update operations.
- A full-table scan occurs when the columns in the `WHERE` clause do not have an index associated with them. You can avoid a full-table scan by creating an index on columns that are used as conditions in the `WHERE` clause of an SQL statement.
- Use pattern matching judiciously. `'LIKE'` queries cause full-table scans
- For queries that are executed on a regular basis, try to use procedures.
- You can optimize bulk data loads by dropping indexes.
- Oracle has many tools for managing SQL statement performance but among them two are very popular. These two tools are −
  - `EXPLAIN PLAN` − tool identifies the access path that will be taken when the SQL statement is executed.
  - `TKPROF` −SQL Trace generates a low level trace file that has a complete chronological record of everything a session is doing and waiting for when it “talks” to the database. `TKPROF` on the other hand takes that trace file and aggregates all of the low level details in an easy to read report. This report can then be quickly analyzed to find the root cause of the slow performance.
    Ex: TKPROF input.trc output.prd [options]

```sql
ALTER SYSTEM SET TIMED_STATISTICS = TRUE;
ALTER SESSION SET SQL_TRACE = TRUE;

SELECT COUNT(*) FROM DUAL;

ALTER SESSION SET SQL_TRACE = FALSE;

SELECT VALUE FROM V$DIAG_INFO WHERE NAME = 'Default Trace File';

CMD>TKPROF C:\APP\diag\rdbms\orcl\orcl\trace\orcl_ora_11512.trc E:\orcl_ora_11512.txt;
```

- Inefficient statements are mostly associated with a high number of block visits.
- Both, soft parse and hard parse are counted as parse in tkprof. More specifically, the parse count is incremented when the statement is hashed.
- COUNT (\*) and COUNT(1) -No much difference in performance (just fraction of seconds)

## Plan Stability

- Plan stability relies on preserving execution plans at a point in time when performance is satisfactory.
- In many environments, however, attributes for data types such as dates or order numbers can change rapidly.
- In this cases, permanent use of an execution plan can result in performance degradation over time as the data characteristics change.
- Plan stability preserves execution plans in stored outlines.
- An outline is implemented as a set of optimizer hints that are associated with the SQL statement.
- If the use of the outline is enabled for the statement, then Oracle Database automatically considers the stored hints and tries to generate an execution plan in accordance with those hints.
- Oracle Database can create a public or private stored outline for one or all SQL statements. T
- he optimizer then generates equivalent execution plans from the outlines when you enable the use of stored outlines.
