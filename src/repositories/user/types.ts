export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
}

export type UserResponse = {
  data: User;
};
