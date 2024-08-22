const fs = require("fs");
const XLSX = require("xlsx");
const path = require("path");
const directoryPath = path.join(__dirname, "..", "water-usage.xlsx");

function storeData(date, value) {
  let workbook;
  let worksheet;
  if (fs.existsSync(directoryPath)) {
    workbook = XLSX.readFile(directoryPath);
    worksheet = workbook.Sheets["WaterUsage"];
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.aoa_to_sheet([["Date", "Value"]]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "WaterUsage");
  }
  const newRow = [date, value];
  XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });
  XLSX.writeFile(workbook, directoryPath);
}

module.exports = {
  storeData,
};