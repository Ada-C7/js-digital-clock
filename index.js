// Your code here
var unix_time = Date.now();

var local = Date(unix_time);
local = local.replace(' GMT-0700 (PDT)', '');
console.log(local);


// var intervalID = window.setInterval(myCallback, 500);
//
// function myCallback() {
//   // Your code here
// }
