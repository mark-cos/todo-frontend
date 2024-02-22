'use client';
import Button from '@/components/atoms/button/Button';
import InputText from '@/components/atoms/inputText/InputText';
import AvataImage from '@/components/molecules/profile/accountInfo/AvataImage';
import PasswordChangeDialog from '@/components/molecules/profile/accountInfo/PasswordChangeDialog';
import useAccountInfoTempl from './useAccountInfoTempl.hook';
import BackIcon from '@/images/icons/back-button.svg';

const AccountInfoTempl = () => {
  const {
    handleSubmitImage,
    session,
    nameInputRef,
    imageInputRef,
    setIsShowModal,
    isShowModal,
    closeModal,
    handleBackPage,
  } = useAccountInfoTempl();
  return (
    <>
      <form onSubmit={handleSubmitImage} className="h-full">
        <div className="flex h-full flex-col justify-between">
          <div className="flex-none">
            {/* title */}
            <div className="flex">
              <button onClick={handleBackPage} type="button">
                <BackIcon />
              </button>
              <div className="ml-2 text-lg">Acount Info</div>
            </div>

            {/* profileImage */}
            <AvataImage url={session?.user?.image!} ref={imageInputRef} />

            <div className="mb-2">
              <label htmlFor="name">
                Name
                <InputText
                  ref={nameInputRef}
                  placeholder={session?.user?.name!}
                  className="mb-2 mt-2"
                  name="name"
                  id="name"
                />
              </label>
            </div>

            <Button
              variant="contained"
              className="w-full"
              onClick={() => setIsShowModal(true)}
            >
              updatePassword
            </Button>
          </div>

          <div className="flex-none">
            <Button variant="contained" className="w-full" type="submit">
              Edit
            </Button>
          </div>
        </div>
      </form>
      {isShowModal && (
        <PasswordChangeDialog closeModal={closeModal} isShowModal={isShowModal} />
      )}
    </>
  );
};

export default AccountInfoTempl;
