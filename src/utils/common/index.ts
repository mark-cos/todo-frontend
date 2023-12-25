export const throttle = <T extends (...args: any[]) => any>(fn: T, ms: number) => {
  let isExcute = false;

  return (...args: Parameters<T>) => {
    if (!isExcute) {
      isExcute = true;
      setTimeout(() => {
        fn(...args);
        isExcute = false;
      }, ms);
    }
  };
};
