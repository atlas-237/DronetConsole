import type { Meta, StoryObj } from '@storybook/react-vite';
import Field from './Field';
import Input from '../Input/Input';

const meta = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Conteneur sémantique de formulaire associant un label, un champ, une aide et un message d’erreur. L’erreur est prioritaire sur l’aide et l’astérisque signale un champ requis.',
      },
    },
  },
  args: { children: <Input placeholder="Valeur" /> },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Field label="Nom de la mission" required help="Nom affiché dans la console."><Input placeholder="Avenue Germaine AHIDJO" /></Field>,
};

export const Error: Story = {
  render: () => <Field label="Identifiant" error="Identifiant invalide"><Input invalid placeholder="AA:BB:CC:DD:EE:FF" /></Field>,
};
