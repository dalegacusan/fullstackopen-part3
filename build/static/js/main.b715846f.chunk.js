(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(16),u=n.n(r),i=(n(23),n(17)),o=n(3);n(24);function l(e){var t=e.person,n=e.handleDelete,s=t.id,a=t.name,r=t.number;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[a," ",Object(c.jsx)("span",{children:r})]},a),Object(c.jsx)("button",{type:"button",onClick:function(){return n(s,a)},children:"Delete"})]})}function j(e){var t=e.persons,n=e.filterName,s=e.handleDelete;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Numbers"}),t.map((function(e){var t=e.name.toLowerCase(),a=n.toLowerCase();return t.indexOf(a)>-1?Object(c.jsx)(l,{person:e,handleDelete:s},e.id):null}))]})}function d(e){var t=e.newName,n=e.newNumber,s=e.handleInputChange,a=e.handleFormSubmit;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("input",{type:"text",value:t,name:"name",onChange:s})]}),Object(c.jsxs)("div",{children:["Number: ",Object(c.jsx)("input",{type:"text",value:n,name:"number",onChange:s})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Add"})})]})})}function b(e){var t=e.filterName,n=e.handleFilterChange;return Object(c.jsxs)("div",{children:["Filter shown with ",Object(c.jsx)("input",{type:"text",value:t,onChange:n})]})}function h(e){var t=e.message,n=t.status,s=t.message;return null===s?null:Object(c.jsx)("div",{className:"success"===n||"updateSuccess"===n?"success":"error",children:s})}function m(){return Object(c.jsxs)("div",{style:{color:"red"},children:[Object(c.jsx)("p",{style:{margin:"0 5px"},children:"Name must be at least 3 characters long"}),Object(c.jsx)("p",{style:{margin:"0 5px"},children:"Phone number must have at least 8 digits"})]})}var O=n(5),f=n.n(O),x="/api/persons",p=function(){return f.a.get(x).then((function(e){return e.data}))},v=function(e){return f.a.post(x,e).then((function(e){return e.data}))},g=function(e){return f.a.delete("".concat(x,"/").concat(e))};function N(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),u=Object(o.a)(r,2),l=u[0],O=u[1],f=Object(s.useState)(""),x=Object(o.a)(f,2),N=x[0],C=x[1],w=Object(s.useState)(""),S=Object(o.a)(w,2),y=S[0],D=S[1],F=Object(s.useState)({status:null,message:null}),k=Object(o.a)(F,2),A=k[0],I=k[1],L=function(e,t){"success"===e?I({status:e,message:"Added ".concat(t.name)}):"deleted"===e?I({status:e,message:"Deleted ".concat(t.data.name)}):"error"===e&&I({status:e,message:t}),setTimeout((function(){I({status:null,message:null})}),3e3)};return Object(s.useEffect)((function(){p().then((function(e){return a(e)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(m,{}),Object(c.jsx)(h,{message:A}),Object(c.jsx)(b,{filterName:y,handleFilterChange:function(e){var t=e.target.value;D(t)}}),Object(c.jsx)("h2",{children:"Add New Contact"}),Object(c.jsx)(d,{newName:l,newNumber:N,handleInputChange:function(e){var t=e.target,n=t.name,c=t.value;"name"===n?O(c):C(c)},handleFormSubmit:function(e){e.preventDefault(),v({name:l,number:N}).then((function(e){L("success",e),a([].concat(Object(i.a)(n),[e])),O(""),C("")})).catch((function(e){var t=e.response.data.message;console.log(t),L("error",t)})),O(""),C("")}}),Object(c.jsx)(j,{persons:n,filterName:y,handleDelete:function(e,t){window.confirm("Delete ".concat(t,"?"))&&g(e).then((function(t){L("deleted",t),a(n.filter((function(t){return t.id!==e})))}))}})]})}var C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),C()}},[[42,1,2]]]);
//# sourceMappingURL=main.b715846f.chunk.js.map