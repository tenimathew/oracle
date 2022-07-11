---
id: Section 14. Temporary Tables
sidebar_position: 14
description: Global temporary table, Private temporary table
---

## Global temporary tables

- A temporary table is a table that holds data only for the duration of a session or transaction.
- Global temporary tables in Oracle are permanent database objects that store data on disk and visible to all sessions.
- However, the data stored in the global temporary table is private to the session. In other words, each session can only access its own data in the global temporary table.

```sql
CREATE GLOBAL TEMPORARY TABLE table_name (
    column_definition,
    ...,
    table_constraints
) ON COMMIT [DELETE ROWS | PRESERVE ROWS];
```

- The `ON COMMIT DELETE ROWS` clause specifies that the global temporary table is transaction-specific. It means that Oracle truncates the table (remove all rows) after each commit.
- The `ON COMMIT PRESERVE ROWS` clause specifies that the global temporary table is session-specific, meaning that Oracle truncates the table when you terminate the session, not when you commit a transaction.
- Oracle uses the `ON COMMIT DELETE ROWS` option by default if you omit the `ON COMMIT` clause.
- Oracle allows you to create indexes on global temporary tables.
- It is not possible to perform a DDL operation (except `TRUNCATE`) on an existing global temporary table if one or more sessions are currently bound to that table.
- Oracle only allows one transaction at a time on a transaction-specific temporary table.
- If you have several autonomous transactions in a single transaction scope, you must commit the previous autonomous transaction before the next transaction can use the table.
- Due to the nature of temporary tables, backup and recovery are not available in case of a system failure.

## Private temporary tables

- Oracle 18c introduced the private temporary table, which is a memory-based temporary table that is automatically dropped at the end of a session or transaction.
- Oracle stores private temporary tables in memory and each temporary table is only visible to the session which created it.
- All private temporary tables have a prefix defined by the `PRIVATE_TEMP_TABLE_PREFIX` initialization parameter, which defaults to to `ORA$PTT_`.

```sql
CREATE PRIVATE TEMPORARY TABLE table_name(
    column_definition,
    ...
) ON COMMIT [DROP DEFINITION | PRESERVE DEFINITION];
```

- The `ON COMMIT DROP DEFINITION` option creates a private temporary table that is transaction-specific. At the end of the transaction, Oracle drops both table definition and data.
- The `ON COMMIT PRESERVE DEFINITION` option creates a private temporary table that is session-specific. Oracle removes all data and drops the table at the end of the session.
- By default, Oracle uses `ON COMMIT DROP DEFINITION` if you omit the `ON COMMIT` option.

## Private temporary tables vs. global temporary tables

| Characteristic | Global temporary tables                                                                    | Private temporary tables                                                                             |
| -------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Naming rule    | Same as for permanent tables                                                               | By default, must be prefixed with ORA$PTT\_ .                                                        |
| Visibility     | All sessions                                                                               | Only the session that created the table.                                                             |
| Storages       | Disk                                                                                       | Memory only                                                                                          |
| Table types    | Transaction-specific (ON COMMIT DELETE ROWS) or session-specific (ON COMMIT PRESERVE ROWS) | Transaction-specific (ON COMMIT DROP DEFINITION) or session-specific (ON COMMIT PRESERVE DEFINITION) |

- Permanent database objects cannot directly reference private temporary tables.
- Indexes and materialized views cannot be created on private temporary tables.
- Columns of the private temporary table cannot have default values.
- Private temporary tables cannot be accessed via database links.
