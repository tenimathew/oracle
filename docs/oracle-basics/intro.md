---
slug: /
id: Section 1. Querying data
sidebar_position: 1
description: SELECT statement
---

## Syntax

```sql
SELECT
  column_1,
  column_2,
  ...
FROM
  table_name;
```

You can use the shorthand asterisk (\*) to instruct Oracle to return data from all columns of a table as follows:

```sql
SELECT * FROM table_name;
```

When you embed the query in applications, it is a good practice to explicitly specify the columns from which you want to query data even when you want to retrieve data from all columns of a table.

You should the asterisk (\*) shorthand for ad-hoc queries only.

This is because a table may have more or fewer columns in the future due to the business changes.

If you use the asterisk (\*) in the application code and assume that the table has a fixed set of columns, the application may either not process the additional columns or access the removed columns.
