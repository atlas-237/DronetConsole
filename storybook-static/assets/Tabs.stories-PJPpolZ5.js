import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Tabs-CioKq8BL.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Data/Tabs`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Navigation par onglets avec id, label, compteur et contenu éventuel. Les stories couvrent les onglets simples, le contenu intégré et le mode contrôlé; le changement d’onglet constitue l’interaction principale.`}}},args:{tabs:[{id:`active`,label:`Actives`,count:2},{id:`done`,label:`Terminées`,count:4}]}},i={},a={args:{tabs:[{id:0,label:`Résumé`,content:`Vue synthétique.`},{id:1,label:`Journal`,content:`Historique.`}]}},o={args:{activeTab:`done`,onTabChange:e=>console.log(e)}},s=[`Default`,`WithContent`,`Controlled`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 0,
      label: 'Résumé',
      content: 'Vue synthétique.'
    }, {
      id: 1,
      label: 'Journal',
      content: 'Historique.'
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    activeTab: 'done',
    onTabChange: id => console.log(id)
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{o as Controlled,i as Default,a as WithContent,s as __namedExportsOrder,r as default};