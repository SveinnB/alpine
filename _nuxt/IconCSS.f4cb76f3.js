import{d,ax as m,x,I as o,b as S,c as f,a2 as I,M as c,k as z}from"./entry.d2209c2e.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;m(n=>({f7e0991a:c(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const s=_,l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),f("span",{style:I({width:c(a),height:c(a)})},null,4))}});const g=z(y,[["__scopeId","data-v-d7e74c81"]]);export{g as default};
