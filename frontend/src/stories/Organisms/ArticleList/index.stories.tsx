import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from '.';

const meta = {
  title: 'Organisms/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleList>;

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
