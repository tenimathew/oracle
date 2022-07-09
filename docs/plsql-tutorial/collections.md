---
id: Section 6. Collections
sidebar_position: 6
description: Collections
---

## Nested Tables

- Persistent collection -Stores data and structure physically into the database as database object
- No upper limits on rows (Unbounded)
- Need external table for its storage (STORE AS clause --while creating table)
- Initialization needed before assigning values to elements

### Nested Table type as block member

```sql
DECLARE
    TYPE names_table IS TABLE OF VARCHAR2(10);
    TYPE grades IS TABLE OF INTEGER(2);
    names names_table;
    marks grades;
    total INTEGER(3);
BEGIN
    names := names_table('Kavita','Pritam','Ayan','Rishav','Aziz'); --Initialization
    names(1) := 'Gaurav'; --Assigning
    marks := grades(98,97,78,87,92);
    total := names.COUNT;
    FOR i IN 1 .. total LOOP
        DBMS_OUTPUT.PUT_LINE('Student:' || names(i) || ' Marks:' || marks(i));
    END LOOP;
END;
```

### Nested table type as Database Object

```sql
CREATE OR REPLACE TYPE my_nested_table IS TABLE OF VARCHAR2(10);
----
CREATE TABLE my_subject(
    sub_id NUMBER(3),
    sub_name VARCHAR2(20),
    sub_schedule_day my_nested_table --nested table type
    ) NESTED TABLE sub_schedule_day --name of the column you want to use as nested table column
STORE AS nested_tab_space; --storage table for your nested table type (user-defined name)
----
INSERT INTO my_subject VALUES(101,'Maths',my_nested_table('Monday','Friday'));
----
SELECT sub.sub_id, sub.sub_name,ss_day.COLUMN_VALUE
FROM my_subject sub,
TABLE(sub.sub_schedule_day) ss_day --Table expression
```

### Nested table using user defined datatype

```sql
CREATE OR REPLACE TYPE object_type AS OBJECT( --type object_type now can be used as any other built-in datatype like VARCHAR or NUMBER
    obj_id NUMBER,
    obj_name VARCHAR2(10)
);
----
CREATE OR REPLACE TYPE my_nesd_tbl IS TABLE OF object_type; --It is not possible to add size limit to user defined datatype like object_type(5) as we do with VARCHAR2(5)
----
CREATE TABLE base_table(
    tab_id NUMBER,
    tab_ele my_nesd_tbl
) NESTED TABLE tab_ele STORE AS store_tab_1;
```

## VARRAYs

- Persistent collection -Stores data and structure physically into the database as database object
- Can hold fixed number of elements(Bounded)
- Modified version of Nested tables
- Stored in-line with their parent record as raw value in the parent table (No need of STORE AS clause)
- Initialization needed before assigning values to elements

### VARRAYs as block member

```sql
DECLARE
    TYPE team_four IS VARRAY(4) OF VARCHAR2(15);
    team team_four;
BEGIN
    team := team_four('John','Mary','Alberto','Juanita'); --Initialization
    team(3) := 'Pierre'; --Assigning
    team(4) := 'Yvonne';
    FOR i IN 1..team.LIMIT LOOP
        DBMS_OUTPUT.PUT_LINE(i || team(i));
    END LOOP;
END;
```

### To modify VARRAY size limit

```sql
ALTER TYPE type_name MODIFY LIMIT new_size_limit [INVALIDATE | CASCADE]
--INVALIDATE: Marks all dependent TYPES and TABLES as INVALID
--CASCADE: Cascades(propagate) the change to all dependent TYPES and TABLES
```

### VARRAY as Database Object

```sql
CREATE OR REPLACE TYPE dbObj_vry IS VARRAY(5) OF NUMBER;
----
CREATE TABLE calendar(
    day_name VARCHAR2(25),
    day_date dbObj_vry); --No STORE AS clause is needed
----
INSERT INTO calendar VALUES('Sunday',dbObj_vry(7,14,21,28));
----
SELECT tab1.day_name, tab1.day_date
FROM calendar tab1; --Without Table expression
----
SELECT tab1.day_name, vry.COLUMN_VALUE
FROM calendar tab1,
TABLE (tab1.day_date) vry; --Table expression
```

without table expression

| DAY_NAME | COLUMN_VALUE            |
| -------- | ----------------------- |
| Sunday   | HR.DBOBJ_VRY(7,14,21,28 |

with table expression

| DAY_NAME | COLUMN_VALUE |
| -------- | ------------ |
| Sunday   | 7            |
| Sunday   | 14           |
| Sunday   | 21           |
| Sunday   | 28           |

## Associative Arrays/ Index by table

- Non-Persistent collection -Stores data and structure just for one session. No database object can be created.
- Unbounded collection
- Hold similar data type in key-value pair
- Can access elements using numbers and strings as subscript values.
- Similar to hash table in other languages.
- Not need of initialization before assigning values to elements

```sql
DECLARE
    TYPE salary IS TABLE OF NUMBER(5) INDEX BY VARCHAR2(20);
    salary_list salary;
    name VARCHAR2(20);
BEGIN
    salary_list('Ranjish') := 6200; --No initialization needed before assigning
    salary_list('Minakshi') := 75000;
    salary_list('Martin') := 10000;
    name := salary_list.FIRST;
    WHILE name IS NOT NULL LOOP
        DBMS_OUTPUT.PUT_LINE('Salary of ' || name || 'is ' || salary_list(name));
        name := salary_list.NEXT(name);
    END LOOP;
END;
```

## NLS_SORT and NLS_COMP

- In associative arrays, string index's sort order is determined by the initialization parameters `NLS_SORT` and `NLS_COMP` parameter
- If you change the value of either parameter after populating an associative array indexed by string, then the collection methods `FIRST`, `LAST`, `NEXT`, and `PRIOR` might return unexpected values or raise exceptions.
- If you have changed these parameter values during your session, restore their original values before operating on associative arrays indexed by string.
- Default value for both parameter is `BINARY`

## Collection Methods (3 Procedures + 7 Functions)

**DELETE**-Deletes elements from collection using index.

```sql
names.DELETE; --delete all
names.DELETE(1); --delete index 1
names.DELETE(3,6) --delete index from 3 to 6
```

**TRIM**-Deletes elements from end of varray or nested table.

```sql
names.TRIM; --removes one element from the end of the collection
names.TRIM(5); --removes 5 elements from the end of the collection
```

**EXTEND**-Memory for storing data has to be allocated before assigning value to the individual elements in the collection. It adds elements to end of varray or nested table. Cannot be used with Associative array.

```sql
names.EXTEND; --occupy one element with NULL
names.EXTEND(5); --occupy 5 elements with NULL
names.EXTEND(5,1); --5 elements in the collection will be initialized with the value in the index 1 that is 28.
```

**EXISTS**-Returns TRUE if and only if specified element (index) of varray or nested table exists.

```sql
IF names.EXISTS(1) THEN
    DBMS_OUTPUT.PUT_LINE(names.COUNT);
END IF;
```

**FIRST**,**LAST**-Returns first and last index (subscript) in collection.

```sql
DBMS_OUTPUT.PUT_LINE (names.FIRST); --prints the index of first element
DBMS_OUTPUT.PUT_LINE (names(names.LAST)); --prints the value of last element
```

**COUNT**-Returns number of elements in collection. No empty indexes are counted.

```sql
DBMS_OUTPUT.PUT_LINE(names.COUNT);
```

**LIMIT**-Returns maximum number of elements that collection (varray only) can have whether it is empty or not. For nested tables and associative arrays, which have no limit in size, LIMIT will return NULL.

```sql
DBMS_OUTPUT.PUT_LINE(names.LIMIT);
```

**PRIOR**, **NEXT**-Returns index that precedes and succeeds specified index.

```sql
DBMS_OUTPUT.PUT_LINE (names.PRIOR(3)); --prints the index of previous element
DBMS_OUTPUT.PUT_LINE (names(names.NEXT(3))); to print the value of next element
```

### EXTEND Procedure with 1 argument

```sql
DECLARE
    TYPE team_four IS VARRAY(4) OF VARCHAR2(15);
    team team_four := team_four();
BEGIN
    --if we do not want to initialize like
    team := team_four('John','Mary','Al','Ju');
    EXTEND will help to initialize those memory with NULL values
    team.EXTEND(4); --will occupy 4 elements
    team(3) := 'Pierre';
    team(4) := 'Yvonne';
    FOR i IN 1..team.LIMIT LOOP
        DBMS_OUTPUT.PUT_LINE(i || team(i));
    END LOOP;
END;
```

### EXTEND Procedure without argument

```sql
DECLARE
    TYPE team_four IS VARRAY(4) OF VARCHAR2(15);
    team team_four := team_four();--have to initialize without any values though. Cannot keep it as -team team_four;
BEGIN
    FOR i IN 1..team.LIMIT LOOP
        team.EXTEND;--Only one element will be occupied with NULL. If we try to assign next element, we will get error; because the memory for the next element is not initialized.
        team(i) := 'Pierre' || i;
        DBMS_OUTPUT.PUT_LINE(i || team(i));
    END LOOP;
END;
```
