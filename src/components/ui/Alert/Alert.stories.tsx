import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  title: 'UI/Alert',
  component: Alert,

  tags: ['autodocs'],

  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component: `
## Alert

Le composant **Alert** permet d'afficher un message
important à l'utilisateur.

### Variantes

- **info** — Information générale
- **ok** — Confirmation ou succès
- **warn** — Avertissement
- **danger** — Erreur ou problème critique

### Fonctionnalités

Le composant prend également en charge :

- un titre optionnel ;
- une icône personnalisée ;
- une action ;
- la fermeture de l'alerte ;
- des styles personnalisés ;
- une classe CSS personnalisée.

### Comportement

Lorsqu'une propriété **action** est fournie,
le bouton de fermeture n'est pas affiché,
même si **dismissible** vaut \`true\`.
        `,
      },
    },
  },

  argTypes: {
    tone: {
      description: 'Variante visuelle de l’alerte.',
      control: 'select',
      options: [
        'info',
        'ok',
        'warn',
        'danger',
      ],
      table: {
        defaultValue: {
          summary: 'info',
        },
      },
    },

    title: {
      description: 'Titre optionnel.',
      control: 'text',
    },

    children: {
      description: 'Contenu de l’alerte.',
      control: 'text',
    },

    action: {
      description:
        'Texte du bouton d’action.',
      control: 'text',
    },

    onAction: {
      description:
        'Callback exécuté lors du clic sur l’action.',
      action: 'action clicked',
    },

    icon: {
      description:
        'Icône personnalisée.',
      control: false,
    },

    dismissible: {
      description:
        'Permet de fermer l’alerte.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },

    onDismiss: {
      description:
        'Callback exécuté lors de la fermeture.',
      action: 'alert dismissed',
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
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    tone: 'info',
    title: 'Information',
    children:
      'Votre course est actuellement en attente de confirmation.',
  },
};

export const Success: Story = {
  args: {
    tone: 'ok',
    title: 'Opération réussie',
    children:
      'Votre réservation a été confirmée avec succès.',
  },
};

export const Warning: Story = {
  args: {
    tone: 'warn',
    title: 'Attention',
    children:
      'Votre solde est bientôt insuffisant.',
  },
};

export const Danger: Story = {
  args: {
    tone: 'danger',
    title: 'Une erreur est survenue',
    children:
      'Impossible de finaliser votre demande.',
  },
};

export const WithAction: Story = {
  args: {
    tone: 'info',
    title: 'Nouvelle version disponible',
    children:
      'Une nouvelle version de l’application est disponible.',
    action: 'Mettre à jour',
  },
};

export const Dismissible: Story = {
  args: {
    tone: 'warn',
    title: 'Session bientôt expirée',
    children:
      'Votre session expirera dans quelques minutes.',
    dismissible: true,
  },
};

export const ActionAndDismissible: Story = {
  args: {
    tone: 'danger',
    title: 'Action requise',
    children:
      'Veuillez vérifier vos informations avant de continuer.',
    action: 'Vérifier',
    dismissible: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    tone: 'info',
    children:
      'Votre demande a bien été prise en compte.',
  },
};