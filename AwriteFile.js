//寫入檔案//


// var fs = require("fs");
// console.log("starting");
// fs.writeFile("./hello.html",  //寫入一個hello.html 的檔案
// "<html><body><h1>hello!!!!</h1></body></html>",
// function(error){ console.log('以建立檔案') ;}
// );
// console.log("finish flag.");

//結果:  starting finish flag. 以建立檔案



/////////////////////////////////////////////////////////////

var fs = require("fs");
console.log("starting");
fs.writeFileSync("./text/world.html",  //寫入一個hello.html 的檔案   使用writeFileSync方法
"<html><body><h1>hello!!!! the world.</h1></body></html>",
function(error){ console.log('以建立檔案') ;}
);
console.log("finish flag.");

//結果:  starting finish flag.