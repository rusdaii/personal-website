import fetcher from '@/lib/fetcher';

import { UserResponse } from './types';

export const getUser = async () => {
  const respone = await fetcher({
    url: '/user',
    method: 'GET',
  });

  return respone as UserResponse;
};
