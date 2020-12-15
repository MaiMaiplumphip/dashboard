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

let data = [
  {time: '1-23', num: 0},
  {time: '1-24', num: 1},
  {time: '1-25', num: 2},
  {time: '1-26', num: 2},
  {time: '1-27', num: 6},
  {time: '1-28', num: 9},
  {time: '1-29', num: 14},
  {time: '1-30', num: 16},
  {time: '1-31', num: 22},
  {time: '2-01', num: 23},
  {time: '2-02', num: 32},
  {time: '2-04', num: 40},
  {time: '2-05', num: 43},
  {time: '2-06', num: 45},
  {time: '2-07', num: 51},
  {time: '2-08', num: 52},
  {time: '2-09', num: 55},
  {time: '2-10', num: 54},
  {time: '2-11', num: 59},
  {time: '2-12', num: 61},
  {time: '2-13', num: 61},
  {time: '2-14', num: 69},
  {time: '2-15', num: 68},
  {time: '2-16', num: 61},
  {time: '2-17', num: 75},
  {time: '2-18', num: 72},
  {time: '2-19', num: 70},
  {time: '2-20', num: 66},
  {time: '2-21', num: 65},
  {time: '2-22', num: 65},
  {time: '2-23', num: 61},
  {time: '2-24', num: 62},
  {time: '2-25', num: 59},
  {time: '2-26', num: 56},
  {time: '2-27', num: 53},
  {time: '2-28', num: 50},
  {time: '2-29', num: 42},
  {time: '3-01', num: 35},
  {time: '3-02', num: 32},
  {time: '3-03', num: 24},
  {time: '3-04', num: 16},
  {time: '3-05', num: 0},
  {time: '3-06', num: 0},
];
let xData: any[] = [];
let yData: any[] = [];

data.map(v => {
  xData.push(v.time);
  yData.push(v.num);
});

const zxt_3 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
        fontSize: 12,
      },
    },
    textStyle: {fontSize: '100%'},
    formatter: (
      v: {
        axisValue: any;
        value: any;
      }[]
    ) => {
      return `
              <div class='u-p-2'>
                <div class='fz-10'>日期：${v[0].axisValue}</div>
                <div class='fz-10 u-mt-2'>人数：${v[0].value}</div>
              </div>
            `;
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false, // 两边留白
    axisLabel: {textStyle: {color: '#fff', fontSize: 14}},
    data: xData,
    axisLine: {lineStyle: {color: '#000', width: 1}},
    splitLine: {lineStyle: {type: 'dashed', color: 'rgba(255,255,255,.2)', width: 1}, show: true},
  },
  yAxis: {
    name: '人',
    type: 'value',
    scale: true,
    nameTextStyle: {color: 'rgba(255,255,255,.5)', align: 'right', padding: [0, 10, 0, 0], fontSize: '100%'},
    axisLabel: {textStyle: {color: '#fff', fontSize: 14}, margin: 8},
    axisLine: {lineStyle: {color: '#000', width: 1}},
    splitLine: {lineStyle: {type: 'solid', color: 'rgba(255,255,255,.2)', width: 1}, show: true},
  },
  series: {
    name: '',
    type: 'line',
    stack: '',
    // 修改的是线下区域的颜色
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: 'rgba(236, 99, 123, .5)',
        },
        {
          offset: 1,
          color: 'rgba(102, 212, 250,.0)',
        },
      ]),
    },
    // 修改的是线的颜色
    lineStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        // 0% 处的颜色                           // 100% 处的颜色
        colorStops: [
          {offset: 0, color: '#3a76f6'},
          {offset: 0.25, color: '#66d4fa'},
          {offset: 0.75, color: '#f8d470'},
          {offset: 1, color: '#ec637b'},
        ],
        global: false, // 缺省为 false
      },
      width: 2,
    },
    //图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    symbol: 'none',
    data: yData,
    markLine: {
      symbol: 'none',
      data: [
        {
          name: '人数最高峰',
          xAxis: '2-17',
          lineStyle: {
            color: '#eb6272',
            type: 'dashed',
            width: 0,
          },
          label: {
            show: true,
            formatter: '2.17日\n人数最高峰\n{a|}',
            align: 'center',
            distance: [0, -60],
            fontSize: 12,
            rich: {
              // a:{ backgroundColor: { image: bg1 }, width: 20, height: 20 }
            },
          },
        },
        {
          name: '确诊人数归零',
          xAxis: '3-05',
          // symbol: 'image://' + bg2,
          symbol: 'circle',
          symbolSize: 10,
          lineStyle: {
            color: '#66cfef',
            type: 'dashed',
            width: 1,
          },
          label: {
            show: true,
            formatter: '3.5日\n人数归零',
            fontSize: 12,
            align: 'center',
          },
        },
      ],
    },
  },
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
  {
    echartId: '3',
    componentType: 'v-echarts',
    tabType: 'zxt',
    title: '折线图_3',
    subtitle: '暂无',
    introduce: '暂无',
    option: zxt_3,
  },
];

export default zxt;
