import{G as e,H as n,J as t,K as o}from"./index.30ecfc8e.js";const c=(n,t=!1,o)=>new Promise(((c,s)=>{let r=e();o&&(r=e().in(o)),r[t?"selectAll":"select"](n).boundingClientRect((function(e){return t&&Array.isArray(e)&&e.length||!t&&e?c(e):void s("找不到元素")})).exec()}));function s(e,c="navigateTo"){const s=e.query?`${e.path}?${function(e){let n="";for(const t of Object.keys(e)){const c=e[t],s=encodeURIComponent(t)+"=";if(!r(c))if(console.log(encodeURIComponent(t),o(c)),o(c)){for(const e of Object.keys(c))if(!r(c[e])){n+=encodeURIComponent(t+"["+e+"]")+"="+encodeURIComponent(c[e])+"&"}}else n+=s+encodeURIComponent(c)+"&"}return n.slice(0,-1)}(e.query)}`:e.path;"navigateTo"==c&&n({url:s}),"reLaunch"==c&&t({url:s})}const r=e=>null==e&&void 0===e;const i=(e,n="rpx")=>Object.is(Number(e),NaN)?e:`${e}${n}`;function a({price:e,take:n="all",prec:t}){let[o,c=""]=(e+"").split(".");if(void 0!==t){for(let e=t-c.length;e>0;--e)c+="0";c=c.substr(0,t)}switch(n){case"int":return o;case"dec":return c;case"all":return o+"."+c}}function l(...e){return function(){return new Promise(((n,t)=>{const o=e.values(),c=e=>{const s=o.next();s.done?n(e):Promise.resolve(s.value(e)).then(c).catch(t)};c()}))}}export{i as a,a as f,c as g,s as n,l as s};
