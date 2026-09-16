import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroKPI from './HeroKPI';
const meta = { title: 'Data/HeroKPI', component: HeroKPI, tags: ['autodocs'], parameters: { docs: { description: { component: 'KPI principaux affichés avec label, valeur, tone, unité et notes éventuelles. Les stories montrent les valeurs nominales, les unités et une métrique critique; elles servent à vérifier la hiérarchie visuelle des indicateurs.' } } }, args: { items: [{ label: 'Appareils', value: 5, tone: 'ok' }, { label: 'Alertes', value: 2, tone: 'warn' }] } } satisfies Meta<typeof HeroKPI>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithUnits: Story = { args: { items: [{ label: 'Batterie', value: 82, unit: '%', tone: 'ok', note: 'Nominale' }] } };
export const Critical: Story = { args: { items: [{ label: 'RSSI', value: -92, unit: 'dBm', tone: 'danger', sub: 'Signal faible' }] } };
