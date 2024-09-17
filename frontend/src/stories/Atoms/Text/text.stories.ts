import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: 'This is default text.' },
};

export const HighlightedText: Story = {
  args: { content: 'This text is highlighted.', isHighlighted: true },
};

export const BoldText: Story = {
  args: {
    content: 'This text is bold.',
    isBold: true,
  },
};

export const SmallText: Story = {
  args: {
    content: 'This text size is small.',
    size: 'SMALL',
  },
};

export const LargeText: Story = {
  args: {
    content: 'This text size is large',
    size: 'LARGE',
  },
};
