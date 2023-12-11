export interface Projects {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  sourceUrl: string;
  createdAt: string;
  updatedAt: string;
}

export type ProjectResponse = {
  data: Projects[];
};

export interface Skills {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type SkillResponse = {
  data: Skills[];
};
