/**
 * 组件类型
 */
type COMPONENT_TYPE = 'v-echarts' | 'v-scroll-board' | 'v-indicator';

/**
 * 图表Tab类型
 */
type CHART_TAB_TYPE = 'zzt' | 'zxt' | 'bt' | 'ldt' | 'lb' | 'zb';

interface TabTag {
  label: string;
  value: CHART_TAB_TYPE;
}

/**
 * 图表示例
 */
interface Example {
  /**
   * 图表id
   */
  echartId?: string | number;

  /**
   * 组件类型
   */
  componentType: COMPONENT_TYPE;

  /*
   * tab类型
   */
  tabType: CHART_TAB_TYPE;

  /**
   * 标题
   */
  title: string;

  /**
   * 副标题
   */
  subtitle: string;

  /**
   * 描述
   */
  introduce: string;

  /**
   * 图表配置
   */
  option?: any;

  /**
   * 样式
   */
  style?: any;
}

interface StoreChartsTab {
  tabTags: TabTag[];
  exampleList?: Example[];
}
