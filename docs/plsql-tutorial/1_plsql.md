---
id: Section 1. PLSQL
sidebar_position: 1
description: PLSQL
---

## What is PL/SQL?

- Procedural Language/ Standard Query Language.
- It is a procedural server side programming language
- Used to bridge the gap of SQL being non-procedural.
- Case-insensitive programming language.

## Advantages of PL\SQL

- Tight integration with SQL
- Business logic can be directly implemented at database level
- High performance, High productivity
- Support object oriented programming

```sql
DECLARE
    --Declaration statements
BEGIN
    --Executable statements
EXCEPTION
    --Exception handling statements
END;
```

## PL/SQL Blocks

- Blocks are basic programming units in PL/SQL programming language

### Anonymous Block

- As this block is created without a name, this block does not create any object in the database. Thus, the scope for reusability is zero. It compiles every time you execute.

### Named Block

- It creates a database object. Complied for one time and stored for reuse.

## Early vs. Late Binding

- Late binding means code is compiled at execution. Early binding means code is compiled prior to execution.

## PL/SQL data types

PL/SQL divides the scalar data types into four families:

- Number
- Boolean
- Character
- Datetime

### Scalar data type

- A scalar data type may have subtypes.
- A subtype is a data type that is a subset of another data type, which is its base type.
- A subtype further defines a base type by restricting the value or size of the base data type.

Note that PL/SQL scalar data types include SQL data types and its own data type such as Boolean.

### Numeric data types

- The numeric data types represent real numbers, integers, and floating-point numbers. They are stored as `NUMBER`, IEEE floating-point storage types (`BINARY_FLOAT` and `BINARY_DOUBLE`), and `PLS_INTEGER`.
- The data types `NUMBER`, `BINARY_FLOAT`, and `BINARY_DOUBLE` are SQL data types.
- The `PLS_INTEGER` datatype is specific to PL/SQL. It represents signed 32 bits integers that range from -2,147,483,648 to 2,147,483,647.
- Because `PLS_INTEGER` datatype uses hardware arithmetic, they are faster than `NUMBER` operations, which uses software arithmetic.
- In addition, `PLS_INTEGER` values require less storage than `NUMBER`. Hence, you should always use `PLS_INTEGER` values for all calculation in its range to increase the efficiency of programs.
- `PLS_INTEGER` and `BINARY_INTEGER` data types are identical.

The `PLS_INTEGER` datatype has the following predefined subtypes:

| PLS_INTEGER subtypes | Description                                                                           |
| -------------------- | ------------------------------------------------------------------------------------- |
| NATURAL              | Represents nonnegative PLS_INTEGER values                                             |
| NATURALN             | Represents nonnegative PLS_INTEGER values with NOT NULL constraint                    |
| POSITIVE             | Represents positive PLS_INTEGER values                                                |
| POSITIVEN            | Represents positive PLS_INTEGER value with NOT NULL constraint                        |
| SIGNTYPE             | Represents three values -1, 0, or 1, which are useful for tri-state logic programming |
| SIMPLE_INTEGER       | Represents PLS_INTEGER values with NOT NULL constraint.                               |

### Boolean data type

- The `BOOLEAN` datatype has three data values: `TRUE`, `FALSE`, and `NULL`.
- Boolean values are typically used in control flow structure such as `IF-THEN`, `CASE`, and loop statements like `LOOP`, `FOR LOOP`, and `WHILE LOOP`.
- SQL does not have the `BOOLEAN` data type, therefore, you cannot:
  - Assign a `BOOLEAN` value to a table column.
  - Select the value from a table column into a `BOOLEAN` variable.
  - Use a `BOOLEAN` value in a SQL function.
  - Use a `BOOLEAN` expression in a SQL statement.
  - Use a `BOOLEAN` value in the `DBMS_OUTPUT.PUT_LINE` and `DBMS_OUTPUT.PUT` subprograms.

### Character data types

- The character data types represent alphanumeric text. PL/SQL uses the SQL character data types such as `CHAR`, `VARCHAR2`, `LONG`, `RAW`, `LONG RAW`, `ROWID`, and `UROWID`.
- `CHAR(n)` is a fixed-length character type whose length is from 1 to 32,767 bytes.
- `VARCHAR2(n)` is varying length character data from 1 to 32,767 bytes.

#### RAW Datatype

- In Oracle PL/SQL, RAW is a data type used to store binary data, or data which is byte oriented (for example, graphics or audio files). One of the most important things to note about RAW data is that it can only be queried or inserted; RAW data cannot be manipulated. RAW data is always returned as a hexadecimal character value

### Datetime data types

- The datetime data types represent dates, timestamp with or without time zone and intervals.
- PL/SQL datetime data types are `DATE`, `TIMESTAMP`, `TIMESTAMP WITH TIME ZONE`, `TIMESTAMP WITH LOCAL TIME ZONE`, `INTERVAL YEAR TO MONTH`, and `INTERVAL DAY TO SECOND`.

### Data type synonyms

Data types have synonyms for compartibility with non-Oracle data sources such as IBM Db2, SQL Server. And it is not a good practice to use data type synonym unless you are accessing a non-Oracle Database.

| Data Type | Synonyms                                                                     |
| --------- | ---------------------------------------------------------------------------- |
| NUMBER    | DEC, DECIMAL, DOUBLE PRECISION, FLOAT, INTEGER, INT, NUMERIC, REAL, SMALLINT |
| CHAR      | CHARACTER, STRING                                                            |
| VARCHAR2  | VARCHAR                                                                      |

### CONSTANT, DEFAULT, NOT NULL

```sql
SET SERVEROUTPUT ON;

DECLARE
    V_PI CONSTANT NUMBER(7,6):=3.14; --Assigning is mandatory
    V_NAME VARCHAR2(20) DEFAULT 'Unknown'; --Assigning is mandatory
    V_AGE NUMBER NOT NULL :=50; --Assigning is mandatory
BEGIN
    DBMS_OUTPUT.PUT_LINE('v_pi:' ||V_PI);
    DBMS_OUTPUT.PUT_LINE('v_name:'||V_NAME);
    DBMS_OUTPUT.PUT_LINE('v_age:'||V_AGE);
END;
```

## Host/Bind/Session Variable

- It is a variable of the interface. This variable can be bonded with SQL or PL\SQL anonymous block. The scope of these variables is till the end of the session. These variables always preceded with a colon (:).

```sql
VARIABLE v_bind1 VARCHAR2(25); --Not PL/SQL statement

DECLARE
BEGIN
    :v_bind1 := 'Binding 1';
    DBMS_OUTPUT.PUT_LINE(:v_bind1);
END;
--Not PL/SQL statements--
VARIABLE v_bind2 VARCHAR2(25);
VARIABLE v_bind3 VARCHAR2(25);
EXECUTE :v_bind2 := 'Binding 2'; --SQL*Plus command
EXECUTE :v_bind3 := 'Binding 3';
PRINT :v_bind2;
PRINT; --Displays all bind variable values in the session
----
SET AUTOPRINT ON --To turn on automatic printing of bind variable while assigning
```

## Anchored Data type/ Inheriting data type

- It is used to pick up data type and size from a previously declared object into a new variable. Advantage of this is, when you change the data type or size of the field in the table, it will also affect this variable. So there is less maintenance.

```sql
VNAME EMP.ENAME%TYPE;
VEMP EMP%ROWTYPE; -- Record datatype variable
```

## Execute Immediate

- Using Execute Immediate, we can parse and execute any SQL statement or a PL/SQL block dynamically in Oracle database
- Use of bind variable: Security against SQL injections and performance enhancement by reducing hard parsing.
- Generally dynamic SQL is slower than static SQL so it should not be used unless absolutely necessary.
- Main advantage of dynamic SQL is that it allows to perform DDL commands that are not supported directly within PL/SQL

### Single Row Queries

```sql
DECLARE
    l_sql VARCHAR2(100);
    l_ename emp.ename%TYPE;
BEGIN
    l_sql:='SELECT ename FROM emp WHERE emp_no=1234';
    EXECUTE IMMEDIATE l_sql INTO l_ename;
END;
```

### DDL Operations

```sql
BEGIN
    EXECUTE IMMEDIATE 'TRUNCATE TABLE my_table';
END;
```

### PL/SQL Block using EXECUTE IMMEDIATE

```sql
DECLARE
    plsql_blk VARCHAR2(400);
BEGIN
    plsql_blk := 'DECLARE
            var_user VARCHAR2(10);
        BEGIN
            SELECT user INTO var_user FROM DUAL;
            DBMS_OUTPUT.PUT_LINE(''User:'' || var_user);
        END;';
    EXECUTE IMMEDIATE plsql_blk;
END;
```

### Bind Variable

```sql
DECLARE
    l_sql VARCHAR2(100);
    l_ename employees.first_name%TYPE;
BEGIN
    l_sql := 'SELECT first_name FROM employees WHERE employee_id = :empno and department_id = :deptno'; --:empno is a bind variable
    EXECUTE IMMEDIATE l_sql INTO l_ename USING 100,90;--passing 100 into empno and 90 into deptno as bind variable
    DBMS_OUTPUT.PUT_LINE(l_ename);
END;
```

### BULK COLLECT INTO with EXECUTE IMMEDIATE

```sql
DECLARE
    TYPE nt_Fname IS TABLE OF VARCHAR2(60);
    fname nt_Fname;
    sql_qry VARCHAR2(150);
BEGIN
    sql_qry := 'SELECT first_name FROM employees';
    EXECUTE IMMEDIATE sql_qry BULK COLLECT INTO fname;
END;
```

## UTL_MAIL

- The `UTL_MAIL` package was introduced in Oracle 10g to provide a simple API to allow email to be sent from PL/SQL.

## UTL_FILE

- In Oracle PL/SQL, `UTL_FILE` is an Oracle supplied package which is used for file operations (read and write) in conjunction with the underlying operating system.

```sql
DECLARE
    tc_logfile UTL_FILE.FILE_TYPE;
    filedir VARCHAR2(10);
    v_dir VARCHAR2(100);
    read_line VARCHAR2(200);
BEGIN
    filedir := 'E:\';
    v_dir := 'CREATE OR REPLACE DIRECTORY TEMP_TEXT as '''|| filedir||'''';
    EXECUTE IMMEDIATE v_dir;
    tc_logfile := UTL_FILE.FOPEN('TEMP_TEXT','TestFile.txt','W'); --A to append; W to write; R to read
    UTL_FILE.PUT_LINE(tc_logfile, 'STARTING..' || SYSTIMESTAMP);
    UTL_FILE.PUT_LINE(tc_logfile, 'This is a test file');

    IF UTL_FILE.IS_OPEN(tc_logfile) THEN
        UTL_FILE.FCLOSE(tc_logfile);
    END IF;
    tc_logfile := UTL_FILE.FOPEN('TEMP_TEXT','TestFile.txt','R');

    LOOP
        BEGIN
            UTL_FILE.GET_LINE(tc_logfile,read_line);
            DBMS_OUTPUT.PUT_LINE(read_line);
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
            EXIT;
        END;
    END LOOP;

    UTL_FILE.FCLOSE(tc_logfile);
END;
```

## External tables

```sql
CREATE OR REPLACE DIRECTORY directory_name AS 'C\Users'; --Directory object

CREATE TABLE students(name VARCHAR2(20),college VARCHAR2(20), major VARCHAR2(20))
ORGANIZATION EXTERNAL(
    TYPE ORACLE_LOADER
    --The ORACLE_LOADER access driver is the default. It can perform only data loads, and the data must come from text datafiles. Loads from external tables to internal tables are done by reading from the external tables' text-only datafiles.
    --The ORACLE_DATAPUMP access driver can perform both loads and unloads. The data must come from binary dump files. Loads to internal tables from external tables are done by fetching from the binary dump files. Unloads from internal tables to external tables are done by populating the external tables' binary dump files.
    DEFAULT DIRECTORY directory_name
    ACCESS PARAMETERS (
        RECORD DELIMITED BY NEWLINE
        FIELDS TERMINATED BY ',' --comma separated
        MISSING FIELD VALUE ARE NULL --if any data is missing, add them as NULL
            ( name CHAR(20),
            collage CHAR(20),
            major CHAR(20)
            )
        )
    LOCATION ('major.txt') --filename
)
REJECT LIMIT UNLIMITED; --stop the process if error comes more than specified value.
```

## Import data from Excel to Oracle using SQL Developer

- Right click the table you want to insert data -> select import data -> select excel file -> click open

## XMLELEMENT

The XMLELEMENT function is the basic unit for turning column data into XML fragments.

```sql
SQL> SELECT XMLELEMENT("name", e.first_name) AS employee FROM HR.employees e
WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<name>Louise</name>
----
SQL> SELECT XMLELEMENT("employee",
        XMLELEMENT("employee_no", e.employee_id),
        XMLELEMENT("name", e.first_name)
        ) AS employee
    FROM employees e
    WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<employee><employee_no>160</employee_no><name>Louise</name></employee>
----
SQL> SELECT XMLELEMENT("employee",
        XMLATTRIBUTES( --XMLATRIBUTES function converts column data into attributes of the parent element
            e.employee_id AS "employee_id",
            e.first_name AS "name")
        ) AS employee
    FROM employees e
    WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<employee employee_id="160" name="Louise"></employee>
----
SQL> SELECT XMLELEMENT("employee",
            XMLFOREST( --Like XMLATTRIBUTES, the XMLFOREST function allows you to process multiple columns at once.
            e.employee_id AS "employee_id",
            e.first_name AS "name")
        ) AS employee
    FROM employees e
    WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<employee><employee_id>160</employee_id><name>Louise</name></employee>
----
SQL> SELECT XMLAGG( --XMLAGG function allows to aggregate separate fragments(multiple rows of data) into a single fragment
        XMLELEMENT("emp",
            XMLFOREST(
            e.employee_id AS "empid",
            e.first_name AS "name")
        )
    ) AS employees
    FROM employees e
    WHERE e.department_id = 50;
-----------------------------------------------------------------
<emp><empid>120</empid><name>Matthew</name></emp><emp><empid>121</empid><name>Adam</name></emp><emp><empid>122</empid><name>Payam</name></emp><emp><empid>123</empid><name>Shanta</name></emp><emp><empid>123</empid><name>Kevin</name></emp>
```

## SQL Loader

SQL\*Loader is a bulk loader utility used for moving data from external files into the Oracle database.
SQL Loader Control File

```sql
LOAD DATA
INFILE 'C:\text_file.csv' --input file
BADFILE 'C:\textfile_bad.bad' --contains the records that are rejected by sql loader or oracle database becuase of invalid format. After a data is accepted by sql loader, it is sent to oracle database for insertion
DISCARDFILE 'C:\textfile_discard.dis' --records which are filtered out of the load because they don't meet the criteria specified in WHEN clause
TRUNCATE INTO TABLE table_name --TRUNCATE to delete previous data in table
--INSERT: Loads only if the target table is empty
--APPEND: Loads rows if the target table is empty or not
--REPLACE: First it delete the rows in the existing table and then loads the data
--TRUNCATE: First it truncate the table and then loads the data
WHEN OBJECT_TYPE <> 'INDEX' --i don't need any record with 'INDEX' in it
FIELDS TERMINATED BY "," OPTIONALLY ENCLOSED BY "#" --delimited by , or #
TRAILING NULL COLS --if the last column is empty, then treat this as NULL value; otherwise SQL Loader will treat this record as bad if the last column is empty
(deptno, --column names in table
dname,
jdate date'mm/dd/yyyy', --formating the date
loc"TRIM(:OBJECT_TYPE)") --TRIM the white space if any
or
(deptno position(1:3), dname position(4:8), jdate position(9:18), loc position(19:22))
or
(deptno "deptno+100", --add 100 to the deptno
dname "upper(:dname)", --upper case
jdate,
loc "decode(:loc,'Delhi','New Delhi',:loc)")
sqlldr control=C:\textfile_control.ctl log=C:\textfile_log.log --given the datafile in INFILE of control file
or
sqlldr datafile=C:\text_file.csv control=C:\textfile_control.ctl log=C:\textfile_log.log
```

## Local Screening

- If there are two variables with same name in the outer and inner block, and if we call the variable from inside the block, italways prefer the local (inner) variable. To refer to the outer variable, we need to use label.

```sql
<<out_label>>
DECLARE
    x NUMBER := 100;
BEGIN
    FOR x IN 1..10 LOOP
        DBMS_OUTPUT.PUT_LINE(out_label.x);
    END LOOP;
END;
```

## Wrapped

- Wrapping is the process of hiding PL/SQL source code.
- Wrapping helps to protect your source code from business competitors and others who might misuse it.
- Wrapped source files can be moved, backed up, and processed by SQL*Plus and the Import and Export utilities, but they are not visible through the static data dictionary views *\_SOURCE.
- You cannot edit PL/SQL source code inside wrapped files. Either wrap your code after it is ready to ship to users or include the wrapping operation as part of your build environment.
- To change wrapped PL/SQL code, edit the original source file and then wrap it again.
- Wrapping is not a secure method for hiding passwords or table names.
- To hide the workings of a trigger, write a one-line trigger that invokes a wrapped subprogram.
- Wrapping does not detect syntax or semantic errors.
- Wrapped PL/SQL units are not downward-compatible.

```sql
CMD> wrap iname="wrap_test.sql" --wrap_test.sql is the file name of a procedure (no space between the equal sign)
PL/SQL Wrapper: Release 18.0.0.0.0 -Production on Thu Aug 1 16:26:09 2019
Version 18.3.0.0.0
Copyright (c) 1982, 2018, Oracle and/or its affiliates. All rights reserved.
Processing wrap_test.sql to wrap_test.plb --output file
SQL> @wrap_test.plb
SQL> call wraptest();
----
DECLARE
    PACKAGE_TEXT VARCHAR2(32767) := 'CREATE PACKAGE emp_actions AS
    PROCEDURE raise_salary (emp_id NUMBER, amount NUMBER);
    PROCEDURE fire_employee (emp_id NUMBER);
END emp_actions;';

BEGIN
    DBMS_DDL.CREATE_WRAPPED(PACKAGE_TEXT);
END;
```

## DBMS Packages

- The DBMS_SQL package provides an interface to use dynamic SQL to parse any data manipulation language (DML) or data definition language (DDL) statement using PL/SQL.
- Native Dynamic SQL is an alternative to DBMS_SQL that lets you place dynamic SQL statements directly into PL/SQL blocks.
- In most situations, Native Dynamic SQL is easier to use and performs better than `DBMS_SQL`.
- However, Native Dynamic SQL itself has certain limitations
- **DBMS_SQL.NATIVE** --Specifies normal behaviour for the database to which the program is connected. Can define behaviour as in Oracle version 6 and 7
- **DBMS_SQL.OPEN_CURSOR**
- **DBMS_SQL.PARSE** --Parsing the statement checks the statement's syntax and associates it with the cursor in your program. You can parse any DML or DDL statement. DDL statements are run on the parse, which performs the implied commit.
- **DBMS_SQL.BIND_VARIABLE**
- **DBMS_SQL.DEFINE_COLUMN** --The columns of the row being selected in a `SELECT` statement are identified by their relative positions as they appear in the select list, from left to right
- **DBMS_SQL.EXECUTE** --Call the EXECUTE function to run your SQL statement.
- **DBMS_SQL.FETCH_ROWS** --The `FETCH_ROWS` function retrieves the rows that satisfy the query.
- **DBMS_SQL.COLUMN_VALUE** --call `COLUMN_VALUE` after fetching rows to actually retrieve the values of the columns in the rows into your program
- **DBMS_SQL.VARIABLE_VALUE** --call `VARIABLE_VALUE` to retrieve the value of an OUT parameter for an anonymous block
- **DBMS_SQL.CLOSE_CURSOR**

- The `DBMS_RANDOM` package provides a built-in random number generator. DBMS_RANDOM is not intended for cryptography.
- **DBMS_RANDOM.VALUE**(low_value,high_value) --gets a random number with 38 digit decimal
- **DBMS_RANDOM.STRING**(single_character,length) --This function gets a random string.

- **DBMS_LOCK.SLEEP(120)** --This procedure suspends the session for a given period of time (seconds).

- **DBMS_UTILITY.FORMAT_ERROR_BACKTRACE** --This function displays the call stack at the point where an exception was raised, even if the subprogram is called from an exception handler in an outer scope
- **DBMS_UTILITY.FORMAT_ERROR_STACK** - This function formats the current error stack. This can be used in exception handlers to look at the full error stack. SQLERRM in principle gives the same info as FORMAT_ERROR_STACK. But SQLERRM is subject to some length limits, while FORMAT_ERROR_STACK is not.
- **DBMS_UTILITY.GET_TIME**
  -This function determines the current time in 100th's of a second.
  - This subprogram is primarily used for determining elapsed time.
  - The subprogram is called twice –at the beginning and end of some process –and then the first (earlier) number is subtracted from the second (later) number to determine the time elapsed.
- **DBMS_UTILITY.GET_CPU_TIME** --CPU time

- **DBMS_OUTPUT.PUT_LINE**
- **DBMS_OUTPUT.PUT_LINE($$PLSQL_LINE);** --Displays line number
- **DBMS_OUTPUT.DISABLE**

- **DBMS_STATS.GATHER_TABLE_STATS** --This procedure gathers table and column (and index) statistics.

```sql
EXEC DBMS_STATS.GATHER_SCHEMA_STATS(USER, CASCADE => TRUE);
```

- **DBMS_XPLAN.DISPLAY** --to format and display the contents of a plan table.
- **DBMS_XPLAN.DISPLAY_AWR** --to format and display the contents of the execution plan of a stored SQL statement in the AWR.
- **DBMS_XPLAN.DISPLAY_CURSOR** --to format and display the contents of the execution plan of any loaded cursor.

- **DBMS_METADATA.GET_DDL**

```sql
SELECT DBMS_METADATA.GET_DDL ('TABLE', 'EMPLOYEES', 'HR') FROM DUAL;
--to get DDL for a view just replace first argument with ‘VIEW’ and second with your view name and so.
```

- **DBMS_REFRESH.ADD** --Adds materialized views to a refresh group.
- **DBMS_REFRESH.MAKE** --To make materialized view refresh group
- **DBMS_REFRESH.CHANGE** --Changes the refresh interval for a refresh group.
- **DBMS_REFRESH.DESTROY** --Removes all of the materialized views from a refresh group and deletes the refresh group.
- **DBMS_REFRESH.REFRESH** --Manually refreshes a refresh group.
- **DBMS_REFRESH.SUBTRACT** --Removes materialized views from a refresh group.

- **DBMS_MVIEW.REFRESH** --Refreshes one or more materialized views that are not members of the same refresh group
- **DBMS_MVIEW.REFRESH_ALL_MVIEWS** --Refreshes all materialized views

## Table Clusters

- A table cluster is a group of tables that share common columns and store related data in the same blocks.
- When tables are clustered, a single data block can contain rows from multiple tables. For example, a block can store rows from both the employees and departments tables rather than from only a single table.
- The cluster key is the column or columns that the clustered tables have in common. For example, the employees and departments tables share the department_id column. You specify the cluster key when creating the table cluster and when creating every table added to the table cluster.
- The cluster key value is the value of the cluster key columns for a particular set of rows. All data that contains the same cluster key value, such as department_id=20, is physically stored together.
- Consider clustering tables when they are primarily queried (but not modified) and records from the tables are frequently queried together or joined. This benefits reduced Disk I/O for joins, improves access time for joins.
- Flashback Table operation is not supported on clustered tables

```sql
/*For example to create a cluster of EMP and DEPT tables in which the DEPTNO will be cluster key, first create the cluster by typing the following command.*/
CREATE CLUSTER emp_dept (deptno NUMBER(2));

/*Then create index on it.*/
CREATE INDEX idx_empdept ON CLUSTER emp_dept;

/*Now create table in the cluster like this*/
CREATE TABLE dept (deptno NUMBER(2),
    name VARCHAR2(20),
    loc VARCHAR2(20))
    CLUSTER emp_dept (deptno);
    CREATE TABLE emp (empno NUMBER(5),
    name VARCHAR2(20),
    sal NUMBER(10,2),
    deptno NUMBER(2))

CLUSTER emp_dept (deptno);
```

