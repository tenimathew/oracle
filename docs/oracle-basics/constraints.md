---
id: Section 12. Constraints
sidebar_position: 12
description: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK
---

## PRIMARY KEY

A primary key is a column of a combination of columns in a table that uniquely identifies a row in the table.

The following are rules that make a column a primary key:

- A primary key column cannot contain a NULL value or an empty string.
- A primary key value must be unique within the entire table.
- A primary key value should not be changed over time.

According to these rules, the following are the recommendations for the primary keys:

- First, the primary key should be meaningless. Sometimes, you may want use meaningful data, which considers being unique, for the primary keys e.g., social security number (SSN), vehicle identification number (VIN), email, and phone number. However, you don’t know when the email or phone number changes or is reused by another person. In such cases, it will create many data problems. In the database world, the artificial keys are known as surrogate keys which are as opposed to natural primary keys.
- Second, the primary keys should be compact. The primary keys typically are numeric because Oracle typically processes numbers faster than any other data types.
- It is considered a best practice have a primary key in every table though it is not mandatory in Oracle.

### Creating a primary key that consists of one column

```sql
CREATE TABLE purchase_orders (
    po_nr NUMBER PRIMARY KEY,
    vendor_id NUMBER NOT NULL,
    po_status NUMBER(1,0) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL
);
```

```sql
CREATE TABLE purchase_orders (
    po_nr NUMBER,
    vendor_id NUMBER NOT NULL,
    po_status NUMBER(1,0) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    CONSTRAINT pk_purchase_orders PRIMARY KEY(po_nr)
);
```

### Creating a primary key that consists of multiple columns

```sql
CREATE TABLE purchase_order_items (
    po_nr NUMBER NOT NULL,
    item_nr NUMBER NOT NULL,
    product_id NUMBER NOT NULL,
    quantity NUMBER NOT NULL,
    purchase_unit NUMBER NOT NULL,
    buy_price NUMBER (9,2) NOT NULL,
    delivery_date DATE,
    PRIMARY KEY (po_nr, item_nr)
);
```

In this example we did not use the `CONSTRAINT` clause to explicitly assign the `PRIMARY KEY` constraint a name. Therefore, Oracle implicitly assigned the primary key constraint a system-generated name such as `SYS_C0010617`.

### Adding a primary key to a table

```sql
CREATE TABLE vendors (
    vendor_id NUMBER,
    vendor_name VARCHAR2(255) NOT NULL,
    address VARCHAR2(255) NOT NULL
);

ALTER TABLE vendors
ADD CONSTRAINT pk_vendors PRIMARY KEY (vendor_id);
```

### Dropping an Oracle PRIMARY KEY constraint

```sql
ALTER TABLE vendors
DROP CONSTRAINT pk_vendors;
```

```sql
ALTER TABLE vendors
DROP PRIMARY KEY;
```

### Enable / Disable an Oracle PRIMARY KEY constraint

#### Disable

```sql
ALTER TABLE purchase_orders
DISABLE CONSTRAINT pk_purchase_orders;
```

```sql
ALTER TABLE purchase_orders
DISABLE PRIMARY KEY;
```

#### Enable

```sql
ALTER TABLE purchase_orders
ENABLE CONSTRAINT pk_purchase_orders;
```

```sql
ALTER TABLE purchase_orders
ENABLE PRIMARY KEY;
```

## FOREIGN KEY

```sql
CREATE TABLE child_table (
    ...
    CONSTRAINT fk_name
    FOREIGN KEY(col1, col2,...) REFERENCES parent_table(col1,col2)
    ON DELETE [ CASCADE | SET NULL ]
);
```

- First, to explicitly assign the foreign key constraint a name, you use the `CONSTRAINT` clause followed by the name. The `CONSTRAINT` clause is optional. If you omit it, Oracle will assign a system-generated name to the foreign key constraint.

- Second, specify the `FOREIGN KEY` clause to defines one or more column as a foreign key and parent table with columns to which the foreign key columns reference.

Third, use the `ON DELETE` clause to specify consequence when the rows in the parent table are deleted.

- **ON DELETE CASCADE:** if a row in the parent is deleted, then all the rows in the child table that reference the removed row will be deleted.
- **ON DELETE SET NULL:** if a row in the parent is deleted, then all the rows in the child table reference the removed row will be set to NULL for the foreign key columns.

Unlike the primary key constraint, a table may have more than one foreign key constraint.

### Add a foreign key constraint to a table

```sql
ALTER TABLE child_table
ADD CONSTRAINT fk_name
FOREIGN KEY (col1,col2) REFERENCES parent_table(col1,col2);
```

### Drop a foreign key constraint

```sql
ALTER TABLE child_table
DROP CONSTRAINT fk_name;
```

### Disable a foreign key constraint

```sql
ALTER TABLE child_table
DISABLE CONSTRAINT fk_name;
```

### Enable a foreign constraint

```sql
ALTER TABLE child_table
ENABLE CONSTRAINT fk_name;
```

## NOT NULL constraint

```sql
CREATE TABLE table_name (
    ...
    column_name data_type NOT NULL
    ...
);
```

```sql
ALTER TABLE table_name MODIFY ( column_name NOT NULL);
```

### Drop NOT NULL constraints

```sql
ALTER TABLE table_name MODIFY ( column_name NULL)
```

## CHECK constraint

An Oracle check constraint allows you to enforce domain integrity by limiting the values accepted by one or more columns.

### Creating Oracle Check

```sql
CREATE TABLE parts (
    part_id NUMBER GENERATED BY DEFAULT AS IDENTITY,
    part_name VARCHAR2(255) NOT NULL,
    buy_price NUMBER(9,2) CHECK(buy_price > 0),
    PRIMARY KEY(part_id)
);
```

```sql
DROP TABLE parts;

CREATE TABLE parts (
    part_id NUMBER GENERATED BY DEFAULT AS IDENTITY,
    part_name VARCHAR2(255) NOT NULL,
    buy_price NUMBER(9,2) CONSTRAINT check_positive_buy_price CHECK(buy_price > 0),
    PRIMARY KEY(part_id)
);
```

### Add Check constraint to a table

```sql
ALTER TABLE parts
ADD CONSTRAINT check_positive_cost CHECK (cost > 0);
```

### Drop checking constraint

```sql
ALTER TABLE parts
DROP CONSTRAINT check_valid_cost;
```

### Disable / Enable check constraint

```sql
ALTER TABLE table_name
DISABLE CONSTRAINT check_constraint_name;

ALTER TABLE table_name
ENABLE CONSTRAINT check_constraint_name;
```

### Restrictions of Oracle check constraint

- You can define check constraints for tables only, not views.
- The expression of the check constraint can refer to any column in the table, but it cannot refer to columns of other tables.
- The expression also cannot contain one of the following constructs:
- Non-deterministic functions such as SYSDATE, CURRENT_DATE, and CURRENT_TIMESTAMP.
- Subqueries or a scalar subquery expressions.
- Calls to any user-defined functions.
- Nested table columns or attributes.
- The pseudo-columns CURRVAL, NEXTVAL, LEVEL, or ROWNUM.
- Date constants that are not fully specified.

## UNIQUE constraint

A unique constraint is an integrity constraint that ensures the data stored in a column, or a group of columns, is unique among the rows in a table.

```sql
CREATE TABLE table_name (
    ...
    column_name data_type UNIQUE
    ...
);
```

```sql
CREATE TABLE table_name (
    ...,
    UNIQUE(column_name)
);
```

```sql
CREATE TABLE table_name (
    ...
    column_name data_type CONSTRAINT unique_constraint_name UNIQUE
    ...
);
```

```sql
CREATE TABLE table_name (
    ...
    column_name data_type,
    ...,
    CONSTRAINT unique_constraint_name UNIQUE(column_name)
);
```

```sql
CREATE TABLE table_name (
    ...
    column_name1 data_type,
    column_name2 data_type,
    ...,
    CONSTRAINT unique_constraint_name UNIQUE(column_name1, column_name2)
);
```

```sql
ALTER TABLE table_name
ADD CONSTRAINT unique_constraint_name UNIQUE(column_name1, column_nam2);
```

```sql
ALTER TABLE table_name
DISABLE CONSTRAINT unique_constraint_name;
```

```sql
ALTER TABLE table_name
ENABLE CONSTRAINT unique_constraint_name;
```

```sql
ALTER TABLE table_name
DROP CONSTRAINT unique_constraint_name;
```
