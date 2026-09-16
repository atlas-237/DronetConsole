import type { Meta, StoryObj } from '@storybook/react-vite';
import AuthCard from './AuthCard';

const meta = {
	title: 'Layout/AuthCard',
	component: AuthCard,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	args: {
		title: 'Darta Console',
		subtitle: 'Connectez-vous pour continuer',
		tag: 'Accès sécurisé',
		children: <button type="button">Se connecter</button>,
	},
} satisfies Meta<typeof AuthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithFooter: Story = { args: { footer: 'Version 1.0' } };
export const CustomLogo: Story = { args: { logo: <strong>Logo personnalisé</strong> } };
export const Minimal: Story = { args: { subtitle: undefined, tag: undefined } };