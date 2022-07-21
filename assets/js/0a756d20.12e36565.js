"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[375],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],i={id:"Section 5. Joining tables",sidebar_position:5,description:"JOIN"},s=void 0,c={unversionedId:"oracle-basics/Section 5. Joining tables",id:"oracle-basics/Section 5. Joining tables",title:"Section 5. Joining tables",description:"JOIN",source:"@site/docs/oracle-basics/5_joining-tables.md",sourceDirName:"oracle-basics",slug:"/oracle-basics/Section 5. Joining tables",permalink:"/oracle/oracle-basics/Section 5. Joining tables",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Section 5. Joining tables",sidebar_position:5,description:"JOIN"},sidebar:"tutorialSidebar",previous:{title:"Section 4. Filtering data",permalink:"/oracle/oracle-basics/Section 4. Filtering data"},next:{title:"Section 6. Grouping data",permalink:"/oracle/oracle-basics/Section 6. Grouping data"}},p={},d=[{value:"Inner Join",id:"inner-join",level:2},{value:"Joining multiple tables",id:"joining-multiple-tables",level:3},{value:"Left Join",id:"left-join",level:2},{value:"Joining multiple tables",id:"joining-multiple-tables-1",level:3},{value:"Conditions in ON vs. WHERE clause",id:"conditions-in-on-vs-where-clause",level:3},{value:"Right Join",id:"right-join",level:2},{value:"Condition in ON vs. WHERE clause",id:"condition-in-on-vs-where-clause",level:3},{value:"Full Outer Join",id:"full-outer-join",level:2},{value:"Cross Join",id:"cross-join",level:2},{value:"Self Join",id:"self-join",level:2},{value:"Hierarchical Queries",id:"hierarchical-queries",level:2},{value:"CASE vs. DECODE",id:"case-vs-decode",level:2},{value:"SQL Injection",id:"sql-injection",level:2},{value:"Use the following approaches to avoid SQL injection vulnerabilities:",id:"use-the-following-approaches-to-avoid-sql-injection-vulnerabilities",level:3},{value:"Calling External Procedures",id:"calling-external-procedures",level:2},{value:"Oracle SALT",id:"oracle-salt",level:2}],m={toc:d};function u(e){var t=e.components,i=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE palette_a (\n    id INT PRIMARY KEY,\n    color VARCHAR2 (100) NOT NULL\n);\n\nCREATE TABLE palette_b (\n    id INT PRIMARY KEY,\n    color VARCHAR2 (100) NOT NULL\n);\n\nINSERT INTO palette_a (id, color)\nVALUES (1, 'Red');\n\nINSERT INTO palette_a (id, color)\nVALUES (2, 'Green');\n\nINSERT INTO palette_a (id, color)\nVALUES (3, 'Blue');\n\nINSERT INTO palette_a (id, color)\nVALUES (4, 'Purple');\n\n-- insert data for the palette_b\nINSERT INTO palette_b (id, color)\nVALUES (1, 'Green');\n\nINSERT INTO palette_b (id, color)\nVALUES (2, 'Red');\n\nINSERT INTO palette_b (id, color)\nVALUES (3, 'Cyan');\n\nINSERT INTO palette_b (id, color)\nVALUES (4, 'Brown');\n")),(0,o.kt)("h2",{id:"inner-join"},"Inner Join"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    INNER JOIN palette_b b\n    ON a.color = b.color;\n")),(0,o.kt)("p",null,"Note that the columns listed in the USING clause must be available in both tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    INNER JOIN palette_b b\n    USING (color);\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1920).Z,width:"379",height:"288"})),(0,o.kt)("h3",{id:"joining-multiple-tables"},"Joining multiple tables"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6109).Z,width:"774",height:"165"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name AS customer_name, order_id, order_date, item_id, product_name, quantity, unit_price\nFROM orders\n    INNER JOIN order_items\n        USING(order_id)\n    INNER JOIN customers\n        USING(customer_id)\n    INNER JOIN products\n        USING(product_id)\nORDER BY\n    order_date DESC, order_id DESC, item_id ASC;\n")),(0,o.kt)("h2",{id:"left-join"},"Left Join"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    LEFT JOIN palette_b b\n    ON a.color = b.color;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    LEFT JOIN palette_b b\n    USING (color);\n")),(0,o.kt)("p",null,"The left join returns all rows from the left table with the matching rows if available from the right table. If there is no matching row found from the right table, the left join will have null values for the columns of the right table."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2530).Z,width:"378",height:"290"})),(0,o.kt)("p",null,"Sometimes, you want to get only rows from the left table that do not exist in the right table. To achieve this, you use the left join and a WHERE clause to exclude the rows from the right table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    LEFT JOIN palette_b b\n    ON a.color = b.color\nWHERE b.id IS NULL;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5976).Z,width:"382",height:"318"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6109).Z,width:"774",height:"165"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6637).Z,width:"398",height:"238"})),(0,o.kt)("h3",{id:"joining-multiple-tables-1"},"Joining multiple tables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT order_id, name AS customer_name, status, first_name, last_name\nFROM orders\n    LEFT JOIN employees\n    ON employee_id = salesman_id\n    LEFT JOIN customers\n    ON customers.customer_id = orders.customer_id\nORDER BY order_date DESC;\n")),(0,o.kt)("h3",{id:"conditions-in-on-vs-where-clause"},"Conditions in ON vs. WHERE clause"),(0,o.kt)("p",null,"The following statement gets the order and salesman data of the order 58."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT order_id, status, employee_id, last_name\nFROM orders\n    LEFT JOIN employees\n    ON employee_id = salesman_id\nWHERE order_id = 58;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7826).Z,width:"289",height:"37"})),(0,o.kt)("p",null,"Now if you move the condition from the WHERE clause to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ON")," clause of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LEFT JOIN"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT order_id, status, employee_id, last_name\nFROM orders\n    LEFT JOIN employees\n    ON employee_id = salesman_id\n    AND order_id = 58;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4732).Z,width:"290",height:"184"})),(0,o.kt)("p",null,"In this case, the query returns all orders but only the order 58 had the salesman data associated with it."),(0,o.kt)("p",null,"Note that for the inner join, the condition placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ON")," has the same effect as it is placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clause."),(0,o.kt)("h2",{id:"right-join"},"Right Join"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTER")," keyword is optional therefore the ",(0,o.kt)("inlineCode",{parentName:"p"},"RIGHT OUTER JOIN")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RIGHT JOIN")," are the same."),(0,o.kt)("p",null,"The right join makes a result set that contains all rows from the right table with the matching rows from the left table. If there is no match, the left side will have nulls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    RIGHT JOIN palette_b b\n    ON a.color = b.color;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    RIGHT JOIN palette_b b\n    USING (color);\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3879).Z,width:"396",height:"285"})),(0,o.kt)("p",null,"Likewise, you can get only rows from the right table but not the left table by adding a WHERE clause to the above statement as shown in the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    RIGHT JOIN palette_b b\n    ON a.color = b.color\nWHERE a.id IS NULL;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9532).Z,width:"377",height:"316"})),(0,o.kt)("h3",{id:"condition-in-on-vs-where-clause"},"Condition in ON vs. WHERE clause"),(0,o.kt)("p",null,"The following statement gets the employee and order data of the salesman id 57."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT employee_id, last_name, first_name, order_id, status\nFROM orders\n    RIGHT JOIN employees\n    ON employee_id = salesman_id\nWHERE employee_id = 57;\n")),(0,o.kt)("p",null,"The following statement places the condition in the WHERE clause instead of the ON clause:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT employee_id, last_name, first_name, order_id, status\nFROM orders\n    RIGHT JOIN employees\n    ON employee_id = salesman_id\n    AND employee_id = 57;\n")),(0,o.kt)("p",null,"The query returned all employees but only the employee id 57 had the related order data."),(0,o.kt)("p",null,"A note that regarding the ",(0,o.kt)("inlineCode",{parentName:"p"},"INNER JOIN"),", the condition is placed in the ON clause has the same effect as it is placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clause."),(0,o.kt)("h2",{id:"full-outer-join"},"Full Outer Join"),(0,o.kt)("p",null,"Oracle full outer join or full join returns a result set that contains all rows from both left and right tables, with the matching rows from both sides where available. If there is no match, the missing side will have nulls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    FULL OUTER JOIN palette_b b\n    ON a.color = b.color;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2908).Z,width:"370",height:"265"})),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTER")," keyword is optional."),(0,o.kt)("p",null,"To get a set of rows that are unique from the left and right tales, you perform the same full join and then exclude the rows that you don\u2019t want from both sides using a WHERE clause as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.id id_a, a.color color_a, b.id id_b, b.color color_b\nFROM palette_a a\n    FULL JOIN palette_b b\n    ON a.color = b.color\nWHERE a.id IS NULL OR b.id IS NULL;\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5833).Z,width:"382",height:"304"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE projects(\n    project_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    project_name VARCHAR2(100) NOT NULL\n);\n\nCREATE TABLE members(\n    member_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    member_name VARCHAR2(100) NOT NULL,\n    project_id INT,\n    FOREIGN KEY (project_id) REFERENCES projects(project_id)\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO projects(project_name)\nVALUES('ERP');\n\nINSERT INTO projects(project_name)\nVALUES('Sales CRM');\n\nINSERT INTO members(member_name, project_id)\nVALUES('John Doe',1);\n\nINSERT INTO members(member_name, project_id)\nVALUES ('Jane Doe',1);\n\nINSERT INTO members(member_name, project_id)\nVALUES ('Jack Daniel',null);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  member_name,  project_name\nFROM members m\n    FULL OUTER JOIN projects p\n    ON p.project_id = m.project_id\nORDER BY member_name;\n")),(0,o.kt)("p",null,"Jack Daniel does not join any project, Jane Doe and John Doe join the ERP project and Sales CRM project has no member."),(0,o.kt)("p",null,"To find the project that does not have any member, you use the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  project_name, member_name\nFROM  members m\n    FULL OUTER JOIN projects p\n    ON p.project_id = m.project_id\nWHERE member_name IS NULL\nORDER BY member_name;\n")),(0,o.kt)("p",null,"Similarly, you can find members who do not participate in any project by using the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  member_name,  project_name\nFROM members m\n    FULL OUTER JOIN projects p\n    ON p.project_id = m.project_id\nWHERE project_name IS NULL\nORDER BY member_name;\n")),(0,o.kt)("h2",{id:"cross-join"},"Cross Join"),(0,o.kt)("p",null,"Oracle CROSS JOIN to make a Cartesian product of the joined tables.\nThe cross join is useful when you want to generate plenty of rows for testing."),(0,o.kt)("p",null,"To generate the test data for inserting into the inventories table, you can use the CROSS JOIN clause as shown in the following statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_id, warehouse_id,\n    ROUND( dbms_random.value( 10, 100 )) quantity\nFROM products\n    CROSS JOIN warehouses;\n")),(0,o.kt)("p",null,"The products table 288 rows and the warehouses table has 9 rows, therefore, the cross join of these tables returns 2592 rows (288 x 9)."),(0,o.kt)("h2",{id:"self-join"},"Self Join"),(0,o.kt)("p",null,"A self join is a join that joins a table with itself. A self join is useful for comparing rows within a table or querying hierarchical data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   e1.hire_date,\n  (e1.first_name || ' ' || e1.last_name) employee1,\n  (e2.first_name || ' ' || e2.last_name) employee2\nFROM employees e1\n    INNER JOIN employees e2\n    ON e1.employee_id > e2.employee_id\n    AND e1.hire_date = e2.hire_date\nORDER BY\n   e1.hire_date DESC,\n   employee1,\n   employee2;\n")),(0,o.kt)("h2",{id:"hierarchical-queries"},"Hierarchical Queries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"START WITH")," -> Define the root node(s) of the hierarchy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CONNECT BY")," -> Defines how the current row (child) relates to a prior row(parent)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PRIOR")," -> Previous(parent) level"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LEVEL")," -> The position (indentation) in the hierarchy of the current row in relation to the root node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ORDER SIBLINGS BY")," -> Order of the rows which all shares the same parent row"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CONNECT_BY_ROOT"),"-> To get the root node associated with the current row"),(0,o.kt)("li",{parentName:"ul"},"SYS_CONNECT_BY_PATH(column_name,'delimiter') -> Delimited break from the root node to the current row"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CONNECT_BY_ISLEAF")," -> 1 for leaf nodes and 0 for non-leaf nodes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CONNECT BY NOCYCLE")," -> NOCYCLE to raise errors if loop exist. (Ex: KING is manager of BLAKE, BLAKE is manager of KING)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empno, ename, job, PRIOR ename --PRIOR ename = mgr name from previous level\nFROM emp\nSTART WITH mgr IS NULL\nCONNECT BY mgr = PRIOR empno;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empno, ename, job, PRIOR ename\nFROM emp\nSTART WITH empno = 7566\nCONNECT BY mgr = PRIOR empno;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT LPAD('', LEVEL*2, '') || family_member AS who,\nmother,\nfather\nFROM your_family\nSTART WITH family_member in ('Aliyamma','Thomas') --level 1 of hierarchy\nCONNECT BY NOCYCLE PRIOR family_member IN (mother,father) --PRIOR gives access to level above\n")),(0,o.kt)("h2",{id:"case-vs-decode"},"CASE vs. DECODE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")," performs an equality check only. ",(0,o.kt)("inlineCode",{parentName:"li"},"CASE")," is capable of other logical comparisons such as < > etc."),(0,o.kt)("li",{parentName:"ul"},"It is recommended to use CASE instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")," is oracle proprietary function; CASE is ANSI standard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CASE")," can be used in both SQL and PLSQL . But ",(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")," can be used only in SQL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CASE")," can be used in ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE")," clause But you cant use ",(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"WHERE")," clause."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CASE")," is Faster when compared to ",(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")," since ",(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")," is a function which takes time to load and run but the cost difference of ",(0,o.kt)("inlineCode",{parentName:"li"},"DECODE")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"CASE")," is very very minimal.")),(0,o.kt)("h2",{id:"sql-injection"},"SQL Injection"),(0,o.kt)("p",null,"SQL Injection is one of the techniques uses by hackers to hack a website by injecting SQL commands in data fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"Ex1:In the username field in a webpage if a user types, Raj OR 1=1, the SQL statement for accepting this field will look like this.\nSELECT * FROM users WHERE username = \u2018Raj\u2019 OR 1 = 1;\nThis will return all the rows in that table because 1 = 1 is always true.\n\nEx2:\nUsername: RAJ; DROP TABLE users\nSQL Statement: SELECT * FROM users WHERE username = \u2018Raj\u2019; DROP TABLE users;\n\nEx3:\nl_query := 'SELECT claim_id, claim_amount FROM claims WHERE ssn =' || l_ssn;\nThe user passes the following for the value l_ssn\n'123456789' UNION ALL SELECT claim_id, claim_amount FROM claims\n\nThe value of the l_query variable is transformed to:\nSQL Statement: SELECT claim_id, claim_amount FROM claims WHERE ssn = '123456789' UNION ALL SELECT claim_id, claim_amount FROM claims\n")),(0,o.kt)("h3",{id:"use-the-following-approaches-to-avoid-sql-injection-vulnerabilities"},"Use the following approaches to avoid SQL injection vulnerabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Never accept inputs from end user that you glue into a sql statement. They should be bound (bind variables) into the query not concatenated."),(0,o.kt)("li",{parentName:"ul"},"Validate user input"),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"AUTHID CURRENT_USER")," while creating objects which will prevent the execution of object with privileges of owner")),(0,o.kt)("h2",{id:"calling-external-procedures"},"Calling External Procedures"),(0,o.kt)("p",null,'We can call C program or Java method from PLSQL. With external procedures, you can make "callouts" and "callbacks". Callout means a call to an external procedure. Callback means when the external procedure calls the database to perform SQL operations.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE OR REPLACE PROCEDURE s_pr_upload(\nconnectString IN VARCHAR2, dt_in_trd_date IN VARCHAR2, user IN VARCHAR2,\nnumout_inserted OUT BINARY_INTEGER, numout_updated OUT BINARY_INTEGER,\nretCode OUT BINARY_INTEGER, prc_id IN VARCHAR2)\nAS\nEXTERNAL\nLANGUAGE C\nNAME "program_name"\nLIBRARY "DLL_name or shared_library_name"\nPARAMETERS(connectString,dt_in_trd_date,user,numout_inserted,numout_updated,retCode,prc_id);\n')),(0,o.kt)("h2",{id:"oracle-salt"},"Oracle SALT"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Oracle Service Architecture Leveraging Tuxedo (SALT) is an add-on product option for Oracle Tuxedo."),(0,o.kt)("li",{parentName:"ul"},"Oracle SALT allows external Web services applications to invoke Tuxedo services as Web services, and Tuxedo applications to invoke external Web services."),(0,o.kt)("li",{parentName:"ul"},"Oracle SALT does not require any coding to achieve this."),(0,o.kt)("li",{parentName:"ul"},"Oracle SALT complies with standard Web service specifications (SOAP 1.1, SOAP 1.2, and WSDL 1.1), allowing Oracle SALT to interoperate with other Web service products."),(0,o.kt)("li",{parentName:"ul"},"Web services are a set of functions packaged into a single entity made available to other systems on a network."),(0,o.kt)("li",{parentName:"ul"},"They can be shared and used as a component of distributed Web-based applications."),(0,o.kt)("li",{parentName:"ul"},"The network can be a corporate intranet or the Internet.")))}u.isMDXComponent=!0},1920:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-10-13-e74a84a9f27d8625ebdcd046fc44ff72.png"},2530:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-12-52-7a808a62f924e7333591a08539bee8ba.png"},5976:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-14-22-d3a2f684a63f02f34abff886537fcf23.png"},3879:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-17-26-65abba9c5fea9c92b307cc824d8114df.png"},2908:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-18-49-b25e8f19a5daf4c2b0830f365b239c58.png"},5833:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-19-40-0a87191623874e7c2aff4db2043b2139.png"},9532:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-20-45-bafb1efccd0d0566bb818a30c0348598.png"},6109:function(e,t,n){t.Z=n.p+"assets/images/2022-05-30-21-29-42-57562c9544914bded474638876061008.png"},7826:function(e,t,n){t.Z=n.p+"assets/images/2022-07-19-12-30-59-c8acceb78fb9d3453e62ee25fbf80507.png"},4732:function(e,t,n){t.Z=n.p+"assets/images/2022-07-19-12-31-17-0755efe0592c9269950f52cf8c698b91.png"},6637:function(e,t,n){t.Z=n.p+"assets/images/2022-07-19-13-47-44-af243fe755078c49ee8d31d27c019435.png"}}]);