type BTN_TYPE = 'isEdit' | 'isAddEchats';

declare interface StorePageSwitch_State {
  isEdit: boolean;
  isAddEchats: boolean;
}

interface StorePageSwitchActions {
  setPageSwitchStatus<T>(context: T, config: {type: BTN_TYPE; flag: boolean}): void;
}

interface StorePageSwitchMutations {
  /**
   * 修改开关状态
   * @param state store
   * @param config type 开关key flag 开关value
   */
  changePageSwitchStatus(state: StorePageSwitch_State, config: {type: TYPE; flag: boolean}): void;
}
