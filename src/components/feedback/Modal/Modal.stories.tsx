import type { Meta, StoryObj } from '@storybook/react-vite';
import Modal from './Modal';
const meta = { title: 'Feedback/Modal', component: Modal, tags: ['autodocs'], parameters: { docs: { description: { component: 'Fenêtre modale contrôlée par open, title et children, avec onClose, onConfirm, danger, confirmLabel, hideFooter et size. Les stories couvrent la confirmation standard, le danger et l’absence de pied de page; les boutons et la fermeture sont les interactions principales.' } } }, args: { open: true, title: 'Confirmation', children: 'Contenu de la modale.', onClose: () => undefined, onConfirm: () => undefined } } satisfies Meta<typeof Modal>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Danger: Story = { args: { danger: true, confirmLabel: 'Supprimer' } };
export const WithoutFooter: Story = { args: { hideFooter: true, size: 'sm' } };
