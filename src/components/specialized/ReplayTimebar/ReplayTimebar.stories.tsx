import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import ReplayTimebar from './ReplayTimebar';

const meta = {
  title: 'Specialized/ReplayTimebar',
  component: ReplayTimebar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    mode: 'replay',
    value: 42,
    max: 100,
    nowLabel: 'T+42 min',
    onModeChange: fn(),
    onChange: fn(),
    onSegmentChange: fn(),
    segments: [
      { id: 'hour', label: '1 h' },
      { id: 'day', label: '24 h' },
    ],
    selectedSegment: 'hour',
  },
} satisfies Meta<typeof ReplayTimebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Replay: Story = {};
export const Live: Story = { args: { mode: 'live', segments: [] } };
export const WithoutSegments: Story = { args: { segments: undefined } };
