// Your code here
$(document).ready(function() {
  // function that will get the time
  var getRealTime = function() {
    // new date object
    var getDate = new Date();
    // splitting date so it just shows the time
    var time = getDate.toTimeString().split(' ')[0].substring(2, 8);
    // display if it am or pm
    var ampm = getDate.getHours() < 12 ? " AM" : " PM";
    // display time so its not a 24 hour clock
    var hours = getDate.getHours() > 12 ? (getDate.getHours() - 12) : getDate.getHours();
    // zero in front of hour if its less than 10
    var zeroToHours = hours < 10 ? "0" : "";
    
    // putting javascript into the html page using jQuery
    $("#clock").text(zeroToHours + hours + time + ampm);
  };
  //loop that keeps the clock counting every second
  var interval = setInterval(getRealTime, 1000);
});
