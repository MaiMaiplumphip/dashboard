export default [
  {
    echartId: '1',
    componentType: 'v-scroll-board',
    tabType: 'lb',
    title: '源端对象轮播列表',
    subtitle: '',
    introduce: '该图表为源端对象轮播列表',
    option: {
      url: '/dashboard/homePageData/getList?type=1',
    },
  },
  {
    echartId: '2',
    componentType: 'v-scroll-board',
    tabType: 'lb',
    title: '目标对象轮播列表',
    subtitle: '',
    introduce: '该图表为目标对象轮播列表',
    option: {
      url: '/dashboard/homePageData/getList?type=2',
    },
  },
  {
    echartId: '3',
    componentType: 'v-scroll-board',
    tabType: 'lb',
    title: '数据同步（数据库）',
    subtitle: '',
    introduce: '该图表为数据同步（数据库）',
    option: {
      url: '/dashboard/task/dailyDetail?type=1',
      title: '数据同步（数据库）',
    },
  },
  {
    echartId: '4',
    componentType: 'v-scroll-board',
    tabType: 'lb',
    title: '数据同步（接口）',
    subtitle: '',
    introduce: '该图表为数据同步（接口）',
    option: {
      url: '/dashboard/task/dailyDetail?type=2',
      title: '数据同步（接口）',
    },
  },
  {
    echartId: '5',
    componentType: 'v-scroll-board',
    tabType: 'lb',
    title: '数据转换任务',
    subtitle: '',
    introduce: '该图表为数据转换任务',
    option: {
      url: '/dashboard/task/dailyDetail?type=3',
      title: '数据转换任务',
    },
  },
];
