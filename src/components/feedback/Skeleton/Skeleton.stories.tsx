import type { Meta, StoryObj } from '@storybook/react-vite';
import Skeleton from './Skeleton';
const meta = { title: 'Feedback/Skeleton', component: Skeleton, tags: ['autodocs'], parameters: { docs: { description: { component: 'Placeholder visuel de chargement avec type et dimensions width/height. Les stories montrent les formats row, fixed et avatar afin de couvrir les silhouettes utilisées dans les listes et profils.' } } }, args: { type: 'row' } } satisfies Meta<typeof Skeleton>;
export default meta; type Story = StoryObj<typeof meta>;
export const Row: Story = {};
export const Fixed: Story = { args: { width: 160, height: 24 } };
export const Avatar: Story = { args: { width: 48, height: 48, style: { borderRadius: 999 } } };
