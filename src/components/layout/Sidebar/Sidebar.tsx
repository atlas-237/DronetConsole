import Icon from '@icons';
import defaultBrandLogoSrc from '../../../images/darta-systems-mark-512.png';
import type { NavigationItem } from '../AppShell/AppShell.types';
import type { SidebarProps } from './Sidebar.types';

export default function Sidebar({
  minimized = false,
  groups = [],
  user,
  onNavigate,
  brandLogoSrc,
  brandName = 'Dronet',
  brandSub = 'Console',
}: SidebarProps) {
  const handleItemClick = (item: NavigationItem) => {
    if (item.onClick) item.onClick(item);
    else if (onNavigate) onNavigate(item.id);
  };

  return (
    <aside className="rail flex flex-col overflow-hidden border-r border-(--line-soft) bg-(--surface)">
      <div className="brand flex h-(--topbar) shrink-0 items-center gap-2.5 border-b border-(--line-soft) px-4">
        {brandLogoSrc || defaultBrandLogoSrc ? <img src={brandLogoSrc ?? defaultBrandLogoSrc} alt="Darta Systems" className="brand-mark size-6.5 shrink-0 rounded-md object-contain" /> : <div className="brand-mark grid size-6.5 shrink-0 place-items-center rounded-md">D</div>}
        <div className="brand-text min-w-0">
          <div className="brand-name whitespace-nowrap text-[14.5px] font-semibold">{brandName}</div>
          {brandSub && <div className="brand-sub -mt-0.5 whitespace-nowrap text-[11px] text-(--text-3)">{brandSub}</div>}
        </div>
      </div>
      <nav className="nav flex-1 overflow-y-auto p-3 px-2.5">
        {groups.map((group, gi) => (
          <div className="nav-group mb-4" key={group.title || gi}>
            {group.title && <div className="nav-title px-2 pb-1.5 text-[11.5px] font-medium text-(--text-3)">{group.title}</div>}
            {group.items && group.items.map(item => {
              const Tag = item.href ? 'a' : 'button';
              return (
                <Tag
                  key={item.id}
                  className="nav-item relative mb-0.5 flex h-9 items-center gap-2.75 rounded-(--r-sm) px-2.25 text-[13.5px] font-medium text-(--text-2) transition-colors hover:bg-(--surface-2) hover:text-(--text)"
                  href={item.href || undefined}
                  onClick={event => {
                    if (item.href) return;
                    event.preventDefault();
                    handleItemClick(item);
                  }}
                  {...(item.active ? { 'aria-current': 'page' as const } : {})}
                  type={Tag === 'button' ? 'button' : undefined}
                >
                  {item.icon && <Icon name={item.icon} />}
                  <span>{item.label}</span>
                  {item.count != null && <span className="nav-count">{item.count}</span>}
                </Tag>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="rail-foot border-t border-(--line-soft) p-2.5">
        {user && (
          <button className="who" type="button">
            <div className="avatar">{user.avatarText || user.displayName?.charAt(0)?.toUpperCase() || user.name?.charAt(0)?.toUpperCase() || '?'}</div>
            <div className="who-text">
              <div className="who-name">{user.displayName || user.name}</div>
              {user.role && <div className="who-role">{user.role}</div>}
            </div>
          </button>
        )}
      </div>
    </aside>
  );
}
