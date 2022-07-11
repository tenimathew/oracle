"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[993],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"Section 6. Grouping data",sidebar_position:6,description:"GROUP BY, HAVING"},s=void 0,u={unversionedId:"oracle-basics/Section 6. Grouping data",id:"oracle-basics/Section 6. Grouping data",title:"Section 6. Grouping data",description:"GROUP BY, HAVING",source:"@site/docs/oracle-basics/6_grouping-data.md",sourceDirName:"oracle-basics",slug:"/oracle-basics/Section 6. Grouping data",permalink:"/oracle/oracle-basics/Section 6. Grouping data",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Section 6. Grouping data",sidebar_position:6,description:"GROUP BY, HAVING"},sidebar:"tutorialSidebar",previous:{title:"Section 5. Joining tables",permalink:"/oracle/oracle-basics/Section 5. Joining tables"},next:{title:"Section 7. Subquery",permalink:"/oracle/oracle-basics/Section 7. Subquery"}},c={},p=[{value:"GROUP BY",id:"group-by",level:2},{value:"GROUP BY with an expression",id:"group-by-with-an-expression",level:3},{value:"HAVING",id:"having",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"group-by"},"GROUP BY"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause is used in a ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," statement to group rows into a set of summary rows by values of columns or expressions. The ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause returns one row per group."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT customer_id, COUNT( order_id )\nFROM orders\nGROUP BY customer_id\nORDER BY customer_id;\n")),(0,a.kt)("h3",{id:"group-by-with-an-expression"},"GROUP BY with an expression"),(0,a.kt)("p",null,"The following example groups the orders by year and returns the number of orders per year."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT EXTRACT(YEAR FROM order_date) YEAR, COUNT( order_id )\nFROM orders\nGROUP BY EXTRACT(YEAR FROM order_date)\nORDER BY YEAR;\n")),(0,a.kt)("h2",{id:"having"},"HAVING"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING")," clause is an optional clause of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," statement. It is used to filter groups of rows returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause. This is why the ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING")," clause is usually used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause."),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING")," clause without the ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause, the ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING")," clause works like the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clause."),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING")," clause filters groups of rows while the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clause filters rows. This is a main difference between the ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT order_id, SUM( unit_price * quantity  order_value\nFROM order_items\nGROUP BY order_id\nHAVING SUM( unit_price * quantity ) > 1000000\nORDER BY order_value DESC;\n")))}m.isMDXComponent=!0}}]);