import React from 'react';

import { useSkill } from '@/query/project';

export const Skills = () => {
  const { data } = useSkill();

  const skills = data?.data ?? [];

  console.log(skills);

  return (
    <div>
      <ul className="list-disc pl-2 grid grid-cols-2">
        {skills.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
