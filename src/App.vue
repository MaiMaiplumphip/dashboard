<template>
  <v-app id="app">
    <NavigationDrawer :flag="isEdit || false" />

    <v-btn @click.stop="setPageSwitchStatus({type: 'Edit', flag: !isEdit})" class="settingBtn" fab :loading="drawerLoad">
      <v-icon>{{ !isEdit ? 'mdi-cog' : 'mdi-checkbox-marked-circle' }}</v-icon>
    </v-btn>

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer v-if="isEdit" app transition="scroll-y-transition">
      <span class="text-caption">© Copyright - 大象慧云信息技术有限公司 All Rights Reserved {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from '@/utils/index';
import NavigationDrawer from '@/views/Layout/NavigationDrawer/Index.vue';
import {namespace} from 'vuex-class';

const pageSwitchStore = namespace('pageSwitch');

@Component({
  components: {
    NavigationDrawer,
  },
})
export default class App extends Vue {
  public drawerLoad = false;

  /**
   * 是否处于修改状态
   */
  @pageSwitchStore.State(`isEdit`)
  public isEdit?: boolean;

  /**
   * 修改状态
   */
  @pageSwitchStore.Action(`setPageSwitchStatus`)
  public setPageSwitchStatus: any;
}
</script>

<style lang="sass">
html,body,#app
  overflow: hidden
#app
  background: url('./assets/images/bg.png') 100% 100% no-repeat
  background-position-x: center
  background-position-y: center
  .settingBtn
    position: fixed
    bottom: 20px
    right: 20px
    z-index: 100
</style>
