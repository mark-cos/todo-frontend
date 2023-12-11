import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTaskList } from '@/service/task';

const useTaskList = () => {
  const { data: resTasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTaskList,
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

  const getFilterOptions = () => [
    {
      id: 1,
      value: 'all',
      text: t('select.filter.all'),
    },
    {
      id: 2,
      value: 'task',
      text: t('select.filter.task'),
    },
    {
      id: 3,
      value: 'done',
      text: t('select.filter.done'),
    },
  ];

  const [selectedPeriod, setSelectedPeriod] = useState(getPeriodOptions()[0].value);
  const handleChangePeriod = (_selectedPeriod: string) => {
    setSelectedPeriod(_selectedPeriod);
    console.log(_selectedPeriod);
  };

  const [selectedFilter, setSelectedFilter] = useState(getFilterOptions()[0].value);
  const handleChangeFilter = (_selectedFilter: string) => {
    setSelectedFilter(_selectedFilter);
    console.log(_selectedFilter);
  };

  return {
    getPeriodOptions,
    getFilterOptions,
    tasks,
    selectedPeriod,
    handleChangePeriod,
    selectedFilter,
    handleChangeFilter,
  };
};

export default useTaskList;
