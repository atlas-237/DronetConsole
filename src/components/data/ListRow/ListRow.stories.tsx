import type { Meta, StoryObj } from '@storybook/react-vite';
import ListRow from './ListRow';
const meta = { title: 'Data/ListRow', component: ListRow, tags: ['autodocs'], parameters: { docs: { description: { component: 'Ligne synthétique pour une mission ou un élément de liste, avec title, subtitle, color et contenu right. Les stories couvrent l’affichage standard, une ligne colorée et la sélection; les clics sont à relier au callback prévu.' } } }, args: { title: 'Mission Alpha', subtitle: '10 zones · 3 appareils' } } satisfies Meta<typeof ListRow>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Colored: Story = { args: { color: 'var(--brand)', right: 'M1' } };
export const Selected: Story = { args: { selected: true, onClick: () => undefined } };
