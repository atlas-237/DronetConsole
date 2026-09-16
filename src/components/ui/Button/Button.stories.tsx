import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Icon from '@icons';
import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Bouton d’action réutilisable. La story couvre les quatre variantes visuelles, les trois tailles, les icônes à gauche ou à droite, l’état désactivé et les types natifs button, submit et reset.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'primary', 'quiet', 'danger'] },
    size: { control: 'inline-radio', options: ['default', 'sm', 'icon'] },
    type: { control: 'inline-radio', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    icon: { control: false },
    iconRight: { control: false },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: fn(),
    children: 'Valider',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary', children: 'Action principale' },
};

export const Quiet: Story = {
  args: { variant: 'quiet', children: 'Action discrète' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Supprimer' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Action compacte' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, children: 'Indisponible' },
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    icon: <Icon name="check" size={16} />,
    children: 'Enregistrer',
  },
};

export const WithRightIcon: Story = {
  args: {
    iconRight: <Icon name="chev" size={15} />,
    children: 'Continuer',
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    variant: 'default',
    'aria-label': 'Actualiser',
    children: <Icon name="obs" size={16} />,
  },
};

export const IconOnlyPrimary: Story = {
  args: {
    size: 'icon',
    variant: 'primary',
    'aria-label': 'Nouvelle mission',
    children: <Icon name="mission" size={16} />,
  },
};

export const Submit: Story = {
  args: { type: 'submit', variant: 'primary', children: 'Valider le formulaire' },
};

export const Reset: Story = {
  args: { type: 'reset', variant: 'quiet', children: 'Réinitialiser' },
};

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
      <Button {...args} variant="default">Secondaire</Button>
      <Button {...args} variant="primary">Principal</Button>
      <Button {...args} variant="quiet">Discret</Button>
      <Button {...args} variant="danger">Dangereux</Button>
      <Button {...args} size="sm">Compact</Button>
      <Button {...args} size="icon" aria-label="Icône"><Icon name="obs" size={16} /></Button>
    </div>
  ),
};
