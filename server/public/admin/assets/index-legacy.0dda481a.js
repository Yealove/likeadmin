System.register(["./index-legacy.bb301f21.js","./element-plus-legacy.9a978554.js","./vue-echarts-legacy.02ab5290.js","./@vue-legacy.6b85f8d1.js","./@vueuse-legacy.157488cf.js","./lodash-legacy.ed0945d2.js","./axios-legacy.770d9bb0.js","./vue-router-legacy.4ee22123.js","./pinia-legacy.98b0b201.js","./vue-demi-legacy.ade83891.js","./css-color-function-legacy.b6dd1ba0.js","./color-legacy.b068fdf4.js","./clone-legacy.2819e742.js","./color-convert-legacy.24fd1954.js","./color-string-legacy.f1460f94.js","./color-name-legacy.592a2748.js","./@element-plus-legacy.d952503a.js","./nprogress-legacy.124f3b37.js","./vue-clipboard3-legacy.c012a06d.js","./clipboard-legacy.4032b320.js","./echarts-legacy.4a09bb08.js","./zrender-legacy.f9b1c945.js","./highlight.js-legacy.1a13e67a.js","./@highlightjs-legacy.5de22af8.js","./lodash-es-legacy.55fbc42a.js","./dayjs-legacy.79633238.js","./async-validator-legacy.36fe4908.js","./@ctrl-legacy.c91dabf1.js","./@popperjs-legacy.e05acee0.js","./escape-html-legacy.ff6604b3.js","./normalize-wheel-es-legacy.b0eca4cb.js","./resize-detector-legacy.4af1ec2e.js"],(function(e){"use strict";var s,a,l,t,i,d,c,r,o,n,v,u,y,x,g,f,p,b,m,h;return{setters:[e=>{s=e.v,a=e._},e=>{l=e.w,t=e.I},e=>{i=e.C},e=>{d=e.d,c=e.a1,r=e.j,o=e.a6,n=e.o,v=e.c,u=e.a,y=e.W,x=e.O,g=e.V,f=e.X,p=e.a9,b=e.u,m=e.R,h=e.U},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const j={class:"workbench"},w={class:"md:flex"},_=u("span",{class:"card-title"},"版本信息",-1),k={class:"flex leading-9"},O=u("div",{class:"w-20"},"当前版本",-1),z={class:"flex leading-9"},A=u("div",{class:"w-20"},"基于框架",-1),E={class:"flex leading-9"},S=u("div",{class:"w-20"},"获取渠道",-1),C=["href"],G=h("官网"),I=["href"],R=h("Gitee"),U=u("span",{class:"card-title"},"今日数据",-1),V={class:"text-tx-secondary text-xs ml-4"},W={class:"flex flex-wrap"},X={class:"w-1/2 md:w-1/4"},q=u("div",{class:"leading-10"},"访问量(人)",-1),B={class:"text-6xl"},D={class:"text-tx-secondary text-xs"},F={class:"w-1/2 md:w-1/4"},H=u("div",{class:"leading-10"},"销售额(元)",-1),J={class:"text-6xl"},K={class:"text-tx-secondary text-xs"},L={class:"w-1/2 md:w-1/4"},M=u("div",{class:"leading-10"},"订单量(笔)",-1),N={class:"text-6xl"},P={class:"text-tx-secondary text-xs"},Q={class:"w-1/2 md:w-1/4"},T=u("div",{class:"leading-10"},"新增用户",-1),Y={class:"text-6xl"},Z={class:"text-tx-secondary text-xs"},$={class:"function mb-4"},ee=u("span",null,"常用功能",-1),se={class:"flex flex-wrap"},ae={class:"mt-2"},le={class:"md:flex"},te=u("span",null,"访问量趋势图",-1),ie=u("span",null,"服务支持",-1),de={class:"ml-2"},ce={class:"text-tx-regular text-xs mt-4"},re=d({name:"workbench"});e("default",d({...re,setup(e){const d=c({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["访问量"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"访问量",data:[0],type:"line",smooth:!0}]}});return r((()=>{s().then((e=>{d.version=e.version,d.today=e.today,d.menu=e.menu,d.visitor=e.visitor,d.support=e.support,d.visitorOption.xAxis.data=[],d.visitorOption.series[0].data=[],e.visitor.date.reverse().forEach((e=>{d.visitorOption.xAxis.data.push(e)})),e.visitor.list[0].data.forEach((e=>{d.visitorOption.series[0].data.push(e)}))})).catch((e=>{console.log("err",e)}))})),(e,s)=>{const c=l,r=t,h=a,re=o("router-link");return n(),v("div",j,[u("div",w,[y(r,{class:"!border-none mb-4 md:mr-4",shadow:"never"},{header:x((()=>[_])),default:x((()=>[u("div",null,[u("div",k,[O,u("span",null,g(d.version.version),1)]),u("div",z,[A,u("span",null,g(d.version.based),1)]),u("div",E,[S,u("div",null,[u("a",{href:d.version.channel.website,target:"_blank"},[y(c,{type:"success",size:"small"},{default:x((()=>[G])),_:1})],8,C),u("a",{class:"ml-3",href:d.version.channel.gitee,target:"_blank"},[y(c,{type:"danger",size:"small"},{default:x((()=>[R])),_:1})],8,I)])])])])),_:1}),y(r,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:x((()=>[u("div",null,[U,u("span",V," 更新时间："+g(d.today.time),1)])])),default:x((()=>[u("div",W,[u("div",X,[q,u("div",B,g(d.today.today_visitor),1),u("div",D," 总访问量："+g(d.today.total_visitor),1)]),u("div",F,[H,u("div",J,g(d.today.today_sales),1),u("div",K," 总销售额："+g(d.today.total_sales),1)]),u("div",L,[M,u("div",N,g(d.today.order_num),1),u("div",P," 总订单量："+g(d.today.order_sum),1)]),u("div",Q,[T,u("div",Y,g(d.today.today_new_user),1),u("div",Z," 总访用户："+g(d.today.total_new_user),1)])])])),_:1})]),u("div",$,[y(r,{class:"flex-1 !border-none",shadow:"never"},{header:x((()=>[ee])),default:x((()=>[u("div",se,[(n(!0),v(f,null,p(d.menu,(e=>(n(),v("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:e},[y(re,{to:e.url,class:"mb-3 flex flex-col items-center"},{default:x((()=>[y(h,{width:"40px",height:"40px",src:e?.image},null,8,["src"]),u("div",ae,g(e.name),1)])),_:2},1032,["to"])])))),128))])])),_:1})]),u("div",le,[y(r,{class:"flex-1 !border-none md:mr-4 mb-4",shadow:"never"},{header:x((()=>[te])),default:x((()=>[u("div",null,[y(b(i),{style:{height:"350px"},option:d.visitorOption,autoresize:!0},null,8,["option"])])])),_:1}),y(r,{class:"!border-none mb-4",shadow:"never"},{header:x((()=>[ie])),default:x((()=>[u("div",null,[(n(!0),v(f,null,p(d.support,((e,s)=>(n(),v("div",{key:s},[u("div",{class:m(["flex items-center pb-10 pt-10",{"border-b border-br":0==s}])},[y(h,{width:120,height:120,class:"flex-none",src:e.image},null,8,["src"]),u("div",de,[u("div",null,g(e.title),1),u("div",ce,g(e.desc),1)])],2)])))),128))])])),_:1})])])}}}))}}}));
