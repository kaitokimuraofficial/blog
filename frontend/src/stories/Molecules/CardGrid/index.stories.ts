import type { Meta, StoryObj } from '@storybook/react';

import { CardGrid } from '.';

const meta = {
  title: 'Molecules/CardGrid',
  component: CardGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const prop = {
  title: 'Ruby',
  imgUrl: 'icons/ruby.svg',
  content: 'p "Ruby is amazing!"',
};

export const Default: Story = {
  args: {
    cards: [prop, prop, prop, prop],
  },
};

export const ThreeCardGrid: Story = {
  args: {
    cards: [prop, prop, prop],
  },
};

export const SixCardGrids: Story = {
  args: {
    cards: [prop, prop, prop, prop, prop, prop],
  },
};
