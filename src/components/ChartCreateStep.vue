<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" editable>选择边框</v-stepper-step>

      <v-divider />

      <v-stepper-step :complete="e1 > 2" step="2" editable>选择数据源</v-stepper-step>

      <v-divider />

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-select :items="borderItem" label="请选择喜欢的边框" v-model="borderItemValue" />

        <v-btn color="primary" @click="e1 = 2">
          下一步
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <div>2</div>

        <v-btn color="primary" @click="e1 = 3">
          下一步
        </v-btn>

        <v-btn text @click="e1 = 1">上一步</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <div>3</div>

        <!--        <v-btn color="primary" @click="e1 = 1">-->
        <!--          下一步-->
        <!--        </v-btn>-->

        <!--        <v-btn text>Cancel</v-btn>-->
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script lang="ts">
import {Component, Vue, Emit, Watch} from '@/utils/index';
import generateUUID from '@/utils/unique';

@Component
export default class Card extends Vue {
  /**
   * 步骤值
   */
  public e1 = 1;

  /**
   * 边框值
   */
  public borderItemValue = '无';

  /**
   * 遍历获取边框
   */
  public get borderItem(): string[] {
    const arr: string[] = [`无`];

    for (let i = 1; i <= 13; i++) {
      arr.push(`dv-border-Box-${i}`);
    }

    return arr;
  }

  /**
   * 父组件回调修改边框
   */
  @Emit('borderChangeHandle')
  @Watch('borderItemValue')
  watchBorderItemValueFunc(): string {
    return this.borderItemValue;
  }
}
</script>

<style scoped lang="sass"></style>
