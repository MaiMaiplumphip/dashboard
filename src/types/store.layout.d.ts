// interact.js docs http://interactjs.io/docs/#ignorable-selectors

type HANDLE_TYPE = 'ADD' | 'REMOVE';

/**
 * 拖拽元素
 */
declare interface LayoutItem {
  i: string; // 栅格中元素的ID
  x: number; // 标识栅格元素位于第几列，需为自然数。
  y: number; // 标识栅格元素位于第几行，需为自然数。
  w: number; // 标识栅格元素的初始宽度，值为colWidth的倍数。
  h: number; // 标识栅格元素的初始高度，值为rowHeight的倍数.
  borderType?: string; // 边框类型
  chartType?: string; // 图表类型
  tabType?: CHART_TAB_TYPE; // 图表组件类型
  data?: {}; // 图表内的数据
  minW?: number; // 栅格元素的最小宽度，值为colWidth的倍数。如果w小于minW，则minW的值会被w覆盖。
  minH?: number; // 栅格元素的最小高度，值为rowHeight的倍数。如果h小于minH，则minH的值会被h覆盖。
  maxW?: number; // 栅格元素的最大宽度，值为colWidth的倍数。如果w大于maxW，则maxW的值会被w覆盖。
  maxH?: number; // 栅格元素的最大宽度，值为rowHeight的倍数。如果h大于maxH，则maxH的值会被h覆盖。
  isDraggable?: boolean; // 标识栅格元素是否可拖拽。如果值为null则取决于父容器。
  isResizable?: boolean; // 标识栅格元素是否可调整大小。如果值为null则取决于父容器。
  static?: boolean; // 标识栅格元素是否为静态的（无法拖拽、调整大小或被其他元素移动）。
  dragIgnoreFrom?: string; // 标识栅格元素中哪些子元素无法触发拖拽事件，值为css-like选择器。(请参考 interact.js docs中的ignoreFrom。)
  dragAllowFrom?: string; // 标识栅格元素中哪些子元素可以触发拖拽事件，值为css-like选择器。如果值为null则表示所有子元素（dragIgnoreFrom的除外）。请参考 interact.js docs中的allowFrom。
  resizeIgnoreFrom?: string; // 标识栅格元素中哪些子元素无法触发调整大小的事件，值为css-like选择器。请参考 interact.js docs中的ignoreFrom。
}

declare interface showLayoutItemList extends LayoutItem {}

declare interface StoreLayout {
  layoutItemList: LayoutItem[];
}

declare interface StoreLayout_Actions {
  /**
   * 添加元素
   * @param context
   * @param item
   */
  addLayoutItem(context: VUEX_CONTEXT, item: LayoutItem): void;

  /**
   * 删除元素
   * @param context
   * @param itemId
   */
  removeLayoutItem(context: VUEX_CONTEXT, itemId: LayoutItem): void;
}

declare interface StoreLayout_Mutations {
  /**
   * 改变拖拽元素列表
   * @param state
   * @param param handle 操作类型， item，当前操作项
   */
  changeLayoutItemList(state: StoreLayout, param: {handle: HANDLE_TYPE; item: LayoutItem}): void;
}
