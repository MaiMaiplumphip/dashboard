import echarts from 'echarts';

let data = [
  {name: '北京', taxes: 0, companyNum: 0},
  {name: '天津', taxes: 0, companyNum: 0},
  {name: '河北', taxes: 0, companyNum: 0},
  {name: '山西', taxes: 0, companyNum: 0},
  {name: '内蒙古', taxes: 0, companyNum: 0},
  {name: '辽宁', taxes: 0, companyNum: 0},
  {name: '吉林', taxes: 0, companyNum: 0},
  {name: '黑龙江', taxes: 0, companyNum: 0},
  {name: '上海', taxes: 0, companyNum: 0},
  {name: '江苏', taxes: 0, companyNum: 0},
  {name: '浙江', taxes: 0, companyNum: 0},
  {name: '安徽', taxes: 0, companyNum: 0},
  {name: '福建', taxes: 0, companyNum: 0},
  {name: '江西', taxes: 0, companyNum: 0},
  {name: '山东', taxes: 0, companyNum: 0},
  {name: '河南', taxes: 0, companyNum: 0},
  {name: '湖北', taxes: 0, companyNum: 0},
  {name: '湖南', taxes: 0, companyNum: 0},
  {name: '重庆', taxes: 0, companyNum: 0},
  {name: '四川', taxes: 0, companyNum: 0},
  {name: '贵州', taxes: 0, companyNum: 0},
  {name: '云南', taxes: 0, companyNum: 0},
  {name: '西藏', taxes: 0, companyNum: 0},
  {name: '陕西', taxes: 0, companyNum: 0},
  {name: '甘肃', taxes: 0, companyNum: 0},
  {name: '青海', taxes: 0, companyNum: 0},
  {name: '宁夏', taxes: 0, companyNum: 0},
  {name: '新疆', taxes: 0, companyNum: 0},
  {name: '广东', taxes: 0, companyNum: 0},
  {name: '广西', taxes: 0, companyNum: 0},
  {name: '海南', taxes: 0, companyNum: 0},
  {name: '香港', taxes: 0, companyNum: 0},
  {name: '台湾', taxes: 0, companyNum: 0},
  {name: '南海诸岛', taxes: 0, companyNum: 0},
];

let mapLabel = {
  a: '税收金额：',
  b: '数量: ',
};

const dt_1 = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    backgroundColor: 'rgba(0,0,0,.8)',
    borderColor: '#3574c8',
    borderWidth: '2',
    extraCssText: 'padding:10px;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
    show: true,
    formatter: function(params: {name: string; data: {taxes: string; companyNum: string}}) {
      if (params.name) {
        return params.name + '<br/>' + mapLabel.a + params.data.taxes + +'<br/>' + mapLabel.b + params.data.companyNum;
      }
    },
  },
  visualMap: {
    min: 0,
    max: 100,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],
    calculable: false,
    orient: 'horizontal',
    inRange: {
      color: ['#d1f1fe', '#2eb9f5'],
      symbolSize: [30, 100],
    },
  },
  geo: {
    map: 'china',
    zoom: 1.2,
    label: {
      normal: {
        show: true,
        color: '#666',
      },
      emphasis: {
        show: true,
        color: '#fff',
      },
    },
    itemStyle: {
      normal: {
        areaColor: '#B5EAFD',
        borderColor: '#666',
      },
      emphasis: {
        areaColor: '#51B5E3',
      },
    },
  },
  series: [
    {
      type: 'map',
      mapType: 'china',
      geoIndex: 0,
      label: {
        normal: {
          show: true,
        },
        emphasis: {
          show: true,
        },
      },
      data,
    },
  ],
};

const dt: Example[] = [
  {
    echartId: '1',
    componentType: 'v-echarts',
    tabType: 'dt',
    title: '地图_1',
    subtitle: '暂无',
    introduce: '暂无',
    option: dt_1,
  },
];

export default dt;
