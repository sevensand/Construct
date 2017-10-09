// var time = 0;
// var timer = setInterval(function(){
//   time +=2;
//   console.log(time + 'test');
//   if(time > 5) {
//     clearInterval(timer);
//   }
// }, 3000);

// var stuff = require('./count');
//
// console.log(stuff.counter(['Bryan', 'Yabut', 'Mesias']));
// console.log(stuff.adder(9, 5));
// console.log(stuff.adder(stuff.pi, 8));
// var emit = require('emit');
// var util = require('util');

// var fs =  require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');

// fs.readFile('readMe.txt', 'utf8', function(err, data){
//    fs.writeFile('writeMe.txt', data);
// });

// fs.unlink('writeMe.txt');

// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', data);
//   });
// });


// fs.unlink('./stuff/writeMe.txt', function(){
//     fs.rmdir('stuff');
// });

var http = require('http');
var fs = require('fs');

// Readable Stream
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myCreateStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//createtablestream
// myReadStream.on('data', function(chunk){
//   console.log('new chunk received..');
//   myCreateStream.write(chunk);
// });

//pipe
// var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
// myReadStream.pipe(res);

//api
// var myobj = {
//   name: 'Bryan',
//   job: 'Web Developer',
//   age: 27
// };
//
// res.end(JSON.stringify(myobj));



// var server = http.createServer(function(req, res){
//   console.log('request was made' + req.url);
//
//   if(req.url === '/home' || req.url === '/') {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   } else if(req.url === '/contact') {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//   } else if(req.url === '/api/items') {
//     var items = [{name:'bryan', age:25}, {name:'mesias', age: 27}];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(items));
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
//
// });
//
// server.listen(3000, '127.0.0.1');

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});
app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html')
});
app.listen(3000);
console.log('connecting client..');
