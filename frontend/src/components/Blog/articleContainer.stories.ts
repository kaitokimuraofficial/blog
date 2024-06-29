import type { Meta, StoryObj } from '@storybook/react';

import { ArticleContainer } from './articleContainer.tsx';
import { getRandomString } from 'src/util/testHelper.ts';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ArticleContainer> = {
  component: ArticleContainer,
};

export default meta;
type Story = StoryObj<typeof ArticleContainer>;

export const UsualArticleContainer: Story = {
  args: {
    title: 'This is title',
    body: 'This is body',
  },
};

const longTitle = getRandomString({ length: 100 });
const longBody = getRandomString({ length: 200 });

export const LongTitleArticleContainer: Story = {
  args: {
    title: longTitle,
    body: 'This is body',
  },
};

export const LongBodyArticleContainer: Story = {
  args: {
    title: 'This is title',
    body: longBody,
  },
};
