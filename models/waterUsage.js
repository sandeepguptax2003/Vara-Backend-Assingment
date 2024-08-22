const xlsx = require('xlsx');

class WaterUsage {
  constructor(date, value) {
    this.date = date;
    this.value = value;
  }

  saveToExcel() {
    // Load the existing Excel sheet or create a new one
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet([
      { Date: this.date, Value: this.value },
    ]);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Water Usage');
    xlsx.writeFile(workbook, 'water-usage-data.xlsx');
  }
}

module.exports = WaterUsage;