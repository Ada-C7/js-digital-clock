$(document).ready(function() {

  var addZero = function(digit) {
    if (digit < 10) {
      digit = "0" + digit;
    }
    return digit;
  };

  var showTime = function() {
    var today = new Date(),
    days = addZero(today.getDate()),
    months = addZero(today.getMonth()),
    years = today.getFullYear(),
    hours = today.getHours(),
    minutes = addZero(today.getMinutes()),
    seconds = addZero(today.getSeconds()),
    ampm = hours > 11 ? ' PM' : ' AM',
    americanHours;

    if (hours === 0) {
      americanHours = 12;
    } else if (hours < 13) {
      americanHours = hours;
    } else {
      americanHours = addZero(hours % 12);
    }

    $("#date").html(months + "/" + days + "/" + years);
    $("#clock").html(americanHours + ":" + minutes + ":" + seconds + ampm);
  };

  setInterval(showTime, 1000);
});
