import type { Meta, StoryObj } from '@storybook/react-vite';
import DataTable from './DataTable';
const columns = [{ key: 'id', label: 'ID', sortable: true }, { key: 'name', label: 'Nom' }, { key: 'status', label: 'Statut' }];
const rows = [{ id: 'M1', name: 'Mission Alpha', status: 'Active' }, { id: 'M2', name: 'Mission Beta', status: 'En attente' }];
const meta = { title: 'Data/DataTable', component: DataTable, tags: ['autodocs'], parameters: { docs: { description: { component: 'Tableau de données piloté par columns et rows. Les stories couvrent l’affichage standard, une ligne sélectionnée et l’état vide; la sélection et les actions de ligne se vérifient avec les callbacks associés.' } } }, args: { columns, rows } } satisfies Meta<typeof DataTable>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { selectedId: 'M1' } };
export const Empty: Story = { args: { rows: [], emptyNode: 'Aucune donnée.' } };
