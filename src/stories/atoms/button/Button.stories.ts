import Button from '@/components/atoms/button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes:
  argTypes: {
    variant: { control: 'radio' },
    children: { control: 'text' },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
      defaultValue: 1,
      description: 'button type',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextButton: Story = {
  args: {
    children: 'text',
    variant: 'text',
  },
};

export const ContainedButton: Story = {
  args: {
    children: 'contained',
    variant: 'contained',
  },
};

export const OutlinedButton: Story = {
  args: {
    children: 'contained',
    variant: 'outlined',
  },
};
