<template>
  <div ref="echarts" />
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import echarts from 'echarts';
// @ts-ignore
import china from 'echarts/map/json/china.json'
import {EleResize} from '@/utils/resize';

@Component
export default class Echarts extends Vue {
  /**
   * 图表配置
   */
  @Prop()
  private option?: any;

  /**
   * 是否为缩略
   */
  @Prop()
  private isBrief?: boolean;

  /**
   * echarts事例
   */
  private mychart: any;

  /**
   * 图表node节点
   */
  private resizeDiv: any;

  /**
   * 初始化图表
   */
  public initEcharts() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    //使用setTimeout异步特性使图标正常加载，这是一位使用拖拽插件导致不能按顺序更新才加定时器，你使用或许不用
    setTimeout(() => {
      this.$nextTick(() => {

        if (this.option.hasOwnProperty('geo')) {
          echarts.registerMap('china', china)
        }

        this.mychart = echarts.init(this.$refs.echarts as HTMLCanvasElement);
        this.resizeDiv = this.$refs.echarts;
        const option = Object.assign({}, this.option);

        console.log('this.option', this.option);



        // 如果为缩略图模式，则隐藏相关内容
        if (this.isBrief) {
          delete option?.tooltip;
          delete option?.legend;
          delete option?.title;
        }
        this.mychart.setOption(option);

        //重点这两句监听使用resize方法
        const listener = function() {
          that.mychart.resize();
        };
        EleResize.on(this.resizeDiv, listener);
      });
    }, 0);
  }

  public mounted() {
    this.initEcharts();
  }
}
</script>

<style scoped lang="sass">
.cardComponent
  width: 100%
  height: 200px
  canvas
    margin: 0 !important
</style>
