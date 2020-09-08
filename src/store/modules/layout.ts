const state: StoreLayout = {
  layoutItemList: [],
};

const getter: any = {};

const actions: StoreLayout_Actions = {
  addLayoutItem(context: VUEX_CONTEXT, item: LayoutItem) {
    context.commit('changeLayoutItemList', {handle: 'ADD', item});
  },
  removeLayoutItem(context: VUEX_CONTEXT, item: LayoutItem) {
    context.commit('changeLayoutItemList', {handle: 'REMOVE', item});
  },
};

const mutations: StoreLayout_Mutations = {
  changeLayoutItemList(state: StoreLayout, param) {
    switch (param.handle) {
      case 'ADD':
        state.layoutItemList.push(param.item);
    }
  },
};

export default {
  namespaced: true,
  state,
  getter,
  actions,
  mutations,
};
