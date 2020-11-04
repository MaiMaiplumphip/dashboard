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
  private async INIT_LAYOUT_ITEM_LIST() {
    const res: RESPONSE = await getLayoutItemList();
    this.layoutItemList = (res?.data as LayoutItem[]) ?? [];
  }

  @Mutation
  private async SAVE_LAYOUT_ITEM_LIST() {
    await saveLayoutItemList(this.layoutItemList);
  }

  @Mutation
  private CHANGE_LAYOUT_ITEM_LIST(param) {
    const {handle, item} = param;
    switch (handle) {
      case 'ADD':
        this.layoutItemList.push(param.item);
        break;
      case 'REMOVE':
        this.layoutItemList = this.layoutItemList.filter(layoutItem => {
          return item.i !== layoutItem.i;
        });
        break;
    }
  }
}

export const LayoutModule = getModule(Layout);
