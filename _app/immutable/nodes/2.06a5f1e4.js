import{s as M,n as A}from"../chunks/scheduler.e108d1fd.js";import{S as q,i as z,g as f,s as T,m as j,h as m,y as E,c as V,j as I,n as P,f as o,k as $,a as u,z as L,x as d,A as D,o as K}from"../chunks/index.c5af3f48.js";import{b as N}from"../chunks/paths.80a6a04c.js";function U(l){let s,h="Welcome to SvelteKit",p,a,_='Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation',v,i,c,r,k,n,x,y,H,S,b;return{c(){s=f("h1"),s.textContent=h,p=T(),a=f("p"),a.innerHTML=_,v=T(),i=f("input"),c=T(),r=f("p"),k=j("Visit "),n=f("a"),x=j("this dynamic route ("),y=j(l[1]),H=j(")"),this.h()},l(t){s=m(t,"H1",{"data-svelte-h":!0}),E(s)!=="svelte-yyjjjs"&&(s.textContent=h),p=V(t),a=m(t,"P",{"data-svelte-h":!0}),E(a)!=="svelte-1vc1ga9"&&(a.innerHTML=_),v=V(t),i=m(t,"INPUT",{type:!0,placeholder:!0}),c=V(t),r=m(t,"P",{});var e=I(r);k=P(e,"Visit "),n=m(e,"A",{href:!0});var C=I(n);x=P(C,"this dynamic route ("),y=P(C,l[1]),H=P(C,")"),C.forEach(o),e.forEach(o),this.h()},h(){$(i,"type","text"),$(i,"placeholder","Choose an ID to go to."),$(n,"href",l[1])},m(t,e){u(t,s,e),u(t,p,e),u(t,a,e),u(t,v,e),u(t,i,e),L(i,l[0]),u(t,c,e),u(t,r,e),d(r,k),d(r,n),d(n,x),d(n,y),d(n,H),S||(b=D(i,"input",l[2]),S=!0)},p(t,[e]){e&1&&i.value!==t[0]&&L(i,t[0]),e&2&&K(y,t[1]),e&2&&$(n,"href",t[1])},i:A,o:A,d(t){t&&(o(s),o(p),o(a),o(v),o(i),o(c),o(r)),S=!1,b()}}}function W(l,s,h){let p,a="";function _(){a=this.value,h(0,a)}return l.$$.update=()=>{l.$$.dirty&1&&h(1,p=`${N}/dynamic/${a}`)},[a,p,_]}class F extends q{constructor(s){super(),z(this,s,W,U,M,{})}}export{F as component};
