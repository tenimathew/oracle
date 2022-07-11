"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return E}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),E=l,m=p["".concat(s,".").concat(E)]||p[E]||d[E]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function E(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return E},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={id:"Section 10. Modifying data",sidebar_position:10,description:"INSERT, UPDATE, DELETE, MERGE"},s=void 0,c={unversionedId:"oracle-basics/Section 10. Modifying data",id:"oracle-basics/Section 10. Modifying data",title:"Section 10. Modifying data",description:"INSERT, UPDATE, DELETE, MERGE",source:"@site/docs/oracle-basics/10_modifying-data.md",sourceDirName:"oracle-basics",slug:"/oracle-basics/Section 10. Modifying data",permalink:"/oracle/oracle-basics/Section 10. Modifying data",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"Section 10. Modifying data",sidebar_position:10,description:"INSERT, UPDATE, DELETE, MERGE"},sidebar:"tutorialSidebar",previous:{title:"Section 9. More on Groupings",permalink:"/oracle/oracle-basics/Section 9. More on Groupings"},next:{title:"Section 11. Data definition",permalink:"/oracle/oracle-basics/Section 11. Data definition"}},u={},d=[{value:"INSERT",id:"insert",level:2},{value:"INSERT INTO",id:"insert-into",level:2},{value:"Copy table structure only",id:"copy-table-structure-only",level:3},{value:"UPDATE",id:"update",level:2},{value:"DELETE",id:"delete",level:2},{value:"DELETE \u2013 delete cascade",id:"delete--delete-cascade",level:3},{value:"MERGE",id:"merge",level:2},{value:"INSERT ALL",id:"insert-all",level:2},{value:"Unconditional INSERT ALL statement",id:"unconditional-insert-all-statement",level:3},{value:"Insert multiple rows into a table",id:"insert-multiple-rows-into-a-table",level:4},{value:"Insert multiple rows into multiple tables",id:"insert-multiple-rows-into-multiple-tables",level:4},{value:"Conditional INSERT ALL Statement",id:"conditional-insert-all-statement",level:3},{value:"INSERT ALL restrictions",id:"insert-all-restrictions",level:3},{value:"INSERT FIRST",id:"insert-first",level:2}],p={toc:d};function E(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"insert"},"INSERT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name (column_list)\nVALUES( value_list);\n")),(0,i.kt)("p",null,"If the value list has the same order as the table columns, you can skip the column list although this is not considered as a good practice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name\nVALUES (value_list);\n")),(0,i.kt)("h2",{id:"insert-into"},"INSERT INTO"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO target_table (col1, col2, col3)\nSELECT col1, col2, col3\nFROM source_table\nWHERE condition;\n")),(0,i.kt)("h3",{id:"copy-table-structure-only"},"Copy table structure only"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sales_2017\nAS SELECT *\nFROM sales\nWHERE 1 = 0;\n")),(0,i.kt)("h2",{id:"update"},"UPDATE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE table_name\nSET\n    column1 = value1,\n    column2 = value2,\n    column3 = value3,\n    ...\nWHERE condition;\n")),(0,i.kt)("h2",{id:"delete"},"DELETE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM table_name\nWHERE condition;\n")),(0,i.kt)("p",null,"Note that it is faster and more efficient to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE")," statement to delete all rows from a large table."),(0,i.kt)("h3",{id:"delete--delete-cascade"},"DELETE \u2013 delete cascade"),(0,i.kt)("p",null,"In practice, you often delete a row from a table which has a foreign key relationship with rows from other tables."),(0,i.kt)("p",null,"For example, you want to delete the sales order with id 1 from the orders table and also delete all the line items associated with the order id 1 from the order_items table. Typically, you can think of issuing two ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," statements as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM orders\nWHERE order_id = 1;\n\nDELETE\nFROM order_items\nWHERE order_id = 1;\n\nCOMMIT WORK;\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMIT WORK")," statement ensures both ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," statements execute in all or nothing manner, which prevents the orphaned rows in the order_items table in case the second ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," statement fails."),(0,i.kt)("p",null,"However, this is unnecessary if you know how to setup table\u2019s constraint correctly."),(0,i.kt)("p",null,"In this case, when you create the order_items table, you define a foreign key constraint with the ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE CASCADE")," option as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE order_items\n(\n    order_id   NUMBER( 12, 0 )                                ,\n    -- other columns\n    -- ...\n    CONSTRAINT fk_order_items_orders\n    FOREIGN KEY( order_id )\n    REFERENCES orders( order_id )\n    ON DELETE CASCADE\n);\n")),(0,i.kt)("p",null,"By doing this, whenever you delete a row from the orders table, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE\nFROM orders\nWHERE order_id = 1;\n")),(0,i.kt)("p",null,"All the rows whose order id is 1 in the order_items table are also deleted automatically by the database system."),(0,i.kt)("h2",{id:"merge"},"MERGE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"MERGE INTO target_table\nUSING source_table\nON search_condition\n    WHEN MATCHED THEN\n        UPDATE SET col1 = value1, col2 = value2,...\n        WHERE <update_condition>\n        [DELETE WHERE <delete_condition>]\n    WHEN NOT MATCHED THEN\n        INSERT (col1,col2,...)\n        values(value1,value2,...)\n        WHERE <insert_condition>;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," statement becomes convenient when you want to combine multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," statements in a single operation."),(0,i.kt)("p",null,"Because the ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," is a deterministic statement, you cannot update the same row of the target table multiple times in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," statement."),(0,i.kt)("p",null,"You can add an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE WHERE")," clause to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCHED")," clause to clean up after a merge operation. The ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," clause deletes only the rows in the target table that match both ",(0,i.kt)("inlineCode",{parentName:"p"},"ON")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE WHERE")," clauses."),(0,i.kt)("h2",{id:"insert-all"},"INSERT ALL"),(0,i.kt)("h3",{id:"unconditional-insert-all-statement"},"Unconditional INSERT ALL statement"),(0,i.kt)("h4",{id:"insert-multiple-rows-into-a-table"},"Insert multiple rows into a table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT ALL\n    INTO table_name(col1,col2,col3) VALUES(val1,val2, val3)\n    INTO table_name(col1,col2,col3) VALUES(val4,val5, val6)\n    INTO table_name(col1,col2,col3) VALUES(val7,val8, val9)\nSubquery;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE fruits (\n    fruit_name VARCHAR2(100) PRIMARY KEY,\n    color VARCHAR2(100) NOT NULL\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT ALL\n    INTO fruits(fruit_name, color)\n    VALUES ('Apple','Red')\n\n    INTO fruits(fruit_name, color)\n    VALUES ('Orange','Orange')\n\n    INTO fruits(fruit_name, color)\n    VALUES ('Banana','Yellow')\nSELECT 1 FROM dual;\n")),(0,i.kt)("h4",{id:"insert-multiple-rows-into-multiple-tables"},"Insert multiple rows into multiple tables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT ALL\n    INTO table_name1(col1,col2,col3) VALUES(val1,val2, val3)\n    INTO table_name2(col1,col2,col3) VALUES(val4,val5, val6)\n    INTO table_name3(col1,col2,col3) VALUES(val7,val8, val9)\nSubquery;\n")),(0,i.kt)("h3",{id:"conditional-insert-all-statement"},"Conditional INSERT ALL Statement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT [ ALL | FIRST ]\n    WHEN condition1 THEN\n        INTO table_1 (column_list ) VALUES (value_list)\n    WHEN condition2 THEN\n        INTO table_2(column_list ) VALUES (value_list)\n    ELSE\n        INTO table_3(column_list ) VALUES (value_list)\nSubquery\n")),(0,i.kt)("p",null,"If you specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALL")," keyword, then Oracle evaluates each condition in the ",(0,i.kt)("inlineCode",{parentName:"p"},"WHEN")," clauses. If a condition evaluates to true, Oracle executes the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"INTO")," clause."),(0,i.kt)("p",null,"However, when you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," keyword, for each row returned by the subquery, Oracle evaluates each condition in the ",(0,i.kt)("inlineCode",{parentName:"p"},"WHEN")," clause from top to bottom. If Oracle find a condition that evaluates to true, it executes the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"INTO")," clause and skips subsequent ",(0,i.kt)("inlineCode",{parentName:"p"},"WHEN")," clauses for the given row."),(0,i.kt)("p",null,"Note that a single conditional multitable insert statement can have up to 127 ",(0,i.kt)("inlineCode",{parentName:"p"},"WHEN")," clauses."),(0,i.kt)("h3",{id:"insert-all-restrictions"},"INSERT ALL restrictions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It can be used to insert data into tables only, not views or materialized view."),(0,i.kt)("li",{parentName:"ul"},"It cannot be used to insert data into remote tables."),(0,i.kt)("li",{parentName:"ul"},"The number of columns in all the ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT INTO")," clauses must not exceed 999."),(0,i.kt)("li",{parentName:"ul"},"A table collection expression cannot be used in a multitable insert statement."),(0,i.kt)("li",{parentName:"ul"},"The subquery of the multitable insert statement cannot use a sequence.")),(0,i.kt)("h2",{id:"insert-first"},"INSERT FIRST"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT FIRST")," makes the multi-table insert work like a ",(0,i.kt)("inlineCode",{parentName:"li"},"CASE")," expression, so the conditions are tested until the first match is found, and no further conditions are tested. We can also include an optional ELSE clause to catch any rows not already cause by a previous condition.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT FIRST\n    WHEN id <= 3 THEN\n    INTO dest_tab1 VALUES(id, description)\n    WHEN id <= 5 THEN\n    INTO dest_tab2 VALUES(id, description)\n    ELSE\n    INTO dest_tab3 VALUES(id, description)\nSELECT id, description\nFROM source_tab;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT FIRST\n    WHEN id <= 3 THEN\n    INTO dest_tab1 VALUES(id, description)\n    ELSE\n    INTO dest_tab2 VALUES(id, description)\n    INTO dest_tab3 VALUES(id, description)\nSELECT id, description\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multi-table inserts can only be performed on tables, not on views or materialized views."),(0,i.kt)("li",{parentName:"ul"},"You cannot perform a multi-table insert via a DB link."),(0,i.kt)("li",{parentName:"ul"},"You cannot perform multi-table inserts into nested tables."),(0,i.kt)("li",{parentName:"ul"},"The sum of all the INTO columns cannot exceed 999."),(0,i.kt)("li",{parentName:"ul"},"Sequences cannot be used in the multi-table insert statement. It is considered a single statement, so only one sequence value will be generated and used for all rows."),(0,i.kt)("li",{parentName:"ul"},"Multi-table inserts can't be used with plan stability.")))}E.isMDXComponent=!0}}]);