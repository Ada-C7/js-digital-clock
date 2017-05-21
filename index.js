$(document).ready(function() {
  var rawTime = new Date(Date.now());
  console.log(rawTime);
  $('#clock').html(rawTime);
  var intervalID = window.setInterval(rawTime, 500);
});
