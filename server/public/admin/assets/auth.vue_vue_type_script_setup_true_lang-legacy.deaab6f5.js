System.register(["./element-plus-legacy.9a978554.js","./role-legacy.b90b4dad.js","./index-legacy.e2911894.js","./index-legacy.bb301f21.js","./menu-legacy.7d6c9a85.js","./@vue-legacy.6b85f8d1.js"],(function(e){"use strict";var l,a,s,t,u,n,d,c,o,r,i,f,p,v,m,h,y,g,_,b,k,x;return{setters:[e=>{l=e.B,a=e.V,s=e.D,t=e.E,u=e.F,n=e.L},e=>{d=e.a},e=>{c=e.P},e=>{o=e.t},e=>{r=e.m},e=>{i=e.d,f=e.s,p=e.r,v=e.a1,m=e.o,h=e.c,y=e.W,g=e.O,_=e.P,b=e.M,k=e.a,x=e.n}],execute:function(){const C={class:"edit-popup"};e("_",i({__name:"auth",emits:["success","close"],setup(e,{expose:i,emit:j}){const w=f(),K=f(),V=f(),R=p(!1),D=p(!0),E=p(!1),F=p([]),M=p([]),P=v({id:"",name:"",desc:"",sort:0,menu_id:[]}),q={name:[{required:!0,message:"请输入名称",trigger:["blur"]}]},B=()=>{P.menu_id.forEach((e=>{x((()=>{w.value?.setChecked(e,!0,!1)}))}))},H=e=>{const l=M.value;for(let a=0;a<l.length;a++)w.value.store.nodesMap[l[a].id].expanded=e},L=e=>{e?w.value?.setCheckedKeys(F.value.map((e=>e.id))):w.value?.setCheckedKeys([])},O=async()=>{await(K.value?.validate()),P.menu_id=(()=>{const e=w.value?.getCheckedKeys(),l=w.value?.getHalfCheckedKeys();return e?.unshift.apply(e,l),e})(),await d(P),V.value?.close(),j("success")},S=()=>{j("close")};return E.value=!0,r().then((e=>{M.value=e,F.value=o(e),x((()=>{B()})),E.value=!1})),i({open:()=>{V.value?.open()},setFormData:async e=>{for(const l in P)null!=e[l]&&null!=e[l]&&(P[l]=e[l])}}),(e,d)=>{const o=l,r=a,i=s,f=t,p=u,v=n;return m(),h("div",C,[y(c,{ref_key:"popupRef",ref:V,title:"分配权限",async:!0,width:"550px",onConfirm:O,onClose:S},{default:g((()=>[_((m(),b(p,{class:"ls-form",ref_key:"formRef",ref:K,rules:q,model:P,"label-width":"60px"},{default:g((()=>[y(f,{class:"h-[400px] sm:h-[600px]"},{default:g((()=>[y(i,{label:"权限",prop:"menu_id"},{default:g((()=>[k("div",null,[y(o,{label:"展开/折叠",onChange:H}),y(o,{label:"全选/不全选",onChange:L}),y(o,{modelValue:D.value,"onUpdate:modelValue":d[0]||(d[0]=e=>D.value=e),label:"父子联动"},null,8,["modelValue"]),k("div",null,[y(r,{ref_key:"treeRef",ref:w,data:M.value,props:{label:"name",children:"children"},"check-strictly":!D.value,"node-key":"id","default-expand-all":R.value,"show-checkbox":""},null,8,["data","check-strictly","default-expand-all"])])])])),_:1})])),_:1})])),_:1},8,["model"])),[[v,E.value]])])),_:1},512)])}}}))}}}));
