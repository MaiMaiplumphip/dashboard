import examples from '@/assets/data/echartsOption/index';

const state: StoreChartsTab = {
  tabTags: [
    {value: 'zzt', label: '柱状图'},
    {value: 'zxt', label: '折线图'},
    {value: 'bt', label: '饼图'},
    {value: 'ldt', label: '雷达图'},
    {value: 'lb', label: '轮播列表'},
    {value: 'zb', label: '指标'},
  ],
  exampleList: [
    ...Object.keys(examples)
      .map(item => {
        return examples[item];
      })
      .reduce((a, b) => {
        return a.concat(b);
      }),
    ...[
      {
        echartId: '1',
        componentType: 'v-scroll-board',
        tabType: 'lb',
        title: '轮播列表_1',
        subtitle: '暂无',
        introduce: '暂无',
        option: {},
      },
      {
        echartId: '1',
        componentType: 'v-indicator',
        tabType: 'zb',
        title: '指标_1',
        subtitle: '暂无',
        introduce: '暂无',
        option: {
          label: '指标1',
          value: 250,
          icon: 'qq',
        },
      },
      {
        echartId: '2',
        componentType: 'v-indicator',
        tabType: 'zb',
        title: '指标_2',
        subtitle: '暂无',
        introduce: '暂无',
        option: {
          label: '指标2',
          value: 300,
          icon: 'code',
        },
      },
    ],
  ],
};

const getter = {};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  getter,
  actions,
  mutations,
};
