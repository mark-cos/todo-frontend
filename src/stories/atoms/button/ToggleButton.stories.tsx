import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ToggleButton from '@/components/atoms/button/ToggleButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/ToggleButton',
  component: ToggleButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes:
  argTypes: {
    children: {
      control: 'text',
    },
    isSelected: {
      control: 'boolean',
      defaultValue: true,
    },
    classname: {
      control: 'text',
    },
    onSelected: {
      description: '선택 시 호출 함수',
    },
    onUnSelected: {
      description: '미선택 시 호출 함수',
    },
  },

  args: { onSelected: fn(), onUnSelected: fn(), isSelected: true },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ToggleButtonDefault: Story = {
  args: {
    children: 'Completed',
    classname: 'border border-blue-2',
    isSelected: true,
    onSelected: fn(),
    onUnSelected: fn(),
  },
};
