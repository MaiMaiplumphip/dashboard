import Vue, {VueConstructor} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vuetify from '@/plugins/vuetify';
import dataV from '@jiaminghi/data-view';

import {Echarts, ScrollBoard, Indicator, SvgIcon, Log, Capsule, Task} from '@/components/index';

import '@/assets/style/index.sass';

Vue.config.productionTip = true;

const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);
const req = require.context('./assets/icons/svg', false, /\.svg$/);
requireAll(req);

Vue.use(dataV);

// 注册到全局
Vue.component('svg-icon', SvgIcon);
Vue.component('v-echarts', Echarts);
Vue.component('v-scroll-board', ScrollBoard);
Vue.component('v-indicator', Indicator);
Vue.component('v-log', Log);
Vue.component('v-capsule', Capsule);
Vue.component('v-task', Task);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App as VueConstructor),
}).$mount('#app');
