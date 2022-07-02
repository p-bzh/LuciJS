"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var jsString = `try {
  console.log().log("Hello World !");
} else {
  error();
}`;
const esprima_1 = tslib_1.__importDefault(require("esprima"));
var r = esprima_1.default.tokenize(jsString);
console.log(r);
for (var i = 0; i < r.length; i++) {
    var no = true;
    if (r[i].type === "Keyword" && r[i].value === "else") {
        for (var j = i; j >= 0; j--) {
            if (r[j].type === "Keyword" && r[j].value === "if") {
                no = true;
                break;
            }
            else if (r[j].type === "Keyword" && r[j].value === "try") {
                no = false;
                break;
            }
        }
        if (!no) {
            r[i].value = "catch";
        }
    }
}
const result = r.map((x) => x.value).join("");
console.log(result);
//# sourceMappingURL=try-else.js.map