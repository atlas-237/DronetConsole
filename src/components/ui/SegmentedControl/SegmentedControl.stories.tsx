import type { Meta, StoryObj } from '@storybook/react-vite';
import SegmentedControl from './SegmentedControl';

const meta = {
  title: 'UI/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Groupe de choix exclusifs destiné aux modes d’affichage et filtres courts. La valeur exposée est l’index de l’option et chaque bouton publie son état via aria-pressed.',
      },
    },
  },
  args: { items: ['Historique', 'État courant', 'Instantané'], value: 0 },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithDisabledOption: Story = { args: { items: [{ label: 'Actif' }, { label: 'Indisponible', disabled: true }] } };
