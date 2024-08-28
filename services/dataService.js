const fs = require("fs");
const XLSX = require("xlsx");
const path = require("path");

const filePath = path.join(__dirname, "..", "water-usage.xlsx");

// Function to store the incoming data into an Excel sheet
function storeData(date, value) {
  let workbook;
  let worksheet;

  // Check if the Excel file already exists
  if (fs.existsSync(filePath)) {
    // Read the existing file and get the worksheet
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets["WaterUsage"];
  } else {
    // Create a new workbook and worksheet if the file doesn't exist
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.aoa_to_sheet([["Date", "Value"]]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "WaterUsage");
  }

  // Append the new data to the worksheet
  const newRow = [date, value];
  XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

  // Write the updated workbook back to the file
  XLSX.writeFile(workbook, filePath);
}

module.exports = { storeData };