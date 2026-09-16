import type { NavigationItem } from '../AppShell/AppShell.types';

export interface MobileNavItem extends NavigationItem { badge?: number; }
export interface MobileNavProps {
  items?: MobileNavItem[];
  overflowItems?: MobileNavItem[];
  onOverflowClick?: () => void;
  active?: string;
  onChange?: (id: string, item: MobileNavItem) => void;
  onMore?: () => void;
}
