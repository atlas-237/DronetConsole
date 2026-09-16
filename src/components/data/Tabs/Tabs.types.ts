import type React from 'react';

export type TabId = string | number;
export type TabChangeHandler = { bivarianceHack(id: TabId): void }['bivarianceHack'];
export interface TabItem {
  id?: TabId;
  label: string;
  count?: string | number;
  content?: React.ReactNode;
}
export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: TabId;
  activeTab?: TabId;
  active?: TabId;
  onTabChange?: TabChangeHandler;
  onChange?: TabChangeHandler;
  className?: string;
}
