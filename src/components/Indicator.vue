<template>
  <div class="IndicatorBox">
    <div class="card-panel">
      <div class="card-panel-icon-wrapper icon-people">
        <svg-icon :icon-class="option.icon" class-name="card-panel-icon" />
      </div>
      <div class="card-panel-description">
        <div class="card-panel-text">{{ option.label }}</div>
        <CountTo :start-val="0" :end-val="option.value" :duration="2600" class="card-panel-num" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import CountTo from 'vue-count-to';

@Component({
  components: {
    CountTo,
  },
})
export default class Indicator extends Vue {
  @Prop()
  private option?: {
    label: string;
    value: number;
    icon: string;
  };
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
    background: #262626
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05)
    border-color: rgba(0, 0, 0, 0.05)
    border-radius: 20px

    &:hover
      .card-panel-icon-wrapper
        color: #fff


      .icon-people
        background: #40c9c6


      .icon-message
        background: #36a3f7


      .icon-money
        background: #f4516c


      .icon-shopping
        background: #34bfa3

    .icon-people
      color: #40c9c6


    .icon-message
      color: #36a3f7


    .icon-money
      color: #f4516c


    .icon-shopping
      color: #34bfa3


    .card-panel-icon-wrapper
      float: left
      margin: 14px 0 0 14px
      padding: 16px
      transition: all 0.38s ease-out
      border-radius: 6px


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
