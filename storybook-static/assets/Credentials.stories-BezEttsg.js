import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./Credentials-CVTm4X51.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i=[{id:`cred-1`,jti:`jwt-001`,status:`active`,kind:`JWT`,issuedAt:`2026-09-16`,expiresAt:`2026-10-16`,token:`eyJhbGci.eyJzdWIi.signature`}],a={title:`Specialized/Credentials`,component:n,parameters:{layout:`padded`,docs:{description:{component:`Composant Credentials documenté par les props définies dans args et argTypes. États couverts par les stories: Default, Revoked, Empty. Vérifier les callbacks, contrôles et interactions exposés par les variantes.`}}},tags:[`autodocs`],argTypes:{credentials:{control:`object`}},args:{credentials:i,onRevoke:r(),onIssue:r()}},o={},s={args:{credentials:[{...i[0],status:`revoked`}]}},c={args:{credentials:[]}},l=[`Default`,`Revoked`,`Empty`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    credentials: [{
      ...credentials[0],
      status: 'revoked'
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    credentials: []
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{o as Default,c as Empty,s as Revoked,l as __namedExportsOrder,a as default};