---
id: Section 3. Exception Handling
sidebar_position: 3
description: Exception Handling
---

## Exception Handling

- SQLCODE & SQLERRM are used for logging error
- If exception is fired, it cannot go back to executable section of current block and uncommitted changes are rolled back.
- For user-defined exception, the default SQLCODE=1 and SQLERRM = ‘User Defined Exception’
- If there are no errors, SQLCODE = ORA-0000 and SQLERRM = ‘Normal, Successful Completion’

## Predefined Exceptions

**NO_DATA_FOUND**-It is raised when a SELECT INTO statement returns no rows.
**PROGRAM_ERROR**-It is raised when PL/SQL has an internal problem.
**TOO_MANY_ROWS**-It is raised when a SELECT INTO statement returns more than one row.
**VALUE_ERROR**-It is raised when an arithmetic, conversion, truncation, or size constraint error occurs.
**ZERO_DIVIDE**-It is raised when an attempt is made to divide a number by zero.
**DUP_VAL_ON_INDEX**-Unique constraint error

## Exception Declaration

- An exception declaration declares a user-defined exception
- No error message or error code can be associated with this exception

```sql
DECLARE
    exception_name EXCEPTION;
BEGIN
    IF condition THEN
        RAISE exception_name;
        --Executable statements;
    END IF;
EXCEPTION
    WHEN exception_name THEN
        --statement1;
    WHEN OTHERS THEN
        --statement2;
END;
```

## RAISE_APPLICATION_ERROR

- Using this procedure, you can associate an error number (-20,000 to -20,999) with custom error message
- No exception name can be associated with this exception

```sql
raise_application_error(
    error_number,
    message
    [, {TRUE | FALSE}]
);
```

```sql
ACCEPT var_age NUMBER PROMPT 'Enter your age:'; --(SQL* Plus function)Accept value from the user with custom message

DECLARE
    age NUMBER := &var_age;
BEGIN
    IF age < 18 THEN
        RAISE_APPLICATION_ERROR (-20008, 'Age only above 18 are allowed');
    END IF;

    DBMS_OUTPUT.PUT_LINE('You are allowed');
EXCEPTION
    WHEN OTHERS THEN --No name available for the exception we raised
        DBMS_OUTPUT.PUT_LINE(SQLERRM); --Error message of exception we raised
END;
```

## PRAGMA EXCEPTION_INIT

- We can associate an exception name with an Oracle error number.
- It is not mandatory to use `PRAGMA EXCEPTION_INIT` with `RAISE_APPLICATION_ERROR` procedure.
- You can use `PRAGMA EXCEPTION_INIT` with `RAISE` statement also.

```sql
DECLARE
    age NUMBER := 17;
    ex_age EXCEPTION; --Declare exception name
    PRAGMA EXCEPTION_INIT(ex_age,-20008) --(exception_name, error_number)
BEGIN
    IF age < 18 THEN
        RAISE_APPLICATION_ERROR (-20008, 'Age only above 18 are allowed');
    END IF;
    DBMS_OUTPUT.PUT_LINE('You are allowed');
EXCEPTION
    WHEN ex_age THEN --Name is available because we are using PRAGMA EXCEPTION_INIT
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
```

## Reraising the current exception

- You can re-raise the current exception with the `RAISE` statement. Reraising an exception passes it to the enclosing block, which later can be handled further. To reraise an exception, you don’t need to specify the exception name.

```sql
DECLARE
    e_credit_too_high EXCEPTION;
    PRAGMA exception_init( e_credit_too_high, -20001 );
    l_max_credit customers.credit_limit%TYPE;
    l_customer_id customers.customer_id%TYPE := &customer_id;
    l_credit customers.credit_limit%TYPE     := &credit_limit;
BEGIN
    BEGIN
        -- get the max credit limit
        SELECT MAX(credit_limit)
        INTO l_max_credit
        FROM customers;

        -- check if input credit is greater than the max credit
        IF l_credit > l_max_credit THEN
            RAISE e_credit_too_high;
        END IF;
        EXCEPTION
            WHEN e_credit_too_high THEN
                dbms_output.put_line('The credit is too high' || l_credit);
                RAISE; -- reraise the exception
    END;
EXCEPTION
    WHEN e_credit_too_high THEN
        -- get average credit limit
        SELECT avg(credit_limit)
        into l_credit
        from customers;

        -- adjust the credit limit to the average
        dbms_output.put_line('Adjusted credit to ' || l_credit);

        --  update credit limit
        UPDATE customers
        SET credit_limit = l_credit
        WHERE customer_id = l_customer_id;

        COMMIT;
END;
```

## Exception propagation

- When an exception occurs, PL/SQL looks for an exception handler in the current block e.g., anonymous block, procedure, or function of the exception. If it does not find a match, PL/SQL propagates the exception to the enclosing block of the current block.
- PL/SQL then attempts to handle the exception by raising it once more in the enclosing block. This process continues in each successive enclosing block until there is no remaining block in which to raise the exception.

## Autonomous transactions

- Autonomous transactions allow a single transaction to be subdivided into multiple commit/rollback transactions.
- When an autonomous transaction is called, the original transaction (calling transaction) is temporarily suspended.
- `PRAGMA` is used to provide an instruction to the compiler. Pragmas are defined in the declarative section in PL/SQL.

```sql
CREATE OR REPLACE PROCEDURE log_errors(p_error_message IN VARCHAR2) IS
PRAGMA AUTONOMOUS_TRANSACTION; --PRAGMA in the called program
BEGIN
    INSERT INTO error_logs VALUES(sysdate,p_error_message);
    COMMIT; --Only above insert will be committed
END;
----
BEGIN
    INSERT INTO..
EXCEPTION
    WHEN OTHERS THEN
        log_errors('Error'); --Calling procedure; This will be committed
        ROLLBACK;
END;
```

## Returning Clause

- Returning clause is used to return the new value after the update or insert or old value after delete.
- It is recommended to use it with delete.

```sql
DECLARE
    dept_no dept.deptno %TYPE;
BEGIN
    INSERT INTO dept VALUES(70 ,'FOUR','FIVE')
    RETURNING deptno INTO dept_no;
    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Inserted:' || dept_no);
    DELETE FROM dept WHERE dept_no = 70
    RETURNING deptno INTO dept_no;
    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Deleted:' || dept_no);
END;
```
