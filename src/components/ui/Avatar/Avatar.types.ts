import type { CSSProperties } from 'react';

export interface AvatarProps {
  /**
   * Nom de la personne.
   *
   * Utilisé pour générer automatiquement les initiales
   * lorsque aucune image n'est fournie.
   */
  name?: string;

  /**
   * Taille de l'avatar en pixels.
   *
   * @default 32
   */
  size?: number;

  /**
   * URL de l'image à afficher.
   *
   * Lorsque `src` est défini, l'image remplace les initiales.
   */
  src?: string;

  /**
   * Couleur personnalisée du fond de l'avatar.
   *
   * Si aucune couleur n'est fournie, une couleur est
   * automatiquement déterminée à partir du nom.
   */
  color?: string;

  /**
   * Styles inline supplémentaires.
   */
  style?: CSSProperties;

  /**
   * Classe CSS supplémentaire.
   */
  className?: string;

  /**
   * Fonction appelée lors du clic sur l'avatar.
   *
   * Lorsque cette fonction est définie, l'avatar reçoit
   * le rôle `button`.
   */
  onClick?: () => void;
}

export interface AvatarWithInfoProps {
  /**
   * Nom de la personne affiché à côté de l'avatar.
   */
  name?: string;

  /**
   * Rôle ou fonction de la personne.
   */
  role?: string;

  /**
   * Taille de l'avatar.
   *
   * @default 30
   */
  avatarSize?: number;

  /**
   * Détermine si le nom et le rôle doivent être affichés.
   *
   * @default true
   */
  showRole?: boolean;

  /**
   * Fonction appelée lors du clic sur le bloc.
   */
  onClick?: () => void;

  /**
   * Props supplémentaires transmises au composant Avatar.
   */
  avatarProps?: AvatarProps;

  /**
   * Styles inline supplémentaires.
   */
  style?: CSSProperties;

  /**
   * Classe CSS supplémentaire.
   */
  className?: string;
}