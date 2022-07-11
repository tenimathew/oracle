---
id: Section 7. Subquery
sidebar_position: 7
description: EXISTS, ANY, SOME, ALL
---

## Subquery

```sql
SELECT product_id, product_name, list_price
FROM products
WHERE list_price = (
        SELECT MAX( list_price )
        FROM products
    );
```

Oracle evaluates the whole query above in two steps:

- First, execute the subquery.
- Second, use the result of the subquery in the outer query.

A subquery which is nested within the `FROM` clause of the `SELECT` statement is called an **inline view**. Note that other RDBMS such as MySQL and PostgreSQL use the term **derived table** instead of the inline view.

A subquery nested in the `WHERE` clause of the `SELECT` statement is called a **nested subquery**.

A subquery can contain another subquery. Oracle allows you to have an unlimited number of subquery levels in the `FROM` clause of the top-level query and up to 255 subquery levels in the `WHERE` clause.

These are the main advantages of subqueries:

- Provide an alternative way to query data that would require complex joins and unions.
- Make the complex queries more readable.
- Allow a complex query to be structured in a way that it is possible to isolate each part.

## Correlated Subquery

A correlated subquery is a subquery that uses values from the outer query. In addition, a correlated subquery may be evaluated once for each row selected by the outer query. Because of this, a query that uses a correlated subquery could be slow.

A correlated subquery is also known as a **repeating subquery** or a **synchronized subquery**.

```sql
SELECT product_id, product_name, list_price
FROM products p
WHERE list_price > (
        SELECT AVG( list_price )
        FROM products
        WHERE category_id = p.category_id
    );
```

## EXISTS

The Oracle `EXISTS` operator is a Boolean operator that returns either true or false. The `EXISTS` operator is often used with a subquery to test for the existence of rows:

```sql
SELECT name
FROM customers c
WHERE EXISTS (
        SELECT 1
        FROM orders
        WHERE customer_id = c.customer_id
    )
ORDER BY name;
```

Note that Oracle ignores the select list in the subquery so you can use any column, literal value, expression, etc.

### Oracle EXISTS vs. IN

The `EXISTS` operator stops scanning rows once the subquery returns the first row because it can determine the result whereas the `IN` operator must scan all rows returned by the subquery to conclude the result.

In addition, the `IN` clause can’t compare anything with NULL values, but the `EXISTS` clause can compare everything with NULL values. For example, the first statement returns no row while the second one returns all rows from the customers table:

```sql
SELECT *
FROM customers
WHERE customer_id IN(NULL);

SELECT *
FROM customers
WHERE EXISTS (
        SELECT NULL
        FROM dual
    );
```

Typically, the `EXISTS` operator is faster than `IN` operator when the result set of the subquery is large. By contrast, the `IN` operator is faster than `EXISTS` operator when the result set of the subquery is small.

## NOT EXISTS

The `NOT EXISTS` operator works the opposite of the `EXISTS` operator.

## ANY

The `ANY` operator must be preceded by a comparison operator such as =, !=, >, >=,<, <=.

When you use the `ANY` operator to compare a value to a list, Oracle expands the initial condition to all elements of the list and uses the `OR` operator to combine them as shown below:

```sql
SELECT *
FROM table_name
WHERE c > ANY (v1, v2, v3);
```

Oracle performs a transformation of the above query to the following:

```sql
SELECT *
FROM table_name
WHERE c > v1 OR c > v2 OR c > v3;
```

If you use the `ANY` operator to compare a value with result set returned by a subquery, Oracle uses the `EXISTS` operator to transform the query to an equivalent one without using the ANY operator.

```sql
SELECT product_name, list_price
FROM products
WHERE list_price > ANY(
        SELECT list_price
        FROM products
        WHERE category_id = 1
    )
ORDER BY product_name;
```

Oracle performed a single transformation as shown below:

```sql
SELECT product_name, list_price
FROM products p1
WHERE EXISTS(
        SELECT list_price
        FROM products p2
        WHERE category_id = 1
            AND p1.list_price > p2.list_price
    )
ORDER BY product_name;
```

Note that if the subquery returns no rows, the following condition evaluates to false: Hence, the whole query returns no rows.

In Oracle, the `SOME` and `ANY` operators behave exactly the same therefore they are completely interchangeable.

### col = ANY ( list )

The expression evaluates to true if the col matches one or more values in the list

### col != ANY(list)

The expression evaluates to true if the col does not match one or more values in the list.

### col > ANY (list)

The expression evaluates to true if the col is greater than the smallest value in the list.

### col >= ANY (list)

The expression evaluates to true if the col is greater than or equal to the smallest value in the list.

### col < ANY (list)

The expression evaluates to true if the col is smaller than the highest value in the list.

### col <= ANY (list)

The expression evaluates to true if the col is smaller than or equal to the highest value in the list.

## ALL

The `ALL` operator must be preceded by an comparison operator such as =, != >,>=, <, <= and followed by a list or subquery.

When you use the `ALL` operator to compare a value to a list, Oracle expands the initial condition to all elements of the list and uses the `AND` operator to combine them as shown below:

```sql
SELECT *
FROM table_name
WHERE c > ALL (v1, v2, v3);

--  transform the ALL operator

SELECT *
FROM table_name
WHERE c > v1
    AND c > v2
    AND c > v3;
```

If you use the `ALL` operator to compare a value with a result set returned by a subquery, Oracle performs a two-step transformation as shown below:

```sql
SELECT product_name, list_price
FROM products
WHERE list_price > ALL
    ( SELECT list_price
     FROM products
     WHERE category_id = 1 )
ORDER BY product_name;

-- 1st step: transformation that uses ANY

SELECT product_name, list_price
FROM products p1
WHERE NOT( p1.list_price <= ANY
            (SELECT list_price
             FROM products p2
             WHERE category_id = 1 ))
ORDER BY product_name;

-- 2nd step: transformation that eliminates ANY
SELECT product_name, list_price
FROM products p1
WHERE NOT EXISTS
    (SELECT p2.list_price
     FROM products p2
     WHERE p2.category_id = 1
       AND p2.list_price >= p1.list_price )
ORDER BY product_name;
```

If the subquery returns no rows, then the following condition evaluates to true: Which means that the query that uses the above condition in the `WHERE` clause will return all rows in case the subquery return no rows.

### col = ALL ( list)

The expression evaluates to true if the col matches all values in the list.

### col != ALL (list)

The expression evaluates to true if the col does not match any values in the list.

### col > ALL (list)

The expression evaluates to true if the col is greater than the biggest value in the list.

### col >= ALL(list)

The expression evaluates to true if the col is greater than or equal to the biggest value in the list.

### col < ALL(list)

The expression evaluates to true if the col is smaller than the smallest value in the list.

### col <= ALL(list)

The expression evaluates to true if the col is less than or equal to the smallest value in the list.
