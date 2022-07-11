---
id: Section 17. Synonym, Sequence
sidebar_position: 17
description: Synonym, Sequence
---

## Synonyms

- Synonyms create a level of abstraction of the underlying schema objects so that you can rename and move of the underlying objects without affecting the applications based on the synonyms.
- Synonyms themselves are not secured. When you grant object privileges on a synonym, you are granting privileges on the underlying object, and the synonym only acts as an alias in the GRANT statement.
- Synonyms provide a level of security by hiding the name and owner of a schema object such as a table or a view. On top of that, they provide location transparency for remote objects of a distributed database.
- Synonyms can be public or private. A public synonym is accessible to every user in a database and owned by a specified group named `PUBLIC` while a private synonym is stored a specific schema owned by a specific user and available only to that user.
- Users must have sufficient privileges on the underlying objects to use the public synonyms.
- Suppose you have a table called sales in the schema owned by the user lion, and you granted the `SELECT` privilege for the sales table to `PUBLIC`.

```sql
CREATE PUBLIC SYNONYM sales FOR lion.sales;
```

```sql
CREATE [OR REPLACE] [PUBLIC] SYNONYM schema.synonym_name
FOR schema.object;
```

```sql
DROP SYNONYM schema.synonym_name FORCE;
```

- the `FORCE` keyword to delete the synonym even if it has dependent tables or user-defined types.

## Sequence

```sql
CREATE SEQUENCE schema_name.sequence_name
[INCREMENT BY interval]
[START WITH first_number]
[MAXVALUE max_value | NOMAXVALUE]
[MINVALUE min_value | NOMINVALUE]
[CYCLE | NOCYCLE]
[CACHE cache_size | NOCACHE]
[ORDER | NOORDER];
```

#### `INCREMENT BY`

- Specify the interval between sequence numbers after the `INCREMENT BY` keyword.
- The interval can have less than 28 digits. It also must be less than `MAXVALUE` - `MINVALUE`.
- If the interval is positive, the sequence is ascending e.g., 1,2,3,…
- If the interval is negative, the sequence is descending e.g., -1, -2, -3 …
- The default value of interval is 1.

#### `START WITH`

- Specify the first number in the sequence.
- The default value of the first number is the minimum value of the sequence for an ascending sequence and maximum value of the sequence for a descending sequence.

#### `MAXVALUE`

- Specify the maximum value of the sequence.
- The max_value must be equal to or greater than first_number specify after the `START WITH` keywords.

#### `NOMAXVALUE`

- Use `NOMAXVALUE` to denote a maximum value of 10^27 for an ascending sequence or -1 for a descending sequence. Oracle uses this option as the default.

#### `MINVALUE`

- Specify the minimum value of the sequence.
- The min_value must be less than or equal to the first_number and must be less than max_value.

#### `NOMINVALUE`

- Use `NOMINVALUE` to indicate a minimum value of 1 for an ascending sequence or -10^26 for a descending sequence. This is the default.

#### `CYCLE`

- Use `CYCLE` to allow the sequence to generate value after it reaches the limit, min value for a descending sequence and max value for an ascending sequence.
- When an ascending sequence reaches its maximum value, it generates the minimum value.
- On the other hand, when a descending sequence reaches its minimum value, it generates the maximum value.

#### `NOCYCLE`

- Use `NOCYCLE` if you want the sequence to stop generating the next value when it reaches its limit. This is the default.

#### `CACHE`

- Specify the number of sequence values that Oracle will preallocate and keep in the memory for faster access.
- The minimum of the cache size is 2. The maximum value of the cache size is based on this formula:

```sql
(CEIL (MAXVALUE - MINVALUE)) / ABS (INCREMENT)
```

- In case of a system failure event, you will lose all cached sequence values that have not been used in committed SQL statements.

#### `ORDER`

- Use `ORDER` to ensure that Oracle will generate the sequence numbers in order of request.

- This option is useful if you are using _Oracle Real Application Clusters_. When you are using exclusive mode, then Oracle will always generate sequence numbers in order.

#### `NOORDER`

- Use `NOORDER` if you do not want to ensure Oracle to generate sequence numbers in order of request. This option is the default.

```sql
CREATE SEQUENCE item_seq;
```

- To access the next available value for a sequence, you use the `NEXTVAL` pseudo-column:

```sql
SELECT item_seq.NEXTVAL
FROM dual;
```

- Once, you acquire the sequence number through the `NEXTVAL` pseudo-column, you can access it repeatedly using the `CURRVAL` pseudo-column:

```sql
SELECT item_seq.CURRVAL
FROM dual;
```

- The following statement uses the item_seq sequence repeatedly in an SQL statement:

```sql
SELECT item_seq.NEXTVAL
FROM   dual
CONNECT BY level <= 5;

   NEXTVAL
----------
         2
         3
         4
         5
         6
```

- From Oracle 11g onward, you can use sequences in PL/SQL. Behind the scenes, Oracle still uses a query from the dual table, but it makes the code cleaner:

```sql
DECLARE
    v_seq NUMBER;
BEGIN
    v_seq  := item_seq.NEXTVAL;
    DBMS_OUTPUT.put_line('v_seq=' || v_seq);
END;
```

### Modifying a sequence

```sql
ALTER SEQUENCE item_seq MAXVALUE 100;
```

### Removing a sequence

```sql
DROP SEQUENCE item_seq;
```

### Sequence privileges

```sql
GRANT CREATE SEQUENCE
TO user_name;
```

- In addition, Oracle provides the following privileges that allow you to manipulate sequences in all schemas, including the built-in ones:

```sql
GRANT CREATE ANY SEQUENCE,
    ALTER ANY SEQUENCE,
    DROP ANY SEQUENCE,
    SELECT ANY SEQUENCE
TO user_name;
```

- If you are the owner of the sequence, you will have the full privileges on the sequence. To grant another user access to a sequence, you can grant the `SELECT` object privilege to that user as shown in the following command:

```sql
GRANT SELECT ON user_name.sequence_name
TO another_user;
```
