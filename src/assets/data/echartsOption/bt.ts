import echarts from 'echarts';

const dataArr = [
  {value: 335, name: '指标A'},
  {value: 310, name: '指标B'},
  {value: 274, name: '指标C'},
  {value: 235, name: '指标D'},
  {value: 400, name: '指标E'},
  {value: 420, name: '指标F'},
];

const bt_1 = {
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
      data: dataArr.sort(function(a, b) {
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

let bt_2;
let bt_3 = null;
{
  let scaleData = dataArr;
  let rich = {
    white: {
      color: '#ddd',
      align: 'center',
      padding: [3, 0],
    },
  };
  let placeHolderStyle = {
    normal: {
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      color: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0,
    },
  };
  let data = [];
  let color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'];
  for (let i = 0; i < scaleData.length; i++) {
    data.push(
      {
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
          normal: {
            borderWidth: 4,
            shadowBlur: 200,
            borderColor: color[i],
            shadowColor: color[i],
          },
        },
      },
      {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle,
      }
    );
  }

  bt_2 = {
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    toolbox: {
      show: false,
    },
    grid: {
      left: 20,
      right: 40,
      bottom: '19%',
      top: 107,
      containLabel: true,
    },
    series: [
      {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [40, 50],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'outside',
              color: '#ddd',
              formatter: function(params: any) {
                let percent: number | string = 0;
                let total = 0;
                for (let i = 0; i < scaleData.length; i++) {
                  total += scaleData[i].value;
                }
                percent = ((params.value / total) * 100).toFixed(0);
                if (params.name !== '') {
                  return params.name + '\n{white|' + '占比' + percent + '%}';
                } else {
                  return '';
                }
              },
              rich: rich,
            },
            labelLine: {
              length: 30,
              length2: 100,
              show: true,
              color: '#00ffff',
            },
          },
        },
        data: data,
      },
    ],
  };
}

{
  let data = dataArr;
  let arrName = getArrayValue(data, 'name');
  let arrValue = getArrayValue(data, 'value');
  let sumValue = eval(arrValue.join('+'));
  let objData = array2obj(data, 'name');
  let optionData = getData(data);
  function getArrayValue(array: any[], key: string) {
    var key = key || 'value';
    var res: any[] = [];
    if (array) {
      array.forEach(function(t) {
        res.push(t[key]);
      });
    }
    return res;
  }

  function array2obj(array: string | any[], key: string) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
      // @ts-ignore
      resObj[array[i][key]] = array[i];
    }
    return resObj;
  }

  function getData(data: string | any[]) {
    var res: {
      series: any[];
      yAxis: any[];
    } = {
      series: [],
      yAxis: [],
    };
    for (let i = 0; i < data.length; i++) {
      // console.log([70 - i * 15 + '%', 67 - i * 15 + '%']);
      res.series.push({
        // @ts-ignore
        name: '',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
        center: ['30%', '55%'],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 5,
        },
        data: [
          {
            value: data[i].value,
            name: data[i].name,
          },
          {
            value: sumValue - data[i].value,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
        ],
      });
      res.series.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
        center: ['30%', '55%'],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 5,
        },
        data: [
          {
            value: 7.5,
            itemStyle: {
              color: 'rgb(3, 31, 62)',
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
          {
            value: 2.5,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          },
        ],
      });
      res.yAxis.push(((data[i].value / sumValue) * 100).toFixed(2) + '%');
    }
    return res;
  }

  bt_3 = {
    legend: {
      show: true,
      icon: 'circle',
      top: 'center',
      left: '70%',
      data: arrName,
      width: 50,
      padding: [0, 5],
      itemGap: 25,
      formatter: function(name: string) {
        // @ts-ignore
        return '{title|' + name + '}\n{value|' + objData[name].value + '}  {title|项}';
      },

      textStyle: {
        rich: {
          title: {
            fontSize: 16,
            lineHeight: 15,
            color: 'rgb(0, 178, 246)',
          },
          value: {
            fontSize: 18,
            lineHeight: 20,
            color: '#fff',
          },
        },
      },
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: '{a}<br>{b}:{c}({d}%)',
    },
    color: ['rgb(24, 183, 142)', 'rgb(1, 179, 238)', 'rgb(22, 75, 205)', 'rgb(52, 52, 176)'],
    grid: {
      top: '16%',
      bottom: '53%',
      left: '30%',
      containLabel: false,
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          inside: true,
          textStyle: {
            color: '#fff',
            fontSize: 16,
          },
          show: true,
        },
        data: optionData.yAxis,
      },
    ],
    xAxis: [
      {
        show: false,
      },
    ],
    series: optionData.series,
  };
}

const bt: Example[] = [
  {
    echartId: '1',
    componentType: 'v-echarts',
    tabType: 'bt',
    title: '饼图_1',
    subtitle: '暂无',
    introduce: '暂无',
    option: bt_1,
  },
  {
    echartId: '2',
    componentType: 'v-echarts',
    tabType: 'bt',
    title: '饼图_2',
    subtitle: '暂无',
    introduce: '暂无',
    option: bt_2,
  },
  {
    echartId: '3',
    componentType: 'v-echarts',
    tabType: 'bt',
    title: '饼图_3',
    subtitle: '暂无',
    introduce: '暂无',
    option: bt_3,
  },
];

export default bt;
