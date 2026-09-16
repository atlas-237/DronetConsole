import { useEffect, useState } from 'react';
import type { TabId, TabsProps } from './Tabs.types';

export default function Tabs({ tabs, defaultTab, activeTab, active, onTabChange, onChange, className = '' }: TabsProps) {
  const normalizedTabs = tabs.map((tab, index) => ({ ...tab, id: tab.id ?? index }));
  const isControlled = activeTab !== undefined || active !== undefined;
  const initial = defaultTab !== undefined ? defaultTab : (normalizedTabs[0]?.id ?? 0);
  const [internalTab, setInternalTab] = useState<TabId>(initial);
  const currentTabId = isControlled ? (activeTab !== undefined ? activeTab : active) : internalTab;
  useEffect(() => { if (!isControlled && normalizedTabs.length && normalizedTabs.every(tab => tab.id !== internalTab)) setInternalTab(normalizedTabs[0].id as TabId); }, [normalizedTabs, isControlled, internalTab]);
  const handleClick = (id: TabId) => { if (!isControlled) setInternalTab(id); onChange?.(id); onTabChange?.(id); };
  const currentTab = normalizedTabs.find(tab => tab.id === currentTabId);
  const tabsClasses = ['tabs'];
  if (className) tabsClasses.push(className);
  return <><div className={tabsClasses.join(' ')} role="tablist">{normalizedTabs.map(tab => { const selected = tab.id === currentTabId; return <button key={String(tab.id)} type="button" role="tab" aria-selected={selected} className={`tab${selected ? ' is-active' : ''}`} onClick={() => handleClick(tab.id as TabId)}><span>{tab.label}</span>{tab.count !== undefined && <span className="cnt">{tab.count}</span>}</button>; })}</div>{currentTab && currentTab.content !== undefined && <div role="tabpanel">{currentTab.content}</div>}</>;
}
