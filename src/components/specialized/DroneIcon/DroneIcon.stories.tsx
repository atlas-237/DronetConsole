import type { Meta, StoryObj } from '@storybook/react-vite';
import DroneIcon from './DroneIcon';

const meta = {
  title: 'Specialized/DroneIcon',
  component: DroneIcon,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { size: 64, heading: 0, active: true, color: 'var(--cls-drone)' },
  argTypes: { heading: { control: { type: 'number', min: 0, max: 359 } }, active: { control: 'boolean' }, color: { control: 'color' } },
} satisfies Meta<typeof DroneIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {};
export const Rotated: Story = { args: { heading: 135 } };
export const Disabled: Story = { args: { active: false, color: 'var(--n500)' } };
