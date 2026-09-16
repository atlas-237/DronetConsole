import type { CSSProperties, ReactNode } from 'react';

export type AlertTone = 'info' | 'ok' | 'warn' | 'danger';

export interface AlertProps {
  /**
   * Définit le niveau visuel et sémantique de l'alerte.
   *
   * - `info` : information générale
   * - `ok` : opération réussie
   * - `warn` : avertissement
   * - `danger` : erreur ou problème critique
   *
   * @default "info"
   */
  tone?: AlertTone;

  /**
   * Titre optionnel affiché au-dessus du contenu.
   */
  title?: string;

  /**
   * Contenu principal de l'alerte.
   */
  children?: ReactNode;

  /**
   * Texte du bouton d'action.
   *
   * Lorsqu'une action est définie, le bouton de fermeture
   * `dismissible` n'est pas affiché.
   */
  action?: string;

  /**
   * Fonction appelée lorsque l'utilisateur clique sur le bouton d'action.
   */
  onAction?: () => void;

  /**
   * Icône personnalisée.
   *
   * Si aucune icône n'est fournie, une icône correspondant
   * au `tone` est utilisée automatiquement.
   */
  icon?: ReactNode;

  /**
   * Permet d'afficher un bouton permettant de fermer l'alerte.
   *
   * @default false
   */
  dismissible?: boolean;

  /**
   * Fonction appelée lorsque l'utilisateur ferme l'alerte.
   */
  onDismiss?: () => void;

  /**
   * Styles inline supplémentaires.
   */
  style?: CSSProperties;

  /**
   * Classe CSS supplémentaire.
   */
  className?: string;
}