import type { NavigationGroup, ShellUser } from '../AppShell/AppShell.types';

export interface SidebarProps {
  minimized?: boolean;
  groups?: NavigationGroup[];
  user?: ShellUser;
  onNavigate?: (id: string) => void;
  brandLogoSrc?: string;
  brandName?: string;
  brandSub?: string;
}
