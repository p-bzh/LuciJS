import patate from "esprima";
import { compileTryElse } from "./try-else";

function Compile(source: string | string) {
  var carottes = patate.tokenize(source);
  source = compileTryElse(carottes);
}
