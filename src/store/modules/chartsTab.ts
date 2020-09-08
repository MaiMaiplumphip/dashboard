import {column, line, pie, radar} from '@/assets/data/echartsOption';

const state: StoreChartsTab = {
  tabTags: [
    {value: 'v-echarts', label: '图表'},
    {value: 'dv-active-ring-chart', label: '动态环图'},
    {value: 'dv-capsule-chart', label: '胶囊柱图'},
    {value: 'dv-water-level-pond', label: '水位图'},
    {value: 'dv-percent-pond', label: '进度池'},
    // {value: 'dv-flyline-chart', label: '飞线图'},
    // {value: 'dv-conical-column-chart', label: '锥形柱图'},
    // {value: 'dv-digital-flop', label: '数字翻牌器'},
    {value: 'dv-scroll-board', label: '轮播表'},
    {value: 'dv-scroll-ranking-board', label: '排名轮播表'},
  ],
  exampleList: [
    {
      echartType: 'zzt',
      tabType: 'v-echarts',
      title: '柱状图',
      subtitle: '暂无',
      introduce: '暂无',
      option: column,
    },
    {
      echartType: 'zxt',
      tabType: 'v-echarts',
      title: '折线图',
      subtitle: '暂无',
      introduce: '暂无',
      option: line,
    },
    {
      echartType: 'bt',
      tabType: 'v-echarts',
      title: '饼图',
      subtitle: '暂无',
      introduce: '暂无',
      option: pie,
    },
    {
      echartType: 'ldt',
      tabType: 'v-echarts',
      title: '雷达图',
      subtitle: '暂无',
      introduce: '暂无',
      option: radar,
    },
    {
      echartType: '',
      tabType: 'dv-active-ring-chart',
      title: '基本动态环图',
      subtitle: '暂无',
      introduce: '暂无',
      config: {
        data: [
          {
            name: '企业A',
            value: 55,
          },
          {
            name: '企业B',
            value: 120,
          },
          {
            name: '企业C',
            value: 78,
          },
          {
            name: '企业D',
            value: 66,
          },
          {
            name: '企业E',
            value: 80,
          },
        ],
      },
    },
    {
      tabType: 'dv-capsule-chart',
      title: '基本胶囊柱图',
      subtitle: '暂无',
      introduce: '暂无',
      config: {
        data: [
          {
            name: '企业A',
            value: 55,
          },
          {
            name: '企业B',
            value: 120,
          },
          {
            name: '企业C',
            value: 78,
          },
          {
            name: '企业D',
            value: 66,
          },
          {
            name: '企业E',
            value: 80,
          },
        ],
      },
    },
    {
      tabType: 'dv-water-level-pond',
      title: '矩形水位图',
      subtitle: '暂无',
      introduce: '暂无',
      style: {
        width: '160px',
        margin: '0 auto',
      },
      config: {
        data: [66],
      },
    },
    {
      tabType: 'dv-water-level-pond',
      title: '圆角水位图',
      subtitle: '暂无',
      introduce: '暂无',
      style: {
        width: '160px',
        margin: '0 auto',
      },
      config: {
        data: [66],
        shape: 'roundRect',
      },
    },
    {
      tabType: 'dv-water-level-pond',
      title: '圆形水位图',
      subtitle: '暂无',
      introduce: '暂无',
      style: {
        width: '160px',
        margin: '0 auto',
      },
      config: {
        data: [66],
        shape: 'round',
      },
    },
    {
      tabType: 'dv-percent-pond',
      title: '基本进度池',
      subtitle: '暂无',
      introduce: '暂无',
      style: {
        width: '160px',
      },
      config: {
        data: [66],
      },
    },
    {
      tabType: 'dv-flyline-chart',
      title: '基本飞线图',
      subtitle: '暂无',
      introduce: '暂无',
      config: {
        centerPoint: [0.48, 0.35],
        points: [
          [0.52, 0.23],
          [0.43, 0.29],
          [0.59, 0.35],
          [0.53, 0.47],
          [0.45, 0.54],
          [0.36, 0.38],
          [0.62, 0.55],
          [0.56, 0.56],
          [0.37, 0.66],
          [0.55, 0.81],
          [0.55, 0.67],
          [0.37, 0.29],
          [0.2, 0.36],
          [0.76, 0.41],
          [0.59, 0.18],
          [0.68, 0.17],
          [0.59, 0.1],
        ],
      },
    },
    {
      tabType: 'dv-digital-flop',
      title: '基本数字翻牌器',
      subtitle: '暂无',
      introduce: '暂无',
      config: {
        data: [
          {
            number: [100],
            content: '{nt}个',
          },
          {
            number: [999],
            content: '{nt}个',
          },
        ],
      },
    },
    {
      tabType: 'dv-scroll-board',
      title: '基本轮播表',
      subtitle: '暂无',
      introduce: '暂无',
      config: {
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3'],
        ],
      },
    },
    {
      tabType: 'dv-scroll-ranking-board',
      title: '基本排名轮播表',
      subtitle: '暂无',
      introduce: '暂无',
      config: {
        data: [
          {
            name: '企业A',
            value: 55,
          },
          {
            name: '企业B',
            value: 120,
          },
          {
            name: '企业C',
            value: 78,
          },
          {
            name: '企业D',
            value: 66,
          },
          {
            name: '企业E',
            value: 80,
          },
          {
            name: '企业F',
            value: 45,
          },
          {
            name: '企业G',
            value: 29,
          },
        ],
      },
    },
  ],
};

const getter: any = {};

const actions: any = {};

const mutations: any = {};

export default {
  namespaced: true,
  state,
  getter,
  actions,
  mutations,
};
