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
    var zones = [
      {zoneId: $("#pacific"),
      offset: 0,
      print: "Pacific"},
      {zoneId: $("#mountain"),
      offset: 1,
      print: "Mountain"},
      {zoneId: $("#central"),
      offset: 2,
      print: "Central"},
      {zoneId: $("#eastern"),
      offset: 3,
      print: "Eastern"}
    ];
    // var pacific = $("#pacific");
    for (var zone in zones) {
      var area = zones[zone];
      var title = area.print;
      var name = area.zoneId;
      name.html("<h3>" + title + "</h3><br><p>" + weekdays[weekday-1] + "<br>" + day + " " + months[month] + " " + year + "<br>" + " " + (hours + area.offset) + ":" + minutes + ":" + seconds + "</p>");
    }
  }



});
