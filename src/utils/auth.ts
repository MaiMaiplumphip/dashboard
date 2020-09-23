import Cookies from 'js-cookie';

const TOKEN_KEY: string = 'Admin-Token';

const getQueryString = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

export const getToken = () => {
  console.log('getQueryString(TOKEN_KEY)------->', getQueryString(TOKEN_KEY));
  return Cookies.get(TOKEN_KEY) || getQueryString(TOKEN_KEY);
};

export function setToken(token: string) {
  return Cookies.set(TOKEN_KEY, token);
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY);
}
