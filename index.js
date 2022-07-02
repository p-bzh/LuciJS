fs = require("fs");
esprima = require("esprima");

exampleCode = fs.readFileSync("./index.luci", "utf-8");
console.log(exampleCode);

function tokenize(code) {
  r = esprima.tokenize(code);

  for (i = 0; i < r.length; i++) {
    no = true;
    if (r[i].type === "Keyword" && r[i].value === "else") {
      for (j = i; j >= 0; j--) {
        if (r[j].type === "Keyword" && r[j].value === "if") {
          no = true;
          break;
        } else if (r[j].type === "Keyword" && r[j].value === "try") {
          no = false;
          break;
        }
      }
      if (!no) {
        r[i].value = "catch";
      }
    }
  }

  return r.map((x) => x.value).join("");
}

console.log(tokenize(exampleCode));
