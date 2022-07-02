"use strict";
const { log } = require("console");
console.log = (...a) => {
    log(...a);
    return console;
};
console.log("Hello World").log("Hello World 2");
//# sourceMappingURL=console.log.js.map