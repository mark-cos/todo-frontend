'use client';
import { RadioGroup } from '@headlessui/react';
import ButtonCheckIcon from './ButtonCheckIcon';
import { Content } from './button.types';

export type RadioButtonProps = {
  contents: Content[];
  selected: Content;
  handleChangeButton: (content: Content) => void;
  className?: string;
};

const RadioButton = ({
  contents,
  selected,
  handleChangeButton,
  className = '',
}: RadioButtonProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto w-full">
        <RadioGroup value={selected} onChange={handleChangeButton}>
          {/* FIXME: */}
          <RadioGroup.Label className="sr-only"></RadioGroup.Label>
          <div className="flex h-auto">
            {contents.map((content) => (
              <RadioGroup.Option
                key={content.label}
                value={content}
                className={({ active, checked }) =>
                  `flex-1 first:rounded-l-lg last:rounded-r-lg
                  ${checked ? 'bg-primary text-white' : 'bg-white'}
                    relative flex cursor-pointer px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-dark'
                            }`}
                          >
                            {content.label}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-sky-100' : 'text-dark'}`}
                          >
                            {content.description}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <ButtonCheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioButton;
