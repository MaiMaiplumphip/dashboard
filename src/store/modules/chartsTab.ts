import examples from '@/assets/data/echartsOption/index';
import indicatorArr from '@/assets/data/indicatorOption/index';
import scrollBoardArr from '@/assets/data/scrollBoardOption/index';

const logArr: Example[] = [
  {
    echartId: '1',
    componentType: 'v-log',
    tabType: 'rz',
    title: '日志',
    subtitle: '',
    introduce: '该图表为实时日志',
    option: {},
  },
];

const capsuleArr: Example[] = [
  {
    echartId: '1',
    componentType: 'v-capsule',
    tabType: 'jn',
    title: '源端对象胶囊图',
    subtitle: '',
    introduce: '该图表为源端对象胶囊图',
    option: {
      url: '/dashboard/homePageData/getNumber?type=1',
      title: '源端对象',
    },
  },
  {
    echartId: '2',
    componentType: 'v-capsule',
    tabType: 'jn',
    title: '目标对象胶囊图',
    subtitle: '',
    introduce: '该图表为目标对象胶囊图',
    option: {
      url: '/dashboard/homePageData/getNumber?type=2',
      title: '目标对象',
    },
  },
];

const taskArr: Example[] = [
  {
    echartId: '1',
    componentType: 'v-task',
    tabType: 'rw',
    title: '任务看板',
    subtitle: '',
    introduce: '该图表为目标对象胶囊图',
    option: {
      children: [],
      title: '执行任务',
    },
  },
];
(scrollBoardArr as Example[]).forEach(item => {
  if (item.option.url.indexOf('task') !== -1) {
    taskArr[0].option.children.push(item);
  }
});
console.log('taskArr', taskArr);
const state: StoreChartsTab = {
  tabTags: [
    {value: 'zzt', label: '柱状图'},
    {value: 'zxt', label: '折线图'},
    {value: 'bt', label: '饼图'},
    {value: 'ldt', label: '雷达图'},
    {value: 'lb', label: '轮播列表'},
    {value: 'zb', label: '指标'},
    {value: 'jn', label: '胶囊图'},
    {value: 'rz', label: '日志'},
    {value: 'rw', label: '任务'},
  ],
  exampleList: [
    ...Object.keys(examples)
      .map(item => {
        return examples[item];
      })
      .reduce((a, b) => {
        return a.concat(b);
      }),
    ...[...indicatorArr, ...scrollBoardArr, ...capsuleArr, ...logArr, ...taskArr],
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
