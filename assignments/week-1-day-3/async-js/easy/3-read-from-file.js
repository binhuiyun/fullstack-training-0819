const fs = require("fs");

fs.readFile(`${__dirname}/example-read.txt`, "utf-8", (err, data) => {
  if (err) {
    console.log("Error from reading file:", err);
    return;
  }
  console.log("File data:", data);
});
