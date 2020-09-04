<template>
  <v-bottom-sheet v-model="sheet" persistent :inset="!isfullscreen" :fullscreen="isfullscreen" :width="width || '80%'">
    <!--	显示弹窗触发节点插槽	-->
    <template v-slot:activator="{on, attrs}">
      <slot name="triggerNode" :on="on" :attrs="attrs" />
    </template>

    <!--	弹窗body	-->
    <v-sheet class="text-center" height="900px">
      <div class="d-flex flex-column pa-3">
        <!--	弹窗header	-->
        <div class="d-flex align-center justify-space-between" style="width: 100%; height: auto">
          <div class="d-flex align-center">
            <span class="text-h6  mx-2">{{ title }}</span>
            <v-btn @click="isfullscreen = !isfullscreen" v-if="fullscreen">
              <v-icon>mdi-fullscreen</v-icon>
            </v-btn>
          </div>
          <v-btn class="my-3 mr-4 float-md-right" text color="error" @click="sheet = !sheet"> <v-icon dark left>mdi-close</v-icon>关闭 </v-btn>
        </div>
        <!--	弹窗内容插槽	-->
        <slot name="content" />
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from '@/utils/index';

@Component
export default class NavigationDrawer extends Vue {
  /**
   * 显示开关
   */
  public sheet = false;

  /**
   * 全屏开关
   */
  public isfullscreen = false;

  /**
   * 标题
   */
  @Prop()
  private title!: string;

  /**
   * 宽度
   */
  @Prop()
  private width!: string | number;

  /**
   * 是否可以全屏
   */
  @Prop()
  private fullscreen!: boolean;

  @Watch('sheet')
  watchSheet(value: boolean) {
    if (!value) {
      this.isfullscreen = false;
    }
  }
}
</script>
