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
  taskTitle: string;
};

const DeleteConfirmDialog = ({
  isShowModal,
  close,
  dialogTitle,
  taskTitle,
}: DeleteConfirmDialogProps) => {
  return (
    <Dialog isShowModal={isShowModal} close={close} title={dialogTitle}>
      <div>
        <p className="text-center text-lg font-normal">
          Are You sure you want to delete this task?
          <br />
          Task title : {taskTitle}
        </p>
      </div>
      <div className="mt-5 flex">
        <div className="basis-1/2">
          <Button variant="text" className="w-full" onClick={close}>
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button className="w-full rounded-md" variant="contained" onClick={close}>
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
