import { tokenize } from "esprima";
import { writeFileSync } from "fs";
import { compileTomate } from "./tomate";

export function Compile(source: string | string) {
  var carottes = tokenize(source);
  source = compileTomate(carottes);
  writeFileSync("out.js", source);
}
