import type { Meta, StoryObj } from '@storybook/react';

import { SeparateMarker } from '.';

const meta = {
  title: 'Molecules/SeparateMarker',
  component: SeparateMarker,
  tags: ['autodocs'],
} satisfies Meta<typeof SeparateMarker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'this is default',
  },
};
