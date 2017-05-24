//this is code for a world clock with 4 time zones.

var Clock = function(zone) {
  this.timeZone = zone;
};

Clock.prototype = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

$(document).ready(function() {

  var intervalID = window.setInterval(myCallback, 1000);

  function myCallback() {

    $("#clock").empty();

    var zones = ['America/Los_Angeles', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

    for (var i = 0; i < zones.length; i++ ) {
      var options = new Clock(zones[i]);
      var formatter = new Intl.DateTimeFormat([], options);
      var location = options.timeZone.split("/")[1];
      if (location === "Los_Angeles") {
        var localTime = "Seattle: " + formatter.format(new Date());
      } else if (location === "New_York") {
        var localTime = "New York: " + formatter.format(new Date());
      } else {
        var localTime = location + ": " + formatter.format(new Date());
      };

      var div = $('<div>' + localTime + '</div>');
      $("#clock").append(div);

    };

  };

});


  // ////////
  // //earlier world clock code that went through the same code 4 times (once for each time zone)
  // var intervalID = window.setInterval(myCallback, 1000);
  //
  // function myCallback() {
  //
  //   var options = {
  //     timeZone: 'America/Los_Angeles',
  //     hour: 'numeric', minute: 'numeric', second: 'numeric',
  //   },
  //   formatter = new Intl.DateTimeFormat([], options)
  //
  //   var seattleTime = "Seattle: " + formatter.format(new Date());
  //
  //   var options = {
  //     timeZone: 'America/New_York',
  //     hour: 'numeric', minute: 'numeric', second: 'numeric',
  //   },
  //   formatter = new Intl.DateTimeFormat([], options)
  //
  //   var newYorkTime = "New York: " + formatter.format(new Date());
  //
  //   var option = {
  //     timeZone: 'Europe/London',
  //     hour: 'numeric', minute: 'numeric', second: 'numeric',
  //   },
  //   formatter = new Intl.DateTimeFormat([], options)
  //
  //   var londonTime = "London: " + formatter.format(new Date());
  //
  //   var options = {
  //     timeZone: 'Asia/Tokyo',
  //     hour: 'numeric', minute: 'numeric', second: 'numeric',
  //   },
  //   formatter = new Intl.DateTimeFormat([], options)
  //
  //   var tokyoTime = "Tokyo: " + formatter.format(new Date());
  //
  //   $("#clock").html(seattleTime);
  //   $("#london_clock").html(londonTime);
  //   $("#new_york_clock").html(newYorkTime);
  //   $("#tokyo_clock").html(tokyoTime);
  // }
  //
  // });

  //original code for Seattle only
  // var intervalID = window.setInterval(myCallback, 1000);
  //
  //   function myCallback() {
  //     var dt = new Date();
  //
  //     var currentTime = {
  //       currentHour: dt.getHours(),
  //       currentMinute: (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes(),
  //       currentSecond: (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds()
  //     };
  //
  //
  //     var time = "Seattle: " + currentTime.currentHour + ":" + currentTime.currentMinute + ":" + currentTime.currentSecond;
