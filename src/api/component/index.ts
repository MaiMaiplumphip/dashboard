import {request} from '@/utils/request';

/**
 * 获取指标数量
 * @param type 指标类型
 * @description 查询源端数据库表(1)、目标端数据库表(2)、执行任务总量(3)、异常任务(4)
 */
export const getHomeTypeAmount = (type: string | undefined) => {
  return request('get', '/dashboard/homePageData/getHomeTypeAmountInfo', {dataType: type});
};

/**
 * 获取任务id
 * @param id 任务id
 */
export const getTaskDetail = (id: any) => {
  return request('get', `/dashboard/task/detail/${id}`);
};

/**
 * 获取实时日志
 */
export const getLog = () => {
  return request('get', '/dashboard/logDisplay/daily');
};

/**
 * 获取列表
 * @param url 请求地址
 * @description 查询表滚动数据集合-源端(1)、查询表滚动数据集合-目标(2)
 */
export const getList = (url: string) => {
  return request('get', url);
};

/**
 * 获取数量
 * @param url 请求地址
 * @description 查询源端对象表数量(1)、查询目标对象表数量(2)
 */
export const getNumber = (url: string) => {
  return request('get', url);
};
