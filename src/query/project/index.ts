import { useQuery } from '@tanstack/react-query';

import { getProjects } from '@/repositories/project';

export const getProjectsKey = () => ['projects'];

export const useProject = () => {
  const result = useQuery({
    queryKey: getProjectsKey(),
    queryFn: getProjects,
  });

  return result;
};
