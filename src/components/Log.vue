<template>
  <div class="LogBox kanBanComponentBox">
    <div class="clear" @click="data = []" v-if="data.length">清除</div>
    <div class="title" v-if="option.title">{{ option.title }}</div>
    <ul class="log">
      <li v-for="(item, idx) in data" :key="idx">
        <p :class="option.type === 'error' ? 'errorMsg' : ''">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {getLog} from '@/api/component';
import {LOG_REQ_TIME} from '@/global';

@Component
export default class Log extends Vue {
  /**
   * 组件配置
   */
  @Prop()
  private option?: {
    title: string; // 标题
    ws: boolean; // 是否为webSocket
    type: string;
  };

  /**
   * 轮询定时器
   */
  public timer: any;

  /**
   * 日志数据
   */
  public data: string[] = [];

  /**
   * 获取数据
   */
  private async getLog() {
    const res = await getLog();
    this.data = res.data;
    const div: any = document.querySelector('.log');
    div.scrollTop = div.scrollHeight;
  }

  /**
   * 创建ws
   */
  private initWs() {
    const wsError = () => {
      this.initWs();
    };

    const wsMsg = (res: any) => {
      if (this.data.length > 250) {
        this.data = [];
      }
      this.data.push(res.data);
      const div: any = document.querySelector('.log');
      div.scrollTop = div.scrollHeight;
    };

    const wsUrl = `ws://${window.location.host}/log/${this.option?.type}`;

    const ws = new WebSocket(wsUrl);

    ws.onmessage = wsMsg;

    ws.onerror = wsError;
  }

  mounted() {
    if (this.option?.ws) {
      this.initWs();
    } else {
      this.getLog();
      this.timer = setInterval(() => {
        // this.getLog();
      }, LOG_REQ_TIME);
    }
  }

  destroyed() {
    this.timer = null;
  }
}
</script>

<style scoped lang="sass">
.LogBox
  position: relative
  padding: 10px
  box-sizing: border-box
  overflow: scroll
  margin: 0
  background-color: rgba(0,0,0, 0.5)
  &::-webkit-scrollbar
    width: 10px
    height: 10px
  &::-webkit-scrollbar-track
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3)
    background-color: rgba(0,0,0,0.3)
    border-radius: 3px
  &::-webkit-scrollbar-thumb
    border-radius: 7px
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3)
    background-color: rgba(15,117,176,.2)
  &::-webkit-scrollbar-button
    background-color: cyan
  &::-webkit-scrollbar-corner
    background: rgba(0,0,0,0.3)
  .clear
    position: absolute
    top: 10px
    right: 10px
    cursor: pointer

  .title
    width: 100%
    margin-top: 5px
    text-align: center
  ul
    li
      list-style: none
      margin: 0
      padding: 0
      height: 20px
      p
        height: 100%
        white-space: nowrap
        margin: 0
        padding: 0
        font-size: 12px
        color: aquamarine
        &.errorMsg
          color: indianred
</style>
