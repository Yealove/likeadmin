import{d as e,A as a,o as s,c as t,w as r,h as l,g as c,b as o,l as h,e as u,f as n,t as i,F as d,k as p,m as _,z as f,V as m,ah as g,aE as x,aF as y,aG as v,at as w,r as b,a as k}from"./index.aeb0ad66.js";import{_ as j}from"./u-search.82c889f7.js";import{_ as C}from"./news-card.026bf925.js";import{_ as V}from"./z-paging.068dec24.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{b as I}from"./shop.df5e288c.js";import{g as F}from"./news.605f6314.js";import"./u-icon.04cc1bc3.js";import"./u-image.d07f2475.js";import"./icon_visit.9ad00ab7.js";var S=z(e({__name:"suggest",props:{hot_search:{default:()=>({data:[],status:0})},his_search:{default:()=>[]}},emits:["search","clear"],setup(e,{emit:_}){const f=e,m=a((()=>f.hot_search.data.filter((e=>e.name)))),g=e=>{_("search",e)};return(a,f)=>{const x=p;return s(),t(x,{class:"suggest bg-white"},{default:r((()=>[l(" 热门搜索 "),1==e.hot_search.status&&c(m).length?(s(),t(x,{key:0,class:"hot"},{default:r((()=>[o(x,{class:"font-medium pl-[24rpx] pt-[26rpx] pb-[6rpx] text-lg"},{default:r((()=>[h("热门搜索")])),_:1}),o(x,{class:"w-full px-[24rpx]"},{default:r((()=>[(s(!0),u(d,null,n(c(m),((e,a)=>(s(),t(x,{key:a,class:"keyword truncate max-w-full",onClick:a=>g(e.name)},{default:r((()=>[h(i(e.name),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):l("v-if",!0),1==e.hot_search.status&&c(m).length&&e.his_search.length?(s(),t(x,{key:1,class:"mx-[24rpx] my-[40rpx] border-b border-solid border-0 border-light"})):l("v-if",!0),l(" 历史搜索 "),e.his_search.length?(s(),t(x,{key:2,class:"history"},{default:r((()=>[o(x,{class:"flex justify-between px-[24rpx] pb-[6rpx] pt-[26rpx]"},{default:r((()=>[o(x,{class:"text-lg font-medium"},{default:r((()=>[h("历史搜索")])),_:1}),o(x,{class:"text-xs text-muted",onClick:f[0]||(f[0]=()=>_("clear"))},{default:r((()=>[h("清空")])),_:1})])),_:1}),o(x,{class:"w-full px-[24rpx]"},{default:r((()=>[(s(!0),u(d,null,n(e.his_search,((e,a)=>(s(),t(x,{key:a,class:"keyword truncate",onClick:a=>g(e)},{default:r((()=>[h(i(e),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):l("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-6ff22e4e"]]);var U=z(e({__name:"search",setup(e){const a=_({hot_search:{data:[],status:1},his_search:[],result:[],searching:!1}),c=f(""),h=m(),i=e=>{c.value=e,c.value&&(a.his_search.includes(c.value)||(a.his_search.unshift(c.value),g.set(x,a.his_search))),h.value.reload(),a.searching=!0},z=async()=>{(await w({title:"温馨提示",content:"是否清空历史记录？"})).confirm&&(g.set(x,""),a.his_search=[])},U=async(e,a)=>{try{const{lists:s}=await F({keyword:c.value,page_no:e,page_size:a});h.value.complete(s)}catch(s){console.log("报错=>",s),h.value.complete(!1)}};return(async()=>{try{a.hot_search=await I()}catch(e){console.log("获取热门搜索失败=>",e)}})(),a.his_search=g.get(x)||[],(e,_)=>{const f=b(k("u-search"),j),m=p,g=b(k("news-card"),C),x=b(k("z-paging"),V);return s(),t(m,{class:"search"},{default:r((()=>[l(" 搜索框 "),o(m,{class:"px-[24rpx] py-[14rpx] bg-white"},{default:r((()=>[o(f,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=e=>c.value=e),placeholder:"请输入关键词搜索",height:"72",onSearch:i,onCustom:i,onClear:_[1]||(_[1]=e=>a.searching=!1)},null,8,["modelValue"])])),_:1}),l(" 搜索 "),o(m,{class:"search-content"},{default:r((()=>[l("  "),y(o(S,{onSearch:i,onClear:z,hot_search:a.hot_search,his_search:a.his_search},null,8,["hot_search","his_search"]),[[v,!a.searching]]),l("  "),y(o(m,{class:"search-content-s pt-[20rpx]"},{default:r((()=>[o(x,{ref_key:"paging",ref:h,modelValue:a.result,"onUpdate:modelValue":_[2]||(_[2]=e=>a.result=e),onQuery:U,fixed:!1,height:"100%"},{default:r((()=>[(s(!0),u(d,null,n(a.result,(e=>(s(),t(g,{key:e.id,item:e,newsId:e.id},null,8,["item","newsId"])))),128))])),_:1},8,["modelValue"])])),_:1},512),[[v,a.searching]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-f5db2546"]]);export{U as default};
