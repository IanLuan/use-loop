import type { Meta, StoryObj } from '@storybook/react-vite';
import AnimatedWordsComponent from './AnimatedWords';

const meta = {
  component: AnimatedWordsComponent,
} satisfies Meta<typeof AnimatedWordsComponent>;

export default meta;

type Story = StoryObj<typeof AnimatedWordsComponent>;

export const Default: Story = {
  args: {
    words: ['beautiful', 'easy', 'modern', 'elegant', 'fun']
  }
};