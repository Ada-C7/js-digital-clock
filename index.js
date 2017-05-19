$(document).ready(function() {

  setInterval(function(){
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var twoDigits = function(time) {
      if (time < 10) {
        display = "0" + time;
      }else {
        display = time;
      }

      return display
  };
    var time = twoDigits(hours) + ":" + twoDigits(minutes) + ":" + twoDigits(seconds);
    $('#clock').text(time);
  }, 1000);


});
