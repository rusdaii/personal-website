import fetcher from '@/lib/fetcher';

import { ProjectResponse, SkillResponse } from './types';

export const getProjects = async () => {
  const respone = await fetcher({
    url: '/projects',
    method: 'GET',
  });

  return respone as ProjectResponse;
};

export const getSkills = async () => {
  const respone = await fetcher({
    url: '/skills',
    method: 'GET',
  });

  return respone as SkillResponse;
};
