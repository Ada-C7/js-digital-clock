$(document).ready(function() {
  var clocks = { maui: -10, seattle: -7, asheville: -4, tokyo: 9 };
  var cities = Object.keys(clocks);

  var twoDigitify = function(digit) {
    return ("0" + digit).slice(-2);
  };

  var capitalizeFirstLetter = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  };

  var setStructure = function() {
    for (i = 0; i < cities.length; i++) {
      var section = $("<section></section>").addClass(cities[i]);
      section.append("<h4>" + capitalizeFirstLetter(cities[i]) + " Time</h4>");
      section.append("<section class=\"date-time\"></section>");
      $("#clock").append(section);
    }
  };

  var calcDate = function(offset) {
    var currentDate = new Date();
    var utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
    return new Date(utc + 3600000 * offset);
  };

  var getClock = function(city) {
    var currentDate = calcDate(clocks[city]);
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
    for (i = 0; i < cities.length; i++) {
      var section = $("." + cities[i] + " .date-time");
      var dateTime = getClock(cities[i]);

      section.html("<p>" + dateTime.date + "</p>");
      section.append("<p>" + dateTime.time + "</p>");
    }
  };

  setStructure();
  setClocks();
  window.setInterval(function(){ setClocks(); }, 1000);
});
