import{a as $t,r as Zt,b as te,e as Z,h as D,f as ee,i as ne,j as M,w as oe,k as re,u as S,o as E,l as lt,c as at,m as ie,t as se,p as ce,q as le}from"./entry.7c480b0f.js";function ae(){const t=$t();return t._appConfig||(t._appConfig=Zt(te)),t._appConfig}const Ft=Object.freeze({left:0,top:0,width:16,height:16}),Pt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),tt=Object.freeze({...Ft,...Pt});Object.freeze({...tt,body:"",hidden:!1});({...Ft});const Mt=Object.freeze({width:null,height:null}),Et=Object.freeze({...Mt,...Pt});function ue(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in Mt?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const fe=/[\s,]+/;function he(t,o){o.split(fe).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function de(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}const pe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ge=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ut(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(pe);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=ge.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}function me(t,o){const n={...tt,...t},r={...Et,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(d=>{const p=[],g=d.hFlip,f=d.vFlip;let y=d.rotate;g?f?y+=2:(p.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),p.push("scale(-1 1)"),e.top=e.left=0):f&&(p.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),p.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,p.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:p.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,p.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),p.length&&(i='<g transform="'+p.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,h;return s===null?(h=c===null?"1em":c==="auto"?a:c,u=ut(h,l/a)):(u=s==="auto"?l:s,h=c===null?ut(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:h.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:i}}const ye=/\sid="(\S+)"/g,we="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let be=0;function Se(t,o=we){const n=[];let r;for(;r=ye.exec(t);)n.push(r[1]);return n.length&&n.forEach(e=>{const i=typeof o=="function"?o(e):o+(be++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}function ve(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function xe(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ie(t){return'url("data:image/svg+xml,'+xe(t)+'")'}const ft={...Et,inline:!1},ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ce={display:"inline-block"},Q={backgroundColor:"currentColor"},Ot={backgroundColor:"transparent"},ht={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},dt={webkitMask:Q,mask:Q,background:Ot};for(const t in dt){const o=dt[t];for(const n in ht)o[t+n]=ht[n]}const A={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";A[t+"-flip"]=o,A[t.slice(0,1)+"-flip"]=o,A[t+"Flip"]=o});function pt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const je=(t,o)=>{const n=ue(ft,o),r={...ke},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in o){const f=o[g];if(f!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&he(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[g]=de(f):typeof f=="number"&&(n[g]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const y=A[g];y?(f===!0||f==="true"||f===1)&&(n[y]=!0):ft[g]===void 0&&(r[g]=f)}}}const l=me(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let g=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=Se(l.body,f?()=>f+"ID"+g++:"iconifyVue"),D("svg",r)}const{body:u,width:h,height:b}=t,d=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),p=ve(u,{...a,width:h+"",height:b+""});return r.style={...i,"--svg":Ie(p),width:pt(a.width),height:pt(a.height),...Ce,...d?Q:Ot,...c},D("span",r)},_e=Object.create(null),Te=Z({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?_e[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:je({...tt,...n},t)}}),j=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,o,n,r="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;r=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:r,prefix:l,name:c};return o&&!L(a)?null:a}const i=e[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return o&&!L(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return o&&!L(c,n)?null:c}return null},L=(t,o)=>t?!!((t.provider===""||t.provider.match(j))&&(o&&t.prefix===""||t.prefix.match(j))&&t.name.match(j)):!1,At=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),F=Object.freeze({...At,...R}),U=Object.freeze({...F,body:"",hidden:!1});function $e(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(o.rotate||0))%4;return r&&(n.rotate=r),n}function gt(t,o){const n=$e(t,o);for(const r in U)r in R?r in t&&!(r in n)&&(n[r]=R[r]):r in o?n[r]=o[r]:r in t&&(n[r]=t[r]);return n}function Fe(t,o){const n=t.icons,r=t.aliases||Object.create(null),e=Object.create(null);function i(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(r))).forEach(i),e}function Pe(t,o,n){const r=t.icons,e=t.aliases||Object.create(null);let i={};function s(c){i=gt(r[c]||e[c],i)}return s(o),n.forEach(s),gt(t,i)}function Lt(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const r=Fe(t);for(const e in r){const i=r[e];i&&(o(e,Pe(t,e,i)),n.push(e))}return n}const Me={provider:"",aliases:{},not_found:{},...At};function V(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function Nt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!V(t,Me))return null;const n=o.icons;for(const e in n){const i=n[e];if(!e.match(j)||typeof i.body!="string"||!V(i,U))return null}const r=o.aliases||Object.create(null);for(const e in r){const i=r[e],s=i.parent;if(!e.match(j)||typeof s!="string"||!n[s]&&!r[s]||!V(i,U))return null}return o}const mt=Object.create(null);function Ee(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function I(t,o){const n=mt[t]||(mt[t]=Object.create(null));return n[o]||(n[o]=Ee(t,o))}function et(t,o){return Nt(o)?Lt(o,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Oe(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let _=!1;function zt(t){return typeof t=="boolean"&&(_=t),_}function Dt(t){const o=typeof t=="string"?$(t,!0,_):t;if(o){const n=I(o.provider,o.prefix),r=o.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Ae(t,o){const n=$(t,!0,_);if(!n)return!1;const r=I(n.provider,n.prefix);return Oe(r,n.name,o)}function Le(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),_&&!o&&!t.prefix){let e=!1;return Nt(t)&&(t.prefix="",Lt(t,(i,s)=>{s&&Ae(i,s)&&(e=!0)})),e}const n=t.prefix;if(!L({provider:o,prefix:n,name:"a"}))return!1;const r=I(o,n);return!!et(r,t)}const Rt=Object.freeze({width:null,height:null}),Ht=Object.freeze({...Rt,...R}),Ne=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ze=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function yt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(Ne);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=ze.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}function De(t,o){const n={...F,...t},r={...Ht,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(d=>{const p=[],g=d.hFlip,f=d.vFlip;let y=d.rotate;g?f?y+=2:(p.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),p.push("scale(-1 1)"),e.top=e.left=0):f&&(p.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),p.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,p.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:p.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,p.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),p.length&&(i='<g transform="'+p.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,h;return s===null?(h=c===null?"1em":c==="auto"?a:c,u=yt(h,l/a)):(u=s==="auto"?l:s,h=c===null?yt(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:h.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:i}}const Re=/\sid="(\S+)"/g,He="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Be=0;function Ve(t,o=He){const n=[];let r;for(;r=Re.exec(t);)n.push(r[1]);return n.length&&n.forEach(e=>{const i=typeof o=="function"?o(e):o+(Be++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}const G=Object.create(null);function qe(t,o){G[t]=o}function W(t){return G[t]||G[""]}function nt(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ot=Object.create(null),C=["https://api.simplesvg.com","https://api.unisvg.com"],N=[];for(;C.length>0;)C.length===1||Math.random()>.5?N.push(C.shift()):N.push(C.pop());ot[""]=nt({resources:["https://api.iconify.design"].concat(N)});function Qe(t,o){const n=nt(o);return n===null?!1:(ot[t]=n,!0)}function rt(t){return ot[t]}const Ue=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let wt=Ue();function Ge(t,o){const n=rt(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const i=o+".json?icons=";r=n.maxURL-e-n.path.length-i.length}return r}function We(t){return t===404}const Ke=(t,o,n)=>{const r=[],e=Ge(t,o),i="icons";let s={type:i,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(r.push(s),s={type:i,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function Je(t){if(typeof t=="string"){const o=rt(t);if(o)return o.path}return"/"}const Xe=(t,o,n)=>{if(!wt){n("abort",424);return}let r=Je(o.provider);switch(o.type){case"icons":{const i=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=o.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let e=503;wt(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(We(s)?"abort":"next",s)});return}return e=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",e)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",e)})},Ye={prepare:Ke,send:Xe};function Ze(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,i)=>e.provider!==i.provider?e.provider.localeCompare(i.provider):e.prefix!==i.prefix?e.prefix.localeCompare(i.prefix):e.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const i=e.provider,s=e.prefix,c=e.name,l=n[i]||(n[i]=Object.create(null)),a=l[s]||(l[s]=I(i,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const h={provider:i,prefix:s,name:c};u.push(h)}),o}function Bt(t,o){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(e=>e.id!==o))})}function tn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const r=t.provider,e=t.prefix;o.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:r,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:r,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||Bt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let en=0;function nn(t,o,n){const r=en++,e=Bt.bind(null,n,r);if(!o.pending.length)return e;const i={id:r,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),e}function on(t,o=!0,n=!1){const r=[];return t.forEach(e=>{const i=typeof e=="string"?$(e,o,n):e;i&&r.push(i)}),r}var rn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sn(t,o,n,r){const e=t.resources.length,i=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let w=t.resources.slice(0);for(s=[];w.length>1;){const v=Math.floor(Math.random()*w.length);s.push(w[v]),w=w.slice(0,v).concat(w.slice(v+1))}s=s.concat(w)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",a=0,u,h=null,b=[],d=[];typeof r=="function"&&d.push(r);function p(){h&&(clearTimeout(h),h=null)}function g(){l==="pending"&&(l="aborted"),p(),b.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),b=[]}function f(w,v){v&&(d=[]),typeof w=="function"&&d.push(w)}function y(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:b.length,subscribe:f,abort:g}}function m(){l="failed",d.forEach(w=>{w(void 0,u)})}function ct(){b.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),b=[]}function Yt(w,v,k){const P=v!=="success";switch(b=b.filter(x=>x!==w),l){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(v==="abort"){u=k,m();return}if(P){u=k,b.length||(s.length?B():m());return}if(p(),ct(),!t.random){const x=t.resources.indexOf(w.resource);x!==-1&&x!==t.index&&(t.index=x)}l="completed",d.forEach(x=>{x(k)})}function B(){if(l!=="pending")return;p();const w=s.shift();if(w===void 0){if(b.length){h=setTimeout(()=>{p(),l==="pending"&&(ct(),m())},t.timeout);return}m();return}const v={status:"pending",resource:w,callback:(k,P)=>{Yt(v,k,P)}};b.push(v),a++,h=setTimeout(B,t.rotate),n(w,o,v.callback)}return setTimeout(B),y}function Vt(t){const o={...rn,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=sn(o,c,l,(h,b)=>{r(),a&&a(h,b)});return n.push(u),u}function i(c){return n.find(l=>c(l))||null}return{query:e,find:i,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:r}}function bt(){}const q=Object.create(null);function cn(t){if(!q[t]){const o=rt(t);if(!o)return;const n=Vt(o),r={config:o,redundancy:n};q[t]=r}return q[t]}function ln(t,o,n){let r,e;if(typeof t=="string"){const i=W(t);if(!i)return n(void 0,424),bt;e=i.send;const s=cn(t);s&&(r=s.redundancy)}else{const i=nt(t);if(i){r=Vt(i);const s=t.resources?t.resources[0]:"",c=W(s);c&&(e=c.send)}}return!r||!e?(n(void 0,424),bt):r.query(o,e,n)().abort}const St="iconify2",T="iconify",qt=T+"-count",vt=T+"-version",Qt=36e5,an=168;function K(t,o){try{return t.getItem(o)}catch{}}function it(t,o,n){try{return t.setItem(o,n),!0}catch{}}function xt(t,o){try{t.removeItem(o)}catch{}}function J(t,o){return it(t,qt,o.toString())}function X(t){return parseInt(K(t,qt))||0}const H={local:!0,session:!0},Ut={local:new Set,session:new Set};let st=!1;function un(t){st=t}let O=typeof window>"u"?{}:window;function Gt(t){const o=t+"Storage";try{if(O&&O[o]&&typeof O[o].length=="number")return O[o]}catch{}H[t]=!1}function Wt(t,o){const n=Gt(t);if(!n)return;const r=K(n,vt);if(r!==St){if(r){const c=X(n);for(let l=0;l<c;l++)xt(n,T+l.toString())}it(n,vt,St),J(n,0);return}const e=Math.floor(Date.now()/Qt)-an,i=c=>{const l=T+c.toString(),a=K(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}xt(n,l)}};let s=X(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,J(n,s)):Ut[t].add(c))}function Kt(){if(!st){un(!0);for(const t in H)Wt(t,o=>{const n=o.data,r=o.provider,e=n.prefix,i=I(r,e);if(!et(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function fn(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const r in H)Wt(r,e=>{const i=e.data;return e.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===o});return!0}function hn(t,o){st||Kt();function n(r){let e;if(!H[r]||!(e=Gt(r)))return;const i=Ut[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=X(e),!J(e,s+1))return;const c={cached:Math.floor(Date.now()/Qt),provider:t.provider,data:o};return it(e,T+s.toString(),JSON.stringify(c))}o.lastModified&&!fn(t,o.lastModified)||!Object.keys(o.icons).length||(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function It(){}function dn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,tn(t)}))}function pn(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,e=t.iconsToLoad;delete t.iconsToLoad;let i;if(!e||!(i=W(n)))return;i.prepare(n,r,e).forEach(c=>{ln(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=et(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(h=>{u.delete(h)}),hn(t,l)}catch(a){console.error(a)}dn(t)})})}))}const Jt=(t,o)=>{const n=on(t,!0,zt()),r=Ze(n);if(!r.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(r.loaded,r.missing,r.pending,It)}),()=>{l=!1}}const e=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,i.push(I(a,u));const h=e[a]||(e[a]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:h}=l,b=I(a,u),d=b.pendingIcons||(b.pendingIcons=new Set);d.has(h)||(d.add(h),e[a][u].push(h))}),i.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&pn(l,e[a][u])}),o?nn(o,r,i):It},gn=t=>new Promise((o,n)=>{const r=typeof t=="string"?$(t,!0):t;if(!r){n(t);return}Jt([r||t],e=>{if(e.length&&r){const i=Dt(r);if(i){o({...F,...i});return}}n(t)})});function mn(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in Rt?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const yn=/[\s,]+/;function wn(t,o){o.split(yn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function bn(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}function Sn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function vn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function xn(t){return'url("data:image/svg+xml,'+vn(t)+'")'}const kt={...Ht,inline:!1},In={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},kn={display:"inline-block"},Y={backgroundColor:"currentColor"},Xt={backgroundColor:"transparent"},Ct={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},jt={webkitMask:Y,mask:Y,background:Xt};for(const t in jt){const o=jt[t];for(const n in Ct)o[t+n]=Ct[n]}const z={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";z[t+"-flip"]=o,z[t.slice(0,1)+"-flip"]=o,z[t+"Flip"]=o});function _t(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Tt=(t,o)=>{const n=mn(kt,o),r={...In},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let g in o){const f=o[g];if(f!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[g]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&wn(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[g]=bn(f):typeof f=="number"&&(n[g]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const y=z[g];y?(f===!0||f==="true"||f===1)&&(n[y]=!0):kt[g]===void 0&&(r[g]=f)}}}const l=De(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let g=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=Ve(l.body,f?()=>f+"ID"+g++:"iconifyVue"),D("svg",r)}const{body:u,width:h,height:b}=t,d=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),p=Sn(u,{...a,width:h+"",height:b+""});return r.style={...i,"--svg":xn(p),width:_t(a.width),height:_t(a.height),...kn,...d?Y:Xt,...c},D("span",r)};zt(!0);qe("",Ye);if(typeof document<"u"&&typeof window<"u"){Kt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Le(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const r="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Qe(n,e)||console.error(r)}catch{console.error(r)}}}}const Cn={...F,body:""};Z({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=$(t,!1,!0))===null)return this.abortLoading(),null;const r=Dt(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Jt([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:r,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return Tt(Cn,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),Tt({...F,...o.data},n)}});const jn=["width","height"],_n=Z({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){let o,n;const r=t,e=$t(),i=ae().nuxtIcon,s=ee("icons",()=>({})),c=ne(!1),l=M(()=>((i==null?void 0:i.aliases)||{})[r.name]||r.name),a=M(()=>{var d;return(d=s.value)==null?void 0:d[l.value]}),u=M(()=>e.vueApp.component(l.value)),h=M(()=>{const d=r.size||(i==null?void 0:i.size)||"1em";return String(Number(d))===d?`${d}px`:d});async function b(){var d;u.value||(d=s.value)!=null&&d[l.value]||(c.value=!0,s.value[l.value]=await gn(l.value).catch(()=>{}),c.value=!1)}return oe(()=>l.value,b),!u.value&&([o,n]=re(()=>b()),o=await o,n()),(d,p)=>S(c)?(E(),lt("span",{key:0,class:"icon",width:S(h),height:S(h)},null,8,jn)):S(a)?(E(),at(S(Te),{key:1,icon:S(a),class:"icon",width:S(h),height:S(h)},null,8,["icon","width","height"])):S(u)?(E(),at(ie(S(u)),{key:2,class:"icon",width:S(h),height:S(h)},null,8,["width","height"])):(E(),lt("span",{key:3,class:"icon",style:ce({fontSize:S(h),lineHeight:S(h),width:S(h),height:S(h)})},se(t.name),5))}});const $n=le(_n,[["__scopeId","data-v-ca945699"]]);export{$n as default};
