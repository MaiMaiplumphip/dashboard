import Vue, {VueConstructor} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vuetify from '@/plugins/vuetify';
import dataV from '@jiaminghi/data-view';

import Echarts from '@/components/Echarts.vue';
import '@/assets/style/index.sass';

Vue.config.productionTip = true;

Vue.use(dataV);

Vue.component('v-echarts', Echarts);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App as VueConstructor),
}).$mount('#app');
