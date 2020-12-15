type BTN_TYPE = 'isEdit' | 'isAddEchats' | string;

declare interface StorePageSwitch_State {
  /**
   * 是否处于看板修改状态
   */
  isEdit: boolean;

  /**
   * 是否处于正在添加图表状态
   */
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
