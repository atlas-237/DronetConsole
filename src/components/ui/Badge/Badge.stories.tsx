import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Indicateur compact d’état ou de classification. Les variantes reflètent les tons du design system et le point optionnel signale un état actif sans remplacer le libellé.',
      },
    },
  },
  args: { children: 'En ligne' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Par défaut</Badge>
      <Badge variant="ok" dot>En ligne</Badge>
      <Badge variant="warn">Attention</Badge>
      <Badge variant="danger">Erreur</Badge>
      <Badge variant="brand">Mission</Badge>
    </div>
  ),
};

export const Small: Story = { args: { size: 'sm', variant: 'ok', dot: true } };
