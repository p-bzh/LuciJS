var jsString = `try {
  console.log().log("Hello World !");
} else {
  error();
}`;

var esprima = require("esprima");

var r = esprima.tokenize(jsString);
console.log(r);

for (var i = 0; i < r.length; i++) {
  var no = true;
  if (r[i].type === "Keyword" && r[i].value === "else") {
    for (var j = i; j >= 0; j--) {
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

var result = r.map((x) => x.value).join("");
console.log(result);
