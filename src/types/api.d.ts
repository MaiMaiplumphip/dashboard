type SaveLayoutItemListParams = LayoutItem[];

type StringOrUndefined = string | undefined;

declare interface API {
  '/dashboard/layoutItem/all': void;

  '/dashboard/layoutItem/batch': SaveLayoutItemListParams;

  '/dashboard/homePageData/getHomeTypeAmountInfo': {dataType: StringOrUndefined};
}
