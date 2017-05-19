// Your code here
$("document").ready(function() {
  var intervalID = window.setInterval(updateClock, 1000);


  function updateClock() {
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var now = new Date();
    var hours = now.getHours() % 12;
    var minutes = now.getMinutes();
    var seconds = Math.round(now.getSeconds() * 1000)/1000;
    var weekday = now.getDay();
    var month = now.getMonth();
    var day = now.getDate();
    var year = now.getFullYear();
    var zones = [$("#pacific"), $("#mountain"), $("#central"), $("#eastern")];
    // var pacific = $("#pacific");
    for (var zone in zones) {
      zones[zone].html(weekdays[weekday+1] + ", " + day + " " + months[month+1] + " " + year + ", " + " " + hours + ":" + minutes + ":" + seconds);
    }
  }



});
