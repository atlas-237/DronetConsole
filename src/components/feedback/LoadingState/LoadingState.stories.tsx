import type { Meta, StoryObj } from '@storybook/react-vite';
import LoadingState from './LoadingState';
const meta = { title: 'Feedback/LoadingState', component: LoadingState, tags: ['autodocs'], parameters: { docs: { description: { component: 'Placeholder de chargement configurable par rows et rowHeight. Les stories couvrent le format standard, compact et une liste dense pour vérifier la continuité visuelle pendant le chargement.' } } }, args: { rows: 5, rowHeight: 46 } } satisfies Meta<typeof LoadingState>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Compact: Story = { args: { rows: 3, rowHeight: 28 } };
export const DenseList: Story = { args: { rows: 10, rowHeight: 32 } };
