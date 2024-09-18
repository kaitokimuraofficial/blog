import type { Meta, StoryObj } from '@storybook/react';

import { Error } from '.';

const meta = {
  title: 'Templates/Error',
  component: Error,
  tags: ['autodocs'],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    statusNumber: 404,
    text: 'Not Found',
  },
};
