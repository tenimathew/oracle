---
id: Section 18. Jobs
sidebar_position: 18
description: Scheduler, Jobs
---

## `DBMS_SCHEDULER`

- `DBMS_SCHEDULER` package provides a collection of scheduling functions and procedures that can be called from any PL/SQL program.
- Only `SYS` can perform actions on objects in the `SYS` schema.

### Create a schedule

- A schedule defines the start date, end time and repeat interval details

```sql
BEGIN
    DBMS_SCHEDULER.CREATE_SCHEDULE (
        Schedule_name => 'DAILYBILLINGJOB',
        Start_date => SYSTIMESTAMP,
        Repeat_interval =>'FREQ=DAILY;BYHOUR=11; BYMINUTE=30',
        Comments => 'DAILY BILLING JOB'
        );
END;
```

### Create a program

- A program defines the name and type of the procedure, executed .package or script which executed.

```sql
BEGIN
DBMS_SCHEDULER.CREATE_PROGRAM (
    program_name => 'DAILYBILLINGJOB',
    program_type => 'STORED_PROCEDURE',
    program_action => 'DAILYJOB.BILLINGPROC',
    number_of_arguments =>0,
    enabled => TRUE,
    comments => 'DAILY BILLING JOB'
    );
END;
```

### Create job

- A job defines the schedule name and the program name.

```sql
DBMS_SCHEDULER.CREATE_JOB (
    job_name => 'DAILYBILLINGJOB_RUN',
    program_name => 'DAILYBILLINGJOB',
    schedule_name => 'DAILYBILLINGJOB_SCHED',
    enabled => FLASE,
    comments => 'daily billing job'
    );
END;
```

### Instead of creating scheduler,job and program separately, we can create the scheduler job with below commad directly.

- Simple command to create scheduler job:

```sql
BEGIN
DBMS_SCHEDULER.CREATE_JOB (
    job_name => '"HWS"."MV_REF_DBA_DATA"',
    job_type => 'PLSQL_BLOCK',
    job_action => 'dbms_refresh.refresh(''"HWS"."STC_NEXT_DBA_MV_DATA"'');',
    number_of_arguments => 0,
    start_date => NULL,
    repeat_interval => 'FREQ=DAILY;BYHOUR=8;BYMINUTE=00;BYSECOND=00',
    end_date => NULL,
    enabled => FALSE,
    auto_drop => FALSE,
    comments => 'Converted_dba_jobs'
    );

DBMS_SCHEDULER.enable( name => '"HWS"."MV_REF_FTTH_DATA"');
END;
```

### View schedule details of all schedulers:

```sql
set pagesize 200
set lines 299
col START_DATE for a45
col REPEAT_INTERVAL for a45
col schedule_name for a34

select
    schedule_name,
    schedule_type,
    start_date,
    repeat_interval
from dba_scheduler_schedules;
```

### Enable a job

```sql
EXECUTE DBMS_SCHEDULER.ENABLE('SCOTT.MONTHLYBILLING');
```

### Disable a job

```sql
EXECUTE DBMS_SCHEDULER.DISABLE('SCOTT.MONTHLYBILLING');
```

### Stop a running job

```sql
EXECUTE DBMS_SCHEDULER.STOP_JOB('SCOTT.MONTHLYBILLING');
```

### Drop a running job

```sql
EXECUTE DBMS_SCHEDULER.DROP_JOB('SCOTT.MONTHLYBILLING');
```

### Run a job immediately

```sql
EXECUTE DBMS_SCHEDULER.RUN_JOB('SCOTT.MONTHLYBILLING');
```

### Drop a schedule:

```sql
BEGIN
    DBMS_SCHEDULER.DROP_SCHEDULE(
        schedule_name => 'DAILYBILLINGJOB_SCHED',
        force => TRUE
        );
END;
```

### Drop a scheduler job:

```sql
DBMS_SCHEDULER.drop_job (job_name => 'SCOTT.MONTHLYBILLING');
```

### Scheduler shell script in dbms_scheduler:

- This feature in available from oracle 12c onward

- Create a credential store:

```sql
BEGIN
dbms_credential.create_credential (
    CREDENTIAL_NAME => 'ORACLEOSUSER',
    USERNAME => 'oracle',
    PASSWORD => 'oracle@98765',
    DATABASE_ROLE => NULL,
    WINDOWS_DOMAIN => NULL,
    COMMENTS => 'Oracle OS User',
    ENABLED => true
    );
END;
```

- Then create the job:

```sql
exec dbms_scheduler.create_job(
    job_name=>'myscript4',
    job_type=>'external_script',
    job_action=>'/export/home/oracle/ttest.2.sh',
    enabled=>true,
    START_DATE=>sysdate,
    REPEAT_INTERVAL =>'FREQ=MINUTELY; byminute=1',
    auto_drop=>false,
    credential_name=>'ORACLEOSUSER'
);
```

### Monitor scheduler jobs:

- Monitor currently running jobs

```sql
SELECT job_name, session_id, running_instance, elapsed_time, FROM dba_scheduler_running_jobs;
```

— View the job run details

```sql
select * from DBA_SCHEDULER_JOB_RUN_DETAILS;
```

— View the job-related logs:

```sql
select * from DBA_SCHEDULER_JOB_LOG;
```

### Get DDL of a scheduler job:

```sql
select dbms_metadata.get_ddl('PROCOBJ','DUP_ACC','SCOTT') from dual;
```

### Copy scheduler job from one user to another :

```sql
exec dbms_scheduler.copy_job('SCOTT.MY_JOB_2','DBACLASS.MY_JOB_2');
```

### Get log information of scheduler jobs:

```sql
set pagesize 299
set lines 299
col job_name for a24
col log_date for a40
col operation for a19
col additional_info a79

select job_name,
    log_date,
    status,
    OPERATION,
    ADDITIONAL_INFO
from dba_scheduler_job_log
order by log_date desc;
```

### History of all scheduler job runs:

```sql
set pagesize 299
set lines 299
col JOB_NAME for a24
col actual_start_date for a56
col RUN_DURATION for a34

select job_name,
    status,
    actual_start_date,
    run_duration
from DBA_SCHEDULER_JOB_RUN_DETAILS
order by ACTUAL_START_DATE desc;
```

### Managing scheduler credentials:

— Create a credential:

```sql
BEGIN dbms_credential.create_credential ( CREDENTIAL_NAME => 'ORACLEOSUSER', USERNAME => 'oracle', PASSWORD => 'oracle@123', DATABASE_ROLE => NULL, WINDOWS_DOMAIN => NULL, COMMENTS => 'Oracle OS User', ENABLED => true ); END; /
```

— Drop a credential

```sql
exec dbms_scheduler.drop_credential('ORACLEOSUSER');
```

— View credential details

```sql
 select owner,CREDENTIAL_NAME,USERNAME,ENABLED from DBA_CREDENTIALS;
— Change username and password in a credentials :
```

```sql
exec DBMS_SCHEDULER.SET_ATTRIBUTE(name=>'ORACLEOSUSER',attribute=>'password',value=>'oracle');
```

### View and manage auto task jobs in database:

```sql
set lines 180
pages 1000
col client_name for a40
col attributes for a60

select client_name,
    status,
    attributes,
    service_name
from dba_autotask_client
/

BEGIN
DBMS_AUTO_TASK_ADMIN.disable(
    client_name => 'auto space advisor',
    operation => NULL,
    window_name => NULL
);
END;
/

BEGIN
DBMS_AUTO_TASK_ADMIN.disable(
    client_name => 'sql tuning advisor',
    operation => NULL,
    window_name => NULL
);
END;
/

BEGIN
DBMS_AUTO_TASK_ADMIN.disable(
    client_name => 'auto optimizer stats collection',
    operation => NULL,
    window_name => NULL
);
END;
/

```

## `DBMS_JOB`

- No specific system privileges are required to use `DBMS_JOB`.
- No system privileges are available to manage `DBMS_JOB`.
- Jobs cannot be altered or deleted other than jobs owned by the user.

### DBMS_JOB.SUBMIT

To submit a job to the job queue, use the following syntax:

```sql
DBMS_JOB.SUBMIT(
   job       OUT    BINARY_INTEGER,
   what      IN     VARCHAR2,
   next_date IN     DATE DEFAULT SYSDATE,
   interval  IN     VARCHAR2 DEFAULT 'NULL',
   no_parse  IN     BOOLEAN DEFAULT FALSE,
   instance  IN     BINARY_INTEGER DEFAULT ANY_INSTANCE,
   force     IN     BOOLEAN DEFAULT FALSE);
```

```sql
VARIABLE jobno number;
BEGIN
   DBMS_JOB.SUBMIT(:jobno,
      'dbms_ddl.analyze_object(''TABLE'',
      ''DQUON'', ''ACCOUNTS'',
      ''ESTIMATE'', NULL, 50);'
      SYSDATE, 'SYSDATE + 1');
   COMMIT;
END;
/
Statement processed.
print jobno
JOBNO
----------
14144
```

### DBMS_JOB.CHANGE

To alter user-definable parameters associated with a job, use the following syntax:

```sql
 DBMS_JOB.CHANGE(
   JOB                   IN BINARY_INTEGER,
   what                  IN VARCHAR2 DEFAULT NULL,
   next_date             IN DATE DEFAULT NULL,
   interval              IN VARCHAR2 DEFAULT NULL,
   instance              IN BINARY_INTEGER DEFAULT NULL,
   force                 IN BOOLEAN DEFAULT FALSE );
```

```sql
BEGIN
   DBMS_JOB.CHANGE(14144, null, null, 'sysdate+3');
   COMMIT;
END;
```

### DBMS_JOB.RUN

```sql
DBMS_JOB.RUN(
      job    IN BINARY_INTEGER,
      force  IN BOOLEAN DEFAULT FALSE);
```

```sql
EXECUTE DBMS_JOB.RUN(14144);
```

### BROKEN Procedure

This procedure sets the broken flag. Broken jobs are never run.

```sql
DBMS_JOB.BROKEN (
   job       IN  BINARY_INTEGER,
   broken    IN  BOOLEAN,
   next_date IN  DATE DEFAULT SYSDATE);
```

### INTERVAL Procedure

This procedure changes how often a job runs.

```sql
DBMS_JOB.INTERVAL (
   job       IN  BINARY_INTEGER,
   interval  IN  VARCHAR2);
```

### NEXT_DATE Procedure

This procedure changes when an existing job next runs.

```sql
DBMS_JOB.NEXT_DATE (
   job       IN  BINARY_INTEGER,
   next_date IN  DATE);
```

### REMOVE Procedure

This procedure removes an existing job from the job queue. This currently does not stop a running job.

```sql
DBMS_JOB.REMOVE (
   job       IN  BINARY_INTEGER );
```

```sql
BEGIN
   DBMS_JOB.REMOVE(14144);
   COMMIT;
END;
```

### WHAT Procedure

This procedure changes what an existing job does, and replaces its environment.

```sql
DBMS_JOB.WHAT (
   job       IN  BINARY_INTEGER,
   what      IN  VARCHAR2);
```

## Difference of `DBMS_JOB` and `DBMS_SCHEDULER`

- `DBMS_SCHEDULER` performs a commit
- `dbms_scheduler` has logging
- `dbms_scheduler` has job event handling (can raise and react upon events)
- `dbms_scheduler` has resource manager integration

## Benefits that `DBMS_SCHEDULER` has over cron:

- Can make the execution of a job dependent on the completion of another job
- Robust resource balancing and flexible scheduling features
- Can run jobs based on a database event
- `DBMS_SCHEDULER` syntax works the same regardless of the operating system
- Can run status reports using the data dictionary
- If working in clustered environment, no need to worry about synchronizing multiple cron tables for each node in the cluster

## Advantages of using OS cron:

- Easy to use, simple, tried and true
- Almost universally available on all Linux/Unix boxes; for the most part, runs nearly identically regardless of the Linux/Unix platform (yes, there are minor differences)
- Database agnostic; operates independently of the database and works the same regardless of the database vendor or database version
- Works whether the database is available or not
