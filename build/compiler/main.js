"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compile = void 0;
const esprima_1 = require("esprima");
const fs_1 = require("fs");
const tomate_1 = require("./tomate");
function Compile(source) {
    var carottes = (0, esprima_1.tokenize)(source);
    source = (0, tomate_1.compileTomate)(carottes);
    (0, fs_1.writeFileSync)("out.js", source);
}
exports.Compile = Compile;
//# sourceMappingURL=main.js.map