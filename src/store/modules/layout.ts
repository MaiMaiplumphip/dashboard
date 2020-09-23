import {getLayoutItemList, saveLayoutItemList} from '@/api/dashboard';

const state: StoreLayout = {
  layoutItemList: [],
};

const getter = {};

const actions: StoreLayout_Actions = {
  reqLayoutItem(context: VUEX_CONTEXT) {
    context.commit('initLayoutItemList');
  },
  saveLayoutItem(context: VUEX_CONTEXT) {
    context.commit('saveLayoutItemList');
  },
  addLayoutItem(context: VUEX_CONTEXT, item: LayoutItem) {
    context.commit('changeLayoutItemList', {handle: 'ADD', item});
  },
  removeLayoutItem(context: VUEX_CONTEXT, item: LayoutItem) {
    context.commit('changeLayoutItemList', {handle: 'REMOVE', item});
  },
};

const mutations: StoreLayout_Mutations = {
  async initLayoutItemList(state: StoreLayout) {
    const res: RESPONSE = await getLayoutItemList();
    state.layoutItemList = (res?.data as LayoutItem[]) ?? [];
  },
  async saveLayoutItemList(state: StoreLayout) {
    const res = await saveLayoutItemList(state.layoutItemList);
  },
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
