/**
 * Create a function that will invoke `callback` after `ms` milliseconds when executed, and, if executed
 * again within that `ms` time period, the initial call will be cancelled and a new one queued up in `ms`
 * @param callback The callback to execute after `ms` elapses
 * @param ms The amount of time to wait before executing `callback`, if executed again within this time
 * period, the pending call will be reset
 */
const debounce = <T extends (...args: any[]) => any>(
   callback: T,
   ms: number
) => {
   let id: any;
   return (...args: Parameters<T>) => {
      if (id) {
         clearTimeout(id);
         id = null;
      }
      id = setTimeout(() => callback(...args), ms);
   };
};
export default debounce;
