(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),i=c(3),l=c(1);c(10);function r(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(5),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),l=r(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:"page-item disabled",children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){n(t-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===t}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){n(e)},children:e},e)})})),Object(j.jsx)("li",{className:"page-item",children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){t<i&&n(t+1)},children:"\xbb"})})]})},p=r(1,42).map((function(e){return"Item ".concat(e)})),b=function(){var e=Object(l.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(3),r=Object(i.a)(n,1)[0];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page 1 (items 1 - 5 of 42)"}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:r,currentPage:c,onPageChange:t}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e})}))})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.709912f8.chunk.js.map