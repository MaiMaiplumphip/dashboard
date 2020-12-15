<template>
  <v-app id="app">
    <NavigationDrawer :flag="PageSwitchModule.isEdit || false" />

    <!--    <v-btn @click.stop="clickFullscreen" class="screenfullBtn" fab :loading="drawerLoad">-->
    <!--      <v-icon>mdi-fingerprint</v-icon>-->
    <!--    </v-btn>-->

    <v-btn @click.stop="PageSwitchModule.setPageSwitchStatus({type: 'Edit', flag: !PageSwitchModule.isEdit})" class="settingBtn" fab :loading="drawerLoad">
      <v-icon>{{ !PageSwitchModule.isEdit ? 'mdi-cog' : 'mdi-checkbox-marked-circle' }}</v-icon>
    </v-btn>

    <v-main>
      <v-container class="fill-height" fluid>
        <SystemTitle />
        <router-view />
      </v-container>
    </v-main>

    <dv-decoration-2 style="width: 100%;height:5px;" />
    <v-footer v-if="PageSwitchModule.isEdit" app transition="scroll-y-transition">
      <span class="text-caption">© Copyright - 大象慧云信息技术有限公司 All Rights Reserved {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import NavigationDrawer from '@/views/Layout/NavigationDrawer/Index.vue';
import SystemTitle from '@/views/Layout/SystemTitle/Index.vue';
import {getQueryString} from '@/utils/auth';
import {PageSwitchModule} from '@/store/modules/pageSwitch';
import {LayoutModule} from '@/store/modules/layout';

@Component({
  components: {
    NavigationDrawer,
    SystemTitle,
  },
})
export default class App extends Vue {
  public drawerLoad = false;

  public PageSwitchModule: StorePageSwitch = PageSwitchModule;

  public flag = true;

  @Watch('PageSwitchModule.isEdit')
  watchIsEdit(flag: boolean) {
    if (!flag) {
      LayoutModule.saveLayoutItem();
    }
  }

  created() {
    this.$vuetify.theme.dark = true;

    LayoutModule.reqLayoutItem();
    this.flag = getQueryString('gm') === '1';
  }
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
  .screenfullBtn
    position: fixed
    bottom: 20px
    right: 100px
    z-index: 100
</style>
