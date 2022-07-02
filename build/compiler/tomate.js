"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTomate = void 0;
function compileTomate(r) {
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
    return result;
}
exports.compileTomate = compileTomate;
//# sourceMappingURL=tomate.js.map