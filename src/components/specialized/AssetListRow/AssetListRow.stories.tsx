import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import AssetListRow from './AssetListRow';
const asset = { id: 'drone-01', name: 'Skydroid 01', battery: 78, manufacturer: 'Darta', model: 'X1', last: '12:04' };
const meta = { title: 'Specialized/AssetListRow', component: AssetListRow, parameters: { layout: 'centered' , docs: { description: { component: 'Composant AssetListRow documenté par les props définies dans args et argTypes. États couverts par les stories: Default, LowBattery, OfflineLabel. Vérifier les callbacks, contrôles et interactions exposés par les variantes.' } } }, tags: ['autodocs'], argTypes: { color: { control: 'color' } }, args: { asset, onClick: fn() } } satisfies Meta<typeof AssetListRow>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const LowBattery: Story = { args: { asset: { ...asset, battery: 18 } } };
export const OfflineLabel: Story = { args: { asset: { ...asset, name: 'Balise inconnue', battery: 0 }, color: 'var(--danger)' } };