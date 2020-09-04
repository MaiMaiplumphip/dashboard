import Vue from 'vue';
import Vuex from 'vuex';
import pageSwitch from '@/store/modules/pageSwitch';
import chartsTab from '@/store/modules/chartsTab';
import layout from '@/store/modules/layout';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chartsTab,
    pageSwitch,
    layout,
  },
});
