/**
 * All values of both arrays are `===` at each index
 */
const equals = (l: any, r: any): boolean => {
   if (l === r) {
      return true;
   }
   if ((l != null && r == null) || (l == null && r != null)) {
      return false;
   }
   if (l instanceof Array) {
      if (!(r instanceof Array) || r.length !== l.length) {
         return false;
      }
      for (let x = 0; x < l.length; ++x) {
         if (l[x] !== r[x]) {
            return false;
         }
      }
   }
   const keys = new Set([...Object.keys(l), ...Object.keys(r)]);
   for (const key of keys.values()) {
      const lVal = l[key];
      const rVal = r[key];
      if (lVal instanceof Array) {
         if (!(rVal instanceof Array) || rVal.length !== lVal.length) {
            return false;
         }
         for (let x = 0; x < lVal.length; ++x) {
            if (lVal[x] !== rVal[x]) {
               return false;
            }
         }
      } else if (lVal !== rVal) {
         return false;
      }
   }
   return true;
};
export default equals;
