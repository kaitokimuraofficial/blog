import type { Meta, StoryObj } from '@storybook/react';

import { NavigationList } from '.';

const meta = {
  title: 'Molecules/NavigationList',
  component: NavigationList,
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationList>;

export default meta;
type Story = StoryObj<typeof meta>;

const prop = {
  title: 'Page Map',
  items: [
    {
      key: 'About',
      url: '/about',
    },
    {
      key: 'Blog',
      url: '/blog',
    },
  ],
};

export const Default: Story = {
  args: {
    title: prop.title,
    items: prop.items,
  },
};
