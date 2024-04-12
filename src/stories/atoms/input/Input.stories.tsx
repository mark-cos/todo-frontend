import InputText from '@/components/atoms/inputText/InputText';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/InputText',
  component: InputText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes:
  argTypes: {
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'radio',
      defaultValue: 'text',
      options: ['text', 'password'],
    },
    className: {
      control: 'text',
    },
  },
  args: { onClick: fn(), onChange: fn() },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const InputTextStory: Story = {
  args: {
    name: 'text',
    value: '',
    placeholder: 'insert user name',
    className: 'border border-primary',
    type: 'text',
  },
  render: ({ name, value, placeholder, className, type }) => {
    const [inputValue, setInputValue] = useState(value);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      setInputValue(value);
    }, [value]);
    return (
      <InputText
        ref={inputRef}
        name={name}
        value={inputValue}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={className}
        type={type}
      />
    );
  },
};
export const InputPasswordStory: Story = {
  args: {
    name: 'password',
    value: '',
    placeholder: 'insert user password',
    type: 'password',
  },
  render: ({ name, value, placeholder, className, type }) => {
    const [inputValue, setInputValue] = useState(value);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    const inputRef = useRef<HTMLInputElement>(null);
    return (
      <InputText
        ref={inputRef}
        name={name}
        value={inputValue}
        onChange={handleOnChange}
        placeholder={placeholder}
        className={className}
        type={type}
      />
    );
  },
};
