import type { Meta, StoryObj } from '@storybook/react-vite';
import HoverCard from './HoverCard';

const meta = {
  title: 'Specialized/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' , docs: { description: { component: 'Composant HoverCard documenté par les props définies dans args et argTypes. États couverts par les stories: Default, Offline, WithBody. Vérifier les callbacks, contrôles et interactions exposés par les variantes.' } } },
  args: {
    title: 'Dronet-07',
    subtitle: 'Dernière position · 12:42',
    status: 'En ligne',
    battery: 'Batterie 82 %',
    range: 'Portée 1,2 km',
    chips: 'Inspection · Alpha',
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Offline: Story = { args: { status: 'Hors ligne', battery: undefined } };
export const WithBody: Story = { args: { children: <p>Altitude 124 m</p> } };