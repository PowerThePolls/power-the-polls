/**
 * function to submit form data to helpscout via zapier webhook
 */
export const submitToHelpScout = async (
   data: Object
): Promise<
   | true
   | {
        statusText: string;
        status: number;
        data?: any;
     }
> => {
   // link to associated zap https://zapier.com/app/zap/100408573
   const response = await fetch(
      "https" + "://hooks.zapier.com/hooks/catch/8459352/ow03eoe/",
      {
         method: "POST",
         body: JSON.stringify(data),
         mode: "no-cors",
         headers: {
            "Content-Type": "application/json",
         },
      }
   );

   if (
      response.status === 200 ||
      response.status === 201 ||
      response.status ===
         0 /*we're currently making a simple no-cors request and can't get the status; presume success*/
   ) {
      return true;
   } else {
      if (response.status === 429) {
         // watch for throttling 429: limit is 10,000 requests in a 5 minute window
         // See https://zapier.com/help/troubleshoot/behavior/rate-limits-and-throttling-in-zapier for more info
         console.warn("throttled request");
      }
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
