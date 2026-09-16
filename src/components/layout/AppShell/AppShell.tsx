import type { AppShellProps } from './AppShell.types';
import Sidebar from '../Sidebar/Sidebar';

export default function AppShell({
  railMinimized = false,
  user,
  brandLogoSrc,
  brandName,
  brandSub,
  navGroups = [],
  activePage,
  onNavigate,
  children,
  topbar,
  mobileNav,
}: AppShellProps) {
  return (
    <div className="app" data-rail={railMinimized ? 'min' : 'full'}>
      <Sidebar
        minimized={railMinimized}
        groups={navGroups.map(group => ({
          ...group,
          items: group.items?.map(item => ({
            ...item,
            active: item.id === activePage,
          })),
        }))}
        user={user}
        onNavigate={onNavigate}
        brandLogoSrc={brandLogoSrc}
        brandName={brandName}
        brandSub={brandSub}
      />
      <div className="main">
        {topbar}
        <div className="view">{children}</div>
      </div>
      {mobileNav}
    </div>
  );
}
