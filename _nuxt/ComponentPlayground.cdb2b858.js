import{u as m}from"./asyncData.0f928c5c.js";import{M as c,I as p,d as i,ah as u,r as l,N as e,l as d}from"./entry.99ac64f9.js";import f from"./Ellipsis.bea8acd0.js";import _ from"./ComponentPlaygroundData.77588e9f.js";import"./TabsHeader.c364aca2.js";import"./ComponentPlaygroundProps.a8c030ab.js";import"./ProseH4.dcc9e74c.js";import"./ProseCodeInline.4bcd1701.js";import"./Badge.a09c735c.js";import"./ContentSlot.cf6f7139.js";import"./ProseP.5aa09ee1.js";import"./index.9fc1eb36.js";import"./ComponentPlaygroundSlots.vue.e65c6026.js";import"./ComponentPlaygroundTokens.vue.28fb692d.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const S=d(g,[["__scopeId","data-v-ffdff82a"]]);export{S as default};
