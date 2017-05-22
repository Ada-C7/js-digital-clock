$(document).ready(function() {

  getTime();
  // getTime('#EST');
  // getTime('#CEST');
  // getTime('#JST');

  // Use the setInterval method to utilize the function you've created to update each second.
  window.setInterval(getTime, 1000);

  function getTime() {
    // Use the Date Library in Javascript to retrieve the current date and time information.
    var timeNow = new Date();
    // I tried using arguments to get this to work but then the callback in the setInterval stopped working mysteriously :C
    // if ( id == '#PST' ) {
    //   var timeNow = new Date();
    // } else if ( id == '#EST' ) {
    //   var timeNow = new Date() + 180;
    // } else if ( id == '#CEST' ) {
    //   var timeNow = new Date() + 480;
    // } else if ( id == '#PST' ) {
    //   var timeNow = new Date() + 960;
    // }

    // Use the different methods that are provided to you for retrieving the individual hour, minute and second information.
    var hours = ('0' + timeNow.getHours()).slice(-2);
    var minutes = ('0' + timeNow.getMinutes()).slice(-2);
    var seconds = ('0' + timeNow.getSeconds()).slice(-2);
    var timeDisplay = $("<p>" + hours + " : " + minutes + " : " + seconds + "</p>");

    $('div').html(timeDisplay);
  }
});
