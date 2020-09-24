<template>
  <div class="ScrollBoardBox kanBanComponentBox  d-flex flex-column">
    <div class="title" v-if="option.title">
      <span>{{ option.title }}</span>
    </div>
    <dv-scroll-board :config="comOption" style="flex: 1" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {getList} from '@/api/component';

@Component
export default class ScrollBoard extends Vue {
  @Prop()
  private option?: {
    url: string;
    title: string;
  };

  public comOption: {
    data: [];
    rowNum: number;
  } = {
    data: [],
    rowNum: 0,
  };

  public async initList() {
    const res: any = await getList(this.option?.url as string);
    let list = [];
    if (this.option?.url.indexOf('task') !== -1) {
      list = res.data.map((item: any) => [item]);
    } else {
      list = (res.data?.targetTables || res.data?.sourceTables).map((item: any) => [item]);
    }
    this.comOption = {
      data: list,
      rowNum: 7,
    };
  }

  created() {
    this.initList();
  }
}
</script>

<style scoped lang="sass">
.ScrollBoardBox
  overflow: hidden
  padding: 18px
  box-sizing: border-box
  border-radius: 4px
  .title
    width: 100%
    text-align: center
    span
      font-size: 12px
</style>
