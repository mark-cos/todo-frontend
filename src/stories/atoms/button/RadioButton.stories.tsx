import RadioButton from '@/components/atoms/button/RadioButton';
import type { Meta, StoryObj } from '@storybook/react';
import './radioButton.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    contents: {
      control: 'array',
      description: '데이터 객체 배열',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    selected: {
      control: 'object',
      description: '선택된 아이템',
      defaultValue: { label: 'light' },
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof RadioButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RadioButtonDefault: Story = {
  args: {
    contents: [
      {
        label: 'light',
      },
      {
        label: 'dark',
      },
      {
        label: 'blue',
      },
    ],
    selected: { label: 'dark' },
    handleChangeButton: () => {},
  },
  render: (args) => (
    <RadioButton
      contents={args.contents}
      selected={args.selected}
      handleChangeButton={args.handleChangeButton}
      className="min-w-[500px]"
    />
  ),
};
