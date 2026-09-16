import type { Meta, StoryObj } from '@storybook/react-vite';
import MetricsGrid from './MetricsGrid';
const meta = { title: 'Data/MetricsGrid', component: MetricsGrid, tags: ['autodocs'], parameters: { docs: { description: { component: 'Grille de métriques avec label, value, tone et aide contextuelle. Les stories couvrent la liste metrics, l’alternative items et une aide associée afin de vérifier les états informatifs et d’avertissement.' } } }, args: { metrics: [{ label: 'Images', value: 95 }, { label: 'Latence', value: '1,3 s', tone: 'warn' }] } } satisfies Meta<typeof MetricsGrid>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const UsingItems: Story = { args: { items: [{ key: 'Zones', value: 10, tone: 'ok' }] } };
export const WithHelp: Story = { args: { metrics: [{ label: 'APs WEP', value: 2, tone: 'danger', help: 'Mise à niveau requise' }] } };
