
$(document).ready(function() {


var getTime = function(){


var today = new Date();

// add zero to the beginning of numbers less than 10
var sanitizeNumber = function(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

// make variables for H, M, S
var hour = today.getHours(),
minute = today.getMinutes(),
second = today.getSeconds();


 // getting the div so we can maniuplate ist
 // replace everything inside the "clock" with this code!

$("#clock").html("<p>" + sanitizeNumber(hour) + ":" + sanitizeNumber(minute) + ":" + sanitizeNumber(second) + "</p>");

};

var intervalID = window.setInterval(getTime, 500);
});
