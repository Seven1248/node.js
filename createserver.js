// var http = require('http');
// console.log('starting...');
// // var host = '127.0.0.1';
// // var pppt  = 80;
// var s1 = http.createServer(function (req,res){
//     console.log('got arequest:' + req.url);
//     res.writeHead(200, {'Content-type' :'text/plain'});
//     res.end('hello! i am node.js server.');
// });
// s1.listen(80, '127.0.0.1', function(){
//     console.log('listening...');
// })

////////////////////////////////////////

// var http = require("http");
// var fs = require("fs");
// console.log("Starting...");
// var host = "127.0.0.1";
// var port = 80;
// var server = http.createServer(function (req, res) {
//     console.log('got a request' + req.url);
//     fs.readFile('.' + req.url, function (err, data) {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end("file is't found.");
//         } else {
//             res.writeHead(200, { 'CONtent-Type':  "text/html" });
//             res.end(data);
//         }
//     })
// });
// server.listen(port, host, function () {
//     console.log('listening...');
// })

////////////////////////////////////////////

var http = require("http");
var fs = require("fs");
console.log("Starting...");
var host = "127.0.0.1";
var port = 80;
var express = require("express");
var app = express();
app.get('/',function(req,res){
    res.send('hello!');
})
app.get("/hello/:text", function (req, res) {
    res.send('hello!' + req.params.text);
});
app.use(express.static('text'));  // Web伺服器的靜態檔案置於 text 資料夾

app.listen(port, host);

