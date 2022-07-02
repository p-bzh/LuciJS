import patate from "esprima";
import { compileTomate } from "./tomate";

export function Compile(nathan: string | string) {
  var carottes = patate.tokenize(nathan);
  nathan = compileTomate(carottes);
}
