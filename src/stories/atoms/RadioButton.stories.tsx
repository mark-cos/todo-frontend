import RadioButton from '@/components/atoms/button/RadioButton';
import { Content } from '@/components/atoms/button/button.types';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

const themes: Content[] = [
  {
    label: 'light',
  },
  {
    label: 'dark',
  },
  {
    label: 'blue',
  },
];

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
  // More on argTypes:
  argTypes: {
    contents: { control: 'object', defaultValue: themes },
    selected: { control: 'object', defaultValue: themes[0] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { setSelected: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const RadioButtonStory = (contents: Content[]) => {
  const [selectedTheme, setSelectedTheme] = useState(contents[0]);
  return (
    <>
      <RadioButton
        contents={contents}
        selected={selectedTheme}
        setSelected={setSelectedTheme}
      />
    </>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RadioButtonS: Story = {
  args: {
    contents: themes,
    selected: themes[0],
    setSelected: () => {},
  },
  render: (args) => <RadioButtonStory {...args} />,
};
