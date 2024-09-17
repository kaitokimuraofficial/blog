import type { Meta, StoryObj } from '@storybook/react';

import { About } from '.';

const meta = {
  title: 'Templates/About',
  component: About,
  tags: ['autodocs'],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
