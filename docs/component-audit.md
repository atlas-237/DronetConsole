# Audit des composants Dronet Console

Date : 2026-09-16

## Périmètre

L'audit couvre `darta (6).html`, `src/components`, `src/views`, `src/hooks`, `src/utils`, `src/context`, les exports publics et les fichiers Storybook.

## Résultats

- Le HTML source contient déjà les briques React suivantes : shell, navigation latérale/mobile, topbar, recherche globale, panneaux, métriques, tableaux, états vide/erreur/chargement, modales, toasts, timeline, galerie, lecteur vidéo, identifiants JWT, filtres carte, légende, hover card, flux d'activité et indicateurs de statut.
- Les composants correspondants existent maintenant dans `src/components` et sont exposés par les index `data`, `feedback`, `layout`, `modals`, `specialized` et `ui`.
- Deux surfaces du HTML n'étaient pas cataloguées comme composants autonomes : la barre de relecture temporelle et le menu d'attention carte. Elles sont couvertes par `ReplayTimebar` et `AttentionPopover`, avec types, stories et tests.
- 73 fichiers de stories TypeScript couvrent les composants et la vue dashboard. Les stories utilisent `satisfies Meta<...>`, `StoryObj` et `autodocs`; les variantes nominales, vides, critiques, contrôlées et interactives sont représentées selon le composant.
- Le code source `src` est désormais entièrement en TypeScript (`.ts`/`.tsx`) et `allowJs` est désactivé dans `tsconfig.json`.

## Corrections réalisées

- Alias Vite rendus explicites pour les entrées `@utils` et `@icons`.
- Correction de la priorité d'opérateurs dans la couleur de `BandCards`.
- Correction de la largeur remontée par `MapPanel` après redimensionnement.
- Correction du positionnement du curseur final dans `TimelineDensity`.
- Ajout de `ReplayTimebar` et `AttentionPopover` avec leurs contrats TypeScript, stories et tests.
- Remplacement de `react-icons` par les composants SVG locaux issus de `darta (6).html`, avec catalogue Storybook dans `src/icons/Icon.stories.tsx`.

## Migration TypeScript

La migration des entrées, vues, contexte, icônes, hooks, utilitaires, données et stories est terminée. Les anciens fichiers JavaScript ont été retirés et les imports publics pointent vers les entrées TypeScript.

## Risques à traiter

1. Stabiliser la configuration Vitest/Storybook afin que les tests navigateur chargent les mêmes alias et une seule instance React.
2. Ajouter des tests d'intégration pour chaque route de `App`, les modales ouvertes depuis les vues et les interactions de carte.
3. La clé Google Maps ne doit pas être committée : elle est désormais lue depuis `VITE_GOOGLE_MAPS_API_KEY`.
