export {Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';
import store from '@/store';

/**
 * vuex module config
 * @param namespace module namespace name
 */
export const storeModuleConfig = (namespace: string) => {
  // dynamic: true: 动态创建动态模块,即new Vuex.Store({})里面不用注册的.空着就行,
  // store,当前模块注册到store上.也可以写在getModule上,即getModule(PassengerStore,store)
  // namespaced: true, name: 'passenger' 命名空间
  return {name: namespace, dynamic: true, namespaced: true, store};
};
