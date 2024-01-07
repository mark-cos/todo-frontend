import { rqKey } from '@/libs/react-query';
import { useSelector } from '@/libs/redux';
import { getTasks } from '@/services/task';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const useToadyTaskPage = () => {
  const { filter } = useSelector((state) => state.task);

  const { data, refetch } = useQuery({
    queryFn: () => getTasks(filter),
    queryKey: [rqKey.tasks, filter.isCompleted, filter.keyword, filter.period],
  });
  const tasks = data?.data || [];

  useEffect(() => {
    refetch();
  }, [filter]);
  return { tasks };
};

export default useToadyTaskPage;
