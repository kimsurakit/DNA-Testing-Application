import{O as c,u as s,o as t,l as o,x as n,t as i}from"./entry.88758412.js";import{a as d}from"./fetch.27e4003e.js";const p={key:0},u={key:1},k={__name:"[id]",setup(_){const e=c();console.log(e.params.id);const{pending:a,data:r}=d(`https://fakestoreapi.com/products/${e.params.id}`,"$HDv9hEssD8");return(l,m)=>s(a)?(t(),o("div",p," Loading ... ")):(t(),o("div",u,[n("div",null,i(s(r)),1)]))}};export{k as default};
