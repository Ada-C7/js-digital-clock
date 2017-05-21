$(document).ready(function() {
  window.setInterval(function(){ setClocks(); }, 1000);

  var calcDate = function(offset) {
    var currentDate = new Date();
    var utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
    return new Date(utc + 3600000 * offset);
  };

  var getClock = function(currentDate) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekday = days[currentDate.getDay()];
    var month = months[currentDate.getMonth()];
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var militaryHours = currentDate.getHours();
    var hours = (militaryHours % 12 === 0) ? 12 : (militaryHours % 12);
    var minutes = twoDigitify(currentDate.getMinutes());
    var seconds = twoDigitify(currentDate.getSeconds());
    var meridiem = militaryHours < 12 ? "AM" : "PM";

    var dateTime = {
      date: weekday + ", " + month + " " + day + ", " + year,
      time: hours + ":" + minutes + ":" + seconds + " " + meridiem
    };

    return dateTime;
  };

  var setClocks = function() {
    var clocks = { Seattle: -7 };
    var cities = Object.keys(clocks);
    for (i = 0; i < cities.length; i++) {
      var dateTime = getClock(calcDate(clocks[cities[i]]));
      $("#clock").html("<p>" + dateTime.date + "</p>");
      $("#clock").append("<p>" + dateTime.time + "</p>");
    }
  };

  var twoDigitify = function(digit) {
    return ("0" + digit).slice(-2);
  };

  setClocks();
});
