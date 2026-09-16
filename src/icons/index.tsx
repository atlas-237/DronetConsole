import type { SVGProps } from 'react';
import { ICONS, ICON_NAMES, type IconName } from './constants';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName | string;
  size?: number;
}

export default function Icon({ name, size = 17, className = '', strokeWidth = 1.7, ...props }: IconProps) {
  const iconPath = ICONS[name as IconName];
  if (!iconPath) {
    console.warn(`[Icon] Nom d'icône invalide : "${name}". Noms disponibles : ${ICON_NAMES.join(', ')}`);
    return null;
  }
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden={props['aria-label'] ? undefined : true} className={className} {...props}>{iconPath}</svg>;
}

export { ICONS, ICON_NAMES };
