import type { Meta, StoryObj } from '@storybook/react-vite';
import KVGrid from './KVGrid';
const meta = { title: 'Data/KVGrid', component: KVGrid, tags: ['autodocs'], parameters: { docs: { description: { component: 'Grille de paires clé-valeur acceptant valeurs textuelles, numériques, unités et tones. Les stories comparent les paires, les objets items et un état mixte avec valeur critique.' } } }, args: { pairs: [['ID', 'M12'], ['Batterie', '82 %', { tone: 'ok' }]] } } satisfies Meta<typeof KVGrid>;
export default meta; type Story = StoryObj<typeof meta>;
export const Pairs: Story = {};
export const Objects: Story = { args: { items: [{ key: 'Altitude', value: 96, unit: 'm' }, { key: 'Statut', value: 'Actif', tone: 'ok' }] } };
export const MixedState: Story = { args: { pairs: [['RSSI', '-92 dBm', { tone: 'danger' }], ['Historique', 0]] } };
