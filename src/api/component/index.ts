import {request} from '@/utils/request';

/**
 * 保存布局配置列表
 * @param type 指标类型
 * @description 查询源端数据库表(1)、目标端数据库表(2)、执行任务总量(3)、异常任务(4)
 */
export const getHomeTypeAmount = (type: string | undefined) => {
  return request('get', '/dashboard/homePageData/getHomeTypeAmount', {dataType: type});
};
