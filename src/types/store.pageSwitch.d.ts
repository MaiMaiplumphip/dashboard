type BTN_TYPE = 'isEdit' | 'isAddEchats' | string;

declare interface StorePageSwitch_State {
  isEdit: boolean;
  isAddEchats: boolean;
}

interface StorePageSwitch_Actions {
  setPageSwitchStatus(config: {type: BTN_TYPE; flag: boolean}): void;
}

interface StorePageSwitch_Mutations {
  /**
   * 修改开关状态
   * @param config type 开关key flag 开关value
   */
  CHANGE_PAGE_SWITCH_STATUS(config: {type: BTN_TYPE; flag: boolean}): void;
}

declare interface StorePageSwitch extends StorePageSwitch_State, StorePageSwitch_Actions, StorePageSwitch_Mutations {}
