import Vue, {VueConstructor} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vuetify from '@/plugins/vuetify';
import dataV from '@jiaminghi/data-view';

import Echarts from '@/components/Echarts';
import ScrollBoard from '@/components/ScrollBoard';
import Indicator from '@/components/Indicator';
import SvgIcon from '@/components/SvgIcon';
import Log from '@/components/Log.vue';
import Capsule from '@/components/Capsule.vue';
import Task from '@/components/Task.vue';

import '@/assets/style/index.sass';

Vue.config.productionTip = true;
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./assets/icons/svg', false, /\.svg$/);
requireAll(req);

Vue.use(<any>dataV);

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
