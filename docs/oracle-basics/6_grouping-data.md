---
id: Section 6. Grouping data
sidebar_position: 6
description: GROUP BY, HAVING
---

## GROUP BY

The `GROUP BY` clause is used in a `SELECT` statement to group rows into a set of summary rows by values of columns or expressions. The `GROUP BY` clause returns one row per group.

```sql
SELECT customer_id, COUNT( order_id )
FROM orders
GROUP BY customer_id
ORDER BY customer_id;
```

### GROUP BY with an expression

The following example groups the orders by year and returns the number of orders per year.

```sql
SELECT EXTRACT(YEAR FROM order_date) YEAR, COUNT( order_id )
FROM orders
GROUP BY EXTRACT(YEAR FROM order_date)
ORDER BY YEAR;
```

## HAVING

The `HAVING` clause is an optional clause of the `SELECT` statement. It is used to filter groups of rows returned by the `GROUP BY` clause. This is why the `HAVING` clause is usually used with the `GROUP BY` clause.

If you use the `HAVING` clause without the `GROUP BY` clause, the `HAVING` clause works like the `WHERE` clause.

Note that the `HAVING` clause filters groups of rows while the `WHERE` clause filters rows. This is a main difference between the `HAVING` and `WHERE` clauses.

```sql
SELECT order_id, SUM( unit_price * quantity  order_value
FROM order_items
GROUP BY order_id
HAVING SUM( unit_price * quantity ) > 1000000
ORDER BY order_value DESC;
```
