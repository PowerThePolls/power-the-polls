export interface CsvRow {
   user_id: string;
   state: string;
   city: string;
   county: string;
   zipcode: string;
   jurisdiction_id: string;
}
export const Header =
   "user_id,skip_column_user_state,skip_column_user_city,skip_column_zipcode,user_county,user_jurisdiction_id\n";

export const formatRow = (row: CsvRow) => {
   return `${row.user_id},"${row.state}","${row.city}","${row.zipcode}",${
      row.county === "" ? "" : `"${row.county}"`
   },${row.jurisdiction_id}\n`;
};
export default CsvRow;
