/**
 * 图表Tab类型
 */
type CHART_TYPE =
  | 'v-echarts'
  | 'dv-charts'
  | 'dv-active-ring-chart'
  | 'dv-capsule-chart'
  | 'dv-water-level-pond'
  | 'dv-percent-pond'
  | 'dv-flyline-chart'
  | 'dv-conical-column-chart'
  | 'dv-digital-flop'
  | 'dv-scroll-board'
  | 'dv-scroll-ranking-board';

/**
 * 图表Tab类型
 */
type CHART_TAB_TYPE =
  | 'v-echarts'
  | 'dv-charts'
  | 'dv-active-ring-chart'
  | 'dv-capsule-chart'
  | 'dv-water-level-pond'
  | 'dv-percent-pond'
  | 'dv-flyline-chart'
  | 'dv-conical-column-chart'
  | 'dv-digital-flop'
  | 'dv-scroll-board'
  | 'dv-scroll-ranking-board';

interface TabTag {
  label: string;
  value: string;
}

/**
 * 图表示例
 */
interface Example {
  tabType: CHART_TAB_TYPE;
  title: string;
  subtitle: string;
  introduce: string;
  config?: any;
  option?: any;
  style?: any;
  echartType?: string;
}

interface StoreChartsTab {
  tabTags: TabTag[];
  exampleList?: Example[];
}
