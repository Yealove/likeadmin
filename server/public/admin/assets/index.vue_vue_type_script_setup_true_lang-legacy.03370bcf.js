System.register(["./element-plus-legacy.9a978554.js","./@vue-legacy.6b85f8d1.js","./@vueuse-legacy.157488cf.js"],(function(e){"use strict";var l,t,a,i,o,u,s,n,p,d,r,c,m,v,f,y,h,b,g,w;return{setters:[e=>{l=e.X,t=e.Q,a=e.R,i=e.C,o=e.w},e=>{u=e.d,s=e.r,n=e.w,p=e.o,d=e.c,r=e.W,c=e.O,m=e.a,v=e.J,f=e.$,y=e.M,h=e.X,b=e.a9,g=e.U},e=>{w=e.c}],execute:function(){const x={class:"popover-input__input mr-[10px] flex-1"},_={class:"popover-input__btns flex-none"},k=g("取消"),z=g("确定"),C=["onClick"];e("_",u({__name:"index",props:{value:{type:String},type:{type:String,default:"text"},width:{type:[Number,String],default:"300px"},placeholder:String,disabled:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},size:{type:String,default:"default"},limit:{type:Number,default:200},showLimit:{type:Boolean,default:!1},teleported:{type:Boolean,default:!0}},emits:["confirm"],setup(e,{emit:u}){const g=e,S=s(!1),V=s(!1),M=s(),U=()=>{B(),u("confirm",M.value)},j=()=>{g.disabled||(S.value=!0)},B=()=>{S.value=!1};return n((()=>g.value),(e=>{M.value=e}),{immediate:!0}),w(document.documentElement,"click",(()=>{V.value||B()})),(u,s)=>{const n=t,g=a,w=i,L=o,N=l;return p(),d("div",{onMouseenter:s[4]||(s[4]=e=>V.value=!0),onMouseleave:s[5]||(s[5]=e=>V.value=!1)},[r(N,{placement:"top",visible:S.value,"onUpdate:visible":s[3]||(s[3]=e=>S.value=e),width:e.width,trigger:"contextmenu",class:"popover-input",teleported:e.teleported,persistent:!1,"popper-class":"!p-0"},{reference:c((()=>[m("div",{class:"inline",onClick:f(j,["stop"])},[v(u.$slots,"default")],8,C)])),default:c((()=>[m("div",{class:"flex p-3",onClick:s[2]||(s[2]=f((()=>{}),["stop"]))},[m("div",x,["select"==e.type?(p(),y(g,{key:0,class:"flex-1",size:e.size,modelValue:M.value,"onUpdate:modelValue":s[0]||(s[0]=e=>M.value=e),teleported:e.teleported},{default:c((()=>[(p(!0),d(h,null,b(e.options,(e=>(p(),y(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["size","modelValue","teleported"])):(p(),y(w,{key:1,modelValue:M.value,"onUpdate:modelValue":s[1]||(s[1]=e=>M.value=e),modelModifiers:{trim:!0},maxlength:e.limit,"show-word-limit":e.showLimit,type:e.type,size:e.size,clearable:"",placeholder:e.placeholder},null,8,["modelValue","maxlength","show-word-limit","type","size","placeholder"]))]),m("div",_,[r(L,{link:"",onClick:B},{default:c((()=>[k])),_:1}),r(L,{type:"primary",size:e.size,onClick:U},{default:c((()=>[z])),_:1},8,["size"])])])])),_:3},8,["visible","width","teleported"])],32)}}}))}}}));
