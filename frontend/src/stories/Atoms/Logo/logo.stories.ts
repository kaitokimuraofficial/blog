import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './logo';

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://github.com/kaitokimuraofficial',
    src: 'icons/github.svg',
  },
};

export const LargeLogo: Story = {
  args: { ...Default.args, size: 'LARGE' },
};

export const SmallLogo: Story = {
  args: { ...Default.args, size: 'SMALL' },
};
