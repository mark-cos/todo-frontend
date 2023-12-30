import { rqKey } from '@/libs/react-query';
import { getTasks } from '@/services/task';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useToadyTaskPage = () => {
  const { data } = useQuery({
    queryFn: getTasks,
    queryKey: [rqKey.tasks],
  });
  const tasks = data?.data || [];
  return { tasks };
};

export default useToadyTaskPage;
