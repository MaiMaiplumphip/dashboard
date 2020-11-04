<template>
  <div class="cockpit" ref="cockpit">
    <GridLayout
      :layout.sync="LayoutModule.layoutItemList"
      :col-num="12"
      :row-height="30"
      :is-draggable="PageSwitchModule.isEdit"
      :is-resizable="PageSwitchModule.isEdit"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      resizeIgnoreFrom="canvas,svg"
      style="width: 100%;height: 100%"
    >
      <GridItem v-for="item in layoutList" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" class="gridItemBox">
        <span class="removeBtn" v-if="PageSwitchModule.isEdit" @click="LayoutModule.removeLayoutItem(item)">
          <v-btn class="mx-2" fab dark x-small color="primary">
            <v-icon dark>mdi-minus</v-icon>
          </v-btn>
        </span>
        <component :is="item.borderType" style="width: 100%;height: 100%;" class="a" title="">
          <component :is="item.componentType" :option="item.componentType === 'v-echarts' ? echartsOption[item.tabType][item.echartId - 1].option : item.data" style="height: 100%;" />
        </component>
      </GridItem>
    </GridLayout>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import VueGridLayout from 'vue-grid-layout';

import echartsOption from '@/assets/data/echartsOption/index';
import {PageSwitchModule} from '@/store/modules/pageSwitch';
import {LayoutModule} from '@/store/modules/layout';

@Component({
  components: {
    GridLayout: (VueGridLayout as any).GridLayout,
    GridItem: (VueGridLayout as any).GridItem,
  },
})
export default class App extends Vue {
  public PageSwitchModule = PageSwitchModule;
  public LayoutModule = LayoutModule;

  /**
   * 当前现实元素
   */
  public layoutList: LayoutItem[] = [];

  /**
   * 图表配置集
   */
  public echartsOption = echartsOption;

  /**
   * 重新赋值
   */
  private againGive() {
    this.layoutList = this.LayoutModule.layoutItemList as LayoutItem[];
  }

  @Watch('LayoutModule.layoutItemList')
  watchLayoutItemList() {
    this.againGive();
  }

  mounted() {
    this.againGive();
  }
}
</script>

<style scoped lang="sass">
/*.a svg*/
/*  width: 100%*/
/*  height: 100%*/
/*  */
.cockpit
  width: 100%
  height: 100%
</style>
