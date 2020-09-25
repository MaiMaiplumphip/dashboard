<template>
  <div class="LogBox kanBanComponentBox">
    <ul id="log">
      <li v-for="(item, idx) in data" :key="idx">
        <p>{{ item }}</p>
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
  public timer: any;

  data: string[] = [];

  private async getLog() {
    const res = await getLog();
    this.data = res.data;
    const div: any = document.getElementById('log');
    div.scrollTop = div.scrollHeight;
  }

  created() {
    this.getLog();
    this.timer = setInterval(() => {
      this.getLog();
    }, LOG_REQ_TIME);
  }

  destroyed() {
    this.timer = null;
  }
}
</script>

<style scoped lang="sass">
.LogBox
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
    background-color: rgba(15,117,176,.6)
  &::-webkit-scrollbar-button
    background-color: cyan
  &::-webkit-scrollbar-corner
    background: rgba(0,0,0,0.3)
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
</style>
