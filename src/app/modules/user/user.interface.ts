export type TRole = 'student' | 'teacher' | 'admin';
export type TAccountStatus = 'in-progress' | 'blocked';

export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: TRole;
  accountStatus: TAccountStatus;
  isDeleted: boolean;
};
