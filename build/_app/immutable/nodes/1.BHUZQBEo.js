import{s as b,c as f,d as x}from"../chunks/scheduler.R0WKJYyz.js";import{S as y,i as S,g as u,m as h,s as j,h as d,j as v,n as g,f as l,c as q,a as c,y as E,o as $}from"../chunks/index.egjSkYxU.js";import{p as C}from"../chunks/stores.t68q2LLX.js";function H(p){let a,t=p[0].status+"",r,o,n,i=p[0].error?.message+"",m;return{c(){a=u("h1"),r=h(t),o=j(),n=u("p"),m=h(i)},l(e){a=d(e,"H1",{});var s=v(a);r=g(s,t),s.forEach(l),o=q(e),n=d(e,"P",{});var _=v(n);m=g(_,i),_.forEach(l)},m(e,s){c(e,a,s),E(a,r),c(e,o,s),c(e,n,s),E(n,m)},p(e,[s]){s&1&&t!==(t=e[0].status+"")&&$(r,t),s&1&&i!==(i=e[0].error?.message+"")&&$(m,i)},i:f,o:f,d(e){e&&(l(a),l(o),l(n))}}}function P(p,a,t){let r;return x(p,C,o=>t(0,r=o)),[r]}class A extends y{constructor(a){super(),S(this,a,P,H,b,{})}}export{A as component};
