import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";function n({items:e,onNavigate:t,className:n=``}){return(0,r.jsx)(`nav`,{className:`crumbs ${n}`,"aria-label":`Fil d'Ariane`,children:e.map((e,n)=>(0,r.jsxs)(`span`,{children:[n>0&&(0,r.jsx)(`span`,{className:`sep`,children:`/`}),e.href||t?(0,r.jsx)(`button`,{type:`button`,onClick:()=>t?.(e),children:e.label}):e.current||e.bold?(0,r.jsx)(`b`,{children:e.label}):e.label]},`${e.label}-${n}`))})}var r;function i(){return(i=e((()=>{r=t();try{n.displayName=`Breadcrumbs`,n.__docgenInfo={description:``,displayName:`Breadcrumbs`,filePath:`C:/Users/SOP TELECOM/Desktop/PROJETS/DronetConsole/src/components/layout/Breadcrumbs/Breadcrumbs.tsx`,methods:[],props:{items:{defaultValue:null,declarations:[{fileName:`DronetConsole/src/components/layout/Breadcrumbs/Breadcrumbs.types.ts`,name:`BreadcrumbsProps`}],description:``,name:`items`,parent:{fileName:`DronetConsole/src/components/layout/Breadcrumbs/Breadcrumbs.types.ts`,name:`BreadcrumbsProps`},required:!0,tags:{},type:{name:`BreadcrumbItem[]`}},onNavigate:{defaultValue:null,declarations:[{fileName:`DronetConsole/src/components/layout/Breadcrumbs/Breadcrumbs.types.ts`,name:`BreadcrumbsProps`}],description:``,name:`onNavigate`,parent:{fileName:`DronetConsole/src/components/layout/Breadcrumbs/Breadcrumbs.types.ts`,name:`BreadcrumbsProps`},required:!1,tags:{},type:{name:`((item: BreadcrumbItem) => void)`}},className:{defaultValue:{value:``},declarations:[{fileName:`DronetConsole/src/components/layout/Breadcrumbs/Breadcrumbs.types.ts`,name:`BreadcrumbsProps`}],description:``,name:`className`,parent:{fileName:`DronetConsole/src/components/layout/Breadcrumbs/Breadcrumbs.types.ts`,name:`BreadcrumbsProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Layout/Breadcrumbs`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`Composant Breadcrumbs documenté par les props définies dans args et argTypes. États couverts par les stories: Default, Deep, Single. Vérifier les callbacks, contrôles et interactions exposés par les variantes.`}}},args:{items:[{label:`Missions`},{label:`Vol 42`,current:!0}],onNavigate:a()}},s={},c={args:{items:[{label:`Accueil`},{label:`Missions`},{label:`Vol 42`,current:!0}]}},l={args:{items:[{label:`Tableau de bord`,current:!0}]}},u=[`Default`,`Deep`,`Single`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Accueil'
    }, {
      label: 'Missions'
    }, {
      label: 'Vol 42',
      current: true
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Tableau de bord',
      current: true
    }]
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Deep,s as Default,l as Single,u as __namedExportsOrder,o as default};