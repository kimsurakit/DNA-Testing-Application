import{S as _,i as c,v as u,J as h,T as m,o as a,l,x as t,u as s,t as i,B as n,z as x,A as f,D as b,C as g}from"./entry.9ff7ed65.js";const w={class:"flex flex-wrap"},v={class:"w-full px-4"},y={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"},k={class:"rounded-t bg-white mb-0 px-6 py-6"},B={class:"grid gap-4 grid-cols-12"},N={class:"p-8 col-span-12 mx-6 my-3"},C={class:"border-slate-300 border-b-[1px] overflow-x-auto"},F={class:"min-w-full border-collapse"},D=t("thead",{class:"bg-slate-100"},[t("tr",null,[t("th",{class:"uppercase p-4 text-left font-semibold text-xs"}," \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A Test item "),t("th",{class:"uppercase p-4 text-left font-semibold text-xs"}," \u0E08\u0E33\u0E19\u0E27\u0E19\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 Number of Samples "),t("th",{class:"uppercase p-4 text-left font-semibold text-xs"}," \u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 (\u0E1A\u0E32\u0E17) Price per sample (Baht) "),t("th",{class:"uppercase p-4 text-left font-semibold text-xs"}," \u0E23\u0E32\u0E04\u0E32 (\u0E1A\u0E32\u0E17) Subtotal (Baht) ")])],-1),P={key:0},S=t("td",{class:"font-normal text-left text-sm p-4 whitespace-nowrap"},[t("div",{class:"font-semibold text-lg"}," \u0E15\u0E23\u0E27\u0E08\u0E01\u0E32\u0E23\u0E1B\u0E25\u0E2D\u0E21\u0E1B\u0E19\u0E02\u0E49\u0E32\u0E27\u0E2B\u0E2D\u0E21\u0E21\u0E30\u0E25\u0E34\u0E44\u0E17\u0E22 ")],-1),T={class:"font-normal text-right text-2xl p-4 whitespace-nowrap"},V=t("td",{class:"font-normal text-right text-2xl p-4 whitespace-nowrap text-slate-400"}," 2,000 ",-1),E={class:"font-normal text-right text-2xl p-4 whitespace-nowrap 0"},j={class:"ml-auto text-left w-72"},M={class:"flex justify-between"},z=t("div",{class:"font-medium text-slate-400"},"\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21 /Total",-1),A={key:0,class:"font-medium"},J={class:"col-span-12 md:col-span-6"},L=["src"],R={class:"col-span-12 md:col-span-6"},$=["src"],q={class:"p-3 flex justify-end gap-x-2"},G=t("button",{class:"inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 cursor-pointer",type:"submit"}," Confirm ",-1),O={__name:"[id]",setup(H){const r=_(),e=c(null),d=u();return c(),h(async()=>{try{const o=await d(`/api/dna/${r.params.id}`,{credentials:"include"});console.log(o),e.value=o}catch(o){o.status==404&&m({statusCode:404,statusMessage:"Page Not Found"})}}),(o,I)=>{const p=b;return a(),l("div",w,[t("div",v,[t("div",y,[t("div",k,[t("div",B,[t("div",N,[t("div",C,[t("table",F,[D,s(e)?(a(),l("tbody",P,[t("tr",null,[S,t("td",T,i(s(e).sample.length),1),V,t("td",E,i(s(e).summary),1)])])):n("",!0)])]),t("div",j,[t("div",M,[z,s(e)?(a(),l("div",A,i(s(e).summary),1)):n("",!0)])])]),t("div",J,[s(e)?(a(),l("iframe",{key:0,class:"w-full h-[40rem]",src:s(e).report_file,title:"PDF"},null,8,L)):n("",!0)]),t("div",R,[s(e)?(a(),l("iframe",{key:0,class:"w-full h-[40rem]",src:s(e).invoice,title:"PDF"},null,8,$)):n("",!0)])])]),t("div",q,[x(p,{class:"inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 cursor-pointer",to:"/dashboard/report"},{default:f(()=>[g(" Exit ")]),_:1}),G])])])])}}};export{O as default};
