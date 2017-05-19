// Your code here
$("document").ready(function() {
  var intervalID = window.setInterval(updateClock, 1000);


  function updateClock() {
    var now = new Date();
    var hours = now.getHours() % 12;
    var minutes = now.getMinutes();
    var seconds = Math.round(now.getSeconds() * 1000)/1000;
    // console.log(bigDate);
    var clockLocation = $("#clock");
    clockLocation.html("<p>" + hours + " : " + minutes + " : " + seconds + "</p>");
  }



});
