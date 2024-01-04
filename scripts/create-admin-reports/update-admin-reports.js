import fetch, { Headers } from "node-fetch";

const ACTION_KIT_URL = "https://ptp.actionkit.com";

let AK_HEADERS_CACHE;

const getActionKitHeaders = () => {
   if (!AK_HEADERS_CACHE) {
      AK_HEADERS_CACHE = new Headers();
      const { ACTION_KIT_USERNAME, ACTION_KIT_PASSWORD } = process.env;
      const encodedCredentials = Buffer.from(
         `${ACTION_KIT_USERNAME}:${ACTION_KIT_PASSWORD}`,
      ).toString("base64");
      AK_HEADERS_CACHE.set("Authorization", `Basic ${encodedCredentials}`);
      AK_HEADERS_CACHE.set("Content-Type", "application/json");
   }
   return AK_HEADERS_CACHE;
};

const checkStatus = async (res) => {
   if (!res.ok) {
      const body = await res.text();
      throw new Error(
         `HTTP Error Response: ${res.status} ${res.statusText}. Body: ${body}`,
      );
   }
};

const getAdminReportList = async () => {
   const headers = getActionKitHeaders();
   const url = `${ACTION_KIT_URL}/rest/v1/report?categories__name=admin&_limit=100`;
   let res = await fetch(url, { headers });

   await checkStatus(res);

   let jsonResponse = await res.json();
   let reportList = jsonResponse.objects;

   while (jsonResponse.meta.next) {
      res = await fetch(`${ACTION_KIT_URL}${jsonResponse.meta.next}`, {
         headers,
      });
      await checkStatus(res);
      jsonResponse = await res.json();
      reportList = reportList.concat(jsonResponse.objects);
   }

   return reportList;
};

const updateReport = async (reportId) => {
   const headers = getActionKitHeaders();
   const url = `${ACTION_KIT_URL}/rest/v1/queryreport/${reportId}`;
   const body = {
      run_weekday: 1,
      run_hour: 11,
   };
   const res = await fetch(url, {
      headers,
      method: "PATCH",
      body: JSON.stringify(body),
   });
   await checkStatus(res);
};

const run = async () => {
   const adminReports = await getAdminReportList();
   const adminReportIds = adminReports.map((report) => report.id);
   for (const id of adminReportIds) {
      try {
         await updateReport(id);
      } catch (e) {
         console.error(e);
      }
   }
};

try {
   await run();
   console.log("Done updating admin reports");
   process.exit(0);
} catch (e) {
   console.error(e);
   process.exit(11);
}
