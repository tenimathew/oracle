---
id: Section 10. Modifying data
sidebar_position: 10
description: INSERT, UPDATE, DELETE, MERGE
---

## INSERT

```sql
INSERT INTO table_name (column_list)
VALUES( value_list);
```

If the value list has the same order as the table columns, you can skip the column list although this is not considered as a good practice:

```sql
INSERT INTO table_name
VALUES (value_list);
```

## INSERT INTO

```sql
INSERT INTO target_table (col1, col2, col3)
SELECT col1, col2, col3
FROM source_table
WHERE condition;
```

### Copy table structure only

```sql
CREATE TABLE sales_2017
AS SELECT *
FROM sales
WHERE 1 = 0;
```

## UPDATE

```sql
UPDATE table_name
SET
    column1 = value1,
    column2 = value2,
    column3 = value3,
    ...
WHERE condition;
```

## DELETE

```sql
DELETE
FROM table_name
WHERE condition;
```

Note that it is faster and more efficient to use the `TRUNCATE TABLE` statement to delete all rows from a large table.

### DELETE – delete cascade

In practice, you often delete a row from a table which has a foreign key relationship with rows from other tables.

For example, you want to delete the sales order with id 1 from the orders table and also delete all the line items associated with the order id 1 from the order_items table. Typically, you can think of issuing two `DELETE` statements as follows:

```sql
DELETE
FROM orders
WHERE order_id = 1;

DELETE
FROM order_items
WHERE order_id = 1;

COMMIT WORK;
```

Note that the `COMMIT WORK` statement ensures both `DELETE` statements execute in all or nothing manner, which prevents the orphaned rows in the order_items table in case the second `DELETE` statement fails.

However, this is unnecessary if you know how to setup table’s constraint correctly.

In this case, when you create the order_items table, you define a foreign key constraint with the `DELETE CASCADE` option as follows:

```sql
CREATE TABLE order_items
(
    order_id   NUMBER( 12, 0 )                                ,
    -- other columns
    -- ...
    CONSTRAINT fk_order_items_orders
    FOREIGN KEY( order_id )
    REFERENCES orders( order_id )
    ON DELETE CASCADE
);
```

By doing this, whenever you delete a row from the orders table, for example:

```sql
DELETE
FROM orders
WHERE order_id = 1;
```

All the rows whose order id is 1 in the order_items table are also deleted automatically by the database system.

## MERGE

```sql
MERGE INTO target_table
USING source_table
ON search_condition
    WHEN MATCHED THEN
        UPDATE SET col1 = value1, col2 = value2,...
        WHERE <update_condition>
        [DELETE WHERE <delete_condition>]
    WHEN NOT MATCHED THEN
        INSERT (col1,col2,...)
        values(value1,value2,...)
        WHERE <insert_condition>;
```

The `MERGE` statement becomes convenient when you want to combine multiple `INSERT`, `UPDATE`, and `DELETE` statements in a single operation.

Because the `MERGE` is a deterministic statement, you cannot update the same row of the target table multiple times in the same `MERGE` statement.

You can add an optional `DELETE WHERE` clause to the `MATCHED` clause to clean up after a merge operation. The `DELETE` clause deletes only the rows in the target table that match both `ON` and `DELETE WHERE` clauses.

## INSERT ALL/FIRST

### Unconditional INSERT ALL statement

#### Insert multiple rows into a table

```sql
INSERT ALL
    INTO table_name(col1,col2,col3) VALUES(val1,val2, val3)
    INTO table_name(col1,col2,col3) VALUES(val4,val5, val6)
    INTO table_name(col1,col2,col3) VALUES(val7,val8, val9)
Subquery;
```

```sql
CREATE TABLE fruits (
    fruit_name VARCHAR2(100) PRIMARY KEY,
    color VARCHAR2(100) NOT NULL
);
```

```sql
INSERT ALL
    INTO fruits(fruit_name, color)
    VALUES ('Apple','Red')

    INTO fruits(fruit_name, color)
    VALUES ('Orange','Orange')

    INTO fruits(fruit_name, color)
    VALUES ('Banana','Yellow')
SELECT 1 FROM dual;
```

#### Insert multiple rows into multiple tables

```sql
INSERT ALL
    INTO table_name1(col1,col2,col3) VALUES(val1,val2, val3)
    INTO table_name2(col1,col2,col3) VALUES(val4,val5, val6)
    INTO table_name3(col1,col2,col3) VALUES(val7,val8, val9)
Subquery;
```

### Conditional INSERT ALL Statement

```sql
INSERT [ ALL | FIRST ]
    WHEN condition1 THEN
        INTO table_1 (column_list ) VALUES (value_list)
    WHEN condition2 THEN
        INTO table_2(column_list ) VALUES (value_list)
    ELSE
        INTO table_3(column_list ) VALUES (value_list)
Subquery
```

If you specify the `ALL` keyword, then Oracle evaluates each condition in the `WHEN` clauses. If a condition evaluates to true, Oracle executes the corresponding `INTO` clause.

However, when you specify `FIRST` keyword, for each row returned by the subquery, Oracle evaluates each condition in the `WHEN` clause from top to bottom. If Oracle find a condition that evaluates to true, it executes the corresponding `INTO` clause and skips subsequent `WHEN` clauses for the given row.

Note that a single conditional multitable insert statement can have up to 127 `WHEN` clauses.

### INSERT ALL restrictions

- It can be used to insert data into tables only, not views or materialized view.
- It cannot be used to insert data into remote tables.
- The number of columns in all the `INSERT INTO` clauses must not exceed 999.
- A table collection expression cannot be used in a multitable insert statement.
- The subquery of the multitable insert statement cannot use a sequence.
