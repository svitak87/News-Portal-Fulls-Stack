const csv = require('csv-parser');

const addFile = async (file) => {
  try {
    if (!file) {
      throw new Error("File is required");
    } else if (file.mimetype !== "text/csv") {
      throw new Error("The file must be a CSV format");
    }
    const csvText = Buffer.from(file.buffer).toString("utf-8");
    const jsonData = [];
    csvText
      .pipe(csv())
      .on('data', (row) => {
        jsonData.push(row);
      })
      .on('end', () => {
        console.log(jsonData);
      });

  } catch (error) {
    console.error("Error:", error.message);
  }
};

module.exports = addFile;
