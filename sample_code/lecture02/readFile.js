const fs = require("fs");

const a = fs.readFileSync("/a.txt", "utf-8", function(err, contents){;
    if(err)
        console.log("there is an error!!!", err);
    else{
        console.log(contents);
    }
});
console.log(a);