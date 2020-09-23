<template>
  <div class="CapsuleBox kanBanComponentBox d-flex flex-column">
    <div class="title ml-5">{{ option.title }}</div>
    <dv-capsule-chart :config="comOption" style="flex: 1" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {getNumber} from '@/api/component';

@Component
export default class Capsule extends Vue {
  @Prop()
  private option?: {
    url: string;
    title: string;
  };

  public comOption = {};

  public async initList() {
    const res = await getNumber(this.option?.url as string);
    if (this.option?.url.indexOf('1') !== -1) {
      this.comOption = {
        data: [
          {
            name: '数据库数量',
            value: res.data.sourceTableByDB,
          },
          {
            name: '接口数量',
            value: res.data.sourceTableByAPI,
          },
        ],
      };
    } else {
      this.comOption = {
        data: [
          {
            name: '接口数量',
            value: res.data.targetTableByDB,
          },
        ],
      };
    }
  }

  created() {
    this.initList();
  }
}
</script>

<style scoped lang="sass">
.CapsuleBox
  .title
    line-height: 40px
</style>
