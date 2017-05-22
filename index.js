// Your code here
$(document).ready(function() {

var displayTime = function() {
  var time = new Date();
  var ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  var secondZero = time.getSeconds() < 10 ? '0' : '';
  var minuteZero = time.getMinutes() < 10 ? '0' : '';


  timeString = '<h1>' + time.getHours() + ":" + minuteZero + time.getMinutes() +  ":" + secondZero + time.getSeconds() + ampm + '</h1>';

  $("#clock").html(timeString);
};

var t = setInterval(displayTime, 1000);



});
