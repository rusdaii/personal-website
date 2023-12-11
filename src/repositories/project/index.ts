import fetcher from '@/lib/fetcher';

import { ProjectResponse } from './types';

export const getProjects = async () => {
  const respone = await fetcher({
    url: '/projects',
    method: 'GET',
  });

  return respone as ProjectResponse;
};
