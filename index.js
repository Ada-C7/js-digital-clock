var myClock = new Date;

var changeTime = function() {
  var myClock = new Date;
  // var hoursNow = myClock.getHours();
  // var minutesNow = myClock.getMinutes();
  // var secondsNow = myClock.getSeconds();
  var currentTime = new Date(myClock.getTime()).toLocaleString()

  // var currentTime = hoursNow + ":" + minutesNow + ":" + secondsNow;
  $('#clock').html(currentTime);
}

$(document).ready(function() {
  setInterval('changeTime()', 1000);
});
