(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(14),u=n.n(r),i=(n(20),n(3));n(21);function o(e){var t=e.person,n=e.handleDelete,a=t.id,s=t.name,r=t.number;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[s," ",Object(c.jsx)("span",{children:r})]},s),Object(c.jsx)("button",{type:"button",onClick:function(){return n(a,s)},children:"Delete"})]})}function l(e){var t=e.persons,n=e.filterName,a=e.handleDelete;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Numbers"}),t.map((function(e){var t=e.name.toLowerCase(),s=n.toLowerCase();return t.indexOf(s)>-1?Object(c.jsx)(o,{person:e,handleDelete:a},e.id):null}))]})}function d(e){var t=e.newName,n=e.newNumber,a=e.handleInputChange,s=e.handleFormSubmit;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:s,children:[Object(c.jsxs)("div",{children:["Name: ",Object(c.jsx)("input",{type:"text",value:t,name:"name",onChange:a})]}),Object(c.jsxs)("div",{children:["Number: ",Object(c.jsx)("input",{type:"text",value:n,name:"number",onChange:a})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Add"})})]})})}function j(e){var t=e.filterName,n=e.handleFilterChange;return Object(c.jsxs)("div",{children:["Filter shown with ",Object(c.jsx)("input",{type:"text",value:t,onChange:n})]})}function b(e){var t=e.message,n=t.status,a=t.message;return null===a?null:Object(c.jsx)("div",{className:"success"===n||"updateSuccess"===n?"success":"error",children:a})}var h=n(4),m=n.n(h),f="/api/persons",O=function(){return m.a.get(f).then((function(e){return e.data}))},p=function(e){return m.a.post(f,e).then((function(e){return e.data}))},x=function(e){return m.a.delete("".concat(f,"/").concat(e))};function v(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),o=u[0],h=u[1],m=Object(a.useState)(""),f=Object(i.a)(m,2),v=f[0],g=f[1],w=Object(a.useState)(""),C=Object(i.a)(w,2),N=C[0],S=C[1],D=Object(a.useState)({status:null,message:null}),F=Object(i.a)(D,2),y=F[0],k=F[1],A=function(e,t){"success"===e?k({status:e,message:"Added ".concat(t.name)}):"deleted"===e?k({status:e,message:"Deleted ".concat(t.data.name)}):"error"===e?k({status:e,message:"Person ".concat(t.name," was already removed from server")}):"updateSuccess"===e&&k({status:e,message:"Successfully updated ".concat(t.name)}),setTimeout((function(){k({status:null,message:null})}),3e3)};return Object(a.useEffect)((function(){O().then((function(e){return s(e)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(b,{message:y}),Object(c.jsx)(j,{filterName:N,handleFilterChange:function(e){var t=e.target.value;S(t)}}),Object(c.jsx)("h2",{children:"Add New Contact"}),Object(c.jsx)(d,{newName:o,newNumber:v,handleInputChange:function(e){var t=e.target,n=t.name,c=t.value;"name"===n?h(c):g(c)},handleFormSubmit:function(e){e.preventDefault(),p({name:o,number:v}).then((function(e){console.log(e)})),h(""),g("")}}),Object(c.jsx)(l,{persons:n,filterName:N,handleDelete:function(e,t){window.confirm("Delete ".concat(t,"?"))&&x(e).then((function(t){A("deleted",t),s(n.filter((function(t){return t.id!==e})))}))}})]})}var g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),g()}},[[39,1,2]]]);
//# sourceMappingURL=main.bde5f801.chunk.js.map