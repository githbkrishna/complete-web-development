const fs = require("fs");
let text = fs.readFileSync ("dele.txt", "utf-8");
text = text.replace("Browser", "Hariom");

console.log("The content of the file is ");
console.log(text);

fs.writeFileSync("hariom.txt", text)