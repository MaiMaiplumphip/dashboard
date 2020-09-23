declare interface VUEX_CONTEXT {
  commit(mutationsFunc: string, _payload: any, _options?: any): void;

  dispatch(_type: any, _payload: any): any;

  hasModule(path: any): any;

  hotUpdate(newOptions: any): void;

  registerModule(path: any, rawModule: any, options: any): void;

  replaceState(state: any): void;

  subscribe(fn: any, options: any): any;

  subscribeAction(fn: any, options: any): any;

  unregisterModule(path: any): void;

  watch(getter: any, cb: any, options: any): any;
}

declare interface RESPONSE {
  code: 200 | 500;
  msg: string;
  data: any;
}
