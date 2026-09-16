import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./MetricsGrid-CW-Mbmqf.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Data/MetricsGrid`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Grille de métriques avec label, value, tone et aide contextuelle. Les stories couvrent la liste metrics, l’alternative items et une aide associée afin de vérifier les états informatifs et d’avertissement.`}}},args:{metrics:[{label:`Images`,value:95},{label:`Latence`,value:`1,3 s`,tone:`warn`}]}},i={},a={args:{items:[{key:`Zones`,value:10,tone:`ok`}]}},o={args:{metrics:[{label:`APs WEP`,value:2,tone:`danger`,help:`Mise à niveau requise`}]}},s=[`Default`,`UsingItems`,`WithHelp`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'Zones',
      value: 10,
      tone: 'ok'
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'APs WEP',
      value: 2,
      tone: 'danger',
      help: 'Mise à niveau requise'
    }]
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{i as Default,a as UsingItems,o as WithHelp,s as __namedExportsOrder,r as default};