import type { Meta, StoryObj } from '@storybook/react-vite';
import ProfileButton from './ProfileButton';
const meta = { title: 'UI/ProfileButton', component: ProfileButton, tags: ['autodocs'], parameters: { layout: 'centered' , docs: { description: { component: 'Composant ProfileButton documenté par les props définies dans args et argTypes. États couverts par les stories: Default, Initials, Open. Vérifier les callbacks, contrôles et interactions exposés par les variantes.' } } }, args: { name: 'Aline Martin', initials: 'AM' } } satisfies Meta<typeof ProfileButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Initials: Story = { args: { name: 'Opérateur', initials: 'OP' } };
export const Open: Story = { args: { open: true } };