import echarts from 'echarts';

const zzt_1 = {
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

let salvProName = ['安徽省', '河南省', '浙江省', '湖北省', '贵州省', '江西省', '江苏省', '四川省', '云南省', '湖南省'];
let salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67, 55];
let salvProMax = []; //背景按最大值
for (let i = 0; i < salvProValue.length; i++) {
  salvProMax.push(salvProValue[0]);
}
const zzt_2 = {
  grid: {
    left: '2%',
    right: '2%',
    bottom: '2%',
    top: '2%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
    formatter: function(params) {
      return params[0].name + ' : ' + params[0].value;
    },
  },
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: salvProName,
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '12',
        },
      },
      data: salvProValue,
    },
  ],
  series: [
    {
      name: '值',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 30,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: 'rgb(57,89,255,1)',
            },
            {
              offset: 1,
              color: 'rgb(46,200,207,1)',
            },
          ]),
        },
      },
      barWidth: 20,
      data: salvProValue,
    },
    {
      name: '背景',
      type: 'bar',
      barWidth: 20,
      barGap: '-100%',
      data: salvProMax,
      itemStyle: {
        normal: {
          color: 'rgba(24,31,68,1)',
          barBorderRadius: 30,
        },
      },
    },
  ],
};

const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function(ctx: any, shape: any) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 9, shape.y - 9];
    const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function(ctx: any, shape: any) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
    const c4 = [shape.x + 18, shape.y - 9];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function(ctx: any, shape: any) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 18, shape.y - 9];
    const c3 = [shape.x + 9, shape.y - 18];
    const c4 = [shape.x - 9, shape.y - 9];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const MAX = [6000, 6000, 6000, 6000, 6000, 5000, 4000, 3000, 2000, 4000, 3000, 2000];
const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654];

const zzt_3 = {
  title: {
    text: '',
    top: 32,
    left: 18,
    textStyle: {
      color: '#00F6FF',
      fontSize: 24,
    },
  },
  grid: {
    left: 20,
    right: 40,
    bottom: '19%',
    top: 107,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['德州', '德城区', '陵城区', '禹城市', '乐陵市', '临邑县', '平原县', '夏津县', '武城县', '庆云县', '宁津县', '齐河县'],
    axisLine: {
      show: true,
      lineStyle: {
        color: 'white',
      },
    },
    offset: 20,
    axisTick: {
      show: false,
      length: 9,
      alignWithLabel: true,
      lineStyle: {
        color: '#7DFFFD',
      },
    },
    axisLabel: {
      fontSize: 10,
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: 'white',
      },
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      fontSize: 16,
    },
    boundaryGap: ['20%', '20%'],
  },
  series: [
    {
      type: 'custom',
      renderItem: function(params: any, api: any) {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [
            {
              type: 'CubeLeft',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: 'rgba(47,102,192,.27)',
              },
            },
            {
              type: 'CubeRight',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: 'rgba(59,128,226,.27)',
              },
            },
            {
              type: 'CubeTop',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: 'rgba(72,156,221,.27)',
              },
            },
          ],
        };
      },
      data: MAX,
    },
    {
      type: 'custom',
      renderItem: (params: any, api: any) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [
            {
              type: 'CubeLeft',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#3B80E2',
                  },
                  {
                    offset: 1,
                    color: '#49BEE5',
                  },
                ]),
              },
            },
            {
              type: 'CubeRight',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#3B80E2',
                  },
                  {
                    offset: 1,
                    color: '#49BEE5',
                  },
                ]),
              },
            },
            {
              type: 'CubeTop',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#3B80E2',
                  },
                  {
                    offset: 1,
                    color: '#49BEE5',
                  },
                ]),
              },
            },
          ],
        };
      },
      data: VALUE,
    },
    {
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: (e: any) => {
            switch (e.name) {
              case '10kV线路':
                return VALUE[0];
              case '公用配变':
                return VALUE[1];
              case '35kV主变':
                return VALUE[2];
              case '水':
            }
          },
          fontSize: 16,
          color: '#fff',
          offset: [4, -25],
        },
      },
      itemStyle: {
        color: 'transparent',
      },
      data: MAX,
    },
  ],
};

const zzt: Example[] = [
  {
    echartId: '1',
    componentType: 'v-echarts',
    tabType: 'zzt',
    title: '柱状图_1',
    subtitle: '暂无',
    introduce: '暂无',
    option: zzt_1,
  },
  {
    echartId: '2',
    componentType: 'v-echarts',
    tabType: 'zzt',
    title: '柱状图_2',
    subtitle: '暂无',
    introduce: '暂无',
    option: zzt_2,
  },
  {
    echartId: '3',
    componentType: 'v-echarts',
    tabType: 'zzt',
    title: '柱状图_3',
    subtitle: '暂无',
    introduce: '暂无',
    option: zzt_3,
  },
];

export default zzt;
