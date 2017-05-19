$(document).ready(function() {

// Use the setInterval method to utilize the function you've created to update each second.
  getTime();

  var intervalSecond = window.setInterval(getTime, 1000);

  function getTime() {
    // Use the Date Library in Javascript to retrieve the current date and time information.
    var timeNow = new Date();

    // Use the different methods that are provided to you for retrieving the individual hour, minute and second information.
    var hours = ('0' + timeNow.getHours()).slice(-2);
    var minutes = ('0' + timeNow.getMinutes()).slice(-2);
    var seconds = ('0' + timeNow.getSeconds()).slice(-2);
    var timeDisplay = $("<p>" + hours + " : " + minutes + " : " + seconds + "</p>");

    $('div').html(timeDisplay);
  }



});
