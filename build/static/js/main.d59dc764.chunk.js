(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(17),u=n.n(s),o=(n(24),n(18)),i=n(8),d=n(3);n(25);function l(e){var t=e.person,n=e.handleDelete,a=t.id,r=t.name,s=t.number;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[r," ",Object(c.jsx)("span",{children:s})]},r),Object(c.jsx)("button",{type:"button",onClick:function(){return n(a,r)},children:"Delete"})]})}function j(e){var t=e.persons,n=e.filterName,a=e.handleDelete;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Numbers"}),t.map((function(e){var t=e.name.toLowerCase(),r=n.toLowerCase();return t.indexOf(r)>-1?Object(c.jsx)(l,{person:e,handleDelete:a},e.id):null}))]})}function b(e){var t=e.newName,n=e.newNumber,a=e.handleInputChange,r=e.handleFormSubmit;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:r,children:[Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("input",{type:"text",value:t,name:"name",onChange:a})]}),Object(c.jsxs)("div",{children:["Number: ",Object(c.jsx)("input",{type:"text",value:n,name:"number",onChange:a})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Add"})})]})})}function h(e){var t=e.filterName,n=e.handleFilterChange;return Object(c.jsxs)("div",{children:["Filter shown with ",Object(c.jsx)("input",{type:"text",value:t,onChange:n})]})}function m(e){var t=e.message,n=t.status,a=t.message;return null===a?null:Object(c.jsx)("div",{className:"success"===n||"updateSuccess"===n?"success":"error",children:a})}var f=n(5),O=n.n(f),p="/api/persons",v=function(){return O.a.get(p).then((function(e){return e.data}))},x=function(e){return O.a.post(p,e).then((function(e){return e.data}))},g=function(e,t){return O.a.put("".concat(p,"/").concat(e.id),t)},w=function(e){return O.a.delete("".concat(p,"/").concat(e))};function C(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),u=Object(d.a)(s,2),l=u[0],f=u[1],O=Object(a.useState)(""),p=Object(d.a)(O,2),C=p[0],N=p[1],S=Object(a.useState)(""),y=Object(d.a)(S,2),F=y[0],k=y[1],D=Object(a.useState)({status:null,message:null}),A=Object(d.a)(D,2),I=A[0],L=A[1],P=function(e,t){"success"===e?L({status:e,message:"Added ".concat(t.name)}):"error"===e?L({status:e,message:"Person ".concat(t.name," was already removed from server")}):"updateSuccess"===e&&L({status:e,message:"Successfully updated ".concat(t.name)}),setTimeout((function(){L({status:null,message:null})}),5e3)};return Object(a.useEffect)((function(){v().then((function(e){return r(e)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(m,{message:I}),Object(c.jsx)(h,{filterName:F,handleFilterChange:function(e){var t=e.target.value;k(t)}}),Object(c.jsx)("h2",{children:"Add New Contact"}),Object(c.jsx)(b,{newName:l,newNumber:C,handleInputChange:function(e){var t=e.target,n=t.name,c=t.value;"name"===n?f(c):N(c)},handleFormSubmit:function(e){e.preventDefault();var t={name:l,number:C},c=n.find((function(e){return e.name===l}));c?window.confirm("".concat(l," is already added to phonebook, would you like to replace the old number with a new one?"))&&g(c,Object(i.a)(Object(i.a)({},c),{},{number:C})).then((function(e){P("updateSuccess",c),r(n.map((function(t){return t.id===e.data.id?e.data:t})))})).catch((function(e){P("error",c)})):x(t).then((function(e){P("success",e),r([].concat(Object(o.a)(n),[e])),f(""),N("")})),f(""),N("")}}),Object(c.jsx)(j,{persons:n,filterName:F,handleDelete:function(e,t){window.confirm("Delete ".concat(t,"?"))&&(w(e),r(n.filter((function(t){return t.id!==e}))))}})]})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.d59dc764.chunk.js.map