import { rqKey } from '@/libs/react-query';
import { taskStore } from '@/libs/zustand';
import { getTasks } from '@/services/task';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const useTodayTaskPage = () => {
  const { filter } = taskStore((state) => state);

  const { data, isLoading } = useQuery({
    queryFn: () => getTasks(filter),
    queryKey: [rqKey.tasks, filter.isCompleted, filter.keyword, filter.period],
  });

  const isTodayNone = useMemo(() => {
    return (
      filter.isCompleted === 'all' &&
      filter.keyword === '' &&
      filter.isCompleted === 'all'
    );
  }, [filter]);

  const tasks = useMemo(() => data?.data, [data]);

  return { tasks, isLoading, isTodayNone };
};

export default useTodayTaskPage;
