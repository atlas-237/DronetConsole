import type { Meta, StoryObj } from '@storybook/react-vite';
import EmptyState from './EmptyState';
const meta = { title: 'Feedback/EmptyState', component: EmptyState, tags: ['autodocs'], parameters: { docs: { description: { component: 'État vide avec title, text, icône et action optionnelle. Les stories couvrent l’affichage sans action, avec action et avec icône personnalisée; le clic sur l’action est l’interaction à vérifier.' } } }, args: { title: 'Aucun appareil', text: 'La flotte est vide.' } } satisfies Meta<typeof EmptyState>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithAction: Story = { args: { actionLabel: 'Ajouter', onAction: () => undefined } };
export const CustomIcon: Story = { args: { iconName: 'image', title: 'Galerie vide' } };
