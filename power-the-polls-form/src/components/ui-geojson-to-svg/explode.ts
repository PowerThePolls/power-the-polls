import {
   LineString,
   MultiLineString,
   MultiPoint,
   MultiPolygon,
   Point,
   Polygon,
} from "geojson";

import { Coordinate } from "./types";

/**
 * Convert any multi-object geometry to an array of its constituent parts
 */
const explode = <G extends MultiPoint | MultiLineString | MultiPolygon>(
   g: G,
): (G extends MultiPoint
   ? Point
   : G extends MultiLineString
     ? LineString
     : Polygon)[] =>
   g &&
   g.coordinates &&
   (
      g.coordinates as Coordinate[]
   ) /*or Coordinates[][], etc but it doesn't matter*/
      .map(
         (part) =>
            ({
               type: g.type.replace("Multi", ""),
               coordinates: part,
               crs: (g as any).crs,
            }) as any,
      );
export default explode;
