const request = require("request");
const readline = require("readline");
const fs = require("fs");
const args = process.argv.slice(2);

reading = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

request(args[0], (error, response, body) => {
  console.log(error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      console.log("error:", err);
    } else {
      console.log(
        `Downloaded and saved ${response.headers["content-length"]} bytes to ${args[1]}`
      );
    }
  });
});
