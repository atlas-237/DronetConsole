import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Champ polymorphe compatible avec input, select et textarea. Les exemples couvrent les valeurs invalides, les placeholders, les options natives et le contenu multiligne.',
      },
    },
  },
  args: { placeholder: 'Saisir une valeur' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {};
export const Invalid: Story = { args: { invalid: true, placeholder: 'Valeur invalide' } };
export const Select: Story = { render: () => <Input as="select" defaultValue="drone"><option value="drone">Drone</option><option value="station">Station sol</option></Input> };
export const Textarea: Story = { render: () => <Input as="textarea" rows={3} placeholder="Description" /> };
