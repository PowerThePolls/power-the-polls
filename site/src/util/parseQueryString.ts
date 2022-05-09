/**
 * Return the query params as an object
 */
const parseQueryString = (query: string = window.location.search) =>
   (query.startsWith("?") ? query.substr(1) : query)
      .split("&")
      .map((a) => a.split("=").map((v) => decodeURIComponent(v)))
      .reduce((values: { [key: string]: string }, [key, value]) => {
         values[key] = value;
         return values;
      }, {});
export default parseQueryString;
