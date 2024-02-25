'use client';
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { format, isValid, parse } from 'date-fns';
import FocusTrap from 'focus-trap-react';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import { usePopper } from 'react-popper';
// import 'react-day-picker/dist/style.css';

const CalendarTempl = () => {
  const [selected, setSelected] = useState<Date>();
  const [inputValue, setInputValue] = useState<string>('');
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  });

  const closePopper = () => {
    console.log('🚀 ~ closePopper ~ call');
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };

  useEffect(() => {
    console.log('🚀 ~ CalendarTempl ~ isPopperOpen:', isPopperOpen);
  }, [isPopperOpen]);

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    setSelected(date);
    console.log('🚀 ~ CalendarTempl ~ date:', date);

    if (date) {
      setInputValue(format(date, 'y-MM-dd'));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  return (
    <div className="h-[500px]">
      <div ref={popperRef}>
        <input
          size={12}
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          ref={buttonRef}
          type="button"
          aria-label="Pick a date"
          onClick={handleButtonClick}
        >
          Pick a date
        </button>
      </div>
      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            // onDeactivate: closePopper,
            fallbackFocus: buttonRef.current || undefined,
          }}
        >
          <div
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
            aria-label="DayPicker calendar"
          >
            <DayPicker
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelect}
            />
          </div>
        </FocusTrap>
      )}
    </div>
  );
};

export default CalendarTempl;
