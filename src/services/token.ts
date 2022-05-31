const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';
const DATA_USER = 'data-user';

export type Token = string;
export type DataUser = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
}

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getDataUser = (): DataUser => {
  const dataUser = localStorage.getItem(DATA_USER);
  return dataUser? JSON.parse(dataUser) : '';
};

export const saveDataUser = (data: Token): void => {
  localStorage.setItem(DATA_USER, data);
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
