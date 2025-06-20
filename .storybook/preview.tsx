import type { Preview } from '@storybook/nextjs-vite';
import RootLayout from '../src/app/layout';

const preview: Preview = {
  parameters: {},
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default preview;
