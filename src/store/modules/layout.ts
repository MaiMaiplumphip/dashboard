import {VuexModule, Module, Mutation, Action, getModule} from 'vuex-module-decorators';
import {getLayoutItemList, saveLayoutItemList} from '@/api/dashboard';
import {storeModuleConfig} from '@/utils';

@Module(storeModuleConfig('layout'))
export default class Layout extends VuexModule implements StoreLayout {
  public layoutItemList = [];

  @Action
  public reqLayoutItem() {
    this.INIT_LAYOUT_ITEM_LIST();
  }

  @Action
  public saveLayoutItem() {
    this.SAVE_LAYOUT_ITEM_LIST();
  }

  @Action
  public addLayoutItem(item: LayoutItem) {
    this.CHANGE_LAYOUT_ITEM_LIST({handle: 'ADD', item});
  }

  @Action
  public removeLayoutItem(item: LayoutItem) {
    this.CHANGE_LAYOUT_ITEM_LIST({handle: 'REMOVE', item});
  }

  @Mutation
  public async INIT_LAYOUT_ITEM_LIST() {
    const res: RESPONSE = await getLayoutItemList();
    // @ts-ignore
    this.layoutItemList = (res?.data as LayoutItem[]) ?? [];
  }

  @Mutation
  public async SAVE_LAYOUT_ITEM_LIST() {
    await saveLayoutItemList(this.layoutItemList);
  }

  @Mutation
  public CHANGE_LAYOUT_ITEM_LIST(param: {handle: HANDLE_TYPE; item: LayoutItem}) {
    const {handle, item} = param;
    switch (handle) {
      case 'ADD':
        // @ts-ignore
        this.layoutItemList.push(item as LayoutItem);
        break;
      case 'REMOVE':
        this.layoutItemList = this.layoutItemList.filter((layoutItem: LayoutItem) => {
          return item.i !== layoutItem.i;
        });
        break;
    }
  }
}

export const LayoutModule = getModule(Layout);
