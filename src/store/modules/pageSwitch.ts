const state: StorePageSwitch_State = {
  isEdit: false,
  isAddEchats: false,
};

const getter = {};

const actions: StorePageSwitchActions = {
  setPageSwitchStatus(context, config): void {
    context.commit('changePageSwitchStatus', config);
  },
};

const mutations: StorePageSwitchMutations = {
  changePageSwitchStatus(state: StorePageSwitch_State, config): void {
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
