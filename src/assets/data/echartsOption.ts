import echarts from 'echarts';

export const column = {
  grid: {
    top: 20,
    bottom: 20,
    x: 30,
    y: 30,
    x2: 30,
    y2: 30,
    borderWidth: 0,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true,
      },
    },
  },
  legend: {
    data: ['销售量', '业务1', '业务2'],
    top: '2%',
    right: '10',
    textStyle: {
      color: 'rgba(250,250,250,0.6)',
      fontSize: 16,
    },
  },
  xAxis: {
    data: ['区域1', '区域2', '区域3', '区域4', '区域5', '区域6'],
    axisLine: {
      show: true, //隐藏X轴轴线
      lineStyle: {
        color: '#26D9FF',
        width: 2,
      },
    },
    axisTick: {
      show: true, //隐藏X轴刻度
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(250,250,250,0.6)', //X轴文字颜色
        fontSize: 16,
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ['rgba(250,250,250,0.1)', 'rgba(250,250,250,0)'],
      },
    },
  },
  yAxis: [
    {
      type: 'value',
      /*name: "亿元",*/
      nameTextStyle: {
        color: '#ebf8ac',
        fontSize: 16,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#26D9FF',
          width: 2,
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: 'rgba(250,250,250,0.6)',
          fontSize: 16,
        },
      },
    },
    {
      type: 'value',
      /*name: "同比",*/
      nameTextStyle: {
        color: '#ebf8ac',
        fontSize: 16,
      },
      position: 'right',
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        formatter: '{value} %', //右侧Y轴文字显示
        textStyle: {
          color: 'rgba(250,250,250,0.6)',
          fontSize: 16,
        },
      },
    },
  ],
  series: [
    {
      name: '销售量',
      type: 'line',
      yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      smooth: true, //平滑曲线显示
      showAllSymbol: true, //显示所有图形。
      symbol: 'circle', //标记的图形为实心圆
      symbolSize: 8, //标记的大小
      itemStyle: {
        //折线拐点标志的样式
        color: '#1045A0',
        borderColor: '#3D7EEB',
        width: 2,
        shadowColor: '#3D7EEB',
        shadowBlur: 4,
      },
      lineStyle: {
        color: '#3D7EEB',
        width: 2,
        shadowColor: '#3D7EEB',
        shadowBlur: 4,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(61,126,235, 0.5)',
          },
          {
            offset: 1,
            color: 'rgba(61,126,235, 0)',
          },
        ]),
      },
      data: [4.2, 3.5, 2.9, 7.8, 5, 3],
    },
    {
      name: '业务1',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(61,126,235, 1)',
            },
            {
              offset: 1,
              color: 'rgba(61,126,235, 0)',
            },
          ]),
          borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(160,196,225, 1)',
            },
            {
              offset: 1,
              color: 'rgba(61,126,235, 1)',
            },
          ]),
          borderWidth: 2,
        },
      },
      data: [4, 3, 2, 8, 3, 5],
    },
    {
      name: '业务2',
      type: 'bar',
      barWidth: 15,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: 'rgba(15,197,243,1)'},
            {offset: 1, color: 'rgba(15,197,243,0)'},
          ]),
          borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: 'rgba(180,240,255,1)'},
            {offset: 1, color: 'rgba(15,197,243,1)'},
          ]),
          borderWidth: 2,
        },
      },
      data: [3, 2, 3, 5, 4, 3],
    },
  ],
};

export const line = {
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

export const pie = {
  title: {
    text: 'Customized Pie',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc',
    },
  },

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 274, name: '联盟广告'},
        {value: 235, name: '视频广告'},
        {value: 400, name: '搜索引擎'},
      ].sort(function(a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)',
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function() {
        return Math.random() * 200;
      },
    },
  ],
};

const dataBJ = [
  [55, 9, 56, 0.46, 18, 6, 1],
  [25, 11, 21, 0.65, 34, 9, 2],
  [56, 7, 63, 0.3, 14, 5, 3],
  [33, 7, 29, 0.33, 16, 6, 4],
  [42, 24, 44, 0.76, 40, 16, 5],
  [82, 58, 90, 1.77, 68, 33, 6],
  [74, 49, 77, 1.46, 48, 27, 7],
  [78, 55, 80, 1.29, 59, 29, 8],
  [267, 216, 280, 4.8, 108, 64, 9],
  [185, 127, 216, 2.52, 61, 27, 10],
  [39, 19, 38, 0.57, 31, 15, 11],
  [41, 11, 40, 0.43, 21, 7, 12],
  [64, 38, 74, 1.04, 46, 22, 13],
  [108, 79, 120, 1.7, 75, 41, 14],
  [108, 63, 116, 1.48, 44, 26, 15],
  [33, 6, 29, 0.34, 13, 5, 16],
  [94, 66, 110, 1.54, 62, 31, 17],
  [186, 142, 192, 3.88, 93, 79, 18],
  [57, 31, 54, 0.96, 32, 14, 19],
  [22, 8, 17, 0.48, 23, 10, 20],
  [39, 15, 36, 0.61, 29, 13, 21],
  [94, 69, 114, 2.08, 73, 39, 22],
  [99, 73, 110, 2.43, 76, 48, 23],
  [31, 12, 30, 0.5, 32, 16, 24],
  [42, 27, 43, 1, 53, 22, 25],
  [154, 117, 157, 3.05, 92, 58, 26],
  [234, 185, 230, 4.09, 123, 69, 27],
  [160, 120, 186, 2.77, 91, 50, 28],
  [134, 96, 165, 2.76, 83, 41, 29],
  [52, 24, 60, 1.03, 50, 21, 30],
  [46, 5, 49, 0.28, 10, 6, 31],
];

const dataGZ = [
  [26, 37, 27, 1.163, 27, 13, 1],
  [85, 62, 71, 1.195, 60, 8, 2],
  [78, 38, 74, 1.363, 37, 7, 3],
  [21, 21, 36, 0.634, 40, 9, 4],
  [41, 42, 46, 0.915, 81, 13, 5],
  [56, 52, 69, 1.067, 92, 16, 6],
  [64, 30, 28, 0.924, 51, 2, 7],
  [55, 48, 74, 1.236, 75, 26, 8],
  [76, 85, 113, 1.237, 114, 27, 9],
  [91, 81, 104, 1.041, 56, 40, 10],
  [84, 39, 60, 0.964, 25, 11, 11],
  [64, 51, 101, 0.862, 58, 23, 12],
  [70, 69, 120, 1.198, 65, 36, 13],
  [77, 105, 178, 2.549, 64, 16, 14],
  [109, 68, 87, 0.996, 74, 29, 15],
  [73, 68, 97, 0.905, 51, 34, 16],
  [54, 27, 47, 0.592, 53, 12, 17],
  [51, 61, 97, 0.811, 65, 19, 18],
  [91, 71, 121, 1.374, 43, 18, 19],
  [73, 102, 182, 2.787, 44, 19, 20],
  [73, 50, 76, 0.717, 31, 20, 21],
  [84, 94, 140, 2.238, 68, 18, 22],
  [93, 77, 104, 1.165, 53, 7, 23],
  [99, 130, 227, 3.97, 55, 15, 24],
  [146, 84, 139, 1.094, 40, 17, 25],
  [113, 108, 137, 1.481, 48, 15, 26],
  [81, 48, 62, 1.619, 26, 3, 27],
  [56, 48, 68, 1.336, 37, 9, 28],
  [82, 92, 174, 3.29, 0, 13, 29],
  [106, 116, 188, 3.628, 101, 16, 30],
  [118, 50, 0, 1.383, 76, 11, 31],
];

const dataSH = [
  [91, 45, 125, 0.82, 34, 23, 1],
  [65, 27, 78, 0.86, 45, 29, 2],
  [83, 60, 84, 1.09, 73, 27, 3],
  [109, 81, 121, 1.28, 68, 51, 4],
  [106, 77, 114, 1.07, 55, 51, 5],
  [109, 81, 121, 1.28, 68, 51, 6],
  [106, 77, 114, 1.07, 55, 51, 7],
  [89, 65, 78, 0.86, 51, 26, 8],
  [53, 33, 47, 0.64, 50, 17, 9],
  [80, 55, 80, 1.01, 75, 24, 10],
  [117, 81, 124, 1.03, 45, 24, 11],
  [99, 71, 142, 1.1, 62, 42, 12],
  [95, 69, 130, 1.28, 74, 50, 13],
  [116, 87, 131, 1.47, 84, 40, 14],
  [108, 80, 121, 1.3, 85, 37, 15],
  [134, 83, 167, 1.16, 57, 43, 16],
  [79, 43, 107, 1.05, 59, 37, 17],
  [71, 46, 89, 0.86, 64, 25, 18],
  [97, 71, 113, 1.17, 88, 31, 19],
  [84, 57, 91, 0.85, 55, 31, 20],
  [87, 63, 101, 0.9, 56, 41, 21],
  [104, 77, 119, 1.09, 73, 48, 22],
  [87, 62, 100, 1, 72, 28, 23],
  [168, 128, 172, 1.49, 97, 56, 24],
  [65, 45, 51, 0.74, 39, 17, 25],
  [39, 24, 38, 0.61, 47, 17, 26],
  [39, 24, 39, 0.59, 50, 19, 27],
  [93, 68, 96, 1.05, 79, 29, 28],
  [188, 143, 197, 1.66, 99, 51, 29],
  [174, 131, 174, 1.55, 108, 50, 30],
  [187, 143, 201, 1.39, 89, 53, 31],
];

const lineStyle = {
  normal: {
    width: 1,
    opacity: 0.5,
  },
};

export const radar = {
  title: {
    text: 'AQI - 雷达图',
    left: 'center',
    textStyle: {
      color: '#eee',
    },
  },
  legend: {
    bottom: 5,
    data: ['北京', '上海', '广州'],
    itemGap: 20,
    textStyle: {
      color: '#fff',
      fontSize: 14,
    },
    selectedMode: 'single',
  },
  // visualMap: {
  //     show: true,
  //     min: 0,
  //     max: 20,
  //     dimension: 6,
  //     inRange: {
  //         colorLightness: [0.5, 0.8]
  //     }
  // },
  radar: {
    indicator: [
      {name: '指标A', max: 300},
      {name: '指标B', max: 250},
      {name: '指标C', max: 300},
      {name: '指标D', max: 5},
      {name: '指标E', max: 200},
      {name: '指标F', max: 100},
    ],
    shape: 'circle',
    splitNumber: 5,
    name: {
      textStyle: {
        color: 'rgb(238, 197, 102)',
      },
    },
    splitLine: {
      lineStyle: {
        color: ['rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)', 'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)', 'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'].reverse(),
      },
    },
    splitArea: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(238, 197, 102, 0.5)',
      },
    },
  },
  series: [
    {
      name: '北京',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataBJ,
      symbol: 'none',
      itemStyle: {
        color: '#F9713C',
      },
      areaStyle: {
        opacity: 0.1,
      },
    },
    {
      name: '上海',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataSH,
      symbol: 'none',
      itemStyle: {
        color: '#B3E4A1',
      },
      areaStyle: {
        opacity: 0.05,
      },
    },
    {
      name: '广州',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataGZ,
      symbol: 'none',
      itemStyle: {
        color: 'rgb(238, 197, 102)',
      },
      areaStyle: {
        opacity: 0.05,
      },
    },
  ],
};
