$(document).ready(function() {


  var intervalID = window.setInterval(myCallback, 1000);

    function myCallback() {
      var dt = new Date();

      var currentTime = {
        currentHour: dt.getHours(),
        currentMinute: dt.getMinutes(),
        currentSecond: dt.getSeconds()
      };


      var time = currentTime.currentHour + ":" + currentTime.currentMinute + ":" + currentTime.currentSecond;

      $("#clock").html(time);
    }

});
