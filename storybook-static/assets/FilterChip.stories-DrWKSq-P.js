import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r,t as i}from"./FilterChip-DClU_Rn3.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{r(),a=t(),o={title:`UI/FilterChip`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Filtre compact avec couleur et marqueur de forme configurables. FilterChipGroup fournit une sélection contrôlée et transmet l’identifiant, le nouvel état et l’élément source.`}}},args:{label:`Wi-Fi`,color:`var(--dblue)`}},s={},c={render:()=>(0,a.jsxs)(`div`,{className:`flex gap-2`,children:[(0,a.jsx)(i,{label:`Wi-Fi`,shape:`square`}),(0,a.jsx)(i,{label:`Bluetooth`,shape:`diamond`}),(0,a.jsx)(i,{label:`Télémétrie`,shape:`circle`})]})},l={render:()=>(0,a.jsx)(n,{items:[{id:`wifi`,label:`Wi-Fi`},{id:`bt`,label:`Bluetooth`,color:`var(--brand)`}]})},u=[`Default`,`Shapes`,`Group`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2"><FilterChip label="Wi-Fi" shape="square" /><FilterChip label="Bluetooth" shape="diamond" /><FilterChip label="Télémétrie" shape="circle" /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <FilterChipGroup items={[{
    id: 'wifi',
    label: 'Wi-Fi'
  }, {
    id: 'bt',
    label: 'Bluetooth',
    color: 'var(--brand)'
  }]} />
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as Default,l as Group,c as Shapes,u as __namedExportsOrder,o as default};