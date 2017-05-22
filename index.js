$(document).ready(function () {
  var calculateTime = function () {
    $('#clock').html(new Date(Date.now()).toLocaleTimeString());
  };

  var interval = window.setInterval(calculateTime, 1000);
});
