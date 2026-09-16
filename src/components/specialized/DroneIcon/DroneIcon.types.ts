import type { CSSProperties, SVGProps } from 'react';

export interface DroneIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  size?: number;
  color?: string;
  heading?: number;
  active?: boolean;
  className?: string;
  style?: CSSProperties;
}
