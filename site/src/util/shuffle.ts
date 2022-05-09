/**
 * Randomizes the values of the provided Array and returns a new array with the results.
 * https://github.com/nexussays/nexuslib-js/blob/master/src/nexus/array/shuffle.ts
 */
function shuffle<T>(source: T[]): T[] {
   let i = source.length;
   let j: number;
   let temp: T;
   const result = source.slice();
   while (i) {
      --i;
      j = Math.floor(Math.random() * (i + 1));
      temp = result[i];
      result[i] = result[j];
      result[j] = temp;
   }
   return result;
}
export default shuffle;
