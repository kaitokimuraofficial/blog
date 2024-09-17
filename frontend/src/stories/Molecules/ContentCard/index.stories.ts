import type { Meta, StoryObj } from '@storybook/react';

import { ContentCard } from '.';

const meta = {
  title: 'Molecules/ContentCard',
  component: ContentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ContentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'p "Ruby is amazing!"',
    imgUrl: 'icons/ruby.svg',
    title: 'Ruby',
    color: 'BLACK',
  },
};
