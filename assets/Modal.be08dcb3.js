let t=document.createElement("style");t.innerHTML="",document.head.appendChild(t);import{S as e,i as a,s as n,c as s,j as o,a as r,p as c,m as $,q as d,t as i,b as l,d as u,o as f,h as m,n as p,H as g,T as C,U as h,G as b,g as x,k as y,l as j,r as S}from"./index.e7d8faec.js";import{B as w}from"./Button.2d988908.js";import"./Close20.3ed6365a.js";import{M as B}from"./Modal.d9ba04e9.js";function T(t){let e;return{c(){e=m("Create database")},l(t){e=p(t,"Create database")},m(t,a){d(t,e,a)},d(t){t&&f(e)}}}function k(t){let e,a;return{c(){e=x("p"),a=m("Create a new Cloudant database in the US South region.")},l(t){e=y(t,"P",{});var n=j(e);a=p(n,"Create a new Cloudant database in the US South region."),n.forEach(f)},m(t,n){d(t,e,n),S(e,a)},d(t){t&&f(e)}}}function H(t){let e,a,n,m,p;function b(e){t[2].call(null,e)}e=new w({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),e.$on("click",t[1]);let x={modalHeading:"Create database",primaryButtonText:"Confirm",secondaryButtonText:"Cancel",$$slots:{default:[k]},$$scope:{ctx:t}};return void 0!==t[0]&&(x.open=t[0]),n=new B({props:x}),g.push(()=>C(n,"open",b)),n.$on("click:button--secondary",t[3]),n.$on("open",t[4]),n.$on("close",t[5]),n.$on("submit",t[6]),{c(){s(e.$$.fragment),a=o(),s(n.$$.fragment)},l(t){r(e.$$.fragment,t),a=c(t),r(n.$$.fragment,t)},m(t,s){$(e,t,s),d(t,a,s),$(n,t,s),p=!0},p(t,[a]){const s={};128&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s);const o={};128&a&&(o.$$scope={dirty:a,ctx:t}),!m&&1&a&&(m=!0,o.open=t[0],h(()=>m=!1)),n.$set(o)},i(t){p||(i(e.$$.fragment,t),i(n.$$.fragment,t),p=!0)},o(t){l(e.$$.fragment,t),l(n.$$.fragment,t),p=!1},d(t){u(e,t),t&&f(a),u(n,t)}}}function M(t,e,a){let n=!1;return[n,()=>a(0,n=!0),function(t){n=t,a(0,n)},()=>a(0,n=!1),function(e){b(t,e)},function(e){b(t,e)},function(e){b(t,e)}]}export default class extends e{constructor(t){super(),a(this,t,M,H,n,{})}}