import { useState } from 'react';
import { AppShell, Topbar, MobileNav } from '@components/layout';
import { useToast } from '@components/feedback';
import { useTheme, useBreakpoint } from '@hooks';
import { GlobalSearch, IconButton } from '@components/specialized';
import { NAV_ITEMS, SAMPLE_ASSETS } from '@/data/sampleData';
import { AdminView, AssetsView, DashboardView, GalleryView, MapView, MissionsView, ObsView } from '@/views';
import { NewMissionModal } from '@/components/modals';

type PageId = typeof NAV_ITEMS[number]['id'];
const NAV_GROUPS = [{ title: 'Opérations', items: NAV_ITEMS.slice(0, 4) }, { title: 'Analyse', items: NAV_ITEMS.slice(4, 6) }, { title: 'Administration', items: NAV_ITEMS.slice(6) }];
function RouterOutlet({ page, onOpenNewMission }: { page: string; onOpenNewMission: () => void }) { switch (page) { case 'dashboard': return <DashboardView onOpenNewMission={onOpenNewMission} />; case 'map': return <MapView />; case 'assets': return <AssetsView />; case 'missions': return <MissionsView />; case 'obs': return <ObsView />; case 'gallery': return <GalleryView />; case 'admin': return <AdminView />; default: return null; } }

export default function App() {
  const [page, setPage] = useState<PageId>('dashboard');
  const [railMin, setRailMin] = useState(false);
  const [newMissionOpen, setNewMissionOpen] = useState(false);
  const [notif, setNotif] = useState(3);
  const { toggle, isDark } = useTheme();
  const breakpoint = useBreakpoint();
  const toast = useToast();
  const currentNav = NAV_ITEMS.find(item => item.id === page) ?? NAV_ITEMS[0];
  const searchSources = [{ title: 'Appareils', icon: 'asset', items: SAMPLE_ASSETS.map(asset => ({ id: asset.id, title: asset.name, subtitle: `${asset.manufacturer} ${asset.model}`, icon: 'asset', shape: 'circle', meta: `${asset.battery}%`, color: asset.asset_type === 'drone' ? 'var(--cls-drone)' : 'var(--cls-ground)' })) }, { title: 'Zones', icon: 'map', items: [{ id: 'z1', title: 'Périmètre nord', subtitle: 'M1 · Opération', icon: 'map', color: 'var(--dblue)', shape: 'square', meta: '5 pts' }] }, { title: 'Missions', icon: 'mission', items: [{ id: 'm1', title: 'Avenue Germaine AHIDJO', subtitle: 'Active', icon: 'mission', color: 'var(--brand)', shape: 'diamond' }] }];
  return <><AppShell railMinimized={railMin} navGroups={NAV_GROUPS} activePage={page} onNavigate={id => setPage(id as PageId)} user={{ displayName: 'Vanella Kenfack', role: 'Opérateur' }} brandName="Darta Drone Net" brandSub="Console · v2026.09" topbar={<Topbar onToggleRail={() => setRailMin(value => !value)} crumbs={[{ label: 'Console', onClick: () => toast.show('Retour accueil', { tone: 'info' }) }, { label: currentNav.label, current: true }]} center={!breakpoint.lt('lg') && <GlobalSearch sources={searchSources} onSelect={(item, source) => toast.show(`Résultat · ${source.title} : ${item.title}`, { tone: 'ok' })} />} actions={<><IconButton icon="bell" badge={notif} label="Notifications" onClick={() => { toast.show('Centre notifications', { tone: 'info' }); setNotif(0); }} /><IconButton icon="shield" label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'} onClick={toggle} /><button type="button" aria-label="Ouvrir le profil" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '3px 10px 3px 3px', background: 'var(--bg-3)', border: '1px solid var(--line-2)', borderRadius: 999, cursor: 'pointer' }} onClick={() => setPage('admin')}><span style={{ width: 30, height: 30, borderRadius: 999, background: 'var(--brand)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>VK</span>{!breakpoint.lt('xl') && <span style={{ lineHeight: 1.1 }}><span style={{ display: 'block', fontSize: 12.5, fontWeight: 600 }}>Vanella K.</span><span style={{ display: 'block', fontSize: 10.5, color: 'var(--text-3)' }}>Opérateur</span></span>}</button></>} />} mobileNav={breakpoint.lt('lg') ? <MobileNav items={NAV_ITEMS.slice(0, 4).map(item => ({ id: item.id, icon: item.icon, label: item.label, badge: item.badge }))} active={page} onChange={id => setPage(id as PageId)} onMore={() => toast.show('Menu supplémentaire', { tone: 'info' })} /> : null}><div style={{ padding: 16 }}><RouterOutlet page={page} onOpenNewMission={() => setNewMissionOpen(true)} /></div></AppShell><NewMissionModal open={newMissionOpen} onClose={() => setNewMissionOpen(false)} onCreate={() => { setNewMissionOpen(false); toast.show('Mission créée', { tone: 'ok' }); }} /></>;
}
