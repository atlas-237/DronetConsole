import type { Meta, StoryObj } from '@storybook/react-vite';
import FilterChip, { FilterChipGroup } from './FilterChip';

const meta = {
  title: 'UI/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Filtre compact avec couleur et marqueur de forme configurables. FilterChipGroup fournit une sélection contrôlée et transmet l’identifiant, le nouvel état et l’élément source.',
      },
    },
  },
  args: { label: 'Wi-Fi', color: 'var(--dblue)' },
} satisfies Meta<typeof FilterChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Shapes: Story = { render: () => <div className="flex gap-2"><FilterChip label="Wi-Fi" shape="square" /><FilterChip label="Bluetooth" shape="diamond" /><FilterChip label="Télémétrie" shape="circle" /></div> };
export const Group: Story = { render: () => <FilterChipGroup items={[{ id: 'wifi', label: 'Wi-Fi' }, { id: 'bt', label: 'Bluetooth', color: 'var(--brand)' }]} /> };
