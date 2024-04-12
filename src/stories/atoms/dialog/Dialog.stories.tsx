import Button from '@/components/atoms/button/Button';
import Dialog from '@/components/atoms/dialog/Dialog';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useEffect, useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Dialog',
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes:
  argTypes: {
    isShowModal: {
      control: 'boolean',
      description: '다이얼로그 표시여부',
    },
    title: {
      control: 'object',
      description: '타이틀 정보 객체',
    },
    children: {
      control: 'text',
    },
    closeBtn: {
      control: 'object',
    },
    backdrop: {
      control: 'boolean',
    },
  },
  args: { close: fn() },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DialogStory: Story = {
  args: {
    children: '모달내용',
    isShowModal: false,
    className: 'text-white',
    title: {
      label: '모달 제목',
      className: 'text-2xl border-b-[1px] border-primary mb-2 pb-2',
    },
    closeBtn: {
      label: 'close',
      className: 'text-center',
    },
    backdrop: true,
  },

  render: ({ isShowModal, children, className, title, closeBtn, backdrop }) => {
    const [isShow, setIsShow] = useState(isShowModal);
    const close = () => {
      setIsShow(false);
    };

    const handleShowModal = () => {
      setIsShow(true);
    };

    useEffect(() => {
      setIsShow(isShowModal);
    }, [isShowModal]);
    return (
      <>
        <Button variant="outlined" onClick={handleShowModal}>
          Modal
        </Button>
        <Dialog
          isShowModal={isShow}
          close={close}
          className={className}
          title={title}
          closeBtn={closeBtn}
          backdrop={backdrop}
        >
          {children}
        </Dialog>
      </>
    );
  },
};
