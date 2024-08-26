const fs = require("fs");

fs.readFile(`${__dirname}/example.txt`, "utf-8", (err, data) => {
  if (err) {
    console.log(`reeading data error: ${err}. \n`);
  }

  let cleanedData = data.split(/\s+/).filter(Boolean).join(" ");

  fs.writeFile(`${__dirname}/example.txt`, cleanedData, "utf-8", (err) => {
    if (err) {
      console.log(`writing data err: ${err}. \n`);
    }
    console.log(`data has been written: ${cleanedData}. \n`);
  });
});
