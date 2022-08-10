import { FullJurisdictionsInfo as FullJurisdictions, States } from "../data";

/**
 * Parses form and state data to find if the users jurisdiction still needs poll workers
 */
const isJurisdictionFilled = (
   state: string | null,
) => {
   if (state == null || !(state in States)) {
      return [false, "Unknown"];
   }

   const {
      noPollWorkersNeeded,
      name,
   } = States[state];
   if (noPollWorkersNeeded === true) {
      return [true, name];
   }

   // no full jurisdictions for that state
   if (!(state in FullJurisdictions)) {
      return [false, name];
   }

   return [false, name];
};

export default isJurisdictionFilled;
