import echarts from 'echarts';

const zxt_1 = {
  title: {
    text: '多线图',
    textStyle: {
      align: 'center',
      color: '#fff',
      fontSize: 20,
    },
    top: '5%',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0, 255, 233,0)',
            },
            {
              offset: 0.5,
              color: 'rgba(255, 255, 255,1)',
            },
            {
              offset: 1,
              color: 'rgba(0, 255, 233,0)',
            },
          ],
          global: false,
        },
      },
    },
  },
  grid: {
    top: 20,
    bottom: '10%',
    x: 30,
    y: 30,
    x2: 30,
    y2: 30,
    borderWidth: 0,
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: true,
      },
      splitArea: {
        // show: true,
        color: '#f00',
        lineStyle: {
          color: '#f00',
        },
      },
      axisLabel: {
        color: '#fff',
      },
      splitLine: {
        show: false,
      },
      boundaryGap: false,
      data: ['A', 'B', 'C', 'D', 'E', 'F'],
    },
  ],

  yAxis: [
    {
      type: 'value',
      min: 0,
      // max: 140,
      splitNumber: 4,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
        margin: 20,
        textStyle: {
          color: '#d1e6eb',
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '注册总量',
      type: 'line',
      smooth: true, //是否平滑
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      symbol: 'circle',
      symbolSize: 15,
      lineStyle: {
        normal: {
          color: '#00b3f4',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#00b3f4',
        },
      },
      itemStyle: {
        color: '#00b3f4',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
      },
      tooltip: {
        show: false,
      },
      areaStyle: {
        normal: {
          // @ts-ignore
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0,179,244,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,179,244,0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,179,244, 0.9)',
          shadowBlur: 20,
        },
      },
      data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
    },
    {
      name: '注册总量',
      type: 'line',
      smooth: true, //是否平滑
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      symbol: 'circle',
      symbolSize: 15,
      lineStyle: {
        normal: {
          color: '#00ca95',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#00ca95',
        },
      },

      itemStyle: {
        color: '#00ca95',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
      },
      tooltip: {
        show: false,
      },
      areaStyle: {
        normal: {
          // @ts-ignore
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0,202,149,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,202,149,0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,202,149, 0.9)',
          shadowBlur: 20,
        },
      },
      data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
    },
  ],
};

const zxt_2 = {
  title: {
    text: '请求数',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#F1F1F3',
    },
    left: '6%',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B',
      },
    },
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['移动', '电信', '联通'],
    right: '4%',
    textStyle: {
      fontSize: 12,
      color: '#F1F1F3',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#57617B',
        },
      },
      data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
    },
    {
      axisPointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#57617B',
        },
      },
      axisTick: {
        show: false,
      },

      position: 'bottom',
      offset: 20,
      data: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        {
          value: '周六',
          textStyle: {
            align: 'left',
          },
        },
        '周日',
      ],
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位（%）',
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#57617B',
        },
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
        },
      },
      splitLine: {
        lineStyle: {
          color: '#57617B',
        },
      },
    },
  ],
  series: [
    {
      name: '移动',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      areaStyle: {
        normal: {
          // @ts-ignore
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)',
              },
              {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: 'rgb(137,189,27)',
          borderColor: 'rgba(137,189,2,0.27)',
          borderWidth: 12,
        },
      },
      data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
    },
    {
      name: '电信',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      areaStyle: {
        normal: {
          // @ts-ignore
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)',
              },
              {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: 'rgb(0,136,212)',
          borderColor: 'rgba(0,136,212,0.2)',
          borderWidth: 12,
        },
      },
      data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
    },
    {
      name: '联通',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      areaStyle: {
        normal: {
          // @ts-ignore
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)',
              },
              {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: 'rgb(219,50,51)',
          borderColor: 'rgba(219,50,51,0.2)',
          borderWidth: 12,
        },
      },
      data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
    },
  ],
};

const zxt: Example[] = [
  {
    echartId: '1',
    componentType: 'v-echarts',
    tabType: 'zxt',
    title: '折线图_1',
    subtitle: '暂无',
    introduce: '暂无',
    option: zxt_1,
  },
  {
    echartId: '2',
    componentType: 'v-echarts',
    tabType: 'zxt',
    title: '折线图_2',
    subtitle: '暂无',
    introduce: '暂无',
    option: zxt_2,
  },
];

export default zxt;
