'use client';

import { Dialog as Modal, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

type DialogProps = {
  isShowModal: boolean;
  close: () => void;
  title?: {
    label: string;
    className?: string;
  };
  children: ReactNode;
  closeBtn?: {
    label: string;
    className: string;
  };
  backdrop?: boolean;
  className?: string;
  TitleComponent?: React.JSX.Element;
};

const Dialog = ({
  isShowModal,
  close,
  title,
  children,
  closeBtn,
  backdrop = true,
  className = '',
  TitleComponent,
}: DialogProps) => {
  const closeModal = () => {
    close();
  };
  return (
    <Transition appear show={isShowModal} as={Fragment}>
      <Modal
        as="div"
        className={`relative z-10 ${className}`}
        onClose={() => {
          backdrop && closeModal();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Modal.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dark p-6 text-left align-middle shadow-xl transition-all">
                {title?.label && (
                  <Modal.Title
                    as="h3"
                    className={`${
                      title.className
                        ? title.className
                        : 'mb-2 text-lg font-bold leading-normal'
                    }`}
                  >
                    {title.label}
                  </Modal.Title>
                )}
                {TitleComponent && <Modal.Title as="h3">{TitleComponent}</Modal.Title>}

                <div>{children}</div>
                {closeBtn && (
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {closeBtn.label}
                    </button>
                  </div>
                )}
              </Modal.Panel>
            </Transition.Child>
          </div>
        </div>
      </Modal>
    </Transition>
  );
};

export default Dialog;
