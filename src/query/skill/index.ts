import { useQuery } from '@tanstack/react-query';

import { getSkills } from '@/repositories/skill/index';

export const getSkillsKey = () => ['skills'];

export const useSkill = () => {
  const result = useQuery({
    queryKey: getSkillsKey(),
    queryFn: getSkills,
  });

  return result;
};
