<template>
  <v-card class="mx-auto" max-width="400">
    <component :is="info.componentType" :option="info.option || {}" class="cardComponent" :style="info.style || {margin: '0 auto'}" :isBrief="true" />

    <v-card-title class="chartCardTitle">{{ info.title }}</v-card-title>

    <v-card-subtitle class="pb-0" v-if="info.subtitle">{{ info.subtitle }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>图表介绍： {{ info.introduce }}</div>
    </v-card-text>

    <v-card-actions>
      <v-dialog v-model="dialog" persistent max-width="70%">
        <template v-slot:activator="{on, attrs}">
          <v-btn color="orange" text v-bind="attrs" v-on="on">使用</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">配置图表</v-card-title>
          <div class="d-flex justify-center">
            <component :is="borderItemValue" class="borderBox mr-2">
              <div class="echartsBox mx-2 pa-4">
                <component :is="info.componentType" :option="info.option || {}" style="width: 600px" class="cardComponent h100p" />
              </div>
            </component>

            <ChartCreateStep @borderChangeHandle="borderChangeHandleFunc" :dialog="dialog" class="ml-11" />
          </div>

          <v-card-actions class="d-flex justify-center">
            <v-btn color="error darken-1" text @click="dialogCloseHandle">关闭</v-btn>
            <v-btn color="green darken-1" text @click="dialogAddHandle">添加</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import ChartCreateStep from '@/components/ChartCreateStep.vue';
import {computeChartsParams} from '@/utils/tool';
import {LayoutModule} from '@/store/modules/layout';

@Component({
  components: {
    ChartCreateStep,
  },
})
export default class Card extends Vue {
  public LayoutModule = LayoutModule;

  /**
   * 当前图表
   */
  @Prop()
  private info?: Example;

  /**
   * 弹窗开关
   */
  public dialog = false;

  /**
   * 边框值（div则为空）
   */
  public borderItemValue = 'div';

  /**
   * 修改边框回调
   * @param value string 边框值
   */
  public borderChangeHandleFunc(value: string) {
    this.borderItemValue = value === '无' ? 'div' : value;
  }

  /**
   * 添加图表至驾驶舱
   */
  public dialogAddHandle() {
    const {i} = computeChartsParams(this.LayoutModule.layoutItemList);
    const param: LayoutItem = {
      i,
      x: 0,
      y: 0,
      w: 3,
      h: 4,
      tabType: this.info?.tabType,
      borderType: this.borderItemValue,
      componentType: this.info?.componentType,
      echartId: this.info?.echartId,
      data: this.info?.componentType !== 'v-echarts' ? this.info?.option : {},
    };
    this.LayoutModule.addLayoutItem(param);

    return this.dialogCloseHandle();
  }

  /**
   * 弹窗关闭回调
   */
  public dialogCloseHandle() {
    this.borderItemValue = 'div';

    this.dialog = false;
  }
}
</script>

<style scoped lang="sass">
.cardComponent
  width: 100%
  height: 200px
  canvas
    margin: 0 !important

.borderBox
  width: 50%
  height: 300px
  .echartsBox
    width: 100%
    height: inherit
</style>
