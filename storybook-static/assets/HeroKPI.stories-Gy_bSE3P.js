import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./HeroKPI-DTsDBb1o.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Data/HeroKPI`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`KPI principaux affichés avec label, valeur, tone, unité et notes éventuelles. Les stories montrent les valeurs nominales, les unités et une métrique critique; elles servent à vérifier la hiérarchie visuelle des indicateurs.`}}},args:{items:[{label:`Appareils`,value:5,tone:`ok`},{label:`Alertes`,value:2,tone:`warn`}]}},i={},a={args:{items:[{label:`Batterie`,value:82,unit:`%`,tone:`ok`,note:`Nominale`}]}},o={args:{items:[{label:`RSSI`,value:-92,unit:`dBm`,tone:`danger`,sub:`Signal faible`}]}},s=[`Default`,`WithUnits`,`Critical`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Batterie',
      value: 82,
      unit: '%',
      tone: 'ok',
      note: 'Nominale'
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'RSSI',
      value: -92,
      unit: 'dBm',
      tone: 'danger',
      sub: 'Signal faible'
    }]
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{o as Critical,i as Default,a as WithUnits,s as __namedExportsOrder,r as default};