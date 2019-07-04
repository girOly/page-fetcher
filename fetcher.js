const args = process.argv.slice(2);
const fs = require("fs");
const request = require("request");


request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, function(err) {
    if (error) {
      return console.log(error);
    }
    const statsSync = fs.statSync(args[1]);
    const bigStuff = stats.size;
    console.log(`Downloaded and saved ${bigStuff} bytes to ./index.html`);
  });
});
