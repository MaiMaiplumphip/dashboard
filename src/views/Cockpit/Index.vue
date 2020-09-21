<template>
  <div class="cockpit" ref="cockpit">
    <GridLayout
      :layout.sync="layoutItemList"
      :col-num="12"
      :row-height="30"
      :is-draggable="isEdit"
      :is-resizable="isEdit"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      resizeIgnoreFrom="canvas,svg"
      style="width: 100%;height: 100%"
    >
      <GridItem v-for="item in layoutList" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" class="gridItemBox">
        <span class="removeBtn" v-if="isEdit" @click="removeLayoutItem(item)">
          <v-btn class="mx-2" fab dark small color="primary">
            <v-icon dark>mdi-minus</v-icon>
          </v-btn>
        </span>
        <component :is="item.borderType" style="width: 100%;height: 100%;" class="a" title="13">
          <component :is="item.componentType" :option="item.componentType === 'v-echarts' ? echartsOption[item.tabType][item.echartId - 1].option : item.option || item.data" />
        </component>
      </GridItem>
    </GridLayout>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import VueGridLayout from 'vue-grid-layout';
import {namespace} from 'vuex-class';

import echartsOption from '@/assets/data/echartsOption/index';

const pageSwitchStore = namespace('pageSwitch');
const layoutStore = namespace('layout');

@Component({
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
})
export default class App extends Vue {
  /**
   * 是否处于修改状态
   */
  @pageSwitchStore.State('isEdit')
  public isEdit?: boolean;

  /**
   * 驾驶舱元素列表
   */
  @layoutStore.State('layoutItemList')
  public layoutItemList?: LayoutItem[];

  @layoutStore.Action('removeLayoutItem')
  private removeLayoutItem;

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
    this.layoutList = this.layoutItemList as LayoutItem[];
  }

  @Watch('layoutItemList')
  watchLayoutItemList() {
    this.againGive();
  }

  created() {
    this.$vuetify.theme.dark = true;
  }

  mounted() {
    this.againGive();
    console.log(this.layoutList);
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
