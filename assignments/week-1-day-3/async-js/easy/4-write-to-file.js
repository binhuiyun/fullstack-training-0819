const fs = require("fs");

const content = "example to write data";

const filePath = `${__dirname}/example-write.txt`;

fs.writeFile(filePath, content, "utf-8", (err) => {
  if (err) {
    console.log("writing data error", err);
  }
  console.log("data has been written.");
});
