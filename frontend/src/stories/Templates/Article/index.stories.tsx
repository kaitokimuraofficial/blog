import type { Meta, StoryObj } from '@storybook/react';
import { Article } from '.';

const meta = {
  title: 'Templates/Article',
  component: Article,
  tags: ['autodocs'],
} satisfies Meta<typeof Article>;

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
  args: {
    articleId: prop.articleId,
    title: prop.title,
    body: prop.body,
    created: prop.created,
    lastModified: prop.lastModified,
  },
};
