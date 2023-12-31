import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTasks } from '@/services/task';
import { rqKey } from '@/libs/react-query';
import { useDispatch, useSelector } from '@/libs/redux';

const useTaskList = () => {
  const { data: resTasks } = useQuery({
    queryKey: [rqKey.tasks],
    queryFn: getTasks,
  });

  const tasks = resTasks?.data;

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

  const { filter } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const [selectedPeriod, setSelectedPeriod] = useState(getPeriodOptions()[0].value);
  const handleChangePeriod = (_selectedPeriod: string) => {
    setSelectedPeriod(_selectedPeriod);
    dispatch();
  };

  const [selectedFilter, setSelectedFilter] = useState(getIsCompletedOptions()[0].value);
  const handleChangeFilter = (_selectedFilter: string) => {
    setSelectedFilter(_selectedFilter);
    console.log(_selectedFilter);
  };

  return {
    getPeriodOptions,
    getIsCompletedOptions,
    tasks,
    selectedPeriod,
    handleChangePeriod,
    selectedFilter,
    handleChangeFilter,
  };
};

export default useTaskList;
