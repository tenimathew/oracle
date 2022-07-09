---
id: Section 14. View
sidebar_position: 14
description: View, Materialized View
---

## View

- View is a “virtual” table whose data is the result of a stored query, which is derived each time when you query against the view
- most common uses of views are as follows:
  - Simplifying data retrieval.
  - Maintaining logical data independence.
  - Implementing data security.

```sql
CREATE [OR REPLACE] VIEW view_name [(column_aliases)] AS
    defining-query
[WITH READ ONLY]
[WITH CHECK OPTION]
```

#### `FORCE`

Usually, you create a new view based on existing tables. However, sometimes, you may want to create a view based on the tables that you will create later or the tables that you don’t have sufficient privileges to access at the time of creating the view. In these cases, you can use the FORCE option.

#### `WITH READ ONLY`

The `WITH READ ONLY` clause prevents the underlying tables from changes through the view.

#### `WITH CHECK OPTION`

The `WITH CHECK OPTION` clause protects the view from any changes to the underlying table that would produce rows which are not included in the defining query.

### DROP VIEW

```sql
DROP VIEW schema_name.view_name
[CASCADE CONSTRAINT];
```

#### `CASCADE CONSTRAINT`

Third, if a view has any constraint, you must specify the `CASCADE CONSTRAINT` clause to drop all referential integrity constraints that refer to primary key and unique keys in the view. If you don’t do so, then the DROP VIEW statement will fail in case such constraints exist.

## Key-preserved table

- A Key-preserved table is a base table with a one-to-one row relationship with the rows in the view, via either the primary key or a unique key.

### View restrictions

- The SQL statement e.g., `INSERT`, `UPDATE`, and `DELETE`, is only allowed to modify data from a single base table.
- For an `INSERT` statement, all columns listed in the `INTO` clause must belong to a key-preserved table.
- For an `UPDATE` statement, all columns in the `SET` clause must belong to a key-preserved table.
- For a `DELETE` statement, if the join results in more than one key-preserved table, the Oracle deletes from the first table in the `FROM` clause.
- Besides these restrictions, Oracle also requires that the defining-query does not contain any of the following elements:
  - Aggregate functions e.g., `AVG`, `COUNT`, `MAX`, `MIN`, and `SUM`.
  - `DISTINCT` operator.
  - `GROUP BY` clause.
  - `HAVING` clause.
  - Set operators e.g., `UNION`, `UNION ALL`, `INTERSECT`, and `MINUS`.
  - `START WITH` or `CONNECT BY` clause
  - `ROWNUM` pseudo-column
- To find which column can be updated, inserted, or deleted, you use the `user_updatable_columns` view.

```sql
SELECT *
FROM USER_UPDATABLE_COLUMNS
WHERE TABLE_NAME = 'ALL_CARS';
```

![](img/2022-07-02-19-36-59.png)

## Inline view

- An inline view is not a real view but a subquery in the `FROM` clause of a `SELECT` statement.

```sql
SELECT column_list
FROM (SELECT * FROM table_name ) t;
```

- The subquery specified in the `FROM` clause of a query is called an inline view
- Because an inline view can replace a table in a query, it is also called a derived table

## `LATERAL` inline view

```sql
SELECT category_name, product_name
FROM products p,
    (SELECT *
      FROM product_categories c
      WHERE c.category_id = p.category_id)
ORDER BY product_name;
```

```sql
ORA-00904: "P"."CATEGORY_ID": invalid identifier
```

This is because the inline view cannot reference the tables from the outside of its definition.

Fortunately, since Oracle 12c, by using the `LATERAL` keyword, an inline view can reference the table on the left of the inline view definition in the `FROM` clause as shown in the following example:

```sql
SELECT product_name, category_name
FROM products p,
    LATERAL(
        SELECT *
        FROM product_categories c
        WHERE c.category_id = p.category_id
        )
ORDER BY product_name;
```

### Restrictions on `LATERAL`

Lateral inline views are subject to the following restrictions:

- If you specify `LATERAL`, then you cannot specify the pivot_clause, the unpivot_clause, or a pattern in the table_reference clause.
- If a lateral inline view contains the `query_partition_clause` (Analytical function), and it is the right side of a join clause, then it cannot contain a left correlation to the left table in the join clause. However, it can contain a left correlation to a table to its left in the `FROM` clause that is not the left table.
- A lateral inline view cannot contain a left correlation to the first table in a right outer join or full outer join.
