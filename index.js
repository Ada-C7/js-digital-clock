$(document).ready(function () {
  var twoDigitString = function (num) {
    return (num < 10) ? ("0" + num.toString()) : num.toString();
  };

  var calculateTime = function () {
    var date = new Date(Date.now());
    var dateString = twoDigitString(date.getHours()) + ":" + twoDigitString(date.getMinutes()) + ":" + twoDigitString(date.getSeconds());

    $('#clock').html(dateString);
  };

  var interval = window.setInterval(calculateTime, 1000);
});
