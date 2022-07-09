---
id: Section 4. Cursors
sidebar_position: 4
description: Cursors
---

- Cursor is a pointer to a memory area called context area.
- Context area is a memory region inside the Process Global Area(PGA).

## Implicit cursors

- Implicit CURSORs are automatically created by Oracle when DML statement such as `SELECT INTO`, `INSERT`, `UPDATE`, and `DELETE` is executed. Cursor name is ‘SQL’.
- Oracle internally manages the whole execution cycle of implicit cursors and reveals only the cursor’s information and statuses such as `SQL%ROWCOUNT`, `SQL%ISOPEN`, `SQL%FOUND`, and `SQL%NOTFOUND`. `%ROWCOUNT`
- The implicit cursor is not elegant when the query returns zero or multiple rows which cause `NO_DATA_FOUND` or `TOO_MANY_ROWS` exception respectively.

```sql
DECLARE
    total_rows(2);
    emp_rec emp %ROWTYPE;
BEGIN
    SELECT * INTO emp_rec FROM emp WHERE empno=7369;
    IF SQL %FOUND THEN
        DBMS_OUTPUT.PUT_LINE(emp_rec.ename ||emp_rec.sal);
    END IF;
END;
```

## Explicit cursors

- Explicit CURSORs are user defined cursors. It is created for any DML operation which returns more than 1 row.
- For an explicit cursor, you have control over its execution cycle from `OPEN`, `FETCH`, and `CLOSE`

```sql
DECLARE
    CURSOR emp_cur IS
        SELECT empno,ename FROM emp;
    emp_rec emp_cur %ROWTYPE;
BEGIN
    OPEN emp_cur;
    LOOP
        FETCH emp_cur INTO emp_rec;
        EXIT WHEN emp_cur %NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(emp_rec.empno ||emp_rec.ename);
    END LOOP;
    CLOSE emp_cur;
END;
```

## Recursive Cursor

- A recursive subprogram is one that calls itself. Each recursive call creates a new instance of any items declared in the subprogram, including parameters, variables, cursors, and exceptions. A recursive cursor (a pointer to a shared SQL area) is used to keep a pointer to each call of a recursive function.

## REF CURSOR

- A `REF CURSOR` is basically a data type.
- A `REF CURSOR` can be associated with more than one `SELECT` statement at run-time. Before associating a new `SELECT` statement, we need to close the previous `CURSOR`.
- The primary advantage of using `REF CURSOR` is their capability to pass result sets between sub programs (like stored procedures, functions, packages etc.).

### Dealing with REF CURSOR in the sub-programs of a PL/SQL block

- The sub-routine gets executed for every iteration, which displays the employee information for the respective department.

```sql
DECLARE
    TYPE r_cursor IS REF CURSOR;
    c_emp r_cursor;
    TYPE rec_emp IS RECORD(
    name VARCHAR2(20),
    sal NUMBER(6));
    er rec_emp;

PROCEDURE printemployeedetails IS
BEGIN
    LOOP
        FETCH c_emp INTO ER;
        EXIT WHEN c_emp %NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(er.name || ' –' || er.sal);
    END LOOP;
END;

BEGIN
    FOR i IN (SELECT deptno,dname FROM dept) --can use SELECT statement directly without defining a cursor
    LOOP
        OPEN c_emp FOR SELECT ename,sal FROM emp WHERE deptno = i.deptno;
            DBMS_OUTPUT.PUT_LINE(i.dname);
            DBMS_OUTPUT.PUT_LINE('————–');
            printemployeedetails;
        CLOSE c_emp;
    END LOOP;
END;
```

### Passing REF CURSOR as parameters to sub-programs

```sql
DECLARE
    TYPE r_cursor IS REF CURSOR;
    c_emp r_cursor;
    TYPE rec_emp IS RECORD(
    NAME VARCHAR2(20),
    sal NUMBER(6));

PROCEDURE printemployeedetails(p_emp r_cursor) IS
    er rec_emp;
BEGIN
    BEGIN
        LOOP
            FETCH p_emp INTO er; --no need to OPEN
            EXIT WHEN p_emp %NOTFOUND;
            DBMS_OUTPUT.PUT_LINE(er.name || ' –' || er.sal);
        END LOOP;
    END;

    BEGIN
        FOR i IN (SELECT deptno,dname FROM dept)
        LOOP
            OPEN c_emp FOR SELECT ename,sal FROM EMP WHERE deptno = i.deptno;
                DBMS_OUTPUT.PUT_LINE(i.dname);
                DBMS_OUTPUT.PUT_LINE('————–');
                printemployeedetails(c_emp);
            CLOSE c_emp;
        END LOOP;
    END;
END;
```

### Strong REF CURSOR

- Any `REF CURSOR` which has fixed return type is called Strong `REF CURSOR`
- Strong `REF CURSOR` supports different type of `SELECT` statements but all of the same structure ,but not necessary that the table should be same.

```sql
DECLARE
    TYPE ref_cursor_name IS REF CURSOR
        RETURN (return_type);--Return must be of RECORD datatype
----
DECLARE
    TYPE my_RefCur IS REF CURSOR
    RETURN employees %ROWTYPE;
    cur_var my_RefCur;
    rec_var employees %ROWTYPE;
BEGIN
    OPEN cur_var FOR SELECT * FROM employees WHERE employee_id =100;
        FETCH cur_var INTO rec_var;
    CLOSE cur_var;
    DBMS_OUTPUT.PUT_LINE(rec_var.first_name || rec_var.salary);
END;
```

### Strong Ref Cursor with User Defined Record Datatype

- Use of this is, we can customize the number of field we want to fetch and still we can have a record datatype for Strong Ref Cursor

```sql
DECLARE
    TYPE my_rec IS RECORD(
        emp_sal employees.salary %TYPE;);
    TYPE my_RefCur IS REF CURSOR
        RETURN my_rec;--User defined RECORD datatype for return
    cur_var my_RefCur;
    at_var employees.salary %TYPE;
BEGIN
    OPEN cur_var FOR SELECT salary FROM employees WHERE employee_id =100;
        FETCH cur_var INTO at_var;
    CLOSE cur_var;
    DBMS_OUTPUT.PUT_LINE('Salary:' || at_var);
END;
```

### Weak REF CURSOR

- Weak REF CURSORs are those cursors which do not have any return type
- These cursors are the most frequently used `REF CURSOR` as they are open to all `SELECT` statements
- This `REF CURSOR` allows us to fetch any type of `SELECT` statement irrespective of data structure .

```sql
DECLARE
    TYPE ref_cursor_name IS REF CURSOR;
----
DECLARE
    TYPE my_RefCur IS REF CURSOR;
    cur_var my_RefCur;
    f_name employees.first_name %TYPE;
    emp_sal employees.salary %TYPE;
BEGIN
    OPEN cur_var FOR SELECT first_name, salary FROM employees WHERE employee_id =100;
        FETCH cur_var INTO f_name,emp_sal;
    CLOSE cur_var;
    DBMS_OUTPUT.PUT_LINE(f_name || emp_sal);
END;
```

### SYS_REF CURSOR

- It is a predefined weak `REF CURSOR` (`TYPE SYS_REFCURSOR IS REF CURSOR`);. So without declaring the ref pointer type, you can assign variable.

```sql
DECLARE
    cur_var SYS_REFCURSOR;
    f_name employees.first_name %TYPE;
    emp_sal employees.salary %TYPE;
BEGIN
    OPEN cur_var FOR SELECT first_name, salary FROM employees WHERE employee_id =100;
        FETCH cur_var INTO f_name,emp_sal;
    CLOSE cur_var;
    DBMS_OUTPUT.PUT_LINE(f_name || emp_sal);
END;
```

### Parameterized CURSORs

```sql
DECLARE
    emp_rec emp %ROWTYPE;
    CURSOR emp_cur(max_wage NUMBER :=100, emp_name VARCHAR2) IS --Default value is assigned to parameter max_wage
        SELECT * FROM emp WHERE sal>max_wage and ename=emp_name;
BEGIN
    OPEN emp_cur(2000,'Raj');
    LOOP
        FETCH emp_cur INTO emp_rec;
            EXIT WHEN emp_cur %NOTFOUND;
            DBMS_OUTPUT.PUT_LINE(emp_rec.ename ||emp_rec.sal);
        END LOOP;
    CLOSE emp_cur;
END;
```

## CURSOR vs. REF CURSOR

| REF CURSOR                                                             | CURSOR                                                                                                    |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Dynamic                                                                | Static                                                                                                    |
| Can be associated with multiple SELECT statements in a PL/SQL block    | Can only access single SELECT statement at a time                                                         |
| Can be changed at run time                                             | Cannot be changed at run time. Can be done with parameterized cursor.                                     |
| Can be returned to the client application                              | Cannot be returned to the client application                                                              |
| Cannot be global. Cannot define them OUTSIDE of a procedure / function | Can be global. Global cursors can be opened and executed outside of the package in which they are defined |
| Can be passed from one sub-program to other sub-program                | Cannot be passed                                                                                          |

## FOR UPDATE OF, FOR UPDATE and WHERE CURRENT OF

- `FOR UPDATE` will give exclusive row-level lock on all rows retrieved by `SELECT` statement.
- The `FOR UPDATE` clause is generally used in cases where an online system needs to display a set of row data on a screen and they need to ensure that the data does not change before the end-user has an opportunity to update the data. In the real-world, many large online systems do not use the `FOR UPDATE` clause.
- If you try to access the rows with the `NOWAIT` clause, you will get an error message, `ORA-00054 Resource busy and acquire with NOWAIT` specified. `NOWAIT` option is just to investigate that yes i am not at all willing to wait to acquire the lock rather than hang myself, If i cannot get the lock immediately, an error is returned to signal that the lock is not possible at this time. You may try again later.
- If there are more than one table are joined for update, then the use of `FOR UPDATE OF`... will only lock the rows in the tables that contain the columns you specify in the OF clause. You can never lock a single column, the minimum lock is at row level. It locks all rows in the table that contains the column, which are selected by the query.
- `WHERE CURRENT OF` clause can be used for both `DELETE` and `UPDATE` statements inside a cursor's range to make changes to the last fetched row(s)

```sql
CURSOR cursor_name IS
    SELECT * FROM ..
    FOR UPDATE [OF column_list] [WAIT 15] [NOWAIT];
--NOWAIT -cursor does not wait for resources. If it is locked, it will show error
--WAIT 15 -wait up to 15 seconds for another session to release their lock. If not, show error
```

```sql
DECLARE
    CURSOR cur IS
        SELECT * FROM departments WHERE department_id = 210 FOR UPDATE;
    emp_rec departments %ROWTYPE;
BEGIN
    OPEN cur;
        LOOP
            FETCH cur INTO emp_rec;
            EXIT WHEN cur %NOTFOUND;
            INSERT INTO emp_log VALUES emp_rec;
            DELETE FROM departments WHERE CURRENT OF cur;
        END LOOP;
        COMMIT;
    CLOSE cur;
END;
```

## INVALID_CURSOR error

- if the cursor is not opened it will show INVALID_CURSOR
