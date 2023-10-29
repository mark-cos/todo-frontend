'use client';

import { Dialog as Modal } from '@headlessui/react';

type DialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dialog = ({ isOpen, setIsOpen }: DialogProps) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Panel>
        <Modal.Title>Deactivate account</Modal.Title>
        <Modal.Description>
          This will permanently deactivate your account
        </Modal.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will be
          permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Modal.Panel>
    </Modal>
  );
};

export default Dialog;
