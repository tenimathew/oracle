"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[4639],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(f,r(r({ref:a},u),{},{components:t})):n.createElement(f,r({ref:a},u))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},498:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=t(7462),l=t(3366),i=(t(7294),t(3905)),r=["components"],s={id:"Section 1. Basics",sidebar_position:1,description:"Basics"},o=void 0,c={unversionedId:"oracle-admin/Section 1. Basics",id:"oracle-admin/Section 1. Basics",title:"Section 1. Basics",description:"Basics",source:"@site/docs/oracle-admin/basics.md",sourceDirName:"oracle-admin",slug:"/oracle-admin/Section 1. Basics",permalink:"/oracle/oracle-admin/Section 1. Basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Section 1. Basics",sidebar_position:1,description:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Oracle - Administration",permalink:"/oracle/category/oracle---administration"}},u={},d=[{value:"Logical Storage Structures",id:"logical-storage-structures",level:2},{value:"Data blocks",id:"data-blocks",level:3},{value:"Extents",id:"extents",level:3},{value:"Segments",id:"segments",level:3},{value:"Tablespaces",id:"tablespaces",level:3},{value:"Types of Tablespaces",id:"types-of-tablespaces",level:2},{value:"Permanent Tablespace",id:"permanent-tablespace",level:3},{value:"Temporary Tablespace",id:"temporary-tablespace",level:3},{value:"Undo Tablespace",id:"undo-tablespace",level:3},{value:"Small-file Tablespace",id:"small-file-tablespace",level:3},{value:"Big-file Tablespace",id:"big-file-tablespace",level:3},{value:"Physical Storage Structures",id:"physical-storage-structures",level:2},{value:"Data files",id:"data-files",level:3},{value:"Control files",id:"control-files",level:3},{value:"Online redo log files",id:"online-redo-log-files",level:3},{value:"Archived redo log files",id:"archived-redo-log-files",level:3},{value:"Parameter files",id:"parameter-files",level:3},{value:"Password file",id:"password-file",level:3},{value:"Networking files",id:"networking-files",level:3},{value:"Trace file (.trc)",id:"trace-file-trc",level:3},{value:"Alert log",id:"alert-log",level:3},{value:"System Change Number (SCN)",id:"system-change-number-scn",level:3},{value:"Background Processes",id:"background-processes",level:2},{value:"Oracle Versions Milestones",id:"oracle-versions-milestones",level:2},{value:"Version 6",id:"version-6",level:3},{value:"Version 7",id:"version-7",level:3},{value:"Version 8",id:"version-8",level:3},{value:"Version 8i",id:"version-8i",level:3},{value:"Version 9i",id:"version-9i",level:3},{value:"Version10g",id:"version10g",level:3},{value:"Version 12c",id:"version-12c",level:3},{value:"Modes of Database Shutdown",id:"modes-of-database-shutdown",level:2}],p={toc:d};function m(e){var a=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"logical-storage-structures"},"Logical Storage Structures"),(0,i.kt)("h3",{id:"data-blocks"},"Data blocks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data blocks are the smallest units of storage that oracle can use or allocate. One logical data block corresponds to a specific number of bytes of physical disk space."),(0,i.kt)("li",{parentName:"ul"},"Each operating system has what is called a block size. Oracle requests data in multiples of Oracle blocks, not operating system blocks. Therefore, you should set the Oracle block size to a multiple of the operating system block size to avoid unnecessary I/O. Usually 8 kb")),(0,i.kt)("h3",{id:"extents"},"Extents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extents are the logical unit of database which is made of contiguous multiple numbers of the oracle data blocks."),(0,i.kt)("li",{parentName:"ul"},"Default is 1 MB")),(0,i.kt)("h3",{id:"segments"},"Segments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A segment is a set of extents which has been allocated for a specific data structure and all of which are stored in the same tablespace."),(0,i.kt)("li",{parentName:"ul"},"For example, each table's data is stored in its own data segment, while each index's data is stored in its own index segment. If the table or index is partitioned, each partition is stored in its own segment."),(0,i.kt)("li",{parentName:"ul"},"Whenever the existing space in a segment is completely used or full, oracle allocates a new extent for the segment."),(0,i.kt)("li",{parentName:"ul"},"So the extents of a segment may or may not be contiguous on disk."),(0,i.kt)("li",{parentName:"ul"},"The segments also can span datafiles, but the individual extents cannot.")),(0,i.kt)("h3",{id:"tablespaces"},"Tablespaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tablespaces are the bridge between physical and logical components of the Oracle database."),(0,i.kt)("li",{parentName:"ul"},"A tablespace is made up of one or more database datafiles."),(0,i.kt)("li",{parentName:"ul"},"The datafiles are created automatically when the tablespace is defined."),(0,i.kt)("li",{parentName:"ul"},"When you create a tablespace, you define the initial size of the associated datafile.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES\nWHERE PROPERTY_NAME = 'DEFAULT_PERMANENT_TABLESPACE';\n----\nSELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES\nWHERE PROPERTY_NAME = 'DEFAULT_TEMP_TABLESPACE';\n----\nALTER DATABASE DEFAULT TABLESPACE tbs_perm_01;\nALTER DATABASE DEFAULT TEMPORARY TABLESPACE tbs_temp_01;\n----\nCREATE TABLE tbl_tblspace (value1 NUMBER(2))\nTABLESPACE SYSTEM;\n")),(0,i.kt)("h2",{id:"types-of-tablespaces"},"Types of Tablespaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SYSTEM")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SYSAUX")," tablespaces are always created when the database is created."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"SYSTEM")," tablespace always contains the data dictionary tables for the entire database."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"SYSAUX")," tablespace is an auxiliary tablespace to the ",(0,i.kt)("inlineCode",{parentName:"li"},"SYSTEM")," tablespace.")),(0,i.kt)("h3",{id:"permanent-tablespace"},"Permanent Tablespace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contains persistent schema object. Data persist beyond the duration of a session or transaction."),(0,i.kt)("li",{parentName:"ul"},"Objects in permanent tablespaces are stored in data files.")),(0,i.kt)("h3",{id:"temporary-tablespace"},"Temporary Tablespace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Temporary tablespaces are used for special operations, particularly for sorting data results on disk and for hash joins in SQL."),(0,i.kt)("li",{parentName:"ul"},"For SQL with millions of rows returned, the sort operation is too large for the RAM area and must occur on disk."),(0,i.kt)("li",{parentName:"ul"},"The temporary tablespace is where this takes place.")),(0,i.kt)("h3",{id:"undo-tablespace"},"Undo Tablespace"),(0,i.kt)("p",null,"Oracle Database keeps records of actions of transactions, before they are committed. These information are used to rollback or undo the changes to the database. These records are called rollback or undo records."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the instance starts up, the database automatically selects for use the first available undo tablespace. If there is no undo tablespace available, the instance starts, but uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"SYSTEM")," rollback segment for undo. This is not recommended, and an alert message is written to the alert log file to warn that the system is running without an undo tablespace."),(0,i.kt)("li",{parentName:"ul"},"Committed undo information normally is lost when its undo space is overwritten by a newer transaction."),(0,i.kt)("li",{parentName:"ul"},"Space occupied by unexpired undo data in undo segments can be consumed if necessary by ongoing transactions. This is the default."),(0,i.kt)("li",{parentName:"ul"},"You can create more than one undo tablespace but only one of them can be active at any given time.")),(0,i.kt)("h3",{id:"small-file-tablespace"},"Small-file Tablespace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default type of tablespace in Oracle database. Can have multiple data files. Maximum of 1022 data filesare allowed.")),(0,i.kt)("h3",{id:"big-file-tablespace"},"Big-file Tablespace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Suited for storing large amount of data. Allows maximum 1 data file")),(0,i.kt)("h2",{id:"physical-storage-structures"},"Physical Storage Structures"),(0,i.kt)("h3",{id:"data-files"},"Data files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every Oracle database has one or more physical data files, which contain all the database data. The data of logical database structures, such as tables and indexes, is physically stored in the data files.")),(0,i.kt)("h3",{id:"control-files"},"Control files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Control file is a binary file which contains metadata specifying the physical structure of the database, including the database name and the names and locations of the database files.")),(0,i.kt)("h3",{id:"online-redo-log-files"},"Online redo log files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a set of two(minimum) or more log files. Oracle will write every change made in the database into the first log file, and when the first log file is full, Oracle will switch to the second log file and write. We can have multiple group of redo log files to keep mirrored copies.")),(0,i.kt)("h3",{id:"archived-redo-log-files"},"Archived redo log files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An Oracle database can run in one of two modes. By default, the database is created in NOARCHIVELOG mode. In this mode, it will overwrite the redo log file once they are filled. In ARCHIVELOG mode, database archive all redo log files once they are filled instead of overwriting them.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> ARCHIVE LOG LIST; --To check whether Archive Log Mode is enabled or not\nSQL> SELECT log_mode FROM v$database\nSQL> SHUTDOWN IMMEDIATE; --To enable Archive Log Mode\nSQL> STARTUP MOUNT;\nSQL> ALTER DATABASE ARCHIVELOG;\nSQL> ALTER DATABASE OPEN;\n")),(0,i.kt)("h3",{id:"parameter-files"},"Parameter files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To start a database instance, Oracle Database must read either a server parameter file (SPFILE - %ORACLE_HOME%\\dbs\\spfile%ORACLE_SID%.ora), which is recommended,"),(0,i.kt)("li",{parentName:"ul"},"or a text initialization parameter file (PFILE - %ORACLE_HOME%\\database\\init%ORACLE_SID%.ora)."),(0,i.kt)("li",{parentName:"ul"},"These files contain a list of configuration parameters like SGA size, name of database, name and location of database control files for that instance and database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPFILE")," is binary file and only Oracle database can read or write into that file."),(0,i.kt)("li",{parentName:"ul"},"You can modify the parameter's values with the ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER SYSTEM SET")," command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAXDATAFILES")," specifies the maximum number of datafiles that can be open in the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAXINSTANCES")," specifies that only one instance can have this database mounted and open.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> STARTUP PFILE = 'C:\\ora\\pfile\\init.ora'\nSQL> CREATE SPFILE FROM PFILE = 'C:\\ora\\pfile\\init.ora'\nSQL> CREATE PFILE = 'C:\\ora\\pfile\\init.ora' FROM SPFILE\nSQL> CREATE SPFILE FROM MEMORY\n")),(0,i.kt)("h3",{id:"password-file"},"Password file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stores passwords for users with administrative privileges."),(0,i.kt)("li",{parentName:"ul"},"Location: %ORACLE_HOME%\\database\\PWD%ORACLE_SID%.ora")),(0,i.kt)("h3",{id:"networking-files"},"Networking files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These files are used to configure the different network components of the Oracle database."),(0,i.kt)("li",{parentName:"ul"},"These include files such as tnsnames.ora and listener.ora."),(0,i.kt)("li",{parentName:"ul"},'The "listerner.ora" file contains server side network configuration parameters.'),(0,i.kt)("li",{parentName:"ul"},'The "tnsnames.ora" file contains client side network configuration parameters.'),(0,i.kt)("li",{parentName:"ul"},"Location: %ORACLE_HOME%\\network\\ADMIN"),(0,i.kt)("li",{parentName:"ul"},"IO Error : The Network Adapter could not establish connection")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CMD> lsnrctl status --to check the status of listener\nCMD> lsnrctl start --to start listener\n")),(0,i.kt)("h3",{id:"trace-file-trc"},"Trace file (.trc)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trace File are trace (or dump) file that Oracle Database creates to help you diagnose and resolve operating problems."),(0,i.kt)("li",{parentName:"ul"},"Each server and background process writes to a trace file."),(0,i.kt)("li",{parentName:"ul"},"When a process detects an internal error, it writes information about the error to its trace file.")),(0,i.kt)("h3",{id:"alert-log"},"Alert log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The alert log file is a chronological log of messages and errors written out by an Oracle Database."),(0,i.kt)("li",{parentName:"ul"},"Typical messages found in this file is: database startup, shutdown, log switches, space errors, etc."),(0,i.kt)("li",{parentName:"ul"},"This file should constantly be monitored to detect unexpected messages and corruptions."),(0,i.kt)("li",{parentName:"ul"},"Location:%ORACLE_BASE%\\diag\\rdbms\\%ORACLE_SID%\\%ORACLE_SID%\\trace")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> SHOW PARAMETER background\n")),(0,i.kt)("h3",{id:"system-change-number-scn"},"System Change Number (SCN)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SCN (System Change Number) is a primary mechanism to maintain data consistency in Oracle database."),(0,i.kt)("li",{parentName:"ul"},"Every time a user commits a transaction, Oracle records a new SCN."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"SCN_TO_TIMESTAMP")," function can be used to map between the SCN to a point in time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ORA_ROWSCN")," pseudo column is useful for determining approximately when a row was last updated.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> SELECT CURRENT_SCN FROM V$database;\nSQL> SELECT SCN_TO_TIMESTAMP(ORA_ROWSCN) FROM employees;\nSQL> SELECT ORA_ROWSCN, last_name FROM employees WHERE employee_id = 188;\n")),(0,i.kt)("h2",{id:"background-processes"},"Background Processes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SMON"),": System Monitor recovers after instance failure and monitors temporary segments and extents.\n",(0,i.kt)("strong",{parentName:"p"},"PMON"),": Process Monitor recovers failed process resources.\n",(0,i.kt)("strong",{parentName:"p"},"DBWR"),":Database Writer or Dirty Buffer Writer process is responsible for writing dirty buffers from the database buffer cache to the database data files. Generally, DBWR only writes blocks back to the data files on commit, or when the cache is full and space has to be made for more blocks.\n",(0,i.kt)("strong",{parentName:"p"},"LGWR"),": Log Writer process is responsible for writing the log buffers out to the redo logs.\n",(0,i.kt)("strong",{parentName:"p"},"ARCn"),": The optional Archive process writes filled redo logs to the archive log location(s)."),(0,i.kt)("h2",{id:"oracle-versions-milestones"},"Oracle Versions Milestones"),(0,i.kt)("h3",{id:"version-6"},"Version 6"),(0,i.kt)("p",null,"PL/SQL language introduced"),(0,i.kt)("h3",{id:"version-7"},"Version 7"),(0,i.kt)("p",null,"PL/SQL stored program units introduced"),(0,i.kt)("h3",{id:"version-8"},"Version 8"),(0,i.kt)("p",null,"Support for table partitioning"),(0,i.kt)("h3",{id:"version-8i"},"Version 8i"),(0,i.kt)("p",null,"'i' stands for internet computing. Provided native support for internet protocols and server-side support for Java enabling the database to be deployed in a multitier environment."),(0,i.kt)("h3",{id:"version-9i"},"Version 9i"),(0,i.kt)("p",null,"Introduced Oracle RAC enabling multiple instances to access a single database simultaneously.\nThe benefits of Real Application Clusters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to spread CPU load across multiple servers"),(0,i.kt)("li",{parentName:"ul"},"Continuous Availability / High Availability (HA)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Protection from single instance failures"),(0,i.kt)("li",{parentName:"ul"},"Protection from single server failures"))),(0,i.kt)("li",{parentName:"ul"},"Scalability")),(0,i.kt)("h3",{id:"version10g"},"Version10g"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"g' stands for grid computing (A computing architecture that coordinates large numbers of servers and storage to act as a single large computer)."),(0,i.kt)("li",{parentName:"ul"},"This release enabled organizations to virtualize computing resources by building a grid infrastructure based on low-cost commodity servers. A key goal was to make the database self-managing and self-tuning."),(0,i.kt)("li",{parentName:"ul"},"Oracle Automatic Storage Management (Oracle ASM) helped achieve this goal by virtualizing and simplifying database storage management.")),(0,i.kt)("h3",{id:"version-12c"},"Version 12c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"'c' stands for cloud computing."),(0,i.kt)("li",{parentName:"ul"},"Introduced Multitenant architecture. The multitenant architecture enables an Oracle database to function as a multitenant container database (CDB). A CDB includes zero, one, or many pluggable databases (PDBs)."),(0,i.kt)("li",{parentName:"ul"},"A PDB is a portable collection of schemas, schema objects, and non-schema objects. You can unplug a PDB from a CDB and plug it into a different CDB."),(0,i.kt)("li",{parentName:"ul"},"All Oracle databases before Oracle Database 12c were non-CDBs.")),(0,i.kt)("h2",{id:"modes-of-database-shutdown"},"Modes of Database Shutdown"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHUTDOWN IMMEDIATE"),": Terminates any executing SQL, uncommitted changes are rolled back and disconnects the users; performs a check point then close the online datafiles"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHUTDOWN TRANSACTIONAL"),":Prevents users from starting new transactions but wait till all current transactions to complete before shutting down; performs a check point then close the online datafiles"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHUTDOWN NORMAL"),": Waits for all connected users to disconnect before shutting down; performs a check point then close the online datafiles"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHUTDOWN ABORT"),": Closes the datafiles without checkpoint, Instance recovery is required in the next startup.")))}m.isMDXComponent=!0}}]);