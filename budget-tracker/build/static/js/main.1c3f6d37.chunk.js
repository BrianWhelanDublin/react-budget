(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{16:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(7),r=s.n(a),i=(s(14),s(3)),l=s(9),d=s(4),j=s(0),o={addExpense:"ADD_EXPENSE",deleteExpense:"DELETE_EXPENSE,"},b=function(e,t){switch(t.type){case o.addExpense:return Object(d.a)(Object(d.a)({},e),{},{expenses:[].concat(Object(l.a)(e.expenses),[t.payload])});case o.deleteExpense:return Object(d.a)(Object(d.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});default:return e}},u={budget:2e3,expenses:[{id:1,name:"Shopping",cost:50},{id:2,name:"Holiday",cost:300}],actions:o},x=Object(c.createContext)(),m=function(e){var t=Object(c.useReducer)(b,u),s=Object(i.a)(t,2),n=s[0],a=s[1];return Object(j.jsx)(x.Provider,{value:{budget:n.budget,expenses:n.expenses,actions:n.actions,dispatch:a},children:e.children})},O=s(18),p=function(){var e=Object(c.useContext)(x),t=e.dispatch,s=e.actions,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],l=a[1],d=Object(c.useState)(""),o=Object(i.a)(d,2),b=o[0],u=o[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault();var c={id:Object(O.a)(),name:r,cost:parseInt(b)};t({type:s.addExpense,payload:c}),l(""),u("")},children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-sm",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{value:r,onChange:function(e){return l(e.target.value)},id:"name",className:"form-control",type:"text",name:"name",required:!0})]}),Object(j.jsxs)("div",{className:"col-sm",children:[Object(j.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(j.jsx)("input",{value:b,onChange:function(e){return u(e.target.value)},id:"cost",className:"form-control",type:"text",name:"cost",required:!0})]}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})})]})})},h=function(){var e=Object(c.useContext)(x).budget;return Object(j.jsx)("div",{className:"alert alert-secondary",children:Object(j.jsxs)("span",{children:["Budget: \u20ac",e]})})},v=s(8),N=function(e){var t=e.id,s=e.name,n=e.cost,a=Object(c.useContext)(x),r=a.dispatch,i=a.actions;return Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[s,Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"badge bg-primary rounded-pill mr-3",children:["\u20ac ",n]}),Object(j.jsx)(v.a,{size:"1.5em",onClick:function(){r({type:i.deleteExpense,payload:t})}})]})]})},f=function(){var e=Object(c.useContext)(x).expenses;return Object(j.jsx)("ul",{className:"list-group",children:e.map((function(e){return Object(j.jsx)(N,{id:e.id,name:e.name,cost:e.cost})}))})},g=function(){var e=Object(c.useContext)(x).expenses.reduce((function(e,t){return e+t.cost}),0);return Object(j.jsx)("div",{className:"alert alert-primary",children:Object(j.jsxs)("span",{children:["Spend: \u20ac ",e]})})},y=function(){var e=Object(c.useContext)(x),t=e.expenses,s=e.budget,n=t.reduce((function(e,t){return e+t.cost}),0),a=n>s?"alert-danger":"alert-success";return Object(j.jsx)("div",{className:"alert ".concat(a),children:Object(j.jsxs)("span",{children:["Remaining : \u20ac",s-n]})})},E=function(){return Object(j.jsx)(m,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"mt-3",children:"My Budget Planner"}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsx)(h,{})}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsx)(y,{})}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsx)(g,{})})]}),Object(j.jsx)("h3",{className:"mt-3",children:"Expenses"}),Object(j.jsx)("div",{className:"row mt-3",children:Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsx)(f,{})})}),Object(j.jsx)("h3",{className:"mt-3",children:"Add Expense"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsx)(p,{})})})]})})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1c3f6d37.chunk.js.map