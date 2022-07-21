import toQueryString from "../../util/toQueryString";

export const submitToActionKit = async (data: {
   [key: string]: string;
}): Promise<
   | true
   | {
        statusText: string;
        status: number;
        data?: any;
     }
> => {
   const response = await fetch(
      "https://ptp.actionkit.com/rest/v1/action/",
      {
         method: "POST",
         body: toQueryString(data),
         mode: "no-cors",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
      },
   );

   if (
      response.status === 200 ||
      response.status === 201 ||
      response.status ===
         0 /*we're currently making a simple no-cors request and can't get the status; presume success*/
   ) {
      return true;
   } else {
      try {
         return {
            statusText: response.statusText,
            status: response.status,
            data: await response.json(),
         };
      } catch {
         return { statusText: response.statusText, status: response.status };
      }
   }
};
