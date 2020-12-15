/**
 * 排序
 * @param arr
 */
const sort = <T = {}>(arr: T): T =>
  // @ts-ignore
  arr.sort(function<T, U>(a: T, b: U) {
    // @ts-ignore
    return a - b;
  });

/**
 * 计算接下来新添加的拖拽元素i，x，y
 * @param list
 */
export const computeChartsParams = (list?: LayoutItem[]): {x: number; y: number; i: string} => {
  let xArr: number[] = [];
  let yArr: number[] = [];

  const iArr = sort(
    (list as LayoutItem[]).map((item: LayoutItem): string => {
      xArr.push(item.x);
      yArr.push(item.y);
      return item.i;
    })
  );

  xArr = sort<number[]>([...new Set(xArr)]);
  yArr = sort<number[]>([...new Set(yArr)]);

  return {
    x: 0,
    y: 0,
    i: iArr.length ? Number.parseInt(iArr[iArr.length - 1]) + 1 + '' : '0',
  };
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};
