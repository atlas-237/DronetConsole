import React from 'react';
import Icon from '@icons';
import { Button, Input } from '@components/ui';
import type { TopbarProps } from './Topbar.types';

export default function Topbar({ onToggleRail, crumbs = [], connectionState = 'up', connectionLabel, searchValue, onSearchChange, searchPlaceholder = 'Rechercher…', searchResults, notifCount = 0, onNotifClick, notifOpen = false, user, onUserClick, userOpen = false, extraActions, center, actions }: TopbarProps) {
  const showResults = searchResults && searchResults.length > 0;
  return (
    <header className="topbar flex h-(--topbar) shrink-0 items-center gap-3.5 border-b border-(--line-soft) bg-(--surface) px-4">
      {onToggleRail && <Button variant="quiet" size="icon" className="railtoggle" onClick={onToggleRail} aria-label="Basculer la barre latérale"><Icon name="panel" /></Button>}
      {crumbs.length > 0 && <nav className="crumbs" aria-label="Fil d'Ariane">{crumbs.map((crumb, i) => <React.Fragment key={i}>{i > 0 && <span className="sep">/</span>}{crumb.bold || crumb.current ? <b>{crumb.label}</b> : <span>{crumb.label}</span>}</React.Fragment>)}</nav>}
      {center !== undefined ? center : (searchValue != null || onSearchChange) && <div className="gsearch"><div className="ic"><Icon name="search" size={14} /></div><Input type="text" value={searchValue} onChange={onSearchChange} placeholder={searchPlaceholder} />{showResults && <div className={`gsearch-results ${notifOpen ? 'open' : ''}`}>{searchResults.map((group, gi) => <React.Fragment key={gi}>{group.group && <div className="grp">{group.group}</div>}{group.items && group.items.map((item, ii) => <button key={ii} type="button" onClick={item.onClick}><span>{item.label}</span>{item.sub && <span className="sub">{item.sub}</span>}</button>)}</React.Fragment>)}</div>}</div>}
      <div className="topbar-right">{actions !== undefined ? actions : <>{connectionLabel && <div className="conn" data-state={connectionState}><span className="pulse" /><span>{connectionLabel}</span></div>}{notifCount != null && <button type="button" className="iconbtn" onClick={onNotifClick} aria-expanded={notifOpen ? 'true' : undefined} aria-label="Notifications"><Icon name="bell" size={18} />{notifCount > 0 && <span className="bell-dot">{notifCount > 99 ? '99+' : notifCount}</span>}</button>}{extraActions}{user && <button type="button" className="profbtn" onClick={onUserClick} aria-expanded={userOpen ? 'true' : undefined}><div className="avatar">{user.initials || user.avatarText || user.displayName?.charAt(0)?.toUpperCase() || '?'}</div>{user.displayName && <span className="nm">{user.displayName}</span>}</button>}</>}</div>
    </header>
  );
}
