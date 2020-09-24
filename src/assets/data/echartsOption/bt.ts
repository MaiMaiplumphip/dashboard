import echarts from 'echarts';

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

var scaleData = [
  {
    name: '工程建设',
    value: 10,
  },
  {
    name: '产权交易',
    value: 10,
  },
  {
    name: '土地交易',
    value: 10,
  },
  {
    name: '其他交易',
    value: 10,
  },
  {
    name: '土地交易',
    value: 10,
  },
  {
    name: '其他交易',
    value: 10,
  },
];
var rich = {
  white: {
    color: '#ddd',
    align: 'center',
    padding: [3, 0],
  },
};
var placeHolderStyle = {
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
var data = [];
var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'];
for (var i = 0; i < scaleData.length; i++) {
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

const bt_2 = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  toolbox: {
    show: false,
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
              for (var i = 0; i < scaleData.length; i++) {
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
];

export default bt;
