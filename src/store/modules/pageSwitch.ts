const state: StorePageSwitch_State = {
  isEdit: false,
  isAddEchats: false,
};

type TYPE = 'isEdit' | 'isAddEchats';

const getter: any = {};

const actions: StorePageSwitchActions = {
  setPageSwitchStatus(context: VUEX_CONTEXT, config: {type: TYPE; flag: boolean}): void {
    context.commit('changePageSwitchStatus', config);
  },
};

const mutations: StorePageSwitchMutations = {
  changePageSwitchStatus(state: StorePageSwitch_State, config: {type: TYPE; flag: boolean}): void {
    // @ts-ignore
    state['is' + config.type] = config.flag;
  },
};

export default {
  namespaced: true,
  state,
  getter,
  actions,
  mutations,
};
