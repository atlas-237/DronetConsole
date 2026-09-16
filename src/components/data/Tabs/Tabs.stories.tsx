import type { Meta, StoryObj } from '@storybook/react-vite';
import Tabs from './Tabs';
const meta = { title: 'Data/Tabs', component: Tabs, tags: ['autodocs'], parameters: { docs: { description: { component: 'Navigation par onglets avec id, label, compteur et contenu éventuel. Les stories couvrent les onglets simples, le contenu intégré et le mode contrôlé; le changement d’onglet constitue l’interaction principale.' } } }, args: { tabs: [{ id: 'active', label: 'Actives', count: 2 }, { id: 'done', label: 'Terminées', count: 4 }] } } satisfies Meta<typeof Tabs>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithContent: Story = { args: { tabs: [{ id: 0, label: 'Résumé', content: 'Vue synthétique.' }, { id: 1, label: 'Journal', content: 'Historique.' }] } };
export const Controlled: Story = { args: { activeTab: 'done', onTabChange: id => console.log(id) } };
