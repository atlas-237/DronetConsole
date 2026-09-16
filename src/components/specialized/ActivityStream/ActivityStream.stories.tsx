import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import ActivityStream from './ActivityStream';

const items = [
  { id: '1', time: '12:04:18', type: 'radio.wifi', text: 'Nouvelle observation Wi-Fi détectée' },
  { id: '2', time: '12:04:11', type: 'zone', text: 'Entrée dans la zone nord' },
];

const meta = {
  title: 'Specialized/ActivityStream',
  component: ActivityStream,
  parameters: { layout: 'centered' , docs: { description: { component: 'Composant ActivityStream documenté par les props définies dans args et argTypes. États couverts par les stories: Default, Paused, Empty. Vérifier les callbacks, contrôles et interactions exposés par les variantes.' } } },
  tags: ['autodocs'],
  argTypes: { paused: { control: 'boolean' }, maxHeight: { control: 'number' } },
  args: { items, onPauseToggle: fn(), onViewAll: fn(), onItemClick: fn() },
} satisfies Meta<typeof ActivityStream>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Paused: Story = { args: { paused: true } };
export const Empty: Story = { args: { items: [] } };