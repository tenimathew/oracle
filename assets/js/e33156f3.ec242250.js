"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[1948],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return E}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),E=a,d=m["".concat(s,".").concat(E)]||m[E]||p[E]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1911:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return E},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={id:"Section 4. Cursors",sidebar_position:4,description:"Cursors"},s=void 0,u={unversionedId:"plsql-tutorial/Section 4. Cursors",id:"plsql-tutorial/Section 4. Cursors",title:"Section 4. Cursors",description:"Cursors",source:"@site/docs/plsql-tutorial/cursor.md",sourceDirName:"plsql-tutorial",slug:"/plsql-tutorial/Section 4. Cursors",permalink:"/oracle/plsql-tutorial/Section 4. Cursors",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Section 4. Cursors",sidebar_position:4,description:"Cursors"},sidebar:"tutorialSidebar",previous:{title:"Section 3. Exception Handling",permalink:"/oracle/plsql-tutorial/Section 3. Exception Handling"},next:{title:"Section 5. Stored Objects",permalink:"/oracle/plsql-tutorial/Section 5. Stored Objects"}},c={},p=[{value:"Implicit cursors",id:"implicit-cursors",level:2},{value:"Explicit cursors",id:"explicit-cursors",level:2},{value:"Recursive Cursor",id:"recursive-cursor",level:2},{value:"REF CURSOR",id:"ref-cursor",level:2},{value:"Dealing with REF CURSOR in the sub-programs of a PL/SQL block",id:"dealing-with-ref-cursor-in-the-sub-programs-of-a-plsql-block",level:3},{value:"Passing REF CURSOR as parameters to sub-programs",id:"passing-ref-cursor-as-parameters-to-sub-programs",level:3},{value:"Strong REF CURSOR",id:"strong-ref-cursor",level:3},{value:"Strong Ref Cursor with User Defined Record Datatype",id:"strong-ref-cursor-with-user-defined-record-datatype",level:3},{value:"Weak REF CURSOR",id:"weak-ref-cursor",level:3},{value:"SYS_REF CURSOR",id:"sys_ref-cursor",level:3},{value:"Parameterized CURSORs",id:"parameterized-cursors",level:3},{value:"CURSOR vs. REF CURSOR",id:"cursor-vs-ref-cursor",level:2},{value:"FOR UPDATE OF, FOR UPDATE and WHERE CURRENT OF",id:"for-update-of-for-update-and-where-current-of",level:2},{value:"INVALID_CURSOR error",id:"invalid_cursor-error",level:2}],m={toc:p};function E(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cursor is a pointer to a memory area called context area."),(0,l.kt)("li",{parentName:"ul"},"Context area is a memory region inside the Process Global Area(PGA).")),(0,l.kt)("h2",{id:"implicit-cursors"},"Implicit cursors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Implicit CURSORs are automatically created by Oracle when DML statement such as ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT INTO"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"UPDATE"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE")," is executed. Cursor name is \u2018SQL\u2019."),(0,l.kt)("li",{parentName:"ul"},"Oracle internally manages the whole execution cycle of implicit cursors and reveals only the cursor\u2019s information and statuses such as ",(0,l.kt)("inlineCode",{parentName:"li"},"SQL%ROWCOUNT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"SQL%ISOPEN"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"SQL%FOUND"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"SQL%NOTFOUND"),". ",(0,l.kt)("inlineCode",{parentName:"li"},"%ROWCOUNT")),(0,l.kt)("li",{parentName:"ul"},"The implicit cursor is not elegant when the query returns zero or multiple rows which cause ",(0,l.kt)("inlineCode",{parentName:"li"},"NO_DATA_FOUND")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"TOO_MANY_ROWS")," exception respectively.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    total_rows(2);\n    emp_rec emp %ROWTYPE;\nBEGIN\n    SELECT * INTO emp_rec FROM emp WHERE empno=7369;\n    IF SQL %FOUND THEN\n        DBMS_OUTPUT.PUT_LINE(emp_rec.ename ||emp_rec.sal);\n    END IF;\nEND;\n")),(0,l.kt)("h2",{id:"explicit-cursors"},"Explicit cursors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Explicit CURSORs are user defined cursors. It is created for any DML operation which returns more than 1 row."),(0,l.kt)("li",{parentName:"ul"},"For an explicit cursor, you have control over its execution cycle from ",(0,l.kt)("inlineCode",{parentName:"li"},"OPEN"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"FETCH"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"CLOSE"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    CURSOR emp_cur IS\n        SELECT empno,ename FROM emp;\n    emp_rec emp_cur %ROWTYPE;\nBEGIN\n    OPEN emp_cur;\n    LOOP\n        FETCH emp_cur INTO emp_rec;\n        EXIT WHEN emp_cur %NOTFOUND;\n        DBMS_OUTPUT.PUT_LINE(emp_rec.empno ||emp_rec.ename);\n    END LOOP;\n    CLOSE emp_cur;\nEND;\n")),(0,l.kt)("h2",{id:"recursive-cursor"},"Recursive Cursor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A recursive subprogram is one that calls itself. Each recursive call creates a new instance of any items declared in the subprogram, including parameters, variables, cursors, and exceptions. A recursive cursor (a pointer to a shared SQL area) is used to keep a pointer to each call of a recursive function.")),(0,l.kt)("h2",{id:"ref-cursor"},"REF CURSOR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," is basically a data type."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," can be associated with more than one ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," statement at run-time. Before associating a new ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," statement, we need to close the previous ",(0,l.kt)("inlineCode",{parentName:"li"},"CURSOR"),"."),(0,l.kt)("li",{parentName:"ul"},"The primary advantage of using ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," is their capability to pass result sets between sub programs (like stored procedures, functions, packages etc.).")),(0,l.kt)("h3",{id:"dealing-with-ref-cursor-in-the-sub-programs-of-a-plsql-block"},"Dealing with REF CURSOR in the sub-programs of a PL/SQL block"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The sub-routine gets executed for every iteration, which displays the employee information for the respective department.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE r_cursor IS REF CURSOR;\n    c_emp r_cursor;\n    TYPE rec_emp IS RECORD(\n    name VARCHAR2(20),\n    sal NUMBER(6));\n    er rec_emp;\n\nPROCEDURE printemployeedetails IS\nBEGIN\n    LOOP\n        FETCH c_emp INTO ER;\n        EXIT WHEN c_emp %NOTFOUND;\n        DBMS_OUTPUT.PUT_LINE(er.name || ' \u2013' || er.sal);\n    END LOOP;\nEND;\n\nBEGIN\n    FOR i IN (SELECT deptno,dname FROM dept) --can use SELECT statement directly without defining a cursor\n    LOOP\n        OPEN c_emp FOR SELECT ename,sal FROM emp WHERE deptno = i.deptno;\n            DBMS_OUTPUT.PUT_LINE(i.dname);\n            DBMS_OUTPUT.PUT_LINE('\u2014\u2014\u2014\u2014\u2013');\n            printemployeedetails;\n        CLOSE c_emp;\n    END LOOP;\nEND;\n")),(0,l.kt)("h3",{id:"passing-ref-cursor-as-parameters-to-sub-programs"},"Passing REF CURSOR as parameters to sub-programs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE r_cursor IS REF CURSOR;\n    c_emp r_cursor;\n    TYPE rec_emp IS RECORD(\n    NAME VARCHAR2(20),\n    sal NUMBER(6));\n\nPROCEDURE printemployeedetails(p_emp r_cursor) IS\n    er rec_emp;\nBEGIN\n    BEGIN\n        LOOP\n            FETCH p_emp INTO er; --no need to OPEN\n            EXIT WHEN p_emp %NOTFOUND;\n            DBMS_OUTPUT.PUT_LINE(er.name || ' \u2013' || er.sal);\n        END LOOP;\n    END;\n\n    BEGIN\n        FOR i IN (SELECT deptno,dname FROM dept)\n        LOOP\n            OPEN c_emp FOR SELECT ename,sal FROM EMP WHERE deptno = i.deptno;\n                DBMS_OUTPUT.PUT_LINE(i.dname);\n                DBMS_OUTPUT.PUT_LINE('\u2014\u2014\u2014\u2014\u2013');\n                printemployeedetails(c_emp);\n            CLOSE c_emp;\n        END LOOP;\n    END;\nEND;\n")),(0,l.kt)("h3",{id:"strong-ref-cursor"},"Strong REF CURSOR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Any ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," which has fixed return type is called Strong ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")),(0,l.kt)("li",{parentName:"ul"},"Strong ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," supports different type of ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," statements but all of the same structure ,but not necessary that the table should be same.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE ref_cursor_name IS REF CURSOR\n        RETURN (return_type);--Return must be of RECORD datatype\n----\nDECLARE\n    TYPE my_RefCur IS REF CURSOR\n    RETURN employees %ROWTYPE;\n    cur_var my_RefCur;\n    rec_var employees %ROWTYPE;\nBEGIN\n    OPEN cur_var FOR SELECT * FROM employees WHERE employee_id =100;\n        FETCH cur_var INTO rec_var;\n    CLOSE cur_var;\n    DBMS_OUTPUT.PUT_LINE(rec_var.first_name || rec_var.salary);\nEND;\n")),(0,l.kt)("h3",{id:"strong-ref-cursor-with-user-defined-record-datatype"},"Strong Ref Cursor with User Defined Record Datatype"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use of this is, we can customize the number of field we want to fetch and still we can have a record datatype for Strong Ref Cursor")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE my_rec IS RECORD(\n        emp_sal employees.salary %TYPE;);\n    TYPE my_RefCur IS REF CURSOR\n        RETURN my_rec;--User defined RECORD datatype for return\n    cur_var my_RefCur;\n    at_var employees.salary %TYPE;\nBEGIN\n    OPEN cur_var FOR SELECT salary FROM employees WHERE employee_id =100;\n        FETCH cur_var INTO at_var;\n    CLOSE cur_var;\n    DBMS_OUTPUT.PUT_LINE('Salary:' || at_var);\nEND;\n")),(0,l.kt)("h3",{id:"weak-ref-cursor"},"Weak REF CURSOR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Weak REF CURSORs are those cursors which do not have any return type"),(0,l.kt)("li",{parentName:"ul"},"These cursors are the most frequently used ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," as they are open to all ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," statements"),(0,l.kt)("li",{parentName:"ul"},"This ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," allows us to fetch any type of ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," statement irrespective of data structure .")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE ref_cursor_name IS REF CURSOR;\n----\nDECLARE\n    TYPE my_RefCur IS REF CURSOR;\n    cur_var my_RefCur;\n    f_name employees.first_name %TYPE;\n    emp_sal employees.salary %TYPE;\nBEGIN\n    OPEN cur_var FOR SELECT first_name, salary FROM employees WHERE employee_id =100;\n        FETCH cur_var INTO f_name,emp_sal;\n    CLOSE cur_var;\n    DBMS_OUTPUT.PUT_LINE(f_name || emp_sal);\nEND;\n")),(0,l.kt)("h3",{id:"sys_ref-cursor"},"SYS_REF CURSOR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is a predefined weak ",(0,l.kt)("inlineCode",{parentName:"li"},"REF CURSOR")," (",(0,l.kt)("inlineCode",{parentName:"li"},"TYPE SYS_REFCURSOR IS REF CURSOR"),");. So without declaring the ref pointer type, you can assign variable.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    cur_var SYS_REFCURSOR;\n    f_name employees.first_name %TYPE;\n    emp_sal employees.salary %TYPE;\nBEGIN\n    OPEN cur_var FOR SELECT first_name, salary FROM employees WHERE employee_id =100;\n        FETCH cur_var INTO f_name,emp_sal;\n    CLOSE cur_var;\n    DBMS_OUTPUT.PUT_LINE(f_name || emp_sal);\nEND;\n")),(0,l.kt)("h3",{id:"parameterized-cursors"},"Parameterized CURSORs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    emp_rec emp %ROWTYPE;\n    CURSOR emp_cur(max_wage NUMBER :=100, emp_name VARCHAR2) IS --Default value is assigned to parameter max_wage\n        SELECT * FROM emp WHERE sal>max_wage and ename=emp_name;\nBEGIN\n    OPEN emp_cur(2000,'Raj');\n    LOOP\n        FETCH emp_cur INTO emp_rec;\n            EXIT WHEN emp_cur %NOTFOUND;\n            DBMS_OUTPUT.PUT_LINE(emp_rec.ename ||emp_rec.sal);\n        END LOOP;\n    CLOSE emp_cur;\nEND;\n")),(0,l.kt)("h2",{id:"cursor-vs-ref-cursor"},"CURSOR vs. REF CURSOR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"REF CURSOR"),(0,l.kt)("th",{parentName:"tr",align:null},"CURSOR"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null},"Static")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can be associated with multiple SELECT statements in a PL/SQL block"),(0,l.kt)("td",{parentName:"tr",align:null},"Can only access single SELECT statement at a time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can be changed at run time"),(0,l.kt)("td",{parentName:"tr",align:null},"Cannot be changed at run time. Can be done with parameterized cursor.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can be returned to the client application"),(0,l.kt)("td",{parentName:"tr",align:null},"Cannot be returned to the client application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cannot be global. Cannot define them OUTSIDE of a procedure / function"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be global. Global cursors can be opened and executed outside of the package in which they are defined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can be passed from one sub-program to other sub-program"),(0,l.kt)("td",{parentName:"tr",align:null},"Cannot be passed")))),(0,l.kt)("h2",{id:"for-update-of-for-update-and-where-current-of"},"FOR UPDATE OF, FOR UPDATE and WHERE CURRENT OF"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FOR UPDATE")," will give exclusive row-level lock on all rows retrieved by ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," statement."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"FOR UPDATE")," clause is generally used in cases where an online system needs to display a set of row data on a screen and they need to ensure that the data does not change before the end-user has an opportunity to update the data. In the real-world, many large online systems do not use the ",(0,l.kt)("inlineCode",{parentName:"li"},"FOR UPDATE")," clause."),(0,l.kt)("li",{parentName:"ul"},"If you try to access the rows with the ",(0,l.kt)("inlineCode",{parentName:"li"},"NOWAIT")," clause, you will get an error message, ",(0,l.kt)("inlineCode",{parentName:"li"},"ORA-00054 Resource busy and acquire with NOWAIT")," specified. ",(0,l.kt)("inlineCode",{parentName:"li"},"NOWAIT")," option is just to investigate that yes i am not at all willing to wait to acquire the lock rather than hang myself, If i cannot get the lock immediately, an error is returned to signal that the lock is not possible at this time. You may try again later."),(0,l.kt)("li",{parentName:"ul"},"If there are more than one table are joined for update, then the use of ",(0,l.kt)("inlineCode",{parentName:"li"},"FOR UPDATE OF"),"... will only lock the rows in the tables that contain the columns you specify in the OF clause. You can never lock a single column, the minimum lock is at row level. It locks all rows in the table that contains the column, which are selected by the query."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WHERE CURRENT OF")," clause can be used for both ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"UPDATE")," statements inside a cursor's range to make changes to the last fetched row(s)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CURSOR cursor_name IS\n    SELECT * FROM ..\n    FOR UPDATE [OF column_list] [WAIT 15] [NOWAIT];\n--NOWAIT -cursor does not wait for resources. If it is locked, it will show error\n--WAIT 15 -wait up to 15 seconds for another session to release their lock. If not, show error\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    CURSOR cur IS\n        SELECT * FROM departments WHERE department_id = 210 FOR UPDATE;\n    emp_rec departments %ROWTYPE;\nBEGIN\n    OPEN cur;\n        LOOP\n            FETCH cur INTO emp_rec;\n            EXIT WHEN cur %NOTFOUND;\n            INSERT INTO emp_log VALUES emp_rec;\n            DELETE FROM departments WHERE CURRENT OF cur;\n        END LOOP;\n        COMMIT;\n    CLOSE cur;\nEND;\n")),(0,l.kt)("h2",{id:"invalid_cursor-error"},"INVALID_CURSOR error"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"if the cursor is not opened it will show INVALID_CURSOR")))}E.isMDXComponent=!0}}]);