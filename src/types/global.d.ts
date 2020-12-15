declare enum COCKPIT_HANDLE {
  EDD,
  REMOVE,
}

declare interface RESPONSE {
  code: 200 | 500;
  msg: string;
  data: any;
}
