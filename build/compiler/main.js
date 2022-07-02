"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compile = void 0;
const tslib_1 = require("tslib");
const esprima_1 = tslib_1.__importDefault(require("esprima"));
const tomate_1 = require("./tomate");
function Compile(nathan) {
    var carottes = esprima_1.default.tokenize(nathan);
    nathan = (0, tomate_1.compileTomate)(carottes);
}
exports.Compile = Compile;
//# sourceMappingURL=main.js.map