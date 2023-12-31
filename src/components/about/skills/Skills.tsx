import { useSkill } from '@/query/skill';

export const Skills = () => {
  const { data } = useSkill();

  const skills = data?.data ?? [];

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
