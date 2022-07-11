---
id: Section 3. Sorting data
sidebar_position: 3
description: ORDER BY, ALIAS
---

## ORDER BY

### Syntax

```sql
SELECT column_1, column_2, column_3
FROM table_name
ORDER BY column_1 [ASC | DESC] [NULLS FIRST | NULLS LAST];
```

`NULLS FIRST` places NULL values before non-NULL values

`NULLS LAST` puts the NULL values after non-NULL values

Note that the `ORDER BY` clause is always the last clause in a `SELECT` statement until 12c. Now last clause is row limiting clause.

### Sort rows by column’s position

You don’t need to specify the column names for sorting the data. If you prefer, you can use the positions of the column in the `ORDER BY` clause.

```sql
SELECT name, credit_limit
FROM customers
ORDER BY 2 DESC, 1;
```

### Sorting rows by the result of a function or expression

```sql
SELECT customer_id, name
FROM customers
ORDER BY UPPER(name);
```

### Sorting rows by column alias

```sql
SELECT product_name,
  list_price - standard_cost AS gross_profit
FROM products
ORDER BY gross_profit DESC;
```

## ALIAS

The `AS` keyword is optional

```sql
SELECT first_name AS forename,
  last_name  AS surname
FROM employees;
```

By default, Oracle capitalizes the column heading in the query result. If you want to change the letter case of the column heading, you need to enclose it in quotation marks (“”)

```sql
SELECT first_name "Forename",
  last_name "Surname"
FROM employees;
```

### Table Alias

```sql
SELECT e.first_name employee,
  m.first_name manager
FROM employees e INNER JOIN employees m
    ON m.employee_id = e.employee_id;
```
