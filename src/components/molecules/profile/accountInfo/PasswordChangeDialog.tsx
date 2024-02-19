import Button from '@/components/atoms/button/Button';
import Dialog from '@/components/atoms/dialog/Dialog';
import InputText from '@/components/atoms/inputText/InputText';
import React from 'react';
import usePasswordChangeDialog from './PasswordChangeDialog.hook';

type PasswordChangeDialogProps = {
  isShowModal: boolean;
  closeModal: () => void;
};
const PasswordChangeDialog = ({ isShowModal, closeModal }: PasswordChangeDialogProps) => {
  const { handleSubmit, handleSubmitSuccess, handleSubmitError, register } =
    usePasswordChangeDialog(closeModal);
  return (
    <Dialog
      close={closeModal}
      isShowModal={isShowModal}
      title={{
        label: 'Change Account Password',
        className: 'text-center border-b-[1px] border-secondary pb-3 mb-6',
      }}
    >
      <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitError)}>
        <div className="mb-2">
          <label htmlFor="oldPassword">
            Enter old password
            <InputText
              {...register('oldPassword')}
              type="password"
              className="mb-2 mt-2"
              id="name"
            />
          </label>

          <label htmlFor="password">
            Enter new password
            <InputText
              {...register('password')}
              type="password"
              className="mb-2 mt-2"
              name="password"
              id="name"
            />
          </label>

          <label htmlFor="confirmPassword">
            Enter new password check
            <InputText
              {...register('confirmPassword')}
              type="password"
              className="mb-2 mt-2"
              name="confirmPassword"
              id="name"
            />
          </label>
        </div>

        <div className="flex">
          <div className="basis-1/2">
            <Button variant="text" className="w-full text-primary" onClick={closeModal}>
              cancel
            </Button>
          </div>
          <div className="basis-1/2">
            <Button className="w-full rounded-md" variant="contained" type="submit">
              save
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default PasswordChangeDialog;
