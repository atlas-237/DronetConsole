import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import AttentionPopover from './AttentionPopover';

const meta = {
  title: 'Specialized/AttentionPopover',
  component: AttentionPopover,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    open: true,
    onToggle: fn(),
    onSelect: fn(),
    onClose: fn(),
    items: [
      { id: 'battery', label: 'Batterie faible', detail: 'Triangle2 · 17 %' },
      { id: 'zone', label: 'Entrée en zone', detail: 'Skydroid 01 · Périmètre nord' },
    ],
  },
} satisfies Meta<typeof AttentionPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAlerts: Story = {};
export const Calm: Story = { args: { items: [] } };
export const Closed: Story = { args: { open: false } };
