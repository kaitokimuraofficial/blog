import type { Meta, StoryObj } from '@storybook/react';

import { Blog } from '.';

const meta = {
  title: 'Templates/Blog',
  component: Blog,
  tags: ['autodocs'],
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
