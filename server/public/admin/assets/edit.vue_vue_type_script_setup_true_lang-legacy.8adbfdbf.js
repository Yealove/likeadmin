System.register(["./element-plus-legacy.9a978554.js","./post-legacy.756a997b.js","./index-legacy.e2911894.js","./@vue-legacy.6b85f8d1.js"],(function(e){"use strict";var l,a,t,o,u,d,s,r,n,m,i,c,p,f,v,V,g,b,_,y;return{setters:[e=>{l=e.C,a=e.D,t=e.v,o=e.t,u=e.F},e=>{d=e.j,s=e.a,r=e.b},e=>{n=e.P},e=>{m=e.d,i=e.s,c=e.r,p=e.e,f=e.a1,v=e.o,V=e.c,g=e.W,b=e.O,_=e.a,y=e.u}],execute:function(){const w={class:"edit-popup"},x=_("div",{class:"form-tips"},"默认为0， 数值越大越排前",-1);e("_",m({__name:"edit",emits:["success","close"],setup(e,{expose:m,emit:h}){const k=i(),j=i(),U=c("add"),R=p((()=>"edit"==U.value?"编辑岗位":"新增岗位")),q=f({id:"",name:"",code:"",sort:0,remark:"",status:1}),C={code:[{required:!0,message:"请输入岗位编码",trigger:["blur"]}],name:[{required:!0,message:"请输入岗位名称",trigger:["blur"]}]},D=async()=>{await(k.value?.validate()),"edit"==U.value?await d(q):await s(q),j.value?.close(),h("success")},F=e=>{for(const l in q)null!=e[l]&&null!=e[l]&&(q[l]=e[l])},z=()=>{h("close")};return m({open:(e="add")=>{U.value=e,j.value?.open()},setFormData:F,getDetail:async e=>{const l=await r({id:e.id});F(l)}}),(e,d)=>{const s=l,r=a,m=t,i=o,c=u;return v(),V("div",w,[g(n,{ref_key:"popupRef",ref:j,title:y(R),async:!0,width:"550px",onConfirm:D,onClose:z},{default:b((()=>[g(c,{ref_key:"formRef",ref:k,model:q,"label-width":"84px",rules:C},{default:b((()=>[g(r,{label:"岗位名称",prop:"name"},{default:b((()=>[g(s,{modelValue:q.name,"onUpdate:modelValue":d[0]||(d[0]=e=>q.name=e),placeholder:"请输入岗位名称",clearable:"",maxlength:100},null,8,["modelValue"])])),_:1}),g(r,{label:"岗位编码",prop:"code"},{default:b((()=>[g(s,{modelValue:q.code,"onUpdate:modelValue":d[1]||(d[1]=e=>q.code=e),placeholder:"请输入岗位编码",clearable:""},null,8,["modelValue"])])),_:1}),g(r,{label:"排序",prop:"sort"},{default:b((()=>[_("div",null,[g(m,{modelValue:q.sort,"onUpdate:modelValue":d[2]||(d[2]=e=>q.sort=e),min:0,max:9999},null,8,["modelValue"]),x])])),_:1}),g(r,{label:"备注",prop:"remark"},{default:b((()=>[g(s,{modelValue:q.remark,"onUpdate:modelValue":d[3]||(d[3]=e=>q.remark=e),placeholder:"请输入备注",type:"textarea",autosize:{minRows:4,maxRows:6},maxlength:"200","show-word-limit":""},null,8,["modelValue"])])),_:1}),g(r,{label:"岗位状态",required:"",prop:"status"},{default:b((()=>[g(i,{modelValue:q.status,"onUpdate:modelValue":d[4]||(d[4]=e=>q.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title"])])}}}))}}}));
