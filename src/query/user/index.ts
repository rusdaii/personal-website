import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/repositories/user';

export const getUserKey = () => ['user'];

export const useUser = () => {
  const result = useQuery({
    queryKey: getUserKey(),
    queryFn: getUser,
  });

  return result;
};
