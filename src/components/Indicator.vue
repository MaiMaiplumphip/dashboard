<template>
  <div class="IndicatorBox">
    <div class="card-panel">
      <div :class="`card-panel-icon-wrapper dd icon-${option.type}`">
        <svg-icon :icon-class="option.icon" class-name="card-panel-icon" />
      </div>
      <div class="card-panel-description">
        <div class="card-panel-text">{{ option.label }}</div>
        <CountTo :start-val="0" :end-val="value" :duration="2600" class="card-panel-num" />
        <b>{{ option.unit }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import CountTo from 'vue-count-to';
import {getHomeTypeAmount} from '@/api/component';

@Component({
  components: {
    CountTo,
  },
})
export default class Indicator extends Vue {
  @Prop()
  private option?: {
    label: string;
    icon: string;
    type: string;
    unit: string;
  };

  public value = 0;

  private async getCount() {
    const res = await getHomeTypeAmount(this.option?.type);
    this.value = res.data;
  }

  mounted() {
    this.getCount();
  }
}
</script>

<style scoped lang="sass">
.IndicatorBox
  padding: 20px
  box-sizing: border-box

.card-panel
    height: 100%
    cursor: pointer
    font-size: 12px
    position: relative
    overflow: hidden
    color: #666
    /*background: #262626*/
    background: linear-gradient(rgba(46,52,63,.4),rgba(68,80,100,.4))
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05)
    border-color: rgba(0, 0, 0, 0.05)

    &:hover
      .card-panel-icon-wrapper
        color: #fff


      .icon-1
        background: rgba(64,201,198, .6)


      .icon-2
        background: rgba(54,163,247, .6)


      .icon-4
        background: rgba(244,81,108,.6)


      .icon-3
        background: rgba(	255,165,0,.6)

    .icon-1
      color: #40c9c6


    .icon-2
      color: #36a3f7


    .icon-4
      color: #f4516c


    .icon-3
      color: #FFA500


    .card-panel-icon-wrapper
      float: left
      margin: 14px 0 0 14px
      padding: 16px
      transition: all 0.38s ease-out
      /*border-radius: 6px*/


    .card-panel-icon
      float: left
      font-size: 48px


    .card-panel-description
      float: right
      font-weight: bold
      margin: 26px
      margin-left: 0px

      .card-panel-text
        line-height: 18px
        color: #fff
        font-size: 16px
        margin-bottom: 12px


      .card-panel-num
        font-size: 20px
        color: #fff
</style>
