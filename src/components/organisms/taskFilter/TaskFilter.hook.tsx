import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useDispatch, useSelector } from '@/libs/redux';
import taskSlice from '@/libs/redux/slices/taskSlice';

const useTaskFilter = () => {
  const { t } = useClientTranslation('task');
  const { isCompleted, keyword, period } = useSelector((state) => state.task.filter);
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

  const handleChangePeriod = (_selectedPeriod: string) => {
    dispatch(
      taskSlice.actions.setFilter({
        period: _selectedPeriod,
      }),
    );
  };

  const handleSelectedIsCompleted = (_selectedCompleted: string) => {
    dispatch(
      taskSlice.actions.setFilter({
        isCompleted: _selectedCompleted,
      }),
    );
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
