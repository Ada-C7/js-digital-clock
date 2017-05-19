// Your code here
$(document).ready(function() {
  var getDate = Date.now();

  var printTime = $("<p>" + getDate + "</p>");
  $("#clock").append(printTime);


});
