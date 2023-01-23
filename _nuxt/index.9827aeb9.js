import w from"./Icon.7f1bb2d7.js";import{i as m,W as v,Z as b,v as y,J as k,K as C,w as A,o as z,l as M,x as e,z as t,V as i,u as l,A as n,G as N,H as S,F as T,D as U}from"./entry.9ff7ed65.js";import{_ as B}from"./logo.62c54f25.js";const F={class:"text-gray-100 text-xl"},L={class:"p-2.5 mt-1 flex items-center"},R=e("img",{class:"h-8 w-8",src:B,alt:"Your Company"},null,-1),W=e("h1",{class:"font-bold text-gray-200 text-sm ml-3"}," Rice DNA Testing Unit at URRC ",-1),$=e("div",{class:"my-2 bg-gray-600 h-[1px]"},null,-1),D=e("div",{class:"p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer"},[e("input",{type:"text",placeholder:"Search",class:"mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"})],-1),E=e("span",{class:"text-[15px] ml-4 text-gray-200 font-bold"},"Home",-1),V=e("span",{class:"text-[15px] ml-4 text-gray-200 font-bold"},"User Profile",-1),j=e("span",{class:"text-[15px] ml-4 text-gray-200 font-bold"},"My address",-1),G=e("div",{class:"my-4 bg-orange-600 h-[1px]"},null,-1),H={class:"flex justify-between w-full items-center"},P=e("span",{class:"text-[15px] ml-4 text-gray-200 font-bold w-full"}," DNA Testing Application ",-1),Q={class:"text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold",id:"submenu"},I=e("h1",{class:"cursor-pointer p-2 hover:bg-orange-600 rounded-md mt-1"}," All ",-1),J=e("h1",{class:"cursor-pointer p-2 hover:bg-orange-600 rounded-md mt-1"}," Create ",-1),K=e("span",{class:"text-[15px] ml-4 text-gray-200 font-bold"},"Logout",-1),O=[K],Y={class:"px-4 md:px-10 mx-auto w-full -m-24 pt-32"},te={__name:"index",setup(Z){const o=m(!0),p=window.matchMedia("(max-width: 768px)"),h=window.matchMedia("(min-width: 1024px)"),c=m(window.innerWidth),{isAuth:x}=v(b()),_=y();k(()=>{window.addEventListener("resize",u)}),C(()=>{window.removeEventListener("resize",u)}),A(c,()=>{h.matches&&(o.value=!0),p.matches&&(o.value=!1)});function u(a){c.value=window.innerWidth}async function f(){try{await _("/auth/jwt/destroy/",{method:"POST",credentials:"include"}),x.value=!1}catch(a){console.log(a.message)}finally{await T("/")}}return(a,r)=>{const d=w,s=U;return z(),M(S,null,[e("div",{class:i([{hidden:l(o)},"fixed text-white text-4xl top-5 left-4 cursor-pointer z-50 lg:hidden"]),onClick:r[0]||(r[0]=g=>o.value=!0)},[t(d,{class:"p-2 rounded-full bg-slate-800 hover:bg-slate-500",name:"ic:baseline-menu"})],2),e("div",{class:i([{hidden:!l(o)},"sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-64 overflow-y-auto text-center bg-darkGreen z-50"])},[e("div",F,[e("div",L,[R,W,e("div",{onClick:r[1]||(r[1]=g=>o.value=!1),class:"h-8 w-8 cursor-pointer ml-auto lg:hidden hover:bg-gray-500 rounded-full text-center"},[t(d,{name:"ic:baseline-close"})])]),$]),D,t(s,{to:"/",class:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"},{default:n(()=>[E]),_:1}),t(s,{to:"/dashboard/profile",class:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"},{default:n(()=>[V]),_:1}),t(s,{to:"/dashboard/company",class:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"},{default:n(()=>[j]),_:1}),G,t(s,{to:"/dashboard/report",class:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"},{default:n(()=>[e("div",H,[P,t(d,{name:"ic:baseline-keyboard-arrow-down"})])]),_:1}),e("div",Q,[t(s,{to:"/dashboard/report"},{default:n(()=>[I]),_:1}),t(s,{to:"/dashboard/create"},{default:n(()=>[J]),_:1})]),e("div",{onClick:f,class:"p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-orange-600 text-white"},O)],2),e("div",{class:i([{"md:ml-64":l(o)},"relative"])},[e("div",Y,[N(a.$slots,"default")])],2)],64)}}};export{te as default};
