import type { Meta, StoryObj } from '@storybook/react';
import { Blog } from '.';

const meta = {
  title: 'Templates/Blog',
  component: Blog,
  tags: ['autodocs'],
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

const prop = {
  articleId: 1,
  title: 'Sample Article',
  body: 'This is the content of the sample article.',
  created: new Date('2023-09-19'),
  lastModified: new Date('2023-09-19'),
};

export const Default: Story = {
  args: { articles: [prop, prop, prop] },
};
