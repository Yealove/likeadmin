import{x as B,y as k,W as x,s as R,A as y}from"./element-plus.32724f3c.js";import{j as g,a as A}from"./post.63818fab.js";import{P as U}from"./index.f5b35b1c.js";import{d as h,s as i,r as j,e as q,$ as I,o as N,c as P,U as o,L as a,a as c,u as S}from"./@vue.67e62321.js";const z={class:"edit-popup"},L=c("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),H=h({__name:"edit",emits:["success","close"],setup(M,{expose:f,emit:m}){const p=i(),r=i(),n=j("add"),F=q(()=>n.value=="edit"?"\u7F16\u8F91\u5C97\u4F4D":"\u65B0\u589E\u5C97\u4F4D"),u=I({id:"",name:"",code:"",sort:0,remark:"",status:1}),_={code:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",trigger:["blur"]}]},C=async()=>{var l,e;await((l=p.value)==null?void 0:l.validate()),n.value=="edit"?await g(u):await A(u),(e=r.value)==null||e.close(),m("success")},D=(l="add")=>{var e;n.value=l,(e=r.value)==null||e.open()},V=l=>{for(const e in u)l[e]!=null&&l[e]!=null&&(u[e]=l[e])},v=()=>{m("close")};return f({open:D,setFormData:V}),(l,e)=>{const d=B,s=k,b=x,E=R,w=y;return N(),P("div",z,[o(U,{ref_key:"popupRef",ref:r,title:S(F),async:!0,width:"550px",clickModalClose:!0,onConfirm:C,onClose:v},{default:a(()=>[o(w,{ref_key:"formRef",ref:p,model:u,"label-width":"84px",rules:_},{default:a(()=>[o(s,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name"},{default:a(()=>[o(d,{modelValue:u.name,"onUpdate:modelValue":e[0]||(e[0]=t=>u.name=t),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code"},{default:a(()=>[o(d,{modelValue:u.code,"onUpdate:modelValue":e[1]||(e[1]=t=>u.code=t),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801"},null,8,["modelValue"])]),_:1}),o(s,{label:"\u6392\u5E8F",prop:"sort"},{default:a(()=>[c("div",null,[o(b,{modelValue:u.sort,"onUpdate:modelValue":e[2]||(e[2]=t=>u.sort=t)},null,8,["modelValue"]),L])]),_:1}),o(s,{label:"\u5907\u6CE8",prop:"remark"},{default:a(()=>[o(d,{modelValue:u.remark,"onUpdate:modelValue":e[3]||(e[3]=t=>u.remark=t),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6}},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5C97\u4F4D\u72B6\u6001",required:""},{default:a(()=>[o(E,{modelValue:u.status,"onUpdate:modelValue":e[4]||(e[4]=t=>u.status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{H as _};
