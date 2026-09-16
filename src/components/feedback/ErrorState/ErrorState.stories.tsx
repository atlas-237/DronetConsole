import type { Meta, StoryObj } from '@storybook/react-vite';
import ErrorState from './ErrorState';
const meta = { title: 'Feedback/ErrorState', component: ErrorState, tags: ['autodocs'], parameters: { docs: { description: { component: 'État d’erreur contextualisé par what et refId, avec callback onRetry optionnel. Les stories couvrent l’erreur par défaut, la récupération par réessai et une référence personnalisée.' } } }, args: { what: 'les observations', refId: 'INC-2026-0915-77' } } satisfies Meta<typeof ErrorState>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Retry: Story = { args: { onRetry: () => undefined } };
export const CustomReference: Story = { args: { what: 'la carte', refId: 'INC-CUSTOM-01' } };
