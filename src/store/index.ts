import Vue from 'vue';
import Vuex from 'vuex';
import pageSwitch from '@/store/modules/pageSwitch';
import chartsTab from '@/store/modules/chartsTab';
import layout from '@/store/modules/layout';
import system from '@/store/modules/system';

import VuexPersistense from 'vuex-persistedstate';

Vue.use(Vuex);

/**
 * 将state存入localStorage
 */
const vuexLocal = VuexPersistense({
  storage: localStorage,
  reducer: val => {
    const store: any = val;
    return {
      //引入modules模板，对象里面可配置需要持久化的status
      layout: {
        layoutItemList: store.layout.layoutList,
      },
    };
  },
});

export default new Vuex.Store({
  modules: {
    chartsTab,
    pageSwitch,
    layout,
    system,
  },
});
