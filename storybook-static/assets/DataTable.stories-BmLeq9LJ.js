import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./DataTable-DmdB83D8.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Data/DataTable`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Tableau de données piloté par columns et rows. Les stories couvrent l’affichage standard, une ligne sélectionnée et l’état vide; la sélection et les actions de ligne se vérifient avec les callbacks associés.`}}},args:{columns:[{key:`id`,label:`ID`,sortable:!0},{key:`name`,label:`Nom`},{key:`status`,label:`Statut`}],rows:[{id:`M1`,name:`Mission Alpha`,status:`Active`},{id:`M2`,name:`Mission Beta`,status:`En attente`}]}},i={},a={args:{selectedId:`M1`}},o={args:{rows:[],emptyNode:`Aucune donnée.`}},s=[`Default`,`Selected`,`Empty`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    selectedId: 'M1'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [],
    emptyNode: 'Aucune donnée.'
  }
}`,...o.parameters?.docs?.source}}}})))()}c();export{i as Default,o as Empty,a as Selected,s as __namedExportsOrder,r as default};