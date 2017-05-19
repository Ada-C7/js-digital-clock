$(document).ready(function() {
  var date = new Date();
  var time = date.toTimeString().split(' ')[0];
  var clock = $("<p>" + time + "</p>");
  $('#clock').append(clock);
});
