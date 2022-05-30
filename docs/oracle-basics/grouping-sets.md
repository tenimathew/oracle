---
id: Section 8. More on Groupings
sidebar_position: 8
description: CUBE, ROLLUP, PIVOT, UNPIVOT
---

## GROUPING SETS

A grouping set is a grouping of one or more columns by which you group using the `GROUP BY` clause. A grouping set is denoted by a list of comma-separated columns in parentheses. A `GROUPING SETS` expression allows you to selectively define one or more grouping sets in a query.

This query returns a grouping set that includes the category column, (category) grouping set:

```sql
SELECT category, SUM(sales_amount)
FROM customer_category_sales
GROUP BY category;
```

The following query defines another grouping set that includes the customer column, or (customer) grouping set

```sql
SELECT customer, SUM(sales_amount)
FROM customer_category_sales
GROUP BY customer;
```

This query returns a grouping set that includes both columns customer and category, or (customer, category) grouping set

```sql
SELECT customer, category, sales_amount
FROM customer_category_sales
ORDER BY customer, category;
```

A grouping sets may include zero column. In this case, it is an empty grouping set, which is denoted by (). The following query doesn’t use the `GROUP BY` clause, therefore, it returns an empty grouping set ():

```sql
SELECT SUM(sales_amount)
FROM customer_category_sales;
```

So far, we have four queries that return 4 grouping sets: (category), (customer), (category, customer), and ().

If you want to return four grouping sets in one query, you need to use the `UNION ALL` operator.

However, the `UNION ALL` operator requires all involved queries return the same number of columns. Therefore, to make it works, you need to add NULL to the select list of each query as shown in the following query:

```sql
SELECT category, NULL, SUM(sales_amount)
FROM customer_category_sales
GROUP BY category

UNION ALL

SELECT customer, NULL, SUM(sales_amount)
FROM customer_category_sales
GROUP BY customer

UNION ALL

SELECT customer, category, sum(sales_amount)
FROM customer_category_sales
GROUP BY customer, category

UNION ALL

SELECT NULL, NULL, SUM(sales_amount)
FROM customer_category_sales;
```

This query has two main issues:

- It is so lengthy that make it difficult to read and maintain.
- Its performance is not optimal because Oracle has to execute 4 queries separately first and then combine all the immediate result sets into a single one.

Back to our query example that uses the `UNION ALL` operators above, you can use the `GROUPING SETS` instead:

```sql
SELECT customer, category, SUM(sales_amount)
FROM customer_category_sales
GROUP BY
    GROUPING SETS(
        (customer,category),
        (customer),
        (category),
        ()
    )
ORDER BY customer, category;
```

![](img/2022-05-30-23-15-30.png)

In this output, rows whose column have NULL are super-aggregate rows. For example, the row number 5, 10 and 15.

### GROUPING() function

The `GROUPING()` function differentiates the super-aggregate rows from regular grouped rows.

The expression must match with the expression in the `GROUP BY` clause.

The `GROUPING()` function returns a value of 1 when the value of expression in the row is NULL representing the set of all values. Otherwise, it returns 0.

```sql
SELECT customer, category,
    GROUPING(customer) customer_grouping,
    GROUPING(category) category_grouping,
    SUM(sales_amount)
FROM customer_category_sales
GROUP BY
    GROUPING SETS(
        (customer,category),
        (customer),
        (category),
        ()
    )
ORDER BY customer, category;
```

![](img/2022-05-30-23-18-20.png)

To make the output more readable, you can combine the `DECODE()` function with the `GROUPING()` function as shown in the following query:

```sql
SELECT
    DECODE(GROUPING(customer),1,'ALL customers', customer) customer,
    DECODE(GROUPING(category),1,'ALL categories', category) category,
    SUM(sales_amount)
FROM customer_category_sales
GROUP BY
    GROUPING SETS(
        (customer,category),
        (customer),
        (CATEGORY),
        ()
    )
ORDER BY customer, category;
```

![](img/2022-05-30-23-19-09.png)

### GROUPING_ID() function

The `GROUPING_ID()` function takes the “group by” columns and returns a number denoting the GROUP BY level. In other words, it provides another compact way to identify the subtotal rows.

```sql
SELECT customer, category,
    GROUPING_ID(customer,category) grouping,
    SUM(sales_amount)
FROM customer_category_sales
GROUP BY
    GROUPING SETS(
        (customer,category),
        (customer),
        (category),
        ()
    )
ORDER BY customer, category;
```

![](img/2022-05-30-23-20-17.png)

## CUBE
