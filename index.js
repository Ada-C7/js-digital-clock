// Your code here
$(document).ready(function() {
  var intervalID = window.setInterval(clock, 1000);

  function clock() {
    var unix_time = Date.now();
    var dateTime = Date(unix_time);
    dateTime = dateTime.replace(' GMT-0700 (PDT)','');
    $('#clock').html(dateTime);
  }

});
