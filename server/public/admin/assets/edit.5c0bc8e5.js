import{_ as G}from"./index.49b5cbb5.js";import{C as H,D as P,x as j,y as J,u as M,F as W,B as z,G as Q,H as X,I as Y,J as Z,K as ee,L as ue,v as le,A as ae,t as te}from"./element-plus.32724f3c.js";import{u as oe,a as de}from"./vue-router.4c2c9e7d.js";import{t as ne,g as me}from"./code.a928b96e.js";import{d as se}from"./dict.e4616fc2.js";import{f as re}from"./index.e62a9b83.js";import{m as ie}from"./menu.c8003463.js";import{d as pe,r as V,$ as D,s as _e,o as E,c as g,U as e,L as l,a as d,V as Fe,a8 as ce,S as p,w as be,K as fe}from"./@vue.67e62321.js";import"./@vueuse.4608b35b.js";import"./dayjs.6e4093f3.js";import"./axios.68af02ab.js";import"./@element-plus.1892f8d7.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./pinia.45d0690c.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.54513b29.js";import"./echarts.75216989.js";import"./zrender.6e590b1f.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.a46c5e2c.js";const Ve={class:"code-edit"},Ee={class:"w-80"},Be={class:"w-80"},ve={class:"w-80"},Ce={class:"w-80"},Ae=p("\u5355\u8868\uFF08curd\uFF09"),ye=p("\u538B\u7F29\u5305\u4E0B\u8F7D"),De=p("\u751F\u6210\u5230\u6A21\u5757"),ge={class:"w-80"},Ue=d("div",{class:"form-tips"},"\u751F\u6210\u6587\u4EF6\u6240\u5728\u6A21\u5757",-1),he={class:"w-80"},we=d("div",{class:"form-tips"},[d("div",null,"\u751F\u6210\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u540D,\u4E0D\u586B\u5219\u5728\u6A21\u5757\u5BF9\u5E94\u6587\u4EF6\u5939\u5185\u751F\u6210\u3002"),d("div",null," \u4F8B\uFF1A\u586B\u5199test\uFF0C\u5219\u63A7\u5236\u5668xxxControlle\u6587\u4EF6\u751F\u6210\u5728app/\u6A21\u5757\u540D/controller/test\u6587\u4EF6\u5939\u4E0B\u3002 "),d("div",null," \u4E0D\u586B\u65F6\uFF0CxxxController\u751F\u6210\u5728app/\u6A21\u5757\u540D/controller\u6587\u4EF6\u5939\u4E0B\u3002 ")],-1),ke={class:"w-80"},xe=d("div",{class:"form-tips"},[d("div",null,"\u751F\u6210\u6587\u4EF6\u63CF\u8FF0\u3002"),d("div",null," \u4F8B\uFF1A\u586B\u5199\u7528\u6237\uFF0C\u751F\u6210\u63A7\u5236\u5668\u540D/\u903B\u8F91/\u6A21\u578B\u7B49\uFF0C\u6587\u4EF6\u5185\u63CF\u8FF0\u4E3A\u7528\u6237\u63A7\u5236\u5668/\u7528\u6237\u903B\u8F91/\u7528\u6237\u6A21\u578B ")],-1),qe={class:"w-80"},Te=p("\u81EA\u52A8\u6784\u5EFA"),Re=p("\u624B\u52A8\u6DFB\u52A0"),Le=d("div",{class:"form-tips"}," \u81EA\u52A8\u6784\u5EFA\uFF1A\u81EA\u52A8\u6267\u884C\u751F\u6210\u83DC\u5355sql\u3002\u624B\u52A8\u6DFB\u52A0\uFF1A\u81EA\u884C\u6DFB\u52A0\u83DC\u5355\u3002 ",-1),Ne=p("\u4FDD\u5B58"),cu=pe({__name:"edit",setup(Se){const U=oe(),h=de(),B=V("base"),t=D({id:"",table_name:"",table_comment:"",author:"",remark:"",template_type:0,generate_type:0,module_name:"",class_dir:"",class_comment:"",table_column:[],menu:{pid:0,name:"",type:0}}),v=_e(),C=V([]),A=V([]),w=D({table_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0",trigger:"blur"}],table_comment:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0",trigger:"blur"}],module_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D",trigger:"blur"}],generate_type:[{required:!0,trigger:"change"}],template_type:[{required:!0,trigger:"change"}],["menu.pid"]:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:"blur"}],["menu.name"]:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}]}),k=async()=>{const r=await ne({id:U.query.id});Object.keys(t).forEach(a=>{t[a]=r[a]}),be(()=>t.generate_type,a=>{a==1&&re.confirm("\u751F\u6210\u5230\u6A21\u5757\u65B9\u5F0F\u5982\u9047\u540C\u540D\u6587\u4EF6\u4F1A\u8986\u76D6\u65E7\u6587\u4EF6\uFF0C\u786E\u5B9A\u8981\u9009\u62E9\u6B64\u65B9\u5F0F\u5417\uFF1F").catch(()=>{t.generate_type=0})})},x=async()=>{const r=await se({page_type:0});C.value=r.lists},q=async()=>{const r=await ie({page_type:0}),a={id:0,name:"\u9876\u7EA7",children:[]};a.children=r.lists,A.value.push(a)},T=async()=>{var r;await((r=v.value)==null?void 0:r.validate()),await me(t),h.back()};return k(),x(),q(),(r,a)=>{const R=H,y=P,i=j,m=J,c=M,s=W,_=z,n=Q,b=X,L=Y,F=Z,f=ee,N=ue,S=le,I=ae,K=te,O=G;return E(),g("div",Ve,[e(y,{class:"!border-none",shadow:"never"},{default:l(()=>[e(R,{content:"\u7F16\u8F91\u6570\u636E\u8868",onBack:a[0]||(a[0]=u=>r.$router.back())})]),_:1}),e(y,{class:"mt-4 !border-none",shadow:"never"},{default:l(()=>[e(I,{ref_key:"formRef",ref:v,class:"ls-form",model:t,"label-width":"100px",rules:w},{default:l(()=>[e(S,{modelValue:B.value,"onUpdate:modelValue":a[13]||(a[13]=u=>B.value=u)},{default:l(()=>[e(c,{label:"\u57FA\u7840\u4FE1\u606F",name:"base"},{default:l(()=>[e(m,{label:"\u8868\u540D\u79F0",prop:"table_name"},{default:l(()=>[d("div",Ee,[e(i,{modelValue:t.table_name,"onUpdate:modelValue":a[1]||(a[1]=u=>t.table_name=u),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),e(m,{label:"\u8868\u63CF\u8FF0",prop:"table_comment"},{default:l(()=>[d("div",Be,[e(i,{modelValue:t.table_comment,"onUpdate:modelValue":a[2]||(a[2]=u=>t.table_comment=u),placeholder:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0"},null,8,["modelValue"])])]),_:1}),e(m,{label:"\u4F5C\u8005"},{default:l(()=>[d("div",ve,[e(i,{modelValue:t.author,"onUpdate:modelValue":a[3]||(a[3]=u=>t.author=u)},null,8,["modelValue"])])]),_:1}),e(m,{label:"\u5907\u6CE8"},{default:l(()=>[d("div",Ce,[e(i,{modelValue:t.remark,"onUpdate:modelValue":a[4]||(a[4]=u=>t.remark=u),class:"el-input",type:"textarea",rows:4},null,8,["modelValue"])])]),_:1})]),_:1}),e(c,{label:"\u5B57\u6BB5\u7BA1\u7406",name:"field"},{default:l(()=>[e(L,{data:t.table_column},{default:l(()=>[e(s,{label:"\u5B57\u6BB5\u5217\u540D",prop:"column_name"}),e(s,{label:"\u5B57\u6BB5\u63CF\u8FF0",prop:"column_comment","min-width":"120"},{default:l(({row:u})=>[e(i,{modelValue:u.column_comment,"onUpdate:modelValue":o=>u.column_comment=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u7269\u7406\u7C7B\u578B",prop:"column_type"}),e(s,{label:"\u5FC5\u586B",width:"80"},{default:l(({row:u})=>[e(_,{modelValue:u.is_required,"onUpdate:modelValue":o=>u.is_required=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u63D2\u5165",width:"80"},{default:l(({row:u})=>[e(_,{modelValue:u.is_insert,"onUpdate:modelValue":o=>u.is_insert=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u7F16\u8F91",width:"80"},{default:l(({row:u})=>[e(_,{modelValue:u.is_update,"onUpdate:modelValue":o=>u.is_update=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u5217\u8868",width:"80"},{default:l(({row:u})=>[e(_,{modelValue:u.is_lists,"onUpdate:modelValue":o=>u.is_lists=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u67E5\u8BE2",width:"80"},{default:l(({row:u})=>[e(_,{modelValue:u.is_query,"onUpdate:modelValue":o=>u.is_query=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u67E5\u8BE2\u65B9\u5F0F"},{default:l(({row:u})=>[e(b,{modelValue:u.query_type,"onUpdate:modelValue":o=>u.query_type=o},{default:l(()=>[e(n,{label:"=",value:"="}),e(n,{label:"!=",value:"!="}),e(n,{label:">",value:">"}),e(n,{label:">=",value:">="}),e(n,{label:"<",value:"<"}),e(n,{label:"<=",value:"<="}),e(n,{label:"LIKE",value:"like"}),e(n,{label:"BETWEEN",value:"between"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u663E\u793A\u7C7B\u578B","min-width":"120"},{default:l(({row:u})=>[e(b,{modelValue:u.view_type,"onUpdate:modelValue":o=>u.view_type=o},{default:l(()=>[e(n,{label:"\u6587\u672C\u6846",value:"input"}),e(n,{label:"\u6587\u672C\u57DF",value:"textarea"}),e(n,{label:"\u4E0B\u62C9\u6846",value:"select"}),e(n,{label:"\u5355\u9009\u6846",value:"radio"}),e(n,{label:"\u590D\u9009\u6846",value:"checkbox"}),e(n,{label:"\u65E5\u671F\u63A7\u4EF6",value:"datetime"}),e(n,{label:"\u56FE\u7247\u9009\u62E9\u63A7\u4EF6",value:"imageSelect"}),e(n,{label:"\u5BCC\u6587\u672C\u63A7\u4EF6",value:"editor"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"\u5B57\u5178\u7C7B\u578B","min-width":"120"},{default:l(({row:u})=>[e(b,{modelValue:u.dict_type,"onUpdate:modelValue":o=>u.dict_type=o,clearable:"",disabled:!(u.view_type=="select"||u.view_type=="radio"||u.view_type=="checkbox"),placeholder:"\u5B57\u5178\u7C7B\u578B"},{default:l(()=>[(E(!0),g(Fe,null,ce(C.value,(o,$)=>(E(),fe(n,{key:$,label:o.name,value:o.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),_:1},8,["data"])]),_:1}),e(c,{label:"\u751F\u6210\u914D\u7F6E",name:"config"},{default:l(()=>[e(m,{label:"\u6A21\u677F\u7C7B\u578B",prop:"template_type"},{default:l(()=>[e(f,{modelValue:t.template_type,"onUpdate:modelValue":a[5]||(a[5]=u=>t.template_type=u)},{default:l(()=>[e(F,{label:0},{default:l(()=>[Ae]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u751F\u6210\u65B9\u5F0F",prop:"generate_type"},{default:l(()=>[e(f,{modelValue:t.generate_type,"onUpdate:modelValue":a[6]||(a[6]=u=>t.generate_type=u)},{default:l(()=>[e(F,{label:0},{default:l(()=>[ye]),_:1}),e(F,{label:1},{default:l(()=>[De]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"\u6A21\u5757\u540D",prop:"module_name"},{default:l(()=>[d("div",ge,[e(i,{modelValue:t.module_name,"onUpdate:modelValue":a[7]||(a[7]=u=>t.module_name=u),placeholder:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D"},null,8,["modelValue"]),Ue])]),_:1}),e(m,{label:"\u7C7B\u76EE\u5F55"},{default:l(()=>[d("div",he,[d("div",null,[e(i,{modelValue:t.class_dir,"onUpdate:modelValue":a[8]||(a[8]=u=>t.class_dir=u)},null,8,["modelValue"])]),we])]),_:1}),e(m,{label:"\u7C7B\u63CF\u8FF0"},{default:l(()=>[d("div",ke,[d("div",null,[e(i,{modelValue:t.class_comment,"onUpdate:modelValue":a[9]||(a[9]=u=>t.class_comment=u)},null,8,["modelValue"])]),xe])]),_:1}),e(m,{label:"\u7236\u7EA7\u83DC\u5355",prop:"menu.pid"},{default:l(()=>[e(N,{class:"w-80",modelValue:t.menu.pid,"onUpdate:modelValue":a[10]||(a[10]=u=>t.menu.pid=u),data:A.value,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":"",placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),e(m,{label:"\u83DC\u5355\u540D\u79F0",prop:"menu.name"},{default:l(()=>[d("div",qe,[e(i,{modelValue:t.menu.name,"onUpdate:modelValue":a[11]||(a[11]=u=>t.menu.name=u),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),e(m,{label:"\u83DC\u5355\u6784\u5EFA",prop:"menu.type",required:""},{default:l(()=>[d("div",null,[e(f,{modelValue:t.menu.type,"onUpdate:modelValue":a[12]||(a[12]=u=>t.menu.type=u)},{default:l(()=>[e(F,{label:1},{default:l(()=>[Te]),_:1}),e(F,{label:0},{default:l(()=>[Re]),_:1})]),_:1},8,["modelValue"]),Le])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model","rules"])]),_:1}),e(O,null,{default:l(()=>[e(K,{type:"primary",onClick:T},{default:l(()=>[Ne]),_:1})]),_:1})])}}});export{cu as default};
