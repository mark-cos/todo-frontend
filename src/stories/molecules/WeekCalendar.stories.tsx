import WeekCalendar from '@/components/molecules/calendar/WeekCalendar';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/WeekCalendar',
  component: WeekCalendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes:
  argTypes: {
    selectedDay: {
      control: 'date',
    },
  },
  args: { setSelectedDay: fn() },
} satisfies Meta<typeof WeekCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WeekCalendarStory: Story = {
  args: {
    selectedDay: new Date(),
  },
  render: ({ selectedDay }) => {
    const [date, setDate] = useState(new Date(selectedDay));

    useEffect(() => {
      setDate(new Date(selectedDay));
    }, [selectedDay]);
    return (
      <div
        style={{
          width: '370px',
        }}
      >
        <WeekCalendar selectedDay={date} setSelectedDay={setDate} />
      </div>
    );
  },
};
