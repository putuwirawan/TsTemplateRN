export type UserType = {
  userId?: string | null;
  access_token?: string | null;
  token_type?: string | null;
  roles?: string | null;
  username?: string | null;

};
export const initUser: UserType = {
  access_token: null,
  token_type: null,
  username: null,
};
