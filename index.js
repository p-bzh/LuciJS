const fs = require("fs");

const exampleCode = fs.readFileSync("./index.luci", "utf-8");
console.log(exampleCode);
