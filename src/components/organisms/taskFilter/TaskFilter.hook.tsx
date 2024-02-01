import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { taskStore } from '@/libs/zustand';
import { IsCompletedFilter, PeriodFilter } from '@/types/task/task.type';

const useTaskFilter = () => {
  const { t } = useClientTranslation('task');
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
  const {
    setFilter,
    filter: { isCompleted, period },
  } = taskStore((state) => state);

  const handleChangePeriod = (_selectedPeriod: string) => {
    setFilter({
      period: _selectedPeriod as PeriodFilter,
    });
  };

  const handleSelectedIsCompleted = (_selectedCompleted: string) => {
    setFilter({
      isCompleted: _selectedCompleted as IsCompletedFilter,
    });
  };

  return {
    getPeriodOptions,
    getIsCompletedOptions,
    period,
    handleChangePeriod,
    isCompleted,
    handleSelectedIsCompleted,
  };
};

export default useTaskFilter;
