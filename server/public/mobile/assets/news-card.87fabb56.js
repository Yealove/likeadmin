import{_ as e}from"./u-image.a639a5fb.js";import{d as t,r as a,a as s,o as l,c as r,w as i,b as d,h as c,l as f,t as m,k as n,n as u,i as x}from"./index.8af89eab.js";import{_ as p}from"./icon_visit.9ad00ab7.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";var o=_(t({__name:"news-card",props:{item:{default:{}},newsId:{default:""}},setup:t=>(_,o)=>{const w=a(s("u-image"),e),g=n,b=u,h=x;return l(),r(h,{url:`/pages/news_detail/news_detail?id=${t.newsId}`},{default:i((()=>[d(g,{class:"news-card flex bg-white px-[20rpx] py-[32rpx]"},{default:i((()=>[t.item.image?(l(),r(g,{key:0,class:"mr-[20rpx]"},{default:i((()=>[d(w,{src:t.item.image,width:"240",height:"180"},null,8,["src"])])),_:1})):c("v-if",!0),d(g,{class:"news-card-content flex flex-col justify-between flex-1"},{default:i((()=>[d(g,{class:"news-card-content-title text-lg font-medium"},{default:i((()=>[f(m(t.item.title),1)])),_:1}),d(g,{class:"news-card-content-intro text-gray-400 text-sm mt-[16rpx]"},{default:i((()=>[f(m(t.item.desc),1)])),_:1}),d(g,{class:"text-muted text-xs w-full flex justify-between mt-[12rpx]"},{default:i((()=>[d(g,null,{default:i((()=>[f(m(t.item.create_time),1)])),_:1}),d(g,{class:"flex items-center"},{default:i((()=>[d(b,{src:p,class:"w-[30rpx] h-[30rpx]"}),d(g,{class:"ml-[10rpx]"},{default:i((()=>[f(m(t.item.click),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["url"])}}),[["__scopeId","data-v-4508fd44"]]);export{o as _};
