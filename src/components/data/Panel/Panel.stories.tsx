import type { Meta, StoryObj } from '@storybook/react-vite';
import Panel from './Panel';
const meta = { title: 'Data/Panel', component: Panel, tags: ['autodocs'], parameters: { docs: { description: { component: 'Conteneur de panneau pour un titre, un contenu children et une zone right optionnelle. Les stories montrent le panneau standard, un indicateur à droite et la variante collapsible avec son interaction d’ouverture.' } } }, args: { title: 'Section opérationnelle', children: 'Contenu du panneau.' } } satisfies Meta<typeof Panel>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithRight: Story = { args: { right: '5 actifs' } };
export const Collapsible: Story = { args: { collapsible: true, defaultOpen: false } };
