export type AuthUserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  lastLoggin: Date;
}

export type LoginType = {
  token: string;
  user: AuthUserType;
}
