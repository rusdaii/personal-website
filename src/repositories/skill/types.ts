export interface Skills {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type SkillResponse = {
  data: Skills[];
};
