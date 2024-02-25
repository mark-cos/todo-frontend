import Button from '@/components/atoms/button/Button';
import Dialog from '@/components/atoms/dialog/Dialog';

import React from 'react';

type DeleteConfirmDialogProps = {
  isShowModal: boolean;
  close: () => void;
  dialogTitle: {
    label: string;
    className: string;
  };
  children: React.ReactNode;
  handleDelete: () => void;
};

const DeleteConfirmDialog = ({
  isShowModal,
  close,
  dialogTitle,
  children,
  handleDelete,
}: DeleteConfirmDialogProps) => {
  return (
    <Dialog isShowModal={isShowModal} close={close} title={dialogTitle}>
      {children}
      <div className="mt-5 flex">
        <div className="basis-1/2">
          <Button variant="text" className="w-full" onClick={close}>
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
