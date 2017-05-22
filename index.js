$(document).ready(function() {

    var timezones = [
      {class: "pacific", name: "Seattle", offset: 0},
      {class: "eastern", name: "Boston", offset: 3}
    ];

    timezones.forEach(function(zone) {
      $('.clock').append("<div class='" + zone.class + "'></div>");
    });

    var getTimes = function() {timezones.forEach(function(zone) {
      var time = new Date();
      var utcTime = time.getTime();
      var localTime = new Date(utcTime + (Number(zone.offset)*60*60*1000));
      localTime = localTime.toString().substring(16, 24);
      $("." + zone.class).empty().append(zone.name + ": " + localTime );
      console.log("." + zone.class);
      console.log(zone);
      });
    };

    setInterval(getTimes, 500);


});
