import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r}from"./lib-DMOMY85B.js";function i(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...r(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:`catalogue-des-stories`,children:`Catalogue des stories`}),`
`,(0,o.jsx)(t.p,{children:`Cette page décrit le périmètre couvert par Storybook pour DronetConsole. Chaque story est un scénario de référence : elle montre un état visible, les propriétés importantes à contrôler et, lorsque c'est pertinent, le comportement attendu après une interaction.`}),`
`,(0,o.jsx)(t.h2,{id:`lire-une-story`,children:`Lire une story`}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Default / Standard`}),` : état nominal à utiliser comme point de départ.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Variant métier`}),` : combinaison de données représentative d'une opération réelle.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`État limite`}),` : vide, erreur, chargement, danger, désactivé ou contenu volumineux.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Interaction`}),` : scénario pilotable avec les contrôles Storybook ou les boutons de la story.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:`Responsive`}),` : story prévue pour être vérifiée avec les viewports desktop et mobile.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`Les composants partagent le thème Darta chargé par `,(0,o.jsx)(t.code,{children:`.storybook/preview.ts`}),` et `,(0,o.jsx)(t.code,{children:`src/theme/index.css`}),`. Les couleurs, espacements et polices utilisent les tokens du thème ; les composants migrés utilisent les utilitaires Tailwind v4.`]}),`
`,(0,o.jsx)(t.h2,{id:`source-de-vérité`,children:`Source de vérité`}),`
`,(0,o.jsxs)(t.p,{children:[`Le catalogue Storybook actuel est composé de `,(0,o.jsx)(t.strong,{children:`70 stories colocalisées`}),` dans `,(0,o.jsx)(t.code,{children:`src/components/**`}),`. Chaque composant documenté doit conserver son fichier `,(0,o.jsx)(t.code,{children:`Component.stories.tsx`}),`, activer `,(0,o.jsx)(t.code,{children:`autodocs`}),` et fournir `,(0,o.jsx)(t.code,{children:`parameters.docs.description.component`}),`.`]}),`
`,(0,o.jsxs)(t.p,{children:[`Les anciens catalogues sous `,(0,o.jsx)(t.code,{children:`src/stories/**`}),` ne font plus partie de l'arborescence active. Les exemples de cette page qui décrivent encore ces anciens regroupements sont des scénarios fonctionnels historiques ; la story colocalisée du composant est la référence à ouvrir dans Storybook.`]}),`
`,(0,o.jsx)(t.h2,{id:`ui`,children:`UI`}),`
`,(0,o.jsx)(t.h3,{id:`ui--button`,children:`UI / Button`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/Button/Button.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Default`}),` : bouton neutre avec contenu textuel et état activé.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Primary`}),` : action principale avec le ton de marque.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`IconOnly`}),` : bouton carré d'outil, vérifie le mode `,(0,o.jsx)(t.code,{children:`icon`}),` et l'attribut `,(0,o.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : les variantes `,(0,o.jsx)(t.code,{children:`default`}),`, `,(0,o.jsx)(t.code,{children:`primary`}),`, `,(0,o.jsx)(t.code,{children:`quiet`}),`, `,(0,o.jsx)(t.code,{children:`danger`}),`, les tailles `,(0,o.jsx)(t.code,{children:`default`}),`, `,(0,o.jsx)(t.code,{children:`sm`}),`, `,(0,o.jsx)(t.code,{children:`icon`}),`, `,(0,o.jsx)(t.code,{children:`disabled`}),`, `,(0,o.jsx)(t.code,{children:`type`}),`, `,(0,o.jsx)(t.code,{children:`icon`}),`, `,(0,o.jsx)(t.code,{children:`iconRight`}),` et le focus clavier.`]}),`
`,(0,o.jsx)(t.h3,{id:`ui--alert`,children:`UI / Alert`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/Alert/Alert.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Info`}),` : information neutre avec titre.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Success`}),` : confirmation d'une opération terminée.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Warning`}),` : avertissement nécessitant l'attention de l'opérateur.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Danger`}),` : incident critique ; le rôle ARIA devient `,(0,o.jsx)(t.code,{children:`alert`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithAction`}),` : alerte avec bouton d'action.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Dismissible`}),` : alerte fermable sans action principale.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`ActionAndDismissible`}),` : vérifie que l'action est prioritaire et masque la fermeture.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithoutTitle`}),` : contenu court sans titre.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : le ton, le rôle ARIA, l'icône automatique ou personnalisée, `,(0,o.jsx)(t.code,{children:`onAction`}),`, `,(0,o.jsx)(t.code,{children:`onDismiss`}),` et la priorité action/fermeture.`]}),`
`,(0,o.jsx)(t.h3,{id:`ui--avatar`,children:`UI / Avatar`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/Avatar/Avatar.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Default`}),` : initiales générées depuis un nom complet.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`SingleName`}),` : initiales pour un nom composé d'un seul mot.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithoutName`}),` : valeur de repli `,(0,o.jsx)(t.code,{children:`?`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithImage`}),` : image distante à la place des initiales.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`CustomColor`}),` : couleur fournie par le consommateur.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Small`}),` / `,(0,o.jsx)(t.code,{children:`Large`}),` : vérification des dimensions extrêmes usuelles.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Clickable`}),` : rôle bouton et callback de clic.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithInfo`}),` : avatar accompagné du nom et du rôle.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithInfoWithoutRole`}),` : bloc d'information sans rôle secondaire.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithInfoCustomAvatar`}),` : transmission de propriétés à l'avatar interne.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithInfoClickable`}),` : interaction sur le bloc complet.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : la stabilité de la palette déterministe, l'alt text, la taille, le comportement image/initiales et l'accessibilité interactive.`}),`
`,(0,o.jsx)(t.h3,{id:`ui--badge`,children:`UI / Badge`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/Badge/Badge.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Variants`}),` : tons `,(0,o.jsx)(t.code,{children:`default`}),`, `,(0,o.jsx)(t.code,{children:`ok`}),`, `,(0,o.jsx)(t.code,{children:`warn`}),`, `,(0,o.jsx)(t.code,{children:`danger`}),` et `,(0,o.jsx)(t.code,{children:`brand`}),`, avec et sans point.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Small`}),` : badge compact destiné aux listes et tableaux.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : la lisibilité du contraste, le point d'état et la conservation du contenu long sur une seule ligne.`}),`
`,(0,o.jsx)(t.h3,{id:`ui--field`,children:`UI / Field`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/Field/Field.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Default`}),` : label obligatoire, champ enfant et texte d'aide.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Error`}),` : message d'erreur prioritaire sur le texte d'aide.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : l'association `,(0,o.jsx)(t.code,{children:`label`}),`/`,(0,o.jsx)(t.code,{children:`htmlFor`}),`, l'indicateur obligatoire et la priorité `,(0,o.jsx)(t.code,{children:`error > help`}),`.`]}),`
`,(0,o.jsx)(t.h3,{id:`ui--input`,children:`UI / Input`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/Input/Input.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Text`}),` : champ texte standard.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Invalid`}),` : champ avec `,(0,o.jsx)(t.code,{children:`aria-invalid`}),` et bordure d'erreur.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Select`}),` : rendu polymorphe avec options natives.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Textarea`}),` : rendu multi-ligne avec `,(0,o.jsx)(t.code,{children:`rows`}),`.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : la ref, `,(0,o.jsx)(t.code,{children:`value`}),`/`,(0,o.jsx)(t.code,{children:`onChange`}),`, `,(0,o.jsx)(t.code,{children:`disabled`}),`, le placeholder, l'icône préfixe et les trois éléments HTML (`,(0,o.jsx)(t.code,{children:`input`}),`, `,(0,o.jsx)(t.code,{children:`select`}),`, `,(0,o.jsx)(t.code,{children:`textarea`}),`).`]}),`
`,(0,o.jsx)(t.h3,{id:`ui--segmentedcontrol`,children:`UI / SegmentedControl`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/SegmentedControl/SegmentedControl.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Default`}),` : mode sélectionné dans un groupe d'options textuelles.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithDisabledOption`}),` : option visible mais non interactive.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : `,(0,o.jsx)(t.code,{children:`aria-pressed`}),`, l'index renvoyé par `,(0,o.jsx)(t.code,{children:`onChange`}),`, l'état actif et le clavier.`]}),`
`,(0,o.jsx)(t.h3,{id:`ui--filterchip`,children:`UI / FilterChip`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/ui/FilterChip/FilterChip.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Default`}),` : filtre actif simple.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Shapes`}),` : marqueurs carré, diamant et cercle.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Group`}),` : groupe de filtres avec identifiants et couleurs différents.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : activation/désactivation, interaction Enter/Espace, `,(0,o.jsx)(t.code,{children:`activeItems`}),`, `,(0,o.jsx)(t.code,{children:`onChange`}),`, couleurs personnalisées et reflow mobile.`]}),`
`,(0,o.jsx)(t.h2,{id:`data`,children:`Data`}),`
`,(0,o.jsx)(t.h3,{id:`data--panel--kpi`,children:`Data / Panel & KPI`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/data/Panel/Panel.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`HeroKPI.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`KVGrid.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`MetricsGrid.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`PanelSimple`}),` : panneau de base avec titre, icône et contenu.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`PanelWithRightBadge`}),` : panneau avec indicateur d'état et grille clé/valeur.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`PanelCollapsible`}),` : ouverture et fermeture d'un panneau.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`PanelTightBody`}),` : variante compacte du corps.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`HeroKPIBasic`}),` : indicateurs principaux avec tons d'état.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`HeroKPIWithMetrics`}),` : KPI principaux suivis d'une grille de métriques.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`KVGridFormats`}),` : valeurs texte, numériques, unités et tons `,(0,o.jsx)(t.code,{children:`ok/warn/danger`}),`.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`MetricsGridShowcase`}),` : métriques avec valeurs nulles, unités et aides contextuelles.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : hiérarchie visuelle, alignement des valeurs, densité et comportement collapsible.`}),`
`,(0,o.jsx)(t.h3,{id:`data--tableaux-tabs--listes`,children:`Data / Tableaux, Tabs & Listes`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/data/DataTable/DataTable.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`Tabs.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`ListRow.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`DataTableBasic`}),` : tableau de missions avec cellules rendues.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`DataTableWithSort`}),` : tri ascendant puis descendant sur les colonnes triables.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`DataTableEmpty`}),` : tableau sans résultat et contenu vide.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`TabsControlled`}),` : onglets contrôlés depuis l'état parent.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`TabsWithInlineContent`}),` : contenu directement fourni par chaque onglet.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`ListRowBasic`}),` : ligne de liste informative.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`ListRowClickable`}),` : ligne sélectionnable avec callback.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : navigation clavier, sélection de ligne, tri, contenu vide et lisibilité sur petit écran.`}),`
`,(0,o.jsx)(t.h2,{id:`feedback`,children:`Feedback`}),`
`,(0,o.jsx)(t.h3,{id:`feedback--modal`,children:`Feedback / Modal`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/feedback/Modal/Modal.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Default`}),` : modale standard avec footer par défaut.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Small`}),` / `,(0,o.jsx)(t.code,{children:`Large`}),` / `,(0,o.jsx)(t.code,{children:`ExtraLarge`}),` : tailles et contenus croissants.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`DangerConfirm`}),` : confirmation destructive.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`CustomFooter`}),` : remplacement complet du footer.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithoutFooter`}),` : modale informative sans actions.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`AllSizes`}),` : comparaison visuelle de toutes les tailles.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : fermeture, confirmation, touche Échap, focus, overlay, footer personnalisé et responsive.`}),`
`,(0,o.jsx)(t.h3,{id:`feedback--états`,children:`Feedback / États`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/feedback/EmptyState/EmptyState.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`ErrorState.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`LoadingState.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`Skeleton.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`EmptyStateDefault`}),` : absence de données avec action de création.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`EmptyStateCustomIcon`}),` : absence de données spécialisée galerie.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`ErrorStateDefault`}),` : erreur avec message technique masqué ou détaillé selon le composant.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`LoadingStateDefault`}),` : chargement textuel.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`SkeletonVariants`}),` : variantes de skeleton pour lignes et cartes.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`AllStatesShowcase`}),` : comparaison simultanée des états empty/error/loading/skeleton.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : message utile, action disponible, hiérarchie et absence de saut de layout pendant le chargement.`}),`
`,(0,o.jsx)(t.h3,{id:`feedback--toast`,children:`Feedback / Toast`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichier : `,(0,o.jsx)(t.code,{children:`src/components/feedback/Toast/Toast.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Default`}),` : notification simple avec disparition automatique.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithUndo`}),` : action d'annulation avant expiration.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`LiveDemo`}),` : déclenchement de notifications `,(0,o.jsx)(t.code,{children:`ok`}),`, `,(0,o.jsx)(t.code,{children:`warn`}),`, `,(0,o.jsx)(t.code,{children:`info`}),` et `,(0,o.jsx)(t.code,{children:`danger`}),` via le contexte.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : durée de vie, fermeture manuelle, action undo, `,(0,o.jsx)(t.code,{children:`aria-live`}),` et empilement des notifications.`]}),`
`,(0,o.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,o.jsx)(t.h3,{id:`layout--appshell`,children:`Layout / AppShell`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/layout/AppShell/AppShell.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`Sidebar.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`Topbar.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`MobileNav.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Standard`}),` : shell complet avec rail, topbar et contenu.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithSidebar`}),` : navigation par groupes, page active et profil opérateur.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`MobileLayout`}),` : navigation inférieure et contenu mobile.`]}),`
`]}),`
`,(0,o.jsxs)(t.p,{children:[`À vérifier : réduction du rail, navigation active, responsive sous la breakpoint `,(0,o.jsx)(t.code,{children:`lg`}),`, débordement horizontal et positionnement du contenu.`]}),`
`,(0,o.jsx)(t.h2,{id:`modales-métier`,children:`Modales métier`}),`
`,(0,o.jsx)(t.h3,{id:`modales--confirm--newmission`,children:`Modales / Confirm & NewMission`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/modals/ConfirmModal/ConfirmModal.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`NewMissionModal.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`ConfirmModalSimple`}),` : confirmation destructive avec message simple.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`ConfirmModalInfo`}),` : confirmation non destructive.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`NewMissionModalDemo`}),` : formulaire de création avec validation du nom et capacité de zones.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : validation, fermeture, confirmation, état invalide et remise à zéro à chaque ouverture.`}),`
`,(0,o.jsx)(t.h3,{id:`modales--issuetoken--assetform`,children:`Modales / IssueToken & AssetForm`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/modals/IssueTokenModal/IssueTokenModal.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`AssetFormModal.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`IssueTokenModalForAsset`}),` : émission d'un jeton pour un appareil existant.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`IssueTokenModalNoAsset`}),` : émission sans appareil sélectionné.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`AssetFormModalCreate`}),` : création d'un appareil avec champs requis.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`AssetFormModalEdit`}),` : édition d'un appareil et affichage de ses métadonnées.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : scopes, durée de validité, erreurs de formulaire, compteurs et transitions entre étapes.`}),`
`,(0,o.jsx)(t.h3,{id:`modales--missionedit--artifactviewer`,children:`Modales / MissionEdit & ArtifactViewer`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/modals/MissionEditModal/MissionEditModal.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`ArtifactViewerModal.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`MissionEditModalCreate`}),` : création complète d'une mission.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`MissionEditModalEditActive`}),` : édition d'une mission active existante.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`ArtifactViewerModalDemo`}),` : navigation, téléchargement et suppression d'artefacts.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : contraintes d'activation sans appareil, navigation clavier de la visionneuse, index courant et footer d'actions.`}),`
`,(0,o.jsx)(t.h2,{id:`specialized`,children:`Specialized`}),`
`,(0,o.jsx)(t.h3,{id:`specialized--carte--vidéo`,children:`Specialized / Carte & Vidéo`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/components/specialized/MapPanel/MapPanel.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`VideoFrame.stories.tsx`}),`, `,(0,o.jsx)(t.code,{children:`VideoPlayer.stories.tsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`MapPanelDefault`}),` : panneau de carte ouvert avec onglets appareils, zones et flux.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`MapPanelClosed`}),` : panneau replié.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`VideoFrameOSD`}),` : affichage OSD jour, nuit, batterie critique et haute altitude.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`VideoPlayerFullTrack`}),` : lecture, pause et progression sur une trace complète.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : redimensionnement du panneau, sélection d'onglet, lecture, seek, contraste OSD et absence de débordement.`}),`
`,(0,o.jsx)(t.h2,{id:`views`,children:`Views`}),`
`,(0,o.jsx)(t.h3,{id:`views--dashboard`,children:`Views / Dashboard`}),`
`,(0,o.jsxs)(t.p,{children:[`Fichiers : `,(0,o.jsx)(t.code,{children:`src/views/DashboardView.jsx`}),`, `,(0,o.jsx)(t.code,{children:`src/views/DashboardView.stories.jsx`})]}),`
`,(0,o.jsxs)(t.ul,{children:[`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`Standard`}),` : tableau de bord opérationnel complet avec données de démonstration.`]}),`
`,(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:`WithMissionButtonAction`}),` : vérifie l'ouverture du formulaire de nouvelle mission depuis le CTA.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`À vérifier : densité desktop, comportement responsive, flux d'activité, panneaux KPI et ouverture de modal.`}),`
`,(0,o.jsx)(t.h2,{id:`règles-de-maintenance`,children:`Règles de maintenance`}),`
`,(0,o.jsx)(t.p,{children:`Lorsqu'un composant reçoit une nouvelle prop ou un nouvel état visuel :`}),`
`,(0,o.jsxs)(t.ol,{children:[`
`,(0,o.jsxs)(t.li,{children:[`Ajouter ou modifier un `,(0,o.jsx)(t.code,{children:`argType`}),` avec une description et une valeur par défaut.`]}),`
`,(0,o.jsx)(t.li,{children:`Ajouter une story nommée qui montre le comportement concerné.`}),`
`,(0,o.jsx)(t.li,{children:`Documenter l'interaction attendue dans la description de la story.`}),`
`,(0,o.jsx)(t.li,{children:`Ajouter un test pour la prop critique ou le callback associé.`}),`
`,(0,o.jsxs)(t.li,{children:[`Vérifier `,(0,o.jsx)(t.code,{children:`npx tsc --noEmit`}),` et `,(0,o.jsx)(t.code,{children:`npm run lint`}),` avant de publier la documentation. Les builds sont exécutés séparément dans la CI ou lors d'une validation de release.`]}),`
`]}),`
`,(0,o.jsx)(t.p,{children:`Les stories servent de contrat visuel et comportemental ; elles ne doivent pas dépendre d'une API distante ni de données aléatoires non contrôlées.`})]})}function a(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;function s(){return(s=e((()=>{o=t(),n()})))()}s();export{a as default};