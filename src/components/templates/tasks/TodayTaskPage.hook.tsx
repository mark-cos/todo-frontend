import { rqKey } from '@/libs/react-query';
import { useSelector } from '@/libs/redux';
import { getTasks } from '@/services/task';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const useTodayTaskPage = () => {
  const { filter } = useSelector((state) => state.task);

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
