const { Compile } = require("./build/compiler/main");
const fs = require("fs");
exampleCode = fs.readFileSync("./index.luci", "utf-8");
console.log(exampleCode);

Compile(exampleCode);
