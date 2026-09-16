import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./icons-DHJkZKop.js";import{n as i,t as a}from"./Button-CFRaaaEc.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`UI/Button`,component:a,parameters:{layout:`centered`,docs:{description:{component:`Bouton d’action réutilisable. La story couvre les quatre variantes visuelles, les trois tailles, les icônes à gauche ou à droite, l’état désactivé et les types natifs button, submit et reset.`}}},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`primary`,`quiet`,`danger`]},size:{control:`inline-radio`,options:[`default`,`sm`,`icon`]},type:{control:`inline-radio`,options:[`button`,`submit`,`reset`]},disabled:{control:`boolean`},children:{control:`text`},icon:{control:!1},iconRight:{control:!1},onClick:{action:`clicked`}},args:{onClick:s(),children:`Valider`,variant:`default`,size:`default`,disabled:!1}},l={},u={args:{variant:`primary`,children:`Action principale`}},d={args:{variant:`quiet`,children:`Action discrète`}},f={args:{variant:`danger`,children:`Supprimer`}},p={args:{size:`sm`,children:`Action compacte`}},m={args:{variant:`primary`,disabled:!0,children:`Indisponible`}},h={args:{variant:`primary`,icon:(0,o.jsx)(r,{name:`check`,size:16}),children:`Enregistrer`}},g={args:{iconRight:(0,o.jsx)(r,{name:`chev`,size:15}),children:`Continuer`}},_={args:{size:`icon`,variant:`default`,"aria-label":`Actualiser`,children:(0,o.jsx)(r,{name:`obs`,size:16})}},v={args:{size:`icon`,variant:`primary`,"aria-label":`Nouvelle mission`,children:(0,o.jsx)(r,{name:`mission`,size:16})}},y={args:{type:`submit`,variant:`primary`,children:`Valider le formulaire`}},b={args:{type:`reset`,variant:`quiet`,children:`Réinitialiser`}},x={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:8},children:[(0,o.jsx)(a,{...e,variant:`default`,children:`Secondaire`}),(0,o.jsx)(a,{...e,variant:`primary`,children:`Principal`}),(0,o.jsx)(a,{...e,variant:`quiet`,children:`Discret`}),(0,o.jsx)(a,{...e,variant:`danger`,children:`Dangereux`}),(0,o.jsx)(a,{...e,size:`sm`,children:`Compact`}),(0,o.jsx)(a,{...e,size:`icon`,"aria-label":`Icône`,children:(0,o.jsx)(r,{name:`obs`,size:16})})]})},S=[`Default`,`Primary`,`Quiet`,`Danger`,`Small`,`Disabled`,`WithLeftIcon`,`WithRightIcon`,`IconOnly`,`IconOnlyPrimary`,`Submit`,`Reset`,`AllVariants`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Action principale'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'quiet',
    children: 'Action discrète'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Supprimer'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Action compacte'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Indisponible'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <Icon name="check" size={16} />,
    children: 'Enregistrer'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    iconRight: <Icon name="chev" size={15} />,
    children: 'Continuer'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    variant: 'default',
    'aria-label': 'Actualiser',
    children: <Icon name="obs" size={16} />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    variant: 'primary',
    'aria-label': 'Nouvelle mission',
    children: <Icon name="mission" size={16} />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'submit',
    variant: 'primary',
    children: 'Valider le formulaire'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'reset',
    variant: 'quiet',
    children: 'Réinitialiser'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8
  }}>\r
      <Button {...args} variant="default">Secondaire</Button>\r
      <Button {...args} variant="primary">Principal</Button>\r
      <Button {...args} variant="quiet">Discret</Button>\r
      <Button {...args} variant="danger">Dangereux</Button>\r
      <Button {...args} size="sm">Compact</Button>\r
      <Button {...args} size="icon" aria-label="Icône"><Icon name="obs" size={16} /></Button>\r
    </div>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as AllVariants,f as Danger,l as Default,m as Disabled,_ as IconOnly,v as IconOnlyPrimary,u as Primary,d as Quiet,b as Reset,p as Small,y as Submit,h as WithLeftIcon,g as WithRightIcon,S as __namedExportsOrder,c as default};