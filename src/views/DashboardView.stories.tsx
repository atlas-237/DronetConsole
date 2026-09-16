import { useState } from 'react';
import type { ComponentType } from 'react';
import { fn } from 'storybook/test';
import { ToastProvider } from '@context/ToastContext';
import DashboardView from './DashboardView';

const meta = {
  title: 'Views/DashboardView',
  component: DashboardView,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Vue opérationnelle complète regroupant signaux radio, répartitions, flux d’activité, flotte, timeline et KPI.' } } },
  decorators: [(Story: ComponentType) => <ToastProvider><div className="min-h-screen bg-(--bg) p-4"><Story /></div></ToastProvider>],
  args: { onOpenNewMission: fn() },
} satisfies import('@storybook/react-vite').Meta<typeof DashboardView>;

export default meta;
type Story = import('@storybook/react-vite').StoryObj<typeof meta>;
export const Standard: Story = {};
export const WithMissionAction: Story = { render: function Demo() { const [opened, setOpened] = useState(false); return <><DashboardView onOpenNewMission={() => setOpened(true)} />{opened && <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"><div className="w-full max-w-md rounded-lg border border-(--line) bg-(--surface) p-5 shadow-xl"><h2 className="text-lg font-semibold">Nouvelle mission</h2><p className="mt-2 text-sm text-(--text-2)">Le callback onOpenNewMission a été déclenché.</p><button className="mt-4 rounded-md bg-(--brand) px-3 py-2 text-sm font-semibold text-(--on-brand)" type="button" onClick={() => setOpened(false)}>Fermer</button></div></div>}</>; } };
