var counter = function(arr){
  return 'This is test ' + arr.length + ' elements in this array';
};

var adder = function(a, b) {
  return `Ths sum of this 2 number ${a+b}`;
}

var pi = 3.5;



 module.exports = {
   counter: counter,
   adder: adder,
   pi: pi
 }
