declare module "fconsole" {
  import console = require("node:console");
  export = console;
}
declare module "node:console" {
  global {
    interface Console {
      log(): Console;
    }
  }
}

console.log = (...a): Console => {
  process.stdout.write(...a);
  return console;
};

console.log().log("");
