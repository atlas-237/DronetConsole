import type { Meta, StoryObj } from '@storybook/react-vite';
import Icon from './index';
import { ICON_NAMES } from './constants';

const meta = {
  title: 'Foundation/Icons',
  component: Icon,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { name: 'search', size: 24 },
  argTypes: { name: { control: 'select', options: ICON_NAMES }, size: { control: { type: 'number', min: 12, max: 64 } } },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};
export const SourceCatalogue: Story = {
  render: () => <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(52px, 1fr))', gap: 16, padding: 20 }}>{ICON_NAMES.map(name => <div key={name} title={name} style={{ display: 'grid', justifyItems: 'center', gap: 6, color: 'var(--text-2)' }}><Icon name={name} size={22} /><span style={{ fontSize: 10 }}>{name}</span></div>)}</div>,
};
