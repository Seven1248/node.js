//讀取檔案

var fs = require("fs");
console.log('starting');
var data = fs.readFileSync("./text/world.html");
console.log('file content:' + data );
