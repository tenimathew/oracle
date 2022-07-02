"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[792],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,E=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(E,o(o({ref:t},m),{},{components:n})):a.createElement(E,o({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={id:"Section 10. Data definition",sidebar_position:10,description:"CREATE, ALTER, DROP, TRUNCATE, RENAME, PURGE, COMMENT"},s=void 0,u={unversionedId:"oracle-basics/Section 10. Data definition",id:"oracle-basics/Section 10. Data definition",title:"Section 10. Data definition",description:"CREATE, ALTER, DROP, TRUNCATE, RENAME, PURGE, COMMENT",source:"@site/docs/oracle-basics/data-definition.md",sourceDirName:"oracle-basics",slug:"/oracle-basics/Section 10. Data definition",permalink:"/oracle/oracle-basics/Section 10. Data definition",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"Section 10. Data definition",sidebar_position:10,description:"CREATE, ALTER, DROP, TRUNCATE, RENAME, PURGE, COMMENT"},sidebar:"tutorialSidebar",previous:{title:"Section 9. Modifying data",permalink:"/oracle/oracle-basics/Section 9. Modifying data"},next:{title:"Section 12. Constraints",permalink:"/oracle/oracle-basics/Section 12. Constraints"}},m={},c=[{value:"CREATE",id:"create",level:2},{value:"ALTER",id:"alter",level:2},{value:"ALTER TABLE ADD column examples",id:"alter-table-add-column-examples",level:3},{value:"ALTER TABLE MODIFY column examples",id:"alter-table-modify-column-examples",level:3},{value:"Modify the column\u2019s visibility",id:"modify-the-columns-visibility",level:3},{value:"Modify virtual column",id:"modify-virtual-column",level:3},{value:"Modify the default value of a column",id:"modify-the-default-value-of-a-column",level:3},{value:"ALTER TABLE DROP COLUMN example",id:"alter-table-drop-column-example",level:3},{value:"ALTER TABLE RENAME column example",id:"alter-table-rename-column-example",level:3},{value:"ALTER TABLE RENAME table example",id:"alter-table-rename-table-example",level:3},{value:"RENAME",id:"rename",level:2},{value:"DROP",id:"drop",level:2},{value:"Drop Column using SET UNUSED COLUMN clause",id:"drop-column-using-set-unused-column-clause",level:3},{value:"Drop Column using DROP COLUMN clause",id:"drop-column-using-drop-column-clause",level:3},{value:"DROP TABLE statement",id:"drop-table-statement",level:3},{value:"DROP TABLE CASCADE CONSTRAINTS example",id:"drop-table-cascade-constraints-example",level:4},{value:"DROP TABLE PURGE example",id:"drop-table-purge-example",level:4},{value:"Drop multiple tables at once",id:"drop-multiple-tables-at-once",level:4},{value:"TRUNCATE",id:"truncate",level:2},{value:"TRUNCATE TABLE CASCADE example",id:"truncate-table-cascade-example",level:3},{value:"VIRTUAL COLUMN",id:"virtual-column",level:2},{value:"Creating a table with a virtual column example",id:"creating-a-table-with-a-virtual-column-example",level:3},{value:"Adding a virtual column to an existing table example",id:"adding-a-virtual-column-to-an-existing-table-example",level:3},{value:"Advantages and disadvantages of virtual columns",id:"advantages-and-disadvantages-of-virtual-columns",level:3},{value:"Virtual column limitations",id:"virtual-column-limitations",level:3},{value:"Show virtual columns of a table",id:"show-virtual-columns-of-a-table",level:3},{value:"PURGE",id:"purge",level:2},{value:"COMMENT",id:"comment",level:2},{value:"Identity column",id:"identity-column",level:2},{value:"GENERATED ALWAYS example",id:"generated-always-example",level:3},{value:"GENERATED BY DEFAULT example",id:"generated-by-default-example",level:3},{value:"GENERATED BY DEFAULT ON NULL example",id:"generated-by-default-on-null-example",level:3},{value:"START WITH option example",id:"start-with-option-example",level:3},{value:"INCREMENT BY option example",id:"increment-by-option-example",level:3},{value:"Oracle identity column restrictions",id:"oracle-identity-column-restrictions",level:3}],p={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create"},"CREATE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE ot.persons(\n    person_id NUMBER GENERATED BY DEFAULT AS IDENTITY,\n    first_name VARCHAR2(50) NOT NULL,\n    last_name VARCHAR2(50) NOT NULL,\n    PRIMARY KEY(person_id)\n);\n")),(0,i.kt)("h2",{id:"alter"},"ALTER"),(0,i.kt)("p",null,"The ALTER TABLE statement allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add one or more columns"),(0,i.kt)("li",{parentName:"ul"},"Modify column definition"),(0,i.kt)("li",{parentName:"ul"},"Drop one or more columns"),(0,i.kt)("li",{parentName:"ul"},"Rename columns"),(0,i.kt)("li",{parentName:"ul"},"Rename table")),(0,i.kt)("h3",{id:"alter-table-add-column-examples"},"ALTER TABLE ADD column examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons\nADD birthdate DATE NOT NULL;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons\nADD (\n    phone VARCHAR(20),\n    email VARCHAR(100)\n);\n")),(0,i.kt)("p",null,"Suppose, you want to record the time at which a row is created and updated. To do so, you need to add two columns created_at and updated_at as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE\n    members ADD(\n        created_at TIMESTAMP WITH TIME ZONE NOT NULL,\n        updated_at TIMESTAMP WITH TIME ZONE NOT NULL\n    );\n")),(0,i.kt)("p",null,"To check whether a column exists in a table, you query the data from the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_tab_cols")," view"),(0,i.kt)("p",null,"For example, the following PL/SQL block checks whether the members table has effective_date column before adding it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET SERVEROUTPUT ON SIZE 1000000\nDECLARE\n  v_col_exists NUMBER\nBEGIN\n  SELECT count(*) INTO v_col_exists\n    FROM user_tab_cols\n    WHERE column_name = 'EFFECTIVE_DATE'\n      AND table_name = 'MEMBERS';\n\n   IF (v_col_exists = 0) THEN\n      EXECUTE IMMEDIATE 'ALTER TABLE members ADD effective_date DATE';\n   ELSE\n    DBMS_OUTPUT.PUT_LINE('The column effective_date already exists');\n  END IF;\nEND;\n/\n")),(0,i.kt)("h3",{id:"alter-table-modify-column-examples"},"ALTER TABLE MODIFY column examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons MODIFY birthdate DATE NULL;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons MODIFY(\n    phone VARCHAR2(20) NOT NULL,\n    email VARCHAR2(255) NOT NULL\n);\n")),(0,i.kt)("h3",{id:"modify-the-columns-visibility"},"Modify the column\u2019s visibility"),(0,i.kt)("p",null,"In Oracle Database 12c, you can define table columns as invisible or visible. Invisible columns are not available for the query."),(0,i.kt)("p",null,"However, you can query the invisible columns by specify them explicitly in the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT invisible_column_1, invisible_column_2\nFROM table_name;\n")),(0,i.kt)("p",null,"By default, table columns are visible. You can define invisible column when you create the table or using ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE MODIFY")," column statement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE accounts\nMODIFY full_name INVISIBLE;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE accounts\nMODIFY full_name VISIBLE;\n")),(0,i.kt)("h3",{id:"modify-virtual-column"},"Modify virtual column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE accounts\nMODIFY full_name VARCHAR2(52)\nGENERATED ALWAYS AS (last_name || ', ' || first_name);\n")),(0,i.kt)("h3",{id:"modify-the-default-value-of-a-column"},"Modify the default value of a column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE accounts\nADD status NUMBER( 1, 0 ) DEFAULT 1 NOT NULL ;\n")),(0,i.kt)("h3",{id:"alter-table-drop-column-example"},"ALTER TABLE DROP COLUMN example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons\nDROP COLUMN birthdate;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons\nDROP ( email, phone );\n")),(0,i.kt)("h3",{id:"alter-table-rename-column-example"},"ALTER TABLE RENAME column example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons\nRENAME COLUMN first_name TO forename;\n")),(0,i.kt)("h3",{id:"alter-table-rename-table-example"},"ALTER TABLE RENAME table example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE persons RENAME TO people;\n")),(0,i.kt)("h2",{id:"rename"},"RENAME"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME table_name TO new_name;\n")),(0,i.kt)("p",null,"When you rename a table, Oracle automatically transfers indexes, constraints, and grants on the old table to the new one. In addition, it invalidates all objects that depend on the renamed table such as views, stored procedures, function, and synonyms."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE table_name_1 TO new_table_name_1,\n             table_name_2 TO new_table_name_2,\n             table_name_3 TO new_table_name_3;\n")),(0,i.kt)("h2",{id:"drop"},"DROP"),(0,i.kt)("h3",{id:"drop-column-using-set-unused-column-clause"},"Drop Column using SET UNUSED COLUMN clause"),(0,i.kt)("p",null,"The process of dropping a column from a big table can be time and resource consuming. Therefore, we typically drop the column logically by using the A",(0,i.kt)("inlineCode",{parentName:"p"},"LTER TABLE SET UNUSED COLUMN")," statement as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nSET UNUSED COLUMN column_name;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE suppliers\nSET UNUSED COLUMN fax;\n")),(0,i.kt)("p",null,"Once you execute the statement, the column is no longer visible for accessing."),(0,i.kt)("p",null,"During the off-peak hours, you can drop the unused columns physically using the following statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nDROP UNUSED COLUMNS;\n")),(0,i.kt)("p",null,"If you want to reduce the amount of undo logs accumulated, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHECKPOINT")," option that forces a checkpoint after the specified number of rows has been processed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nDROP UNUSED COLUMNS CHECKPOINT 250;\n")),(0,i.kt)("p",null,"You can view the number of unused columns per table from the DBA_UNUSED_COL_TABS view:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM DBA_UNUSED_COL_TABS;\n")),(0,i.kt)("h3",{id:"drop-column-using-drop-column-clause"},"Drop Column using DROP COLUMN clause"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nDROP COLUMN column_name;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nDROP (\n    column_name_1,\n    column_name_2\n);\n")),(0,i.kt)("h3",{id:"drop-table-statement"},"DROP TABLE statement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE schema_name.table_name\n[CASCADE CONSTRAINTS | PURGE];\n")),(0,i.kt)("p",null,"In this statement:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, indicate the table and its schema that you want to drop after the ",(0,i.kt)("inlineCode",{parentName:"li"},"DROP TABLE")," clause. If you don\u2019t specify the schema name explicitly, the statement assumes that you are removing the table from your own schema."),(0,i.kt)("li",{parentName:"ul"},"Second, specify ",(0,i.kt)("inlineCode",{parentName:"li"},"CASCADE CONSTRAINTS")," clause to remove all referential integrity constraints which refer to primary and unique keys in the table. In case such referential integrity constraints exist and you don\u2019t use this clause, Oracle returns an error and stops removing the table."),(0,i.kt)("li",{parentName:"ul"},"Third, specify ",(0,i.kt)("inlineCode",{parentName:"li"},"PURGE")," clause if you want to drop the table and release the space associated with it at once. By using the ",(0,i.kt)("inlineCode",{parentName:"li"},"PURGE")," clause, Oracle will not place the table and its dependent objects into the recycle bin."),(0,i.kt)("li",{parentName:"ul"},"Notice that the ",(0,i.kt)("inlineCode",{parentName:"li"},"PURGE")," clause does not allow you to roll back or recover the table that you dropped. Therefore, it is useful if you don\u2019t want the sensitive data to appear in the recycle bin.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE persons;\n")),(0,i.kt)("h4",{id:"drop-table-cascade-constraints-example"},"DROP TABLE CASCADE CONSTRAINTS example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE brands(\n    brand_id NUMBER PRIMARY KEY,\n    brand_name varchar2(50)\n);\n\nCREATE TABLE cars(\n    car_id NUMBER PRIMARY KEY,\n    make VARCHAR(50) NOT NULL,\n    model VARCHAR(50) NOT NULL,\n    year NUMBER NOT NULL,\n    plate_number VARCHAR(25),\n    brand_id NUMBER NOT NULL,\n\n    CONSTRAINT fk_brand\n    FOREIGN KEY (brand_id)\n    REFERENCES brands(brand_id) ON DELETE CASCADE\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE brands CASCADE CONSTRAINTS;\n")),(0,i.kt)("p",null,"This statement dropped not only the brands table but also the foreign key constraint fk_brand from the cars table."),(0,i.kt)("h4",{id:"drop-table-purge-example"},"DROP TABLE PURGE example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE cars purge;\n")),(0,i.kt)("h4",{id:"drop-multiple-tables-at-once"},"Drop multiple tables at once"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_1(c1 VARCHAR2(50));\nCREATE TABLE test_2(c1 VARCHAR2(50));\nCREATE TABLE test_3(c1 VARCHAR2(50));\n\nBEGIN\n  FOR rec IN\n    (\n      SELECT\n        table_name\n      FROM\n        all_tables\n      WHERE\n        table_name LIKE 'TEST_%'\n    )\n  LOOP\n    EXECUTE immediate 'DROP TABLE  '||rec.table_name || ' CASCADE CONSTRAINTS';\n  END LOOP;\nEND;\n/\n")),(0,i.kt)("h2",{id:"truncate"},"TRUNCATE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE schema_name.table_name\n[CASCADE]\n[[ PRESERVE | PURGE] MATERIALIZED VIEW LOG ]]\n[[ DROP | REUSE]] STORAGE ]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a table has relationships with other tables via the foreign key constraints, you need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CASCADE")," clause.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE CASCADE")," statement deletes all rows from the table_name, and recursively truncates down the associated tables in the chain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE CASCADE")," statement requires the foreign key constraints defined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ON DELETE CASCADE")," clause to work."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE table_name\nCASCADE;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED VIEW LOG")," clause allows you to specify whether a materialized view log defined on the table is to be preserved or purged when the table is truncated. By default, the material view log is preserved.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"STORAGE")," clause allows you to choose either drop or reuse storage freed by the truncated rows and associated indexes if any. By default, the storage is dropped."))),(0,i.kt)("h3",{id:"truncate-table-cascade-example"},"TRUNCATE TABLE CASCADE example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE quotations (\n    quotation_no NUMERIC GENERATED BY DEFAULT AS IDENTITY,\n    customer_id NUMERIC NOT NULL,\n    valid_from DATE NOT NULL,\n    valid_to DATE NOT NULL,\n    PRIMARY KEY(quotation_no)\n);\n\nCREATE TABLE quotation_items (\n    quotation_no NUMERIC,\n    item_no NUMERIC ,\n    product_id NUMERIC NOT NULL,\n    qty NUMERIC NOT NULL,\n    price NUMERIC(9 , 2 ) NOT NULL,\n    PRIMARY KEY (quotation_no , item_no),\n    CONSTRAINT fk_quotation FOREIGN KEY (quotation_no)\n        REFERENCES quotations\n        ON DELETE CASCADE\n);\n\nINSERT INTO quotations(customer_id, valid_from, valid_to)\nVALUES(100, DATE '2017-09-01', DATE '2017-12-01');\n\nINSERT INTO quotation_items(quotation_no, item_no, product_id, qty, price)\nVALUES(1,1,1001,10,90.5);\n\nINSERT INTO quotation_items(quotation_no, item_no, product_id, qty, price)\nVALUES(1,2,1002,20,200.5);\n\nINSERT INTO quotation_items(quotation_no, item_no, product_id, qty, price)\nVALUES(1,3,1003,30, 150.5);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE quotations;\n")),(0,i.kt)("p",null,"The statement failed and Oracle returned the following error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SQL Error: ORA-02266: unique/primary keys in table referenced by enabled foreign keys\n")),(0,i.kt)("p",null,"To fix this, you add the ",(0,i.kt)("inlineCode",{parentName:"p"},"CASCADE")," clause to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE")," statement above"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE quotations CASCADE;\n")),(0,i.kt)("p",null,"This statement deleted data from not only quotations table but also quotation_items table."),(0,i.kt)("p",null,"Notice that if we did not specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"ON DELETE CASCADE")," for the fk_quotation constraint, the ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE CASCADE")," statement above would fail."),(0,i.kt)("h2",{id:"virtual-column"},"VIRTUAL COLUMN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"column_name [data_type] [GENERATED ALWAYS] AS (expression) [VIRTUAL]\n")),(0,i.kt)("p",null,"In this syntax:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, specify the name ( column_name) of the virtual column."),(0,i.kt)("li",{parentName:"ul"},"Second, specify the virtual column\u2019s data type. If you omit the data type, the virtual column will take the data type of the result of the expression."),(0,i.kt)("li",{parentName:"ul"},"Third, specify an expression in parentheses after the AS keyword. The values of the virtual column will derive from the expression.\nNote that the ",(0,i.kt)("inlineCode",{parentName:"li"},"GENERATED ALWAYS")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"VIRTUAL")," keywords are for clarity only.")),(0,i.kt)("h3",{id:"creating-a-table-with-a-virtual-column-example"},"Creating a table with a virtual column example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\n    ...,\n    virtual_column_name AS (expression)\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE parts(\n    part_id INT GENERATED ALWAYS AS IDENTITY,\n    part_name VARCHAR2(50) NOT NULL,\n    capacity INT NOT NULL,\n    cost DEC(15,2) NOT NULL,\n    list_price DEC(15,2) NOT NULL,\n    gross_margin AS ((list_price - cost) / cost),\n    PRIMARY KEY(part_id)\n);\n\nINSERT INTO parts(part_name, capacity, cost, list_price)\nVALUES('G.SKILL TridentZ RGB Series 16GB (2 x 8GB)', 16, 95,105);\n\nINSERT INTO parts(part_name, capacity, cost, list_price)\nVALUES('G.SKILL TridentZ RGB Series 32GB (4x8GB)', 32, 205,220);\n\nINSERT INTO parts(part_name, capacity, cost, list_price)\nVALUES('G.SKILL TridentZ RGB Series 16GB (1 x 8GB)', 8, 50,70);\n")),(0,i.kt)("h3",{id:"adding-a-virtual-column-to-an-existing-table-example"},"Adding a virtual column to an existing table example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name\nADD (\n    virtual_column_name AS (expression)\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE parts\nADD (\n    capacity_description AS (\n            CASE\n                WHEN capacity <= 8 THEN 'Small'\n                WHEN capacity > 8 AND capacity <= 16 THEN 'Medium'\n                WHEN capacity > 16 THEN 'Large'\n            END)\n)\n")),(0,i.kt)("h3",{id:"advantages-and-disadvantages-of-virtual-columns"},"Advantages and disadvantages of virtual columns"),(0,i.kt)("p",null,"Virtual columns provide the following advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Virtual columns consume minimal space. Oracle only stores the metadata, not the data of the virtual columns."),(0,i.kt)("li",{parentName:"ul"},"Virtual columns ensure the values are always in sync with the source columns. For example, if you have a date column as the normal column and have the month, quarter, and year columns as the virtual columns. The values in the month, quarter, and year are always in sync with the date column."),(0,i.kt)("li",{parentName:"ul"},"Virtual columns help avoid using views to display derived values from other columns.")),(0,i.kt)("p",null,"The disadvantage of virtual columns is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Virtual columns may reduce query performance because their values are calculated at run-time.")),(0,i.kt)("h3",{id:"virtual-column-limitations"},"Virtual column limitations"),(0,i.kt)("p",null,"These are limitations of virtual columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Virtual columns are only supported in relational heap tables, but not in index-organized, external, object, cluster, or temporary tables."),(0,i.kt)("li",{parentName:"ul"},"The virtual column cannot be an Oracle-supplied datatype, a user-defined type, or ",(0,i.kt)("inlineCode",{parentName:"li"},"LOB")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"LONG RAW"),"."),(0,i.kt)("li",{parentName:"ul"},"The expression in the virtual column has the following restrictions:")),(0,i.kt)("p",null,"The expression in the virtual column has the following restrictions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It cannot refer to other virtual columns."),(0,i.kt)("li",{parentName:"ul"},"It cannot refer to normal columns of other tables."),(0,i.kt)("li",{parentName:"ul"},"It must return a scalar value."),(0,i.kt)("li",{parentName:"ul"},"It may refer to a deterministic user-defined function, however, if it does, the virtual column cannot be used as a partitioning key column.")),(0,i.kt)("h3",{id:"show-virtual-columns-of-a-table"},"Show virtual columns of a table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    column_name,\n    virtual_column,\n    data_default\nFROM\n    all_tab_cols\nWHERE owner = '<owner_name>'\nAND table_name = '<table_name>';\n")),(0,i.kt)("p",null,"If the value is the virtual_column is ",(0,i.kt)("inlineCode",{parentName:"p"},"YES"),", it means that the corresponding column is a virtual column. Otherwise, it is a normal column."),(0,i.kt)("h2",{id:"purge"},"PURGE"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PURGE")," statement to remove a table or index from your recycle bin and release all of the space associated with the object.\nThe following statement removes the table test from the recycle bin. If more than one version of test resides in the recycle bin, Oracle Database removes the version that has been there the longest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"PURGE TABLE test;\n")),(0,i.kt)("p",null,"To remove the entire contents of your recycle bin, issue the following statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"PURGE RECYCLEBIN;\n")),(0,i.kt)("p",null,"To see the contents of your recycle bin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM RECYCLEBIN; -- Synonym\nSELECT * FROM USER_RECYCLEBIN;\n")),(0,i.kt)("h2",{id:"comment"},"COMMENT"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMENT")," statement to add a comment about a table, view, materialized view, or column into the data dictionary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"COMMENT ON COLUMN employees.job_id\n   IS 'abbreviated job title';\n")),(0,i.kt)("p",null,"To drop this comment from the database, issue the following statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"COMMENT ON COLUMN employees.job_id IS ' ';\n")),(0,i.kt)("h2",{id:"identity-column"},"Identity column"),(0,i.kt)("p",null,"Oracle 12c introduced a new way that allows you to define an identity column for a table, which is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTO_INCREMENT")," column in MySQL or ",(0,i.kt)("inlineCode",{parentName:"p"},"IDENTITY")," column in SQL Server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"GENERATED [ ALWAYS | BY DEFAULT [ ON NULL ] ]\nAS IDENTITY [ ( identity_options ) ]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, the ",(0,i.kt)("inlineCode",{parentName:"p"},"GENERATED")," keyword is mandatory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Second, you can specify an option to generate identity values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GENERATED ALWAYS"),": Oracle always generates a value for the identity column. Attempt to insert a value into the identity column will cause an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GENERATED BY DEFAULT"),": Oracle generates a value for the identity column if you provide no value. If you provide a value, Oracle will insert that value into the identity column. For this option, Oracle will issue an error if you insert a NULL value into the identity column."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GENERATED BY DEFAULT ON NULL"),": Oracle generates a value for the identity column if you provide a NULL value or no value at all."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Third, you can have a number of options for the identity column."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"START WITH")," initial_value controls the initial value to use for the identity column. The default initial value is 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INCREMENT BY")," internval_value defines the interval between generated values. By default, the interval value is 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CACHE")," defines a number of values that Oracle should generate beforehand to improve the performance. You use this option for the column that has a high number of inserts.")))),(0,i.kt)("h3",{id:"generated-always-example"},"GENERATED ALWAYS example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE identity_demo (\n    id NUMBER GENERATED ALWAYS AS IDENTITY,\n    description VARCHAR2(100) NOT NULL\n);\n\nINSERT INTO identity_demo(description)\nVALUES('Oracle identity column demo with GENERATED ALWAYS');\n")),(0,i.kt)("p",null,"The following statement attempts to insert a value into the id identity column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO identity_demo(id,description)\nVALUES(2,\n       'Oracle identity column example with GENERATED ALWAYS ');\n")),(0,i.kt)("p",null,"Oracle issued an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SQL Error: ORA-32795: cannot insert into a generated always identity column\n")),(0,i.kt)("p",null,"Because the id column was defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"GENERATED ALWAYS"),", it could not accept any provided value."),(0,i.kt)("h3",{id:"generated-by-default-example"},"GENERATED BY DEFAULT example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE identity_demo;\n\nCREATE  TABLE identity_demo  (\n    id NUMBER GENERATED BY DEFAULT AS IDENTITY,\n    description VARCHAR2(100) not null\n  );\n\nINSERT INTO identity_demo(description)\nVALUES('Oracle identity column demo with GENERATED BY DEFAULT');\n")),(0,i.kt)("p",null,"The following statement inserts a new row into the identity_demo table with a provided value for the id column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO identity_demo(id,description)\nVALUES(2, 'Oracle identity column example with GENERATED BY DEFAULT');\n")),(0,i.kt)("p",null,"The following example attempts to insert a null value into the id column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO identity_demo(id,description)\nVALUES(NULL,\n       'Oracle identity column demo with GENERATED BY DEFAULT, NULL value');\n")),(0,i.kt)("p",null,"Oracle issued an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SQL Error: ORA-01400: cannot insert NULL into ("OT"."IDENTITY_DEMO"."ID")\n')),(0,i.kt)("h3",{id:"generated-by-default-on-null-example"},"GENERATED BY DEFAULT ON NULL example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE identity_demo;\n\nCREATE  TABLE identity_demo  (\n    id NUMBER GENERATED BY DEFAULT ON NULL AS IDENTITY,\n    description VARCHAR2(100) not null\n  );\n\nINSERT INTO identity_demo(description)\nVALUES('Oracle identity column demo with no value');\n")),(0,i.kt)("h3",{id:"start-with-option-example"},"START WITH option example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE identity_demo;\n\nCREATE  TABLE identity_demo  (\n    id NUMBER GENERATED BY DEFAULT ON NULL AS IDENTITY START WITH 100,\n    description VARCHAR2(100) not null\n  );\n\nINSERT INTO identity_demo(description)\nVALUES('Oracle identity column demo with START WITH option');\n")),(0,i.kt)("h3",{id:"increment-by-option-example"},"INCREMENT BY option example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE identity_demo;\n\nCREATE  TABLE identity_demo (\n    id NUMBER GENERATED BY DEFAULT ON NULL AS IDENTITY START WITH 10 INCREMENT BY 10,\n    description VARCHAR2(100) not null\n);\n\nINSERT INTO identity_demo(description)\nVALUES('Oracle identity column demo 1 with INCREMENT BY option');\n\nINSERT INTO identity_demo(description)\nVALUES('Oracle identity column demo 2 with INCREMENT BY option');\n")),(0,i.kt)("h3",{id:"oracle-identity-column-restrictions"},"Oracle identity column restrictions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each table has one and only one identity column."),(0,i.kt)("li",{parentName:"ul"},"The data type of the identity column must be a numeric data type. the user-defined data type is not allowed to use with the identity clause."),(0,i.kt)("li",{parentName:"ul"},"The identity column is not inherited by the ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")," AS ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT")," statement."),(0,i.kt)("li",{parentName:"ul"},"The identity column cannot have another ",(0,i.kt)("inlineCode",{parentName:"li"},"DEFAULT")," constraint."),(0,i.kt)("li",{parentName:"ul"},"The encryption algorithm for encrypted identity columns can be inferred therefore you should use a strong encryption algorithm."),(0,i.kt)("li",{parentName:"ul"},"The inline constraint of the identity column must not conflict with the ",(0,i.kt)("inlineCode",{parentName:"li"},"NOT NULL")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"NOT DEFERRABLE")," constraint stated by the identity clause.")))}d.isMDXComponent=!0}}]);