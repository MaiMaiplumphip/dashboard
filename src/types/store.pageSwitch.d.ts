type BTN_TYPE = 'isEdit' | 'isAddEchats';

declare interface StorePageSwitch_State {
  isEdit: boolean;
  isAddEchats: boolean;
}

interface StorePageSwitchActions {
  setPageSwitchStatus(context: VUEX_CONTEXT, config: {type: BTN_TYPE; flag: boolean}): void;
}

interface StorePageSwitchMutations {
  /**
   * 修改开关状态
   * @param state store
   * @param config type 开关key flag 开关value
   */
  changePageSwitchStatus(state: StorePageSwitch_State, config: {type: BTN_TYPE; flag: boolean}): void;
}
