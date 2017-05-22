var updateTime = function() {
  var startTime = new Date();
  var hour = startTime.getHours();
  var time = doubleDigits(hour) + ":" + doubleDigits(startTime.getMinutes()) + ":" + doubleDigits(startTime.getSeconds());

  if (hour < 12) {
    time += " AM";
  } else if ( hour >= 12) {
    if (hour > 13) {
      hour = hour % 12;
    }
    time += " PM";
  }

  $('#clock').text(time);
};

var doubleDigits = function(digit) {
  if (digit < 10 ) {
    return '0' + digit;
  } else {
    return digit;
  }
};

$(document).ready(function() {
  setInterval(updateTime, 1000);
});
