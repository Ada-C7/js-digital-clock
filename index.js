$(document).ready(function() {
  var intervalID = window.setInterval(myCallback, 1000);
  function myCallback() {
    var today = new Date();
    var currentTime = {
      currentHour: (today.getHours() > 12 ? (today.getHours() - 12) : today.getHours()),
      currentMinute: (today.getMinutes() < 10 ? '0':'') + today.getMinutes(),
      currentSecond: (today.getSeconds() < 10 ? '0':'') + today.getSeconds(),
      amOrPm: (today.getHours() > 12 ? "pm" : "am")
    };
    var currentTime = "Current Time: " + currentTime.currentHour + ":" + currentTime.currentMinute + ":" + currentTime.currentSecond + currentTime.amOrPm;
    $('#clock').html(currentTime);
  };
});
