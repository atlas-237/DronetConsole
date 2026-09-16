import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Alert-KIO0I6iL.js";var r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r={title:`UI/Alert`,component:n,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`
## Alert

Le composant **Alert** permet d'afficher un message
important à l'utilisateur.

### Variantes

- **info** — Information générale
- **ok** — Confirmation ou succès
- **warn** — Avertissement
- **danger** — Erreur ou problème critique

### Fonctionnalités

Le composant prend également en charge :

- un titre optionnel ;
- une icône personnalisée ;
- une action ;
- la fermeture de l'alerte ;
- des styles personnalisés ;
- une classe CSS personnalisée.

### Comportement

Lorsqu'une propriété **action** est fournie,
le bouton de fermeture n'est pas affiché,
même si **dismissible** vaut \`true\`.
        `}}},argTypes:{tone:{description:`Variante visuelle de l’alerte.`,control:`select`,options:[`info`,`ok`,`warn`,`danger`],table:{defaultValue:{summary:`info`}}},title:{description:`Titre optionnel.`,control:`text`},children:{description:`Contenu de l’alerte.`,control:`text`},action:{description:`Texte du bouton d’action.`,control:`text`},onAction:{description:`Callback exécuté lors du clic sur l’action.`,action:`action clicked`},icon:{description:`Icône personnalisée.`,control:!1},dismissible:{description:`Permet de fermer l’alerte.`,control:`boolean`,table:{defaultValue:{summary:`false`}}},onDismiss:{description:`Callback exécuté lors de la fermeture.`,action:`alert dismissed`},className:{description:`Classe CSS supplémentaire.`,control:`text`},style:{description:`Styles inline supplémentaires.`,control:`object`}}},i={args:{tone:`info`,title:`Information`,children:`Votre course est actuellement en attente de confirmation.`}},a={args:{tone:`ok`,title:`Opération réussie`,children:`Votre réservation a été confirmée avec succès.`}},o={args:{tone:`warn`,title:`Attention`,children:`Votre solde est bientôt insuffisant.`}},s={args:{tone:`danger`,title:`Une erreur est survenue`,children:`Impossible de finaliser votre demande.`}},c={args:{tone:`info`,title:`Nouvelle version disponible`,children:`Une nouvelle version de l’application est disponible.`,action:`Mettre à jour`}},l={args:{tone:`warn`,title:`Session bientôt expirée`,children:`Votre session expirera dans quelques minutes.`,dismissible:!0}},u={args:{tone:`danger`,title:`Action requise`,children:`Veuillez vérifier vos informations avant de continuer.`,action:`Vérifier`,dismissible:!0}},d={args:{tone:`info`,children:`Votre demande a bien été prise en compte.`}},f=[`Info`,`Success`,`Warning`,`Danger`,`WithAction`,`Dismissible`,`ActionAndDismissible`,`WithoutTitle`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    title: 'Information',
    children: 'Votre course est actuellement en attente de confirmation.'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'ok',
    title: 'Opération réussie',
    children: 'Votre réservation a été confirmée avec succès.'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warn',
    title: 'Attention',
    children: 'Votre solde est bientôt insuffisant.'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'danger',
    title: 'Une erreur est survenue',
    children: 'Impossible de finaliser votre demande.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    title: 'Nouvelle version disponible',
    children: 'Une nouvelle version de l’application est disponible.',
    action: 'Mettre à jour'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warn',
    title: 'Session bientôt expirée',
    children: 'Votre session expirera dans quelques minutes.',
    dismissible: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'danger',
    title: 'Action requise',
    children: 'Veuillez vérifier vos informations avant de continuer.',
    action: 'Vérifier',
    dismissible: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    children: 'Votre demande a bien été prise en compte.'
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as ActionAndDismissible,s as Danger,l as Dismissible,i as Info,a as Success,o as Warning,c as WithAction,d as WithoutTitle,f as __namedExportsOrder,r as default};