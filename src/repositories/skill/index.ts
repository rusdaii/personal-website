import fetcher from '@/lib/fetcher';

import { SkillResponse } from './types';

export const getSkills = async () => {
  const respone = await fetcher({
    url: '/skills',
    method: 'GET',
  });

  return respone as SkillResponse;
};
