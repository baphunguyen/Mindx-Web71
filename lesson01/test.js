const fs = require("fs");

const sum = (a, b) => a + b;

const num1 = 10;
const num2 = 20;
console.log(`${num1} + ${num2} = ${sum(num1, num2)}`);

const content = "Hello, world!";

fs.writeFile("data.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
});
