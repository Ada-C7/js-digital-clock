// Your code here
$(document).ready(function() {
  // function that will get the time
  var getRealTime = function() {
    // new date object
    var getDate = new Date();
    // splitting date so it just shows the time
    var time = getDate.toTimeString().split(' ')[0];
    // display if it am or pm
    var ampm = getDate.getHours() < 12 ? " AM" : " PM";
    // display time so its not a 24 hour clock

    // putting javascript into the html page using jQuery
    $("#clock").text(time + ampm);
  };
  //loop that keeps the clock counting every second
  var interval = setInterval(getRealTime, 1000);
});
