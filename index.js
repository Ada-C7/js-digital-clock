
var findTime = function() {
  var now = new Date();
  var h = makeTwoDigits(now.getHours());
  var m = makeTwoDigits(now.getMinutes());
  var s = makeTwoDigits(now.getSeconds());

  var time = $('<p>' + h + ":" + m + ":" + s + '</p>');
  $('#clock').empty();
  $('#clock').append(time);
};

var makeTwoDigits = function(number) {
  return (number < 10 ? '0' : '') + number;
};


$(document).ready(function() {

  setInterval(findTime, 1000);

});
