import {VuexModule, Module, Mutation, Action, getModule} from 'vuex-module-decorators';
import {storeModuleConfig} from '@/utils';

@Module(storeModuleConfig('pageSwitch'))
export default class PageSwitch extends VuexModule implements StorePageSwitch {
  public isEdit = false;

  public isAddEchats = false;

  @Action
  public setPageSwitchStatus(config) {
    this.CHANGE_PAGE_SWITCH_STATUS(config);
  }

  @Mutation
  private CHANGE_PAGE_SWITCH_STATUS(config: {type: BTN_TYPE; flag: boolean}) {
    this['is' + config.type] = config.flag;
  }
}

export const PageSwitchModule = getModule(PageSwitch);
