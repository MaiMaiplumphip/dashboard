/**
 * 图表类型
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

interface TabTag {
  label: string;
  value: string;
}

/**
 * 图表示例
 */
interface Example {
  type: CHART_TYPE;
  title: string;
  subtitle: string;
  introduce: string;
  config?: any;
  option?: any;
  style?: any;
}

interface StoreChartsTab {
  tabTags: TabTag[];
  exampleList?: Example[];
}
