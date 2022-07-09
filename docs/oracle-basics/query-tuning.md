---
id: Section 19. Query Tuning
sidebar_position: 19
description: Query Tuning
---

## Explain Plan

```sql
EXPLAIN PLAN FOR
SELECT * FROM members
WHERE last_name = 'Harse';
```

```sql
SELECT PLAN_TABLE_OUTPUT
FROM TABLE(DBMS_XPLAN.DISPLAY());
```
