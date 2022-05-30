"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[39],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||a;return n?l.createElement(m,o(o({ref:t},c),{},{components:n})):l.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1447:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"Section 6. Subquery",sidebar_position:6,description:"EXISTS, ANY, SOME, ALL"},i=void 0,u={unversionedId:"oracle-basics/Section 6. Subquery",id:"oracle-basics/Section 6. Subquery",title:"Section 6. Subquery",description:"EXISTS, ANY, SOME, ALL",source:"@site/docs/oracle-basics/subquery.md",sourceDirName:"oracle-basics",slug:"/oracle-basics/Section 6. Subquery",permalink:"/oracle/oracle-basics/Section 6. Subquery",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Section 6. Subquery",sidebar_position:6,description:"EXISTS, ANY, SOME, ALL"},sidebar:"tutorialSidebar",previous:{title:"Section 5. Grouping data",permalink:"/oracle/oracle-basics/Section 5. Grouping data"},next:{title:"Section 7. Set Operators",permalink:"/oracle/oracle-basics/Section 7. Set Operators"}},c={},p=[{value:"Subquery",id:"subquery",level:2},{value:"Correlated Subquery",id:"correlated-subquery",level:2},{value:"EXISTS",id:"exists",level:2},{value:"Oracle EXISTS vs. IN",id:"oracle-exists-vs-in",level:3},{value:"NOT EXISTS",id:"not-exists",level:2},{value:"ANY",id:"any",level:2},{value:"col = ANY ( list )",id:"col--any--list-",level:3},{value:"col != ANY(list)",id:"col--anylist",level:3},{value:"col &gt; ANY (list)",id:"col--any-list",level:3},{value:"col &gt;= ANY (list)",id:"col--any-list-1",level:3},{value:"col &lt; ANY (list)",id:"col--any-list-2",level:3},{value:"col &lt;= ANY (list)",id:"col--any-list-3",level:3},{value:"ALL",id:"all",level:2},{value:"col = ALL ( list)",id:"col--all--list",level:3},{value:"col != ALL (list)",id:"col--all-list",level:3},{value:"col &gt; ALL (list)",id:"col--all-list-1",level:3},{value:"col &gt;= ALL(list)",id:"col--alllist",level:3},{value:"col &lt; ALL(list)",id:"col--alllist-1",level:3},{value:"col &lt;= ALL(list)",id:"col--alllist-2",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"subquery"},"Subquery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_id, product_name, list_price\nFROM products\nWHERE list_price = (\n        SELECT MAX( list_price )\n        FROM products\n    );\n")),(0,a.kt)("p",null,"Oracle evaluates the whole query above in two steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, execute the subquery."),(0,a.kt)("li",{parentName:"ul"},"Second, use the result of the subquery in the outer query.")),(0,a.kt)("p",null,"A subquery which is nested within the ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM")," clause of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," statement is called an ",(0,a.kt)("strong",{parentName:"p"},"inline view"),". Note that other RDBMS such as MySQL and PostgreSQL use the term ",(0,a.kt)("strong",{parentName:"p"},"derived table")," instead of the inline view."),(0,a.kt)("p",null,"A subquery nested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clause of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," statement is called a ",(0,a.kt)("strong",{parentName:"p"},"nested subquery"),"."),(0,a.kt)("p",null,"A subquery can contain another subquery. Oracle allows you to have an unlimited number of subquery levels in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM")," clause of the top-level query and up to 255 subquery levels in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clause."),(0,a.kt)("p",null,"These are the main advantages of subqueries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide an alternative way to query data that would require complex joins and unions."),(0,a.kt)("li",{parentName:"ul"},"Make the complex queries more readable."),(0,a.kt)("li",{parentName:"ul"},"Allow a complex query to be structured in a way that it is possible to isolate each part.")),(0,a.kt)("h2",{id:"correlated-subquery"},"Correlated Subquery"),(0,a.kt)("p",null,"A correlated subquery is a subquery that uses values from the outer query. In addition, a correlated subquery may be evaluated once for each row selected by the outer query. Because of this, a query that uses a correlated subquery could be slow."),(0,a.kt)("p",null,"A correlated subquery is also known as a ",(0,a.kt)("strong",{parentName:"p"},"repeating subquery")," or a ",(0,a.kt)("strong",{parentName:"p"},"synchronized subquery"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_id, product_name, list_price\nFROM products p\nWHERE list_price > (\n        SELECT AVG( list_price )\n        FROM products\n        WHERE category_id = p.category_id\n    );\n")),(0,a.kt)("h2",{id:"exists"},"EXISTS"),(0,a.kt)("p",null,"The Oracle ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," operator is a Boolean operator that returns either true or false. The ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," operator is often used with a subquery to test for the existence of rows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM customers c\nWHERE EXISTS (\n        SELECT 1\n        FROM orders\n        WHERE customer_id = c.customer_id\n    )\nORDER BY name;\n")),(0,a.kt)("p",null,"Note that Oracle ignores the select list in the subquery so you can use any column, literal value, expression, etc."),(0,a.kt)("h3",{id:"oracle-exists-vs-in"},"Oracle EXISTS vs. IN"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," operator stops scanning rows once the subquery returns the first row because it can determine the result whereas the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator must scan all rows returned by the subquery to conclude the result."),(0,a.kt)("p",null,"In addition, the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," clause can\u2019t compare anything with NULL values, but the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," clause can compare everything with NULL values. For example, the first statement returns no row while the second one returns all rows from the customers table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM customers\nWHERE customer_id IN(NULL);\n\nSELECT *\nFROM customers\nWHERE EXISTS (\n        SELECT NULL\n        FROM dual\n    );\n")),(0,a.kt)("p",null,"Typically, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," operator is faster than ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator when the result set of the subquery is large. By contrast, the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator is faster than ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," operator when the result set of the subquery is small."),(0,a.kt)("h2",{id:"not-exists"},"NOT EXISTS"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT EXISTS")," operator works the opposite of the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," operator."),(0,a.kt)("h2",{id:"any"},"ANY"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ANY")," operator must be preceded by a comparison operator such as =, !=, >, >=,<, <=."),(0,a.kt)("p",null,"When you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ANY")," operator to compare a value to a list, Oracle expands the initial condition to all elements of the list and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," operator to combine them as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM table_name\nWHERE c > ANY (v1, v2, v3);\n")),(0,a.kt)("p",null,"Oracle performs a transformation of the above query to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM table_name\nWHERE c > v1 OR c > v2 OR c > v3;\n")),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ANY")," operator to compare a value with result set returned by a subquery, Oracle uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXISTS")," operator to transform the query to an equivalent one without using the ANY operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_name, list_price\nFROM products\nWHERE list_price > ANY(\n        SELECT list_price\n        FROM products\n        WHERE category_id = 1\n    )\nORDER BY product_name;\n")),(0,a.kt)("p",null,"Oracle performed a single transformation as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_name, list_price\nFROM products p1\nWHERE EXISTS(\n        SELECT list_price\n        FROM products p2\n        WHERE category_id = 1\n            AND p1.list_price > p2.list_price\n    )\nORDER BY product_name;\n")),(0,a.kt)("p",null,"Note that if the subquery returns no rows, the following condition evaluates to false: Hence, the whole query returns no rows."),(0,a.kt)("p",null,"In Oracle, the ",(0,a.kt)("inlineCode",{parentName:"p"},"SOME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ANY")," operators behave exactly the same therefore they are completely interchangeable."),(0,a.kt)("h3",{id:"col--any--list-"},"col = ANY ( list )"),(0,a.kt)("p",null,"The expression evaluates to true if the col matches one or more values in the list"),(0,a.kt)("h3",{id:"col--anylist"},"col != ANY(list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col does not match one or more values in the list."),(0,a.kt)("h3",{id:"col--any-list"},"col > ANY (list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is greater than the smallest value in the list."),(0,a.kt)("h3",{id:"col--any-list-1"},"col >= ANY (list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is greater than or equal to the smallest value in the list."),(0,a.kt)("h3",{id:"col--any-list-2"},"col < ANY (list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is smaller than the highest value in the list."),(0,a.kt)("h3",{id:"col--any-list-3"},"col <= ANY (list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is smaller than or equal to the highest value in the list."),(0,a.kt)("h2",{id:"all"},"ALL"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ALL")," operator must be preceded by an comparison operator such as =, != >,>=, <, <= and followed by a list or subquery."),(0,a.kt)("p",null,"When you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ALL")," operator to compare a value to a list, Oracle expands the initial condition to all elements of the list and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"AND")," operator to combine them as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM table_name\nWHERE c > ALL (v1, v2, v3);\n\n--  transform the ALL operator\n\nSELECT *\nFROM table_name\nWHERE c > v1\n    AND c > v2\n    AND c > v3;\n")),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ALL")," operator to compare a value with a result set returned by a subquery, Oracle performs a two-step transformation as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_name, list_price\nFROM products\nWHERE list_price > ALL\n    ( SELECT list_price\n     FROM products\n     WHERE category_id = 1 )\nORDER BY product_name;\n\n-- 1st step: transformation that uses ANY\n\nSELECT product_name, list_price\nFROM products p1\nWHERE NOT( p1.list_price <= ANY\n            (SELECT list_price\n             FROM products p2\n             WHERE category_id = 1 ))\nORDER BY product_name;\n\n-- 2nd step: transformation that eliminates ANY\nSELECT product_name, list_price\nFROM products p1\nWHERE NOT EXISTS\n    (SELECT p2.list_price\n     FROM products p2\n     WHERE p2.category_id = 1\n       AND p2.list_price >= p1.list_price )\nORDER BY product_name;\n")),(0,a.kt)("p",null,"If the subquery returns no rows, then the following condition evaluates to true: Which means that the query that uses the above condition in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clause will return all rows in case the subquery return no rows."),(0,a.kt)("h3",{id:"col--all--list"},"col = ALL ( list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col matches all values in the list."),(0,a.kt)("h3",{id:"col--all-list"},"col != ALL (list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col does not match any values in the list."),(0,a.kt)("h3",{id:"col--all-list-1"},"col > ALL (list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is greater than the biggest value in the list."),(0,a.kt)("h3",{id:"col--alllist"},"col >= ALL(list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is greater than or equal to the biggest value in the list."),(0,a.kt)("h3",{id:"col--alllist-1"},"col < ALL(list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is smaller than the smallest value in the list."),(0,a.kt)("h3",{id:"col--alllist-2"},"col <= ALL(list)"),(0,a.kt)("p",null,"The expression evaluates to true if the col is less than or equal to the smallest value in the list."))}d.isMDXComponent=!0}}]);