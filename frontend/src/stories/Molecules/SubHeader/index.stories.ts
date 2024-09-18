import type { Meta, StoryObj } from '@storybook/react';

import { SubHeader } from '.';

const meta = {
  title: 'Molecules/SubHeader',
  component: SubHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
