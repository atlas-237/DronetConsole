import React from 'react';
import '@theme/index.css';
import { ToastProvider } from '@context/ToastContext';
import type { Preview } from '@storybook/react';

const withThemeProvider = (Story: React.ComponentType) => (
  <ToastProvider>
    <div style={{ padding: 16, minHeight: '100%' }}>
      <Story />
    </div>
  </ToastProvider>
);

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      default: 'Surface',
      values: [
        { name: 'Surface', value: 'var(--bg-1)' },
        { name: 'Élevé', value: 'var(--bg-2)' },
        { name: 'Sombre', value: '#0a0d14' },
        { name: 'Blanc', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default preview;
