import{v as _,i as r,K as p,o as h,l as m,x as s,t,u as e,y as c,D as a,G as u,F as n}from"./entry.7c480b0f.js";const g={class:"flex flex-wrap"},x={class:"w-full px-4"},v={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0"},f={class:"rounded-t bg-white mb-0 px-6 py-6"},y={class:"bg-white p-3 shadow-sm rounded-sm"},b=s("div",{class:"flex items-center space-x-2 font-semibold text-gray-900 leading-8"},null,-1),w={class:"text-gray-700"},k={class:"grid md:grid-cols-2 text-sm"},N={class:"grid grid-cols-2"},B=s("div",{class:"px-4 py-2 font-semibold"},"First Name",-1),F={class:"px-4 py-2"},z={class:"grid grid-cols-2"},D=s("div",{class:"px-4 py-2 font-semibold"},"Last Name",-1),E={class:"px-4 py-2"},L={class:"grid grid-cols-2"},V=s("div",{class:"px-4 py-2 font-semibold"},"Position",-1),C={class:"px-4 py-2"},P={class:"grid grid-cols-2"},T=s("div",{class:"px-4 py-2 font-semibold"},"Line ID",-1),j={class:"px-4 py-2"},A={class:"grid grid-cols-2"},G=s("div",{class:"px-4 py-2 font-semibold"},"Telephone",-1),I={class:"px-4 py-2"},K={class:"grid grid-cols-2"},M=s("div",{class:"px-4 py-2 font-semibold"},"Address",-1),S={class:"px-4 py-2"},q={class:"grid grid-cols-2"},H=s("div",{class:"px-4 py-2 font-semibold"},"Email.",-1),J={class:"px-4 py-2"},O={class:"text-blue-800"},W={__name:"profile",setup(Q){const l=_(),o=r({email:"",first_name:"",last_name:"",position:"",line_id:"",telephone:"",mobile:"",address:"",province:"",district:"",sub_district:"",zip_code:"",company_name:"",tax_id:"",branch_no:"",company_address:"",company_province:"",company_district:"",company_sub_district:"",company_zip_code:"",id:null,username:""});return p(async()=>{try{const i=await l("/auth/users/me",{credentials:"include"});o.value={...o.value,...i},console.log(o.value)}catch(i){console.log(i)}}),(i,R)=>{const d=u;return h(),m("div",g,[s("div",x,[s("div",v,[s("div",f,[s("div",y,[b,s("div",w,[s("div",k,[s("div",N,[B,s("div",F,t(e(o).first_name),1)]),s("div",z,[D,s("div",E,t(e(o).last_name),1)]),s("div",L,[V,s("div",C,t(e(o).position),1)]),s("div",P,[T,s("div",j,t(e(o).line_id),1)]),s("div",A,[G,s("div",I,t(e(o).telephone),1)]),s("div",K,[M,s("div",S,t([e(o).address,e(o).province,e(o).district,e(o).sub_district,e(o).zip_code].join(",")),1)]),s("div",q,[H,s("div",J,[s("a",O,t(e(o).email),1)])])])]),c(d,{to:"/dashboard/user",class:"block w-full text-center text-orange-500 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"},{default:a(()=>[n(" Edit Profile ")]),_:1}),c(d,{to:"/dashboard/user/change_password",class:"block w-full text-center text-orange-500 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"},{default:a(()=>[n(" Change your password ")]),_:1})])])])])])}}};export{W as default};
