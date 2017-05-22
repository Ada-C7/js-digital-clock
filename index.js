$(document).ready(function() {

  

  var intervalID = window.setInterval(myCallback, 1000);

    function myCallback() {
      var dt = new Date();

      var currentTime = {
        currentHour: dt.getHours(),
        currentMinute: (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes(),
        currentSecond: (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds()
      };


      var time = currentTime.currentHour + ":" + currentTime.currentMinute + ":" + currentTime.currentSecond;

      $("#clock").html(time);
    }

});
