<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">选择边框</v-stepper-step>

      <!--      <v-divider />-->

      <!--      <v-stepper-step :complete="e1 > 2" step="2">选择数据源</v-stepper-step>-->

      <!--      <v-divider />-->

      <!--      <v-stepper-step step="3">最后一步</v-stepper-step>-->
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-select :items="borderList" item-text="label" item-value="value" label="请选择喜欢的边框" v-model="borderValue" return-object />

        <!--        <v-btn color="primary" @click="e1 = 2">-->
        <!--          下一步-->
        <!--        </v-btn>-->
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-select :items="[]" item-text="label" item-value="value" label="请选择数据源" v-model="borderValue" return-object />

        <v-btn color="primary" @click="e1 = 3">
          下一步
        </v-btn>

        <v-btn text @click="e1 = 1">上一步</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <!--        <div>3</div>-->

        <!--        <v-btn color="primary" @click="e1 = 1">-->
        <!--          下一步-->
        <!--        </v-btn>-->

        <!--        <v-btn text>Cancel</v-btn>-->
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script lang="ts">
import {Component, Vue, Emit, Watch, Prop} from 'vue-property-decorator';
import generateUUID from '@/utils/unique';

@Component
export default class Card extends Vue {
  @Prop()
  private dialog?: boolean;

  /**
   * 步骤值
   */
  public e1 = 1;

  /**
   * 边框值
   */
  public borderValue = {
    value: 'div',
    label: '无',
  };

  /**
   * 遍历获取边框
   */
  public get borderList(): {value: string; label: string}[] {
    const arr: {value: string; label: string}[] = [
      {
        value: 'div',
        label: '无',
      },
    ];

    for (let i = 1; i <= 13; i++) {
      arr.push({
        value: `dv-border-Box-${i}`,
        label: `边框${i}`,
      });
    }

    return arr;
  }

  /**
   * 父组件回调修改边框
   */
  @Emit('borderChangeHandle')
  @Watch('borderValue')
  watchBorderValueFunc(): string {
    return this.borderValue.value;
  }

  @Watch('dialog')
  watchDialog(flag: boolean) {
    if (!flag) {
      this.e1 = 1;
      this.borderValue = {
        value: 'div',
        label: '无',
      };
    }
  }
}
</script>

<style scoped lang="sass"></style>
