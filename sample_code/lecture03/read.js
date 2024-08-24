const fs = require("fs");

function afterFileRead(err, data) {
    console.log("error is ", err);
    console.log("content is ", data);
  }

fs.readFile( "/a.txt", "utf-8", afterFileRead);

fs.readFile(__dirname+ "/b.txt", "utf-8", afterFileRead);

console.log("done");