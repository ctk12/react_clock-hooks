(this["webpackJsonpreact_clock-hooks"]=this["webpackJsonpreact_clock-hooks"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),a=n(2),r=n(1),i=(n(9),n(0)),s=function(e){var t=e.clockName,n=(new Date).toUTCString().slice(-12,-4),c=Object(r.useState)(n),o=Object(a.a)(c,2),s=o[0],u=o[1];return Object(r.useEffect)((function(){var e=window.setInterval((function(){var e=(new Date).toUTCString().slice(-12,-4);console.info(e),u(e)}),1e3);return function(){window.clearInterval(e)}}),[]),Object(i.jsxs)("div",{className:"Clock",children:[Object(i.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(i.jsx)("span",{className:"Clock__time",children:s})]})};var u=function(){var e=Object(r.useState)("Clock-0"),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!0),u=Object(a.a)(o,2),l=u[0],f=u[1];return Object(r.useEffect)((function(){var e=window.setInterval((function(){c(function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}())}),3300);return document.addEventListener("contextmenu",(function(e){e.preventDefault(),f(!1)})),document.addEventListener("click",(function(){f(!0)})),function(){document.removeEventListener("contextmenu",(function(e){e.preventDefault(),f(!1)})),document.removeEventListener("click",(function(){f(!0)})),window.clearInterval(e)}}),[]),Object(r.useEffect)((function(){l&&"Clock-0"!==n&&console.debug("Renamed to ".concat(n))}),[n]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"React clock"}),l&&Object(i.jsx)(s,{clockName:n})]})};o.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.9b312826.chunk.js.map