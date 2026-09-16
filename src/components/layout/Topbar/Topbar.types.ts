import type React from 'react';

export interface Breadcrumb { label: string; bold?: boolean; current?: boolean; }
export interface SearchResultItem { label: string; sub?: string; onClick?: () => void; }
export interface SearchResultGroup { group?: string; items?: SearchResultItem[]; }
export interface TopbarUser { initials?: string; avatarText?: string; displayName?: string; }
export interface TopbarProps {
  onToggleRail?: () => void;
  crumbs?: Breadcrumb[];
  connectionState?: string;
  connectionLabel?: string;
  searchValue?: string;
  onSearchChange?: React.ChangeEventHandler<HTMLInputElement>;
  searchPlaceholder?: string;
  searchResults?: SearchResultGroup[];
  notifCount?: number;
  onNotifClick?: () => void;
  notifOpen?: boolean;
  user?: TopbarUser;
  onUserClick?: () => void;
  userOpen?: boolean;
  extraActions?: React.ReactNode;
  center?: React.ReactNode;
  actions?: React.ReactNode;
}
