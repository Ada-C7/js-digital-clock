$(document).ready(function() {

  var intervalID = window.setInterval(myCallback, 1000);

  // var zones = ['America/Seattle', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

  //this needs to be refactored into a loop - currently going through the same code 4 times (once for each time zone)

    function myCallback() {

          var options = {
              timeZone: 'America/Los_Angeles',
              hour: 'numeric', minute: 'numeric', second: 'numeric',
          },
              formatter = new Intl.DateTimeFormat([], options)

          var seattleTime = "Seattle: " + formatter.format(new Date());

          var options = {
              timeZone: 'America/New_York',
              hour: 'numeric', minute: 'numeric', second: 'numeric',
          },
              formatter = new Intl.DateTimeFormat([], options)

          var newYorkTime = "New York: " + formatter.format(new Date());

          var option = {
              timeZone: 'Europe/London',
              hour: 'numeric', minute: 'numeric', second: 'numeric',
          },
              formatter = new Intl.DateTimeFormat([], options)

          var londonTime = "London: " + formatter.format(new Date());

          var options = {
              timeZone: 'Asia/Tokyo',
              hour: 'numeric', minute: 'numeric', second: 'numeric',
          },
              formatter = new Intl.DateTimeFormat([], options)

          var tokyoTime = "Tokyo: " + formatter.format(new Date());

      $("#clock").html(seattleTime);
      $("#london_clock").html(londonTime);
      $("#new_york_clock").html(newYorkTime);
      $("#tokyo_clock").html(tokyoTime);
    }

});
