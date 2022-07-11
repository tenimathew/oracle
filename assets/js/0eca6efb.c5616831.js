"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[660],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6342:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"Section 16. Index",sidebar_position:16,description:"Index"},s=void 0,u={unversionedId:"oracle-basics/Section 16. Index",id:"oracle-basics/Section 16. Index",title:"Section 16. Index",description:"Index",source:"@site/docs/oracle-basics/16_index.md",sourceDirName:"oracle-basics",slug:"/oracle-basics/Section 16. Index",permalink:"/oracle/oracle-basics/Section 16. Index",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{id:"Section 16. Index",sidebar_position:16,description:"Index"},sidebar:"tutorialSidebar",previous:{title:"Section 15. View",permalink:"/oracle/oracle-basics/Section 15. View"},next:{title:"Section 17. Synonym, Sequence",permalink:"/oracle/oracle-basics/Section 17. Synonym, Sequence"}},c={},d=[{value:"Index",id:"index",level:2},{value:"DROP INDEX IF EXISTS",id:"drop-index-if-exists",level:3},{value:"Unique Index",id:"unique-index",level:2},{value:"Specify name for index",id:"specify-name-for-index",level:3},{value:"Function based Index",id:"function-based-index",level:2},{value:"A function-based index has the following main advantages:",id:"a-function-based-index-has-the-following-main-advantages",level:3},{value:"The following are major disadvantages of function-based indexes:",id:"the-following-are-major-disadvantages-of-function-based-indexes",level:3},{value:"Bitmap Index",id:"bitmap-index",level:2},{value:"When to use Oracle bitmap indexes",id:"when-to-use-oracle-bitmap-indexes",level:3}],m={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"index"},"Index"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX index_name\nON table_name(column1[,column2,...])\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The index name should be meaningful and includes table alias and column name(s) where possible, along with the suffix ","_","I such as:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"<table_name>_<column_name>_I\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, the ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE INDEX")," statement creates a btree index."),(0,r.kt)("li",{parentName:"ul"},"When you create a new table with a primary key, Oracle automatically creates a new index for the primary key columns."),(0,r.kt)("li",{parentName:"ul"},"Unlike other database systems, Oracle does not automatically create an index for the foreign key columns.")),(0,r.kt)("h3",{id:"drop-index-if-exists"},"DROP INDEX IF EXISTS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE index_count INTEGER;\nBEGIN\nSELECT COUNT(*) INTO index_count\n    FROM USER_INDEXES\n    WHERE INDEX_NAME = 'index_name';\n\nIF index_count > 0 THEN\n    EXECUTE IMMEDIATE 'DROP INDEX index_name';\nEND IF;\nEND;\n/\n")),(0,r.kt)("h2",{id:"unique-index"},"Unique Index"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE UNIQUE INDEX index_name ON\ntable_name(column1[,column2,...]);\n")),(0,r.kt)("h3",{id:"specify-name-for-index"},"Specify name for index"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you define a ",(0,r.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY")," or a ",(0,r.kt)("inlineCode",{parentName:"li"},"UNIQUE")," constraint for a table, Oracle automatically creates a unique index on the primary key or unique key columns to enforce the uniqueness"),(0,r.kt)("li",{parentName:"ul"},"SYS_C007876 unique index was created automatically with the generated name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t2 (\n    pk2 INT PRIMARY KEY\n        USING INDEX (\n            CREATE INDEX t1_pk1_i ON t2 (pk2)\n    ),\n    c2 INT\n);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instead of generating the index name, Oracle just used the one that we provided during table creation.")),(0,r.kt)("h2",{id:"function-based-index"},"Function based Index"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX members_last_name_fi\nON members(UPPER(last_name));\n")),(0,r.kt)("h3",{id:"a-function-based-index-has-the-following-main-advantages"},"A function-based index has the following main advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A function-based index speeds up the query by giving the optimizer more chance to perform an index range scan instead of full index scan. Note that an index range scan has a fast response time when the ",(0,r.kt)("inlineCode",{parentName:"li"},"WHERE")," clause returns fewer than 15% of the rows of a large table."),(0,r.kt)("li",{parentName:"ul"},"A function-based index reduces computation for the database. If you have a query that consists of expression and use this query many times, the database has to calculate the expression each time you execute the query. To avoid these computations, you can create a function-based index that has the exact expression."),(0,r.kt)("li",{parentName:"ul"},"A function-based index helps you perform more flexible sorts. For example, the index expression can call ",(0,r.kt)("inlineCode",{parentName:"li"},"UPPER()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"LOWER()")," functions for case-insensitive sorts or ",(0,r.kt)("inlineCode",{parentName:"li"},"NLSSORT()")," function for linguistic-based sorts.")),(0,r.kt)("h3",{id:"the-following-are-major-disadvantages-of-function-based-indexes"},"The following are major disadvantages of function-based indexes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The database has to compute the result of the index in every data modification which imposes a performance penalty for every write."),(0,r.kt)("li",{parentName:"ul"},"The function invoked involve in the index expression must be deterministic. It means that for the same input, the function always returns the same result."),(0,r.kt)("li",{parentName:"ul"},"The query optimizer can use a function-based index for cost-based optimization, not for rule-based optimization. Therefore, it does not use a function-based index until you analyze the index itself by invoking either ",(0,r.kt)("inlineCode",{parentName:"li"},"DBMS_STATS.GATHER_TABLE_STATS")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"DBMS_STATS.GATHER_SCHEMA_STATS"),".")),(0,r.kt)("h2",{id:"bitmap-index"},"Bitmap Index"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a column has a few distinct values, we say that this column has low cardinality. Ex: Gender column"),(0,r.kt)("li",{parentName:"ul"},"Oracle has a special kind of index for these types of columns which is called a bitmap index."),(0,r.kt)("li",{parentName:"ul"},"A bitmap index is a special kind of database index which uses bitmaps or bit array."),(0,r.kt)("li",{parentName:"ul"},"In a bitmap index, Oracle stores a bitmap for each index key."),(0,r.kt)("li",{parentName:"ul"},"Each index key stores pointers to multiple rows."),(0,r.kt)("li",{parentName:"ul"},"For gender column, It will create two separate bitmaps, one for each gender."),(0,r.kt)("li",{parentName:"ul"},"Oracle uses a mapping function to converts each bit in the bitmap to the corresponding rowid of the table.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE BITMAP INDEX index_name\nON table_name(column1[,column2,...]);\n")),(0,r.kt)("h3",{id:"when-to-use-oracle-bitmap-indexes"},"When to use Oracle bitmap indexes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should use the bitmap index for the columns that have low cardinality. To find the cardinality of a column, you can use the following query:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column, COUNT(*)\nFROM table_name\nGROUP BY column;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A good practice is any column which has less than 100 distinct values can consider for bitmap index."),(0,r.kt)("li",{parentName:"ul"},"Maintaining a bitmap index takes a lot of resources, therefore, bitmap indexes are only good for the read-only tables or tables that have infrequently updates."),(0,r.kt)("li",{parentName:"ul"},"Therefore, you often find bitmap indexes are extensively used in the data warehouse environment."),(0,r.kt)("li",{parentName:"ul"},"Notice that using a bitmap index for a table that has many single row update, especially concurrent single row update will cause a deadlock.")),(0,r.kt)("p",null,"Ex:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE bitmap_index_demo(\n    id INT GENERATED BY DEFAULT AS IDENTITY,\n    active NUMBER NOT NULL,\n    PRIMARY KEY(id)\n);\n\nCREATE BITMAP INDEX bitmap_index_demo_active_i\nON bitmap_index_demo(active);\n\n")),(0,r.kt)("p",null,"Open two sessions and repeatedly execute one of the following statements in each session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO bitmap_index_demo(active)\nVALUES(1);\n\nINSERT INTO bitmap_index_demo(active)\nVALUES(0);\n")),(0,r.kt)("p",null,"The following error will occur:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ORA-00060: deadlock detected while waiting for resource\n")))}p.isMDXComponent=!0}}]);