import React from 'react';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import Button from '@/components/atoms/button/Button';
import useCategoryCreateForm from './CategoryCreateForm.hook';
import { CategoryCreateFormProps } from './taskDialog.types';
import InputText from '@/components/atoms/inputText/InputText';
import EmojiPicker, { Categories, SuggestionMode, Theme } from 'emoji-picker-react';
import ColorPalette from '@/components/molecules/colorPalette/ColorPalette';
import Image from 'next/image';

const CategoryCreateForm = ({ handleSetTaskFormStep }: CategoryCreateFormProps) => {
  const {
    t,
    handleClickEmoji,
    categoryPreview,
    handleSetColor,
    register,
    handleSubmit,
    handleSubmitSuccess,
    handleSubmitError,
    isCategoryEditMode,
  } = useCategoryCreateForm(handleSetTaskFormStep);

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitError)}>
        <div className="my-5 flex-auto">
          <div>
            <div
              className={`mx-auto h-16 w-16 basis-1/4 rounded-md border-[3px] border-white/25 ${categoryPreview.color}`}
            >
              <div className="flex h-full items-center justify-center p-1.5">
                <div className="flex-none">
                  {categoryPreview.icon && (
                    <Image
                      src={categoryPreview.icon}
                      alt="category icon"
                      width={30}
                      height={30}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 h-5 text-center text-sm">{categoryPreview.name}</div>
          </div>

          <div>
            <InputText
              {...register('name')}
              placeholder={t('category_create.input.name.placeholder')}
              className="mt-5 border-white/25"
            />
          </div>

          <div className="my-5">
            <ColorPalette handleSetColor={handleSetColor} />
            <InputText type="hidden" {...register('color')} />
          </div>

          <div className="h-[200px] md:h-[300px]">
            <InputText type="hidden" {...register('icon')} />
            <EmojiPicker
              height={'100%'}
              skinTonesDisabled
              width={'100%'}
              searchDisabled
              theme={Theme.DARK}
              lazyLoadEmojis
              suggestedEmojisMode={SuggestionMode.RECENT}
              onEmojiClick={handleClickEmoji}
              categories={[
                {
                  category: Categories.ACTIVITIES,
                  name: 'Activities',
                },
                {
                  category: Categories.ANIMALS_NATURE,
                  name: 'Animals & Nature',
                },
                {
                  category: Categories.TRAVEL_PLACES,
                  name: 'Travel & Places',
                },
                {
                  category: Categories.FOOD_DRINK,
                  name: 'Food & Drink',
                },
                {
                  category: Categories.OBJECTS,
                  name: 'Objects',
                },
              ]}
            />
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <Button
              variant="text"
              className="w-full"
              onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.CATEGORY)}
            >
              {t('button.cancel')}
            </Button>
          </div>
          <div className="basis-1/2">
            <Button className="w-full rounded-md" variant="contained" type="submit">
              {!isCategoryEditMode ? t('button.save') : 'Edit'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CategoryCreateForm;
