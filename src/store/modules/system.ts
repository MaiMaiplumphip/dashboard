import {VuexModule, Module, Mutation, Action, getModule} from 'vuex-module-decorators';
import {storeModuleConfig} from '@/utils';

@Module(storeModuleConfig('system'))
export default class System extends VuexModule implements StoreSystem<string> {
  public title = '首页数据看板';
}

export const SyStemModule = getModule(System);
