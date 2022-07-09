---
id: Section 5. Stored Objects
sidebar_position: 5
description: Procedure, Function, Packages
---

## AUTHID

- The `AUTHID CURRENT_USER` is used when you want a piece of code to execute with the privileges of the current user, and not with the privilege of the user who defined the PL/SQL code.
- `AUTHID DEFINER` is exactly opposite to `AUTHID CURRENT_USER`. Using this clause is as same as granting public access to the PL/SQL code.
- If no AUTHID clause is specified Oracle will default to `AUTHID DEFINER`.
- It is suggestible to set `AUTHID` clause. If not, an intruder may get access to privileges of the definer which an intruder should not get.

```sql
CREATE OR REPLACE PROCEDURE create_dept(v_deptno NUMBER)
AUTHID CURRENT_USER
IS
BEGIN
    INSERT INTO departments VALUES (v_deptno);
END;
```

## PL/SQL Bulk Collect

- Bulk collect is used to reduce the context switching between SQL engine and PL/SQL engine and to improve query performance.
- Bulk collect will reduce the context switching by collecting all the SQL statement calls from PL/SQL program and sending them to SQL engine in just one go and vice versa.
- Bulk collect clause can be used with `SELECT INTO`, `FETCH INTO`, `RETURNING INTO` statements.

```sql
DECLARE
    TYPE rc_emp IS RECORD(
    v_empno employees.employee_id%TYPE,
    v_ename employees.first_name%TYPE,
    v_sal employees.salary%TYPE);
    TYPE cl_emp IS TABLE OF rc_emp;
    v_emp cl_emp;
BEGIN
    SELECT employee_id, first_name, salary
        BULK COLLECT INTO v_emp FROM employees;
    FOR i IN 1..v_emp.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE(v_emp(i).v_empno || v_emp(i).v_ename || v_emp(i).v_sal);
    END LOOP;

    FORALL i IN 1..v_emp.COUNT
        INSERT INTO temp_emp (employee_id,first_name,salary)
            VALUES(v_emp(i).v_empno, v_emp(i).v_ename, v_emp(i).v_sal);
END;
```

```sql
DECLARE
    TYPE nt_fName IS TABLE OF VARCHAR2(20);
    fname nt_fName;
BEGIN
    SELECT first_name BULK COLLECT INTO fname FROM employees; --variable should be a collection
    FOR i IN 1..fname.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE(i||fname(i));
    END LOOP;
END;
```

```sql
DECLARE
    CURSOR exp_cur IS
    SELECT first_name FROM employees;
    TYPE nt_fNAME IS TABLE OF VARCHAR2(20);
    fname nt_fNAME;
BEGIN
    OPEN exp_cur;
        FETCH exp_cur BULK COLLECT INTO fname;--Bulk collect does not need loop
    FOR i IN fname.FIRST..fname.LAST LOOP
        DBMS_OUTPUT.PUT_LINE(i||fname(i));
    END LOOP;
    CLOSE exp_cur;
END;
```

### Bulk Collect with LIMIT clause

- Whenever we retrieve a large number of records using bulk collect, the program starts consuming lot of memory in order to be fast and efficient. That degrades the performance of the database.
- `LIMIT` clause will restrict the number of rows fetched.
- `LIMIT` clause can be only used with `FETCH INTO` statement.

```sql
DECLARE
    CURSOR exp_cur IS
        SELECT first_name FROM employees;
    TYPE nt_fNAME IS TABLE OF VARCHAR2(20);
    fname nt_fNAME;
BEGIN
    OPEN exp_cur;
    LOOP
        FETCH exp_cur BULK COLLECT INTO fname LIMIT 10;
        FOR i IN 1..fname.COUNT LOOP
            DBMS_OUTPUT.PUT_LINE(i||fname(i));
        END LOOP;
        EXIT WHEN fname.COUNT = 0;
    END LOOP;
    CLOSE exp_cur;
END;
```

## FORALL (Bulk Binding)

- `FORALL` statement reduces context switches which occur during the execution of a DML statement by sending it in batches instead of one at a time.
- With `BULK COLLECT` we were fetching data from table and storing it into the collection. But in `FORALL` statement, we will fetch the data from the collection and store it into the table.
- A `FORALL` statement can have only one DML statement at a time.

```sql
FORALL i IN bound_clause --Bound clause decides the number of iteration.
[SAVE EXCEPTIONS] --It helps the DML statements to keep running even when there is an exception. --Using this is recommended
--DML statement;
```

### Lower and Upper bound

- The collection should have consecutive index numbers.
- If an element in the range is missing or was deleted, PL/SQL raises an exception.

```sql
DECLARE
    TYPE myArray IS TABLE OF NUMBER(2);
    col_var myArray := myArray(9,45,1,24,5,4,7,54,6,23);
BEGIN
    FORALL i IN 1..col_var.COUNT
        INSERT INTO tbl_mulpxn VALUES (col_var(i));
    DBMS_OUTPUT.PUT_LINE(SQL %ROWCOUNT);
END;
```

### Indices-of bound

- The indexes need not be consecutive.
- If a subscript in the range does not exist in the collection, that subscript is skipped.
- If collection is an associative array, it must be indexed by `PLS_INTEGER`.

```sql
DECLARE
    TYPE myArray IS TABLE OF NUMBER(2);
    col_var myArray := myArray(9,45,1,24,5,4,7,54,6,23);
BEGIN
    col_var.DELETE(3 , 6);
    FORALL i IN INDICES OF col_var
        INSERT INTO tbl_mulpxn VALUES (col_var(i));
    DBMS_OUTPUT.PUT_LINE(SQL %ROWCOUNT);
END;
----
DECLARE
    TYPE myArray IS TABLE OF NUMBER(2);
    col_var myArray := myArray(9,45,1,24,5,4,7,54,6,23);
BEGIN
    col_var.DELETE(3 , 6);
    FORALL i IN INDICES OF col_var BETWEEN 1 AND 10
        INSERT INTO tbl_mulpxn VALUES (col_var(i));
    DBMS_OUTPUT.PUT_LINE(SQL %ROWCOUNT);
END;
```

### Values-of bound

- It requires two collection; source collection and indexing collection
- The subscripts for the `FORALL` indexing collection are taken from the values of the elements in source collection
- The indexing collection must be a nested table, or an associative array
- The elements of the indexing collection must be of either `PLS_INTEGER` or `BINARY_INTEGER`
- If it is associate array, then it must be indexed by `PLS_INTEGER` or `BINARY_INTEGER`
- Indexing collection is a group of indexes that the `FORALL` statement can loop through

```sql
DECLARE
    TYPE myArray IS TABLE OF NUMBER(2);--Source collection
    src_col myArray := myArray(9,45,1,24,5,4,7,54,6,23);
    TYPE yourArray IS TABLE OF PLS_INTEGER;--Indexing collection
    idx_col yourArray:=yourArray();
BEGIN
    idx_col.EXTEND(2);
    idx_col(1):=4; --24 inserted here; src_col(4)
    idx_col(2):=8; --54 inserted here; src_col(8)
    FORALL i IN VALUES OF idx_col --idx_col(1) = 4; i =4
        INSERT INTO tbl_mulpxn VALUES (src_col(i)); --src_col(4) = 24
    DBMS_OUTPUT.PUT_LINE(SQL %ROWCOUNT);
END;
```

### SQL%BULK_ROWCOUNT

- The `SQL%BULK_ROWCOUNT` cursor attribute gives granular information about the rows affected by each iteration of the FORALL statement.
- Every row in the driving collection has a corresponding row in the `SQL%BULK_ROWCOUNT` cursor attribute.
- In the below code, we can see that rows affected for the username "BANANA" is zero.

```sql
CREATE TABLE bulk_rowcount_test AS
    SELECT *
    FROM all_users;
----
DECLARE
    TYPE t_array_tab IS TABLE OF VARCHAR2(30);
    l_array t_array_tab := t_array_tab('SCOTT', 'SYS','SYSTEM', 'DBSNMP', 'BANANA');
BEGIN
    --Perform bulk delete operation.
    FORALL i IN l_array.FIRST .. l_array.LAST
        DELETE FROM bulk_rowcount_test
            WHERE username = l_array(i);
    --Report affected rows.
    FOR i IN l_array.FIRST .. l_array.LAST LOOP
        DBMS_OUTPUT.PUT_LINE('Element: ' || RPAD(l_array(i), 15, ' ') ||
        ' Rows affected: ' || SQL %BULK_ROWCOUNT(i));
    END LOOP;
END;
/
Element: SCOTT Rows affected: 1
Element: SYS Rows affected: 1
Element: SYSTEM Rows affected: 1
Element: DBSNMP Rows affected: 1
Element: BANANA Rows affected: 0
```

### SAVE EXCEPTIONS and SQL%BULK_EXCEPTION

- The following code creates a collection with 100 rows, but sets the value of rows 50 and 51 to NULL.
- Since the "exception_test" table does not allow nulls, these rows will result in an exception.
- The `SAVE EXCEPTIONS` clause allows the bulk operation to continue past any exceptions, but if any exceptions were raised , it will jump to the exception handler once all the operations are complete.
- In this case, the exception handler just loops through the `SQL%BULK_EXCEPTION` cursor attribute to see what errors occurred.

```sql
CREATE TABLE exception_test (
    id NUMBER(10) NOT NULL);
----
DECLARE
    TYPE t_tab IS TABLE OF exception_test%ROWTYPE;
    l_tab t_tab := t_tab();
    l_error_count NUMBER(10);
    ex_dml_errors EXCEPTION;
    PRAGMA EXCEPTION_INIT(ex_dml_errors, -24381);
BEGIN
    --Fill the collection.
    FOR i IN 1..100 LOOP
        l_tab.EXTEND;
        l_tab(i).id := i;
    END LOOP;

    --Cause a failure.
    l_tab(50).id := NULL;
    l_tab(51).id := NULL;
    EXECUTE IMMEDIATE 'TRUNCATE TABLE exception_test';

    --Perform a bulk operation.
    BEGIN
        FORALL i IN l_tab.FIRST..l_tab.LAST SAVE EXCEPTIONS
            INSERT INTO exception_test
                VALUES l_tab(i);
    EXCEPTION
        WHEN ex_dml_errors THEN
            l_error_count := SQL%BULK_EXCEPTIONS.COUNT;
            DBMS_OUTPUT.PUT_LINE('Number of failures: ' || l_error_count);
            FOR i IN 1 .. l_error_count LOOP
                DBMS_OUTPUT.PUT_LINE('Error: ' || i ||
                ' Array Index: ' || SQL%BULK_EXCEPTIONS(i).ERROR_INDEX ||
                ' Error Code: ' || SQL%BULK_EXCEPTIONS(i).ERROR_CODE ||
                ' Message1: ' || SQLERRM(SQL%BULK_EXCEPTIONS(i).ERROR_CODE) ||
                ' Message2: ' || SQLERRM(-SQL%BULK_EXCEPTIONS(i).ERROR_CODE)) ;
            END LOOP;
    END;
END;
/
Number of failures: 2
Error: 1 Array Index: 50 Error Code: 1400 Message1: -1400: non-ORACLE exception Message2: ORA-01400: cannot insert NULL into ()
Error: 2 Array Index: 51 Error Code: 1400 Message1: -1400: non-ORACLE exception Message2: ORA-01400: cannot insert NULL into ()
```
