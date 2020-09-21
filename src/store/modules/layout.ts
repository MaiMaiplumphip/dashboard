const state: StoreLayout = {
  layoutItemList: [],
};

const getter = {};

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
    const {handle, item} = param;
    switch (handle) {
      case 'ADD':
        state.layoutItemList.push(param.item);
        break;
      case 'REMOVE':
        state.layoutItemList = state.layoutItemList.filter(layoutItem => {
          return item.i !== layoutItem.i;
        });
        break;
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
