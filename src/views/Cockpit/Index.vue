<template>
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
    style="width: 100%;height: 100%"
  >
    <GridItem
      v-for="(item, idx) in layoutItemList"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
      :style="{
        // background: item.background,
        overflow: 'hidden',
      }"
    >
      <!--      <dv-border-box-3>dv-border-box-3</dv-border-box-3>-->
      <component :is="`dv-border-box-${idx + 1}`" style="width: 100%;height: 100%;" class="a" title="13">{{ `dv-border-box-${idx + 1}` }}</component>
    </GridItem>
  </GridLayout>
</template>

<script lang="ts">
import {Component, Vue} from '@/utils/index';
import VueGridLayout from 'vue-grid-layout';
import {namespace} from 'vuex-class';

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
  @pageSwitchStore.State(`isEdit`)
  public isEdit?: boolean;

  @layoutStore.State('layoutItemList')
  public layoutItemList?: LayoutItem[];

  created() {
    this.$vuetify.theme.dark = true;
  }
}
</script>

<style scoped lang="sass">
.a svg
  width: 100%
  height: 100%
</style>
