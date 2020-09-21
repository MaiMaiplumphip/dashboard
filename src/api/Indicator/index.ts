import {request} from '@/utils/request';

export const getIndicator = param => {
  return request('get', '/declaration/type/list', {});
};
