import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./CredentialsList-Br-RXwIL.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Specialized/CredentialsList`,component:n,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Composant CredentialsList documenté par les props définies dans args et argTypes. États couverts par les stories: Default, Empty, Expired. Vérifier les callbacks, contrôles et interactions exposés par les variantes.`}}},args:{credentials:[{id:`jwt-1`,jti:`abc-123`,kind:`JWT`,status:`active`,issuedAt:`16 sept. 2026`,expiresAt:`16 oct. 2026`},{id:`jwt-2`,status:`revoked`}],onRevoke:r()}},a={},o={args:{credentials:[]}},s={args:{credentials:[{id:`jwt-old`,status:`expired`,expiresAt:`Hier`}]}},c=[`Default`,`Empty`,`Expired`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    credentials: []
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    credentials: [{
      id: 'jwt-old',
      status: 'expired',
      expiresAt: 'Hier'
    }]
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{a as Default,o as Empty,s as Expired,c as __namedExportsOrder,i as default};