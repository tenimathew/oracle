---
id: Section 2. Querying data
sidebar_position: 2
description: SELECT, DUAL
---

## SELECT

### Syntax

```sql
SELECT column_1, column_2
FROM table_name;
```

You can use the shorthand asterisk (\*) to instruct Oracle to return data from all columns of a table as follows:

```sql
SELECT * FROM table_name;
```

When you embed the query in applications, it is a good practice to explicitly specify the columns from which you want to query data even when you want to retrieve data from all columns of a table.

You should use the asterisk (\*) shorthand for ad-hoc queries only.

This is because a table may have more or fewer columns in the future due to the business changes.

If you use the asterisk (\*) in the application code and assume that the table has a fixed set of columns, the application may either not process the additional columns or access the removed columns.

## DUAL

`DUAL` table which is a special table that belongs to the schema of the user SYS but it is accessible to all users.

The `DUAL` table has one column named `DUMMY` whose data type is `VARCHAR2()` and contains one row with a value `X`.
