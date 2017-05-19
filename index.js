$(document).ready(function() {
  var current_date = new Date();
  var time = $("<p>" + current_date + "</p>");
  $('#clock').append(time);
});
