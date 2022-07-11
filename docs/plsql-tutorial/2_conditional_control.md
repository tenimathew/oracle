---
id: Section 2. Conditional control
sidebar_position: 2
description: IF, CASE etc..
---

## Simple CASE

```sql
SELECT product_id, company_name,
    (CASE product_id
    WHEN 'p1' THEN 'Cameras'
    WHEN 'p2' THEN 'Mobiles'
    ELSE 'Not available'
    END) AS product
FROM product;
```

## Searched CASE

```sql
SELECT product_id, company_name,
    (CASE
    WHEN product_id = 'p1' THEN 'Cameras'
    WHEN product_id = 'p2' THEN 'Mobiles'
    AND company_name = 'Samsung' THEN 'TV'
    WHEN product_id = 'p3'
    ELSE 'Not available'
    END) AS product
FROM product;
```

## IF statement

```sql
IF condition THEN
    --Statement1;
ELSIF condition THEN
    --Statement2;
ELSE
    --Statement3;
END IF;
```

## Cursor For Loop

```sql
FOR loop_counter IN cursor_name LOOP
    --statement1;
END LOOP;
```

## Numeric For Loop

```sql
FOR loop_counter IN [REVERSE] lower_limit .. Upper_limit LOOP
    --statement1;
END LOOP;
```

## GOTO

- A `GOTO` statement in PL/SQL programming language provides an unconditional jump from the GOTO to a labeled statement in the same subprogram.

```sql
DECLARE
    a NUMBER(2) := 10;
BEGIN
    <<LOOPSTART>>
    WHILE a < 20 LOOP
        DBMS_OUTPUT.PUT_LINE (a);
        a := a + 1;
        IF a = 15 THEN
            a := a + 1;
            GOTO LOOPSTART;
        END IF;
    END LOOP;
END;
```

- You cannot use a `GOTO` statement to transfer control _into an_ `IF`, `CASE` or `LOOP` statement, the same for sub-block.
- The following example attempts to transfer control into an `IF` statement using a `GOTO` statement:

```sql
DECLARE
  n_sales NUMBER;
  n_tax NUMBER;
BEGIN
    GOTO inside_if_statement;
    IF n_sales > 0 THEN
      <<inside_if_statement>>
      n_tax  := n_sales * 0.1;
    END IF;
END;
-----
PLS-00375: illegal GOTO statement; this GOTO cannot branch to label 'INSIDE_IF_STATEMENT'
```

- You cannot use a `GOTO` statement to transfer control from one clause to another in the IF statement e.g., from `IF` clause to ELSIF or ELSE clause, or from one `WHEN` clause to another in the CASE statement.
- The following example attempts to transfer control to a clause in the IF statement:

```sql
DECLARE
  n_sales      NUMBER;
  n_commission NUMBER;
BEGIN
  n_sales := 120000;
  IF n_sales      > 100000 THEN
    n_commission := 0.2;
    GOTO zero_commission;
  elsif n_sales   > 50000 THEN
    n_commission := 0.15;
  elsif n_sales   > 20000 THEN
    n_commission := 0.1;
  ELSE
    <<zero_commission>>
    n_commission := 0;
  END IF;
END;
-----
PLS-00375: illegal GOTO statement; this GOTO cannot branch to label 'ZERO_COMMISSION'
```

- You cannot use a `GOTO` statement to transfer control out of a subprogram or into an exception handler.
- You cannot use a `GOTO` statement to transfer control from an exception handler back into the current block.

## NULL statement

- The NULL statement is a `NULL` keyword followed by a semicolon ( ;). The NULL statement does nothing except that it passes control to the next statement.

## While Loop

- Best usable when number of iterations to be performed are unknown
- Executes till the condition become FALSE

```sql
WHILE condition LOOP
    --statement1;
END LOOP;
```

## EXIT

- When the `EXIT` statement is encountered inside a loop, the loop is immediately terminated and the program control resumes at the next statement following the loop.
- If you are using nested loops (i.e., one loop inside another loop), the `EXIT` statement will stop the execution of the innermost loop and start executing the next line of code after the block.

## EXIT WHEN

```sql
EXIT WHEN condition;
```

- The `EXIT WHEN` statement allows the condition in the `WHEN` clause to be evaluated. If the condition is true, the loop completes and control passes to the statement immediately after the `END LOOP`.

## CONTINUE

- The `CONTINUE` statement causes the loop to skip the remainder of its body and it forces the next iteration of the loop to take place.

## CONTINUE WHEN

- The `CONTINUE WHEN` statement exits the current loop iteration based on a condition and immediately continue to the next iteration of that loop.

```sql
CONTINUE WHEN condition;
```
