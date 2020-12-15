import {VuexModule, Module, Mutation, Action, getModule} from 'vuex-module-decorators';
import {storeModuleConfig} from '@/utils';

@Module(storeModuleConfig('pageSwitch'))
export default class PageSwitch extends VuexModule implements StorePageSwitch {
  public isEdit = false;

  public isAddEchats = false;

  @Action
  public setPageSwitchStatus(config: {type: BTN_TYPE; flag: boolean}) {
    this.CHANGE_PAGE_SWITCH_STATUS(config);
  }

  @Mutation
  public CHANGE_PAGE_SWITCH_STATUS(config: {type: BTN_TYPE; flag: boolean}) {
    // @ts-ignore
    this[`is${config.type}` as string] = config.flag;
  }
}

export const PageSwitchModule = getModule(PageSwitch);
