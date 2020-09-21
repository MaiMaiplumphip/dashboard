/**
 * 节流修饰器
 * @param limit
 */
export function throttle(limit: number = 1000) {
  let flag = true;
  return (target: any, key: string, descriptor: any) => {
    let func = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      if (!flag) return;
      flag = false;
      try {
        func.apply(this, ...args);
      } catch (error) {
        console.warn(error);
      }
      if (!limit) return (flag = true);
      setTimeout(() => {
        flag = true;
      }, limit);
    };
  };
}
