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
    }, 1000);
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
