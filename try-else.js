const jsString = `try {
  console.log().log("Hello World !");
} else {
  error();
}`;

var esprima = require("esprima");

const r = esprima.tokenize(jsString);
console.log(r);

for (let i = 0; i < r.length; i++) {
  let no = true;
  if (r[i].type === "Keyword" && r[i].value === "else") {
    for (let j = i; j >= 0; j--) {
      console.log(j);
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

const result = r.map((x) => x.value).join("");
console.log(result);
