import{aS as l,f as u}from"./index.e2e7edc0.js";function P(o){let e={};const{page:i=1,size:r=15,fetchFun:c,params:s={},firstLoading:g=!1}=o;e=Object.assign({},l(s));const a=u({page:i,size:r,loading:g,count:0,lists:[]}),n=()=>(a.loading=!0,c({page_no:a.page,page_size:a.size,...s}).then(t=>(a.count=t==null?void 0:t.count,a.lists=t==null?void 0:t.lists,Promise.resolve(t))).catch(t=>Promise.reject(t)).finally(()=>{a.loading=!1}));return{pager:a,getLists:n,resetParams:()=>{Object.keys(e).forEach(t=>{s[t]=e[t]}),n()},resetPage:()=>{a.page=1,n()}}}export{P as u};
