$(document).ready(function() {
  window.setInterval(function(){ setClocks(); }, 1000);

  var getClock = function() {
    var currentDate = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekday = days[currentDate.getDay()];
    var month = months[currentDate.getMonth()];
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = twoDigitify(currentDate.getMinutes());
    var seconds = twoDigitify(currentDate.getSeconds());
    var meridiem = hours < 12 ? "AM" : "PM";

    var dateTime = {
      date: "<p>" + weekday + ", " + month + " " + day + ", " + year + "</p>",
      time: "<p>" + (hours % 12) + ":" + minutes + ":" + seconds + " " + meridiem + "</p>"
    };

    return dateTime;
  };

  var setClocks = function() {
    var dateTime = getClock();
    $("#clock").html(dateTime.date);
    $("#clock").append(dateTime.time);
  };

  var twoDigitify = function(digit) {
    return ("0" + digit).slice(-2);
  };

  setClocks();
});
