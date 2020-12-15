import {request} from '@/utils/request';

/**
 * 查询布局配置列表
 */
export const getLayoutItemList = () => {
  return request('get', '/dashboard/layoutItem/all');
};

/**
 * 保存布局配置列表
 * @param list 布局列表
 */
export const saveLayoutItemList = (list: LayoutItem[]) => {
  return request('post', '/dashboard/layoutItem/batch', list);
};
