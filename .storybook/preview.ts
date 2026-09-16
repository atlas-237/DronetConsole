import type { Preview } from '@storybook/react-vite';
import '../src/theme/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
    docs: {
      toc: true,
    },
    layout: 'padded',
  },
};

export default preview;
