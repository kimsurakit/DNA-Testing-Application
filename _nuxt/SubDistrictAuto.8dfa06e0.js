import{v as z,i as s,j as S,K as $,o as d,l as p,x as v,t as x,A as B,B as C,u as f,J as L,L as M}from"./entry.7c480b0f.js";import{o as P,u as A,a as H}from"./index.1c2f869c.js";const T={class:"relative"},j={class:"block uppercase text-gray-600 text-xs font-bold mb-2"},q=["value"],I=["onClick"],R={__name:"SubDistrictAuto",props:["msg","modelValue","zipcode","url","keyfiled","subDistrict","district","province","eng","subDistrictEn","districtEn","provinceEn","test"],emits:["update:zipcode","update:subDistrict","update:district","update:province","update:subDistrictEn","update:districtEn","update:provinceEn","update:modelValue"],setup(l,{emit:t}){const o=l,h=z(),u=s(null),i=s([]),c=s([]),_=s(""),g=s(""),r=s(!1);P(u,()=>{r.value=!1});const y=H(async()=>{const e=new URLSearchParams;e.append("q",o.modelValue);const a=await h(o.url+"?limit=100&"+e,{credentials:"include"});a.results&&(c.value=[...a.results],g.value=a.next)},1e3,{maxWait:5e3});async function w(e){r.value=!0;let a=e.target.value;t("update:modelValue",a),y()}const m=S({get(){return o.modelValue?c.value:i.value},set(e){}});async function D(){if(r.value=!0,i.value.length)return;const e=await h("/api/sub_district?limit=100",{credentials:"include"});console.log(e.results),_.value=e.next,i.value=[...e.results]}const k=async e=>{r.value=!1,t("update:zipcode",e.zip_code),t("update:subDistrict",e.name_th),t("update:district",e.district_info.name_th),t("update:province",e.district_info.province_info.name_th),o.eng&&(t("update:subDistrictEn",e.name_en),t("update:districtEn",e.district_info.name_en),t("update:provinceEn",e.district_info.province_info.name_en))};$(()=>{u.value.addEventListener("scroll",E)});async function E(e){e.target.scrollTop+e.target.offsetHeight>=e.target.scrollHeight/1.7&&V()}const V=A(()=>{o.modelValue&&b(g,c),b(_,i)},500);async function b(e,a){if(e.value){const n=await $fetch(e.value,{credentials:"include"});a.value.push(...n.results),e.value=n.next}}return(e,a)=>(d(),p("div",T,[v("label",j,x(l.msg),1),v("input",{type:"text",value:l.modelValue,onClick:D,onInput:w,class:"invalid:border-pink-500 invalid:text-pink-600 invalid:border border-0 px-3 py-3 placeholder-gray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"},null,40,q),B(v("ul",{ref_key:"target",ref:u,class:"max-h-56 overflow-y-auto absolute z-20 w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200"},[(d(!0),p(L,null,M(f(m),(n,F)=>(d(),p("li",{class:"py-2 px-4 w-full rounded-t-lg border-b border-gray-200 cursor-pointer hover:bg-gray-200",key:F,onClick:K=>k(n)},x(`${n.zip_code} > ${n.name_th} > ${n.district_info.name_th} > ${n.district_info.province_info.name_th}`),9,I))),128))],512),[[C,f(m).length&&f(r)]])]))}};export{R as _};
