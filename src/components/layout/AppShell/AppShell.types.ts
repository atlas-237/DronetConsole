import type React from 'react';

export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  active?: boolean;
  count?: number;
  onClick?: (item: NavigationItem) => void;
}

export interface NavigationGroup {
  title?: string;
  items?: NavigationItem[];
}

export interface ShellUser {
  avatarText?: string;
  displayName?: string;
  name?: string;
  role?: string;
  [key: string]: unknown;
}

export interface AppShellProps {
  railMinimized?: boolean;
  user?: ShellUser;
  brandLogoSrc?: string;
  brandName?: string;
  brandSub?: string;
  navGroups?: NavigationGroup[];
  activePage?: string;
  onNavigate?: (id: string) => void;
  children?: React.ReactNode;
  topbar?: React.ReactNode;
  mobileNav?: React.ReactNode;
}
