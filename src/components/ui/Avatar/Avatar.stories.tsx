import type { Meta, StoryObj } from '@storybook/react';
import Avatar, { AvatarWithInfo, } from './Avatar';

const meta = {
  title: 'UI/Avatar',
  component: Avatar,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component: `
## Avatar

Le composant **Avatar** permet de représenter visuellement
un utilisateur à partir d'une image ou de ses initiales.

Lorsqu'aucune image n'est fournie, les initiales sont
générées automatiquement à partir du nom.

Une couleur de fond est également sélectionnée
automatiquement à partir du nom afin qu'un même utilisateur
conserve une couleur cohérente.

### Fonctionnalités

- Image utilisateur avec \`src\`
- Génération automatique des initiales
- Couleur automatique basée sur le nom
- Couleur personnalisée
- Taille personnalisable
- Classe CSS personnalisée
- Styles inline personnalisés
- Gestion du clic
        `,
      },
    },
  },

  argTypes: {
    name: {
      description:
        'Nom utilisé pour générer les initiales.',
      control: 'text',
    },

    size: {
      description:
        'Taille de l’avatar en pixels.',
      control: {
        type: 'number',
        min: 16,
        max: 120,
        step: 1,
      },
      table: {
        defaultValue: {
          summary: '32',
        },
      },
    },

    src: {
      description:
        'URL de l’image utilisateur.',
      control: 'text',
    },

    color: {
      description:
        'Couleur personnalisée du fond.',
      control: 'text',
    },

    onClick: {
      description:
        'Callback déclenché lors du clic.',
      action: 'avatar clicked',
    },

    className: {
      description:
        'Classe CSS supplémentaire.',
      control: 'text',
    },

    style: {
      description:
        'Styles inline supplémentaires.',
      control: 'object',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const SingleName: Story = {
  args: {
    name: 'John',
  },
};

export const WithoutName: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://i.pravatar.cc/150?img=12',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'John Doe',
    color: '#7c5cff',
  },
};

export const Small: Story = {
  args: {
    name: 'John Doe',
    size: 24,
  },
};

export const Large: Story = {
  args: {
    name: 'John Doe',
    size: 64,
  },
};

export const Clickable: Story = {
  args: {
    name: 'John Doe',
    onClick: () => {
      console.log('Avatar clicked');
    },
  },
};

/**
 * Documentation du composant AvatarWithInfo.
 */
export const WithInfo: Story = {
  render: () => (
    <AvatarWithInfo
      name="John Doe"
      role="Administrateur"
    />
  ),

  parameters: {
    docs: {
      description: {
        story: `
### AvatarWithInfo

**AvatarWithInfo** combine un avatar avec le nom
et éventuellement le rôle de l'utilisateur.

La propriété \`showRole\` permet de masquer complètement
les informations textuelles tout en conservant l'avatar.
        `,
      },
    },
  },
};

export const WithInfoWithoutRole: Story = {
  render: () => (
    <AvatarWithInfo
      name="John Doe"
      role="Administrateur"
      showRole={false}
    />
  ),
};

export const WithInfoCustomAvatar: Story = {
  render: () => (
    <AvatarWithInfo
      name="John Doe"
      role="Chauffeur"
      avatarSize={40}
      avatarProps={{
        color: '#7c5cff',
      }}
    />
  ),
};

export const WithInfoClickable: Story = {
  render: () => (
    <AvatarWithInfo
      name="John Doe"
      role="Administrateur"
      onClick={() => {
        console.log('AvatarWithInfo clicked');
      }}
    />
  ),
};