import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Input-BgVxG1V4.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`UI/Input`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Champ polymorphe compatible avec input, select et textarea. Les exemples couvrent les valeurs invalides, les placeholders, les options natives et le contenu multiligne.`}}},args:{placeholder:`Saisir une valeur`}},o={},s={args:{invalid:!0,placeholder:`Valeur invalide`}},c={render:()=>(0,i.jsxs)(r,{as:`select`,defaultValue:`drone`,children:[(0,i.jsx)(`option`,{value:`drone`,children:`Drone`}),(0,i.jsx)(`option`,{value:`station`,children:`Station sol`})]})},l={render:()=>(0,i.jsx)(r,{as:`textarea`,rows:3,placeholder:`Description`})},u=[`Text`,`Invalid`,`Select`,`Textarea`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: 'Valeur invalide'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Input as="select" defaultValue="drone"><option value="drone">Drone</option><option value="station">Station sol</option></Input>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Input as="textarea" rows={3} placeholder="Description" />
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as Invalid,c as Select,o as Text,l as Textarea,u as __namedExportsOrder,a as default};