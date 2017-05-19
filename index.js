// Your code here
$(document).ready(function() {
  var time = new Date(Date.now());
  var hours = time.getHours();
  var minutes = time.getMinutes();
  $("#clock").append('<p>' + hours + ':' + minutes + '</p>');
});
