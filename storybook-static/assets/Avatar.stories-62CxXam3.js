import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r,t as i}from"./Avatar-CFh_6rkd.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),a=t(),o={title:`UI/Avatar`,component:i,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`
## Avatar

Le composant **Avatar** permet de représenter visuellement
un utilisateur à partir d'une image ou de ses initiales.

Lorsqu'aucune image n'est fournie, les initiales sont
générées automatiquement à partir du nom.

Une couleur de fond est également sélectionnée
automatiquement à partir du nom afin qu'un même utilisateur
conserve une couleur cohérente.

### Fonctionnalités

- Image utilisateur avec \`src\`
- Génération automatique des initiales
- Couleur automatique basée sur le nom
- Couleur personnalisée
- Taille personnalisable
- Classe CSS personnalisée
- Styles inline personnalisés
- Gestion du clic
        `}}},argTypes:{name:{description:`Nom utilisé pour générer les initiales.`,control:`text`},size:{description:`Taille de l’avatar en pixels.`,control:{type:`number`,min:16,max:120,step:1},table:{defaultValue:{summary:`32`}}},src:{description:`URL de l’image utilisateur.`,control:`text`},color:{description:`Couleur personnalisée du fond.`,control:`text`},onClick:{description:`Callback déclenché lors du clic.`,action:`avatar clicked`},className:{description:`Classe CSS supplémentaire.`,control:`text`},style:{description:`Styles inline supplémentaires.`,control:`object`}}},s={args:{name:`John Doe`}},c={args:{name:`John`}},l={args:{}},u={args:{name:`John Doe`,src:`https://i.pravatar.cc/150?img=12`}},d={args:{name:`John Doe`,color:`#7c5cff`}},f={args:{name:`John Doe`,size:24}},p={args:{name:`John Doe`,size:64}},m={args:{name:`John Doe`,onClick:()=>{console.log(`Avatar clicked`)}}},h={render:()=>(0,a.jsx)(n,{name:`John Doe`,role:`Administrateur`}),parameters:{docs:{description:{story:`
### AvatarWithInfo

**AvatarWithInfo** combine un avatar avec le nom
et éventuellement le rôle de l'utilisateur.

La propriété \`showRole\` permet de masquer complètement
les informations textuelles tout en conservant l'avatar.
        `}}}},g={render:()=>(0,a.jsx)(n,{name:`John Doe`,role:`Administrateur`,showRole:!1})},_={render:()=>(0,a.jsx)(n,{name:`John Doe`,role:`Chauffeur`,avatarSize:40,avatarProps:{color:`#7c5cff`}})},v={render:()=>(0,a.jsx)(n,{name:`John Doe`,role:`Administrateur`,onClick:()=>{console.log(`AvatarWithInfo clicked`)}})},y=[`Default`,`SingleName`,`WithoutName`,`WithImage`,`CustomColor`,`Small`,`Large`,`Clickable`,`WithInfo`,`WithInfoWithoutRole`,`WithInfoCustomAvatar`,`WithInfoClickable`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    src: 'https://i.pravatar.cc/150?img=12'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    color: '#7c5cff'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 24
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 64
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    onClick: () => {
      console.log('Avatar clicked');
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarWithInfo name="John Doe" role="Administrateur" />,
  parameters: {
    docs: {
      description: {
        story: \`
### AvatarWithInfo

**AvatarWithInfo** combine un avatar avec le nom
et éventuellement le rôle de l'utilisateur.

La propriété \\\`showRole\\\` permet de masquer complètement
les informations textuelles tout en conservant l'avatar.
        \`
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Documentation du composant AvatarWithInfo.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarWithInfo name="John Doe" role="Administrateur" showRole={false} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarWithInfo name="John Doe" role="Chauffeur" avatarSize={40} avatarProps={{
    color: '#7c5cff'
  }} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarWithInfo name="John Doe" role="Administrateur" onClick={() => {
    console.log('AvatarWithInfo clicked');
  }} />
}`,...v.parameters?.docs?.source}}}})))()}b();export{m as Clickable,d as CustomColor,s as Default,p as Large,c as SingleName,f as Small,u as WithImage,h as WithInfo,v as WithInfoClickable,_ as WithInfoCustomAvatar,g as WithInfoWithoutRole,l as WithoutName,y as __namedExportsOrder,o as default};