'use client';
import React, {
  ChangeEventHandler,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { add, format, isValid, parse } from 'date-fns';
import { ClassNames, DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import { usePopper } from 'react-popper';
import styles from 'react-day-picker/dist/style.module.css';
import InputText from '@/components/atoms/inputText/InputText';
import NextIcon from '@/images/icons/arrow-left.svg';
import PreviousIcon from '@/images/icons/back-button.svg';
import WeekCalendar from '@/components/molecules/calendar/WeekCalendar';

const CalendarTempl = () => {
  const [selected, setSelected] = useState<Date>(new Date());
  const [inputValue, setInputValue] = useState<string>('');
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef<HTMLDivElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  });

  const classNames: ClassNames = {
    ...styles,
  };

  const handleChangeWeek = (type: 'previous' | 'next') => {
    setSelected((pre) => add(pre, { weeks: type === 'next' ? 1 : -1 }));
  };

  useEffect(() => {
    if (!popperElement) return;
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [popperElement]);

  function handleDocumentClick(event: MouseEvent<HTMLDivElement>) {
    if (!popperElement || !event.target) return;
    if (
      popperElement.contains(event.target as Element) ||
      event.target === popperElement
    ) {
      return;
    }
    setIsPopperOpen(false);
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MMMM-dd', new Date());

    if (isValid(date)) {
      setSelected(date);
    }
  };

  const handleButtonClick = () => {
    setIsPopperOpen(true);
  };

  const handleDaySelect: SelectSingleEventHandler = (
    date,
    _selectedDay,
    _activeModifiers,
    event,
  ) => {
    event.stopPropagation();

    if (date) {
      setInputValue(format(date, 'y-MM-dd'));
      setIsPopperOpen(false);
      setSelected(date);
    } else {
      setInputValue('');
    }
  };

  return (
    <div className="bg-dark py-2">
      <div className="mx-auto mb-4 flex items-center justify-between" ref={popperRef}>
        <div className="flex-none">
          <button onClick={() => handleChangeWeek('previous')}>
            <PreviousIcon />
          </button>
        </div>
        <div className="relative flex-none text-center" onClick={handleButtonClick}>
          <p>{format(new Date(), 'MMMM')}</p>
          <p className="text-xs font-extralight">{format(new Date(), 'yyyy')}</p>
          <InputText
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="hidden"
          />
          {isPopperOpen && (
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
                classNames={classNames}
              />
            </div>
          )}
        </div>
        <div className="flex-none">
          <button onClick={() => handleChangeWeek('next')}>
            <NextIcon />
          </button>
        </div>
      </div>
      <WeekCalendar selectedDay={selected} setSelectedDay={setSelected} />
    </div>
  );
};

export default CalendarTempl;
