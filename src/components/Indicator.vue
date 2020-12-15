<template>
  <div class="IndicatorBox">
    <div class="card-panel" @click="viewList">
      <div :class="`card-panel-icon-wrapper dd icon-${option.type}`">
        <svg-icon :icon-class="option.icon" class-name="card-panel-icon" />
      </div>
      <div class="card-panel-description">
        <div class="card-panel-text">{{ option.label }}</div>
        <CountTo :start-val="0" :end-val="data.length" :duration="2600" class="card-panel-num" />
        <b>{{ option.unit }}</b>
      </div>
    </div>
    <v-dialog v-model="diaFlag" width="50%">
      <v-card>
        <v-card-title class="headline">{{ option.label }}列表</v-card-title>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in data" :key="i" @click="viewDetails(item)">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name || item.taskName" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-card-text style="text-align: center">
          <v-btn color="green darken-1" text @click="diaFlag = false">确定</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="detailsDiaFlag" max-width="500px">
      <v-card>
        <v-card-title class="headline">
          详情
        </v-card-title>

        <v-card-text>
          <ul>
            <li v-for="(item, idx) in errorList" :key="idx">
              任务名称： <span>{{ item.name }}</span
              >: 错误信息: <span style="color: orangered">{{ item.msg }}</span>
            </li>
          </ul>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="detailsDiaFlag = false">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="load" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          正在加载
          <v-progress-linear indeterminate color="white" class="mb-0" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import CountTo from 'vue-count-to';
import {getHomeTypeAmount, getTaskDetail} from '@/api/component';

@Component({
  components: {
    CountTo,
  },
})
export default class Indicator extends Vue {
  @Prop()
  private option?: {
    label: string; // 文案
    icon: string; // ico
    type: string; // 任务类型
    unit: string; // 显示单位
    hasDialog: boolean; // 是否含有弹窗
  };

  public data = [];

  public value = 0;

  public diaFlag = false;

  public detailsDiaFlag = false;

  public errorList: any[] = [];

  public load = false;

  private async getCount() {
    const res = await getHomeTypeAmount(this.option?.type);
    this.data = res.data;
  }

  private viewList() {
    if (this.option?.type === '4') {
      this.diaFlag = true;
    } else {
      this.diaFlag = false;
    }
  }

  private async viewDetails(item: any) {
    if (!(Number.parseInt(this.option?.type as string) > 2)) {
      return false;
    }

    this.errorList = [];
    this.load = true;
    this.detailsDiaFlag = true;

    const res = await getTaskDetail(item.id);
    const arr: any[] = [];

    // TODO 因接口，待优化
    if (res.data.mappingRunningResults) {
      res.data.mappingRunningResults.forEach((item: any) => {
        arr.push({
          name: item.mappingName,
          msg: item.errorMsg,
        });
      });
    }
    if (res.data.pushRunningResult) {
      if (Array.isArray(res.data.pushRunningResult)) {
        res.data.pushRunningResult.forEach((item: any) => {
          arr.push({
            name: item.datasourceName,
            msg: item.errorMsg,
          });
        });
      } else {
        arr.push({
          name: res.data.pushRunningResult.datasourceName,
          msg: res.data.pushRunningResult.errorMsg,
        });
      }
    }
    if (res.data.syncRunningResult) {
      res.data.syncRunningResult.forEach((item: any) => {
        arr.push({
          name: item.datasourceName,
          msg: item.errorMsg,
        });
      });
    }
    this.errorList = arr;
    this.load = false;
  }

  @Watch('detailsDiaFlag')
  watchDetailsDiaFlag(flag: boolean) {
    if (!flag) {
      this.load = false;
    }
  }

  mounted() {
    this.getCount();
  }
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
    /*background: #262626*/
    background: linear-gradient(rgba(46,52,63,.4),rgba(68,80,100,.4))
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05)
    border-color: rgba(0, 0, 0, 0.05)

    &:hover
      .card-panel-icon-wrapper
        color: #fff


      .icon-1
        background: rgba(64,201,198, .6)


      .icon-2
        background: rgba(54,163,247, .6)


      .icon-4
        background: rgba(244,81,108,.6)


      .icon-3
        background: rgba(	255,165,0,.6)

    .icon-1
      color: #40c9c6


    .icon-2
      color: #36a3f7


    .icon-4
      color: #f4516c


    .icon-3
      color: #FFA500


    .card-panel-icon-wrapper
      float: left
      margin: 14px 0 0 14px
      padding: 16px
      transition: all 0.38s ease-out
      /*border-radius: 6px*/


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
