import type { Meta, StoryObj } from '@storybook/react-vite';
import Toast from './Toast';
const meta = { title: 'Feedback/Toast', component: Toast, tags: ['autodocs'], parameters: { docs: { description: { component: 'Notification temporaire basée sur msg, onDismiss et une action undo optionnelle. Les stories couvrent le message standard, l’annulation et un contenu riche; la fermeture et le clic sur undo sont les interactions à vérifier.' } } }, args: { msg: 'Message de notification', onDismiss: () => undefined } } satisfies Meta<typeof Toast>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithUndo: Story = { args: { msg: 'Élément supprimé.', undo: () => undefined } };
export const RichMessage: Story = { args: { msg: <strong>Mission activée</strong> } };
