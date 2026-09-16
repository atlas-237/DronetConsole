import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import Notice from "./Notice";
const meta = {
  title: "UI/Notice",
  component: Notice,
  tags: ['autodocs'],
  parameters: { layout: "centered" , docs: { description: { component: 'Composant Notice documenté par les props définies dans args et argTypes. États couverts par les stories: Default, Warning, Error. Vérifier les callbacks, contrôles et interactions exposés par les variantes.' } } },
  args: {
    title: "Synchronisation",
    children: "Les données sont à jour.",
    onClose: fn(),
  },
} satisfies Meta<typeof Notice>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Warning: Story = { args: { tone: "warn", title: "Attention" } };
export const Error: Story = { args: { tone: "danger", title: "Erreur" } };
