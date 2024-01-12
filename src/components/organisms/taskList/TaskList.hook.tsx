import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useState } from 'react';
import { useDispatch, useSelector } from '@/libs/redux';
import taskSlice, {
  IsCompletedFilter,
  PeriodFilter,
} from '@/libs/redux/slices/taskSlice';

const useTaskList = () => {
  const { t } = useClientTranslation('task');
  const { filter } = useSelector((state) => state.task);
  const getPeriodOptions = () => [
    {
      id: 1,
      value: 'today',
      text: t('select.period.today'),
    },
    {
      id: 2,
      value: 'week',
      text: t('select.period.week'),
    },
    {
      id: 3,
      value: 'month',
      text: t('select.period.month'),
    },
  ];

  const getIsCompletedOptions = () => [
    {
      id: 1,
      value: 'all',
      text: t('select.isCompleted.all'),
    },
    {
      id: 2,
      value: 'task',
      text: t('select.isCompleted.task'),
    },
    {
      id: 3,
      value: 'done',
      text: t('select.isCompleted.done'),
    },
  ];
  const dispatch = useDispatch();

  const [selectedPeriod, setSelectedPeriod] = useState(filter.period);
  const handleChangePeriod = (_selectedPeriod: PeriodFilter) => {
    setSelectedPeriod(_selectedPeriod);
    dispatch(
      taskSlice.actions.setFilter({
        period: selectedPeriod,
      }),
    );
  };

  const [selectedIsCompleted, setSelectedisCompleted] = useState(filter.isCompleted);
  const handleSelectedCompleted = (_selectedCompleted: IsCompletedFilter) => {
    setSelectedisCompleted(_selectedCompleted);
    dispatch(
      taskSlice.actions.setFilter({
        isCompleted: _selectedCompleted,
      }),
    );
  };

  return {
    getPeriodOptions,
    getIsCompletedOptions,
    selectedPeriod,
    handleChangePeriod,
    selectedIsCompleted,
    handleSelectedCompleted,
  };
};

export default useTaskList;
