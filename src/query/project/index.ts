import { useQuery } from '@tanstack/react-query';

import { getProjects, getSkills } from '@/repositories/project';

export const getProjectsKey = () => ['projects'];
export const getSkillsKey = () => ['skills'];

export const useProject = () => {
  const result = useQuery({
    queryKey: getProjectsKey(),
    queryFn: getProjects,
  });

  return result;
};

export const useSkill = () => {
  const result = useQuery({
    queryKey: getSkillsKey(),
    queryFn: getSkills,
  });

  return result;
};
