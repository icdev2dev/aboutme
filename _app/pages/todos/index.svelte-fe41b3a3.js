import{S as ae,i as ne,s as oe,e as E,k as D,c as w,a as M,n as F,d as g,b as o,H as Q,f as W,I as f,V as q,W as X,X as le,Y as se,Z as re,_ as ie,$,R as ue,t as de,U as ce,g as _e,a0 as fe,w as he,x as pe,u as ve,a1 as me,a2 as x,r as be,a3 as ke,J as ge}from"../../chunks/vendor-356027b4.js";function C(u,{pending:t,error:e,result:a}){let h;async function j(p){const c=h={};p.preventDefault();const m=new FormData(u);t&&t(m,u);try{const r=await fetch(u.action,{method:u.method,headers:{accept:"application/json"},body:m});if(c!==h)return;r.ok?a(r,u):e?e(r,null,u):console.error(await r.text())}catch(r){if(e)e(null,r,u);else throw r}}return u.addEventListener("submit",j),{destroy(){u.removeEventListener("submit",j)}}}function ee(u,t,e){const a=u.slice();return a[6]=t[e],a[7]=t,a[8]=e,a}function te(u,t){let e,a,h,j,p,c,m,r,n,v,_,b,I,O,U,s,i,l,T,B,N,P,H,R,L,A=ge,y,J,Y;function Z(...k){return t[3](t[6],t[7],t[8],...k)}function z(){return t[4](t[6],t[7],t[8])}function G(){return t[5](t[6])}return{key:u,first:null,c(){e=E("div"),a=E("form"),h=E("input"),p=D(),c=E("button"),v=D(),_=E("form"),b=E("input"),O=D(),U=E("button"),i=D(),l=E("form"),T=E("button"),H=D(),this.h()},l(k){e=w(k,"DIV",{class:!0});var d=M(e);a=w(d,"FORM",{action:!0,method:!0});var S=M(a);h=w(S,"INPUT",{type:!0,name:!0,class:!0}),p=F(S),c=w(S,"BUTTON",{class:!0,"aria-label":!0}),M(c).forEach(g),S.forEach(g),v=F(d),_=w(d,"FORM",{class:!0,action:!0,method:!0});var V=M(_);b=w(V,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),O=F(V),U=w(V,"BUTTON",{class:!0,"aria-label":!0}),M(U).forEach(g),V.forEach(g),i=F(d),l=w(d,"FORM",{action:!0,method:!0});var K=M(l);T=w(K,"BUTTON",{class:!0,"aria-label":!0}),M(T).forEach(g),K.forEach(g),H=F(d),d.forEach(g),this.h()},h(){o(h,"type","hidden"),o(h,"name","done"),h.value=j=t[6].done?"":"true",o(h,"class","svelte-16tkvjn"),o(c,"class","toggle svelte-16tkvjn"),o(c,"aria-label",m="Mark todo as "+(t[6].done?"not done":"done")),o(a,"action",r="/todos/"+t[6].uid+".json?_method=patch"),o(a,"method","post"),o(b,"aria-label","Edit todo"),o(b,"type","text"),o(b,"name","text"),b.value=I=t[6].text,o(b,"class","svelte-16tkvjn"),o(U,"class","save svelte-16tkvjn"),o(U,"aria-label","Save todo"),o(_,"class","text svelte-16tkvjn"),o(_,"action",s="/todos/"+t[6].uid+".json?_method=patch"),o(_,"method","post"),o(T,"class","delete svelte-16tkvjn"),o(T,"aria-label","Delete todo"),T.disabled=B=t[6].pending_delete,o(l,"action",N="/todos/"+t[6].uid+".json?_method=delete"),o(l,"method","post"),o(e,"class","todo svelte-16tkvjn"),Q(e,"done",t[6].done),this.first=e},m(k,d){W(k,e,d),f(e,a),f(a,h),f(a,p),f(a,c),f(e,v),f(e,_),f(_,b),f(_,O),f(_,U),f(e,i),f(e,l),f(l,T),f(e,H),y=!0,J||(Y=[q(n=C.call(null,a,{pending:Z,result:t[1]})),q(C.call(null,_,{result:t[1]})),q(P=C.call(null,l,{pending:z,result:G}))],J=!0)},p(k,d){t=k,(!y||d&1&&j!==(j=t[6].done?"":"true"))&&(h.value=j),(!y||d&1&&m!==(m="Mark todo as "+(t[6].done?"not done":"done")))&&o(c,"aria-label",m),(!y||d&1&&r!==(r="/todos/"+t[6].uid+".json?_method=patch"))&&o(a,"action",r),n&&X(n.update)&&d&1&&n.update.call(null,{pending:Z,result:t[1]}),(!y||d&1&&I!==(I=t[6].text)&&b.value!==I)&&(b.value=I),(!y||d&1&&s!==(s="/todos/"+t[6].uid+".json?_method=patch"))&&o(_,"action",s),(!y||d&1&&B!==(B=t[6].pending_delete))&&(T.disabled=B),(!y||d&1&&N!==(N="/todos/"+t[6].uid+".json?_method=delete"))&&o(l,"action",N),P&&X(P.update)&&d&1&&P.update.call(null,{pending:z,result:G}),d&1&&Q(e,"done",t[6].done)},r(){L=e.getBoundingClientRect()},f(){le(e),A(),se(e,L)},a(){A(),A=re(e,L,me,{duration:200})},i(k){y||(k&&ie(()=>{R||(R=$(e,x,{start:.7},!0)),R.run(1)}),y=!0)},o(k){k&&(R||(R=$(e,x,{start:.7},!1)),R.run(0)),y=!1},d(k){k&&g(e),k&&R&&R.end(),J=!1,ue(Y)}}}function je(u){let t,e,a,h,j,p,c,m,r,n=[],v=new Map,_,b,I,O=u[0];const U=s=>s[6].uid;for(let s=0;s<O.length;s+=1){let i=ee(u,O,s),l=U(i);v.set(l,n[s]=te(l,i))}return{c(){t=D(),e=E("div"),a=E("h1"),h=de("Todos"),j=D(),p=E("form"),c=E("input"),r=D();for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){ce('[data-svelte="svelte-181o7gf"]',document.head).forEach(g),t=F(s),e=w(s,"DIV",{class:!0});var l=M(e);a=w(l,"H1",{});var T=M(a);h=_e(T,"Todos"),T.forEach(g),j=F(l),p=w(l,"FORM",{class:!0,action:!0,method:!0});var B=M(p);c=w(B,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),B.forEach(g),r=F(l);for(let N=0;N<n.length;N+=1)n[N].l(l);l.forEach(g),this.h()},h(){document.title="Todos",o(c,"name","text"),o(c,"aria-label","Add todo"),o(c,"placeholder","+ tap to add a todo"),o(c,"class","svelte-16tkvjn"),o(p,"class","new svelte-16tkvjn"),o(p,"action","/todos.json"),o(p,"method","post"),o(e,"class","todos svelte-16tkvjn")},m(s,i){W(s,t,i),W(s,e,i),f(e,a),f(a,h),f(e,j),f(e,p),f(p,c),f(e,r);for(let l=0;l<n.length;l+=1)n[l].m(e,null);_=!0,b||(I=q(m=C.call(null,p,{result:u[2]})),b=!0)},p(s,[i]){if(m&&X(m.update)&&i&1&&m.update.call(null,{result:s[2]}),i&3){O=s[0],be();for(let l=0;l<n.length;l+=1)n[l].r();n=fe(n,i,U,1,s,O,v,e,ke,te,null,ee);for(let l=0;l<n.length;l+=1)n[l].a();he()}},i(s){if(!_){for(let i=0;i<O.length;i+=1)pe(n[i]);_=!0}},o(s){for(let i=0;i<n.length;i+=1)ve(n[i]);_=!1},d(s){s&&g(t),s&&g(e);for(let i=0;i<n.length;i+=1)n[i].d();b=!1,I()}}}const Te=async({fetch:u})=>{const t=await u("/todos.json");if(t.ok)return{props:{todos:await t.json()}};const{message:e}=await t.json();return{error:new Error(e)}};function Ee(u,t,e){let{todos:a}=t;async function h(r){const n=await r.json();e(0,a=a.map(v=>v.uid===n.uid?n:v))}const j=async(r,n)=>{const v=await r.json();e(0,a=[...a,v]),n.reset()},p=(r,n,v,_)=>{e(0,n[v].done=!!_.get("done"),a)},c=(r,n,v)=>e(0,n[v].pending_delete=!0,a),m=r=>{e(0,a=a.filter(n=>n.uid!==r.uid))};return u.$$set=r=>{"todos"in r&&e(0,a=r.todos)},[a,h,j,p,c,m]}class ye extends ae{constructor(t){super();ne(this,t,Ee,je,oe,{todos:0})}}export{ye as default,Te as load};
