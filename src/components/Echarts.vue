<template>
  <div ref="echarts" />
</template>

<script lang="ts">
import {Component, Prop, Vue} from '@/utils/index';
import echarts from 'echarts';

@Component
export default class Echarts extends Vue {
  @Prop()
  private option?: any;

  @Prop()
  private isBrief?: boolean;

  public initEcharts() {
    const worldMapContainer: any = this.$refs.echarts;

    //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    const resizeWorldMapContainer = function() {
      worldMapContainer.style.width = worldMapContainer?.parentNode.innerWidth + 'px';
      worldMapContainer.style.height = worldMapContainer?.parentNode.innerHeight + 'px';
    };
    //设置容器高宽
    resizeWorldMapContainer();

    const myChart: any = echarts.init(this.$refs.echarts);
    // 绘制图表

    const option: any = Object.assign({}, this.option);

    if (this.isBrief) {
      delete option?.tooltip;
      delete option?.legend;
      delete option?.title;
    }

    myChart.setOption(option);

    window.onresize = function() {
      //重置容器高宽
      resizeWorldMapContainer();
      myChart.resize();
    };
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
