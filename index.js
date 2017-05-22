$(document).ready(function(){
  var clock = document.getElementById('clock')
  var clockDate = document.getElementById('clockDate')

  var digitalClock = function(){
    var date = new Date();
    // var time = date.toLocaleTimeString();
    // var hours = date.getHours().toString();
    // var minutes = date.getMinutes().toString();
    // var seconds = date.getSeconds().toString();

    // var twoDigits = function(numString){
    //   if (numString < 10){
    //     numString  = "0" + numString;
    //   }
    //   return numString
    // }
    // var timeString = twoDigits(hours) + ":" + twoDigits(minutes) + ":" + twoDigits(seconds);
    // clock.textContent = timeString;
    clock.textContent = date.toLocaleTimeString()
    clockDate.textContent = date.toDateString()

    // $("#clock").text(timeString);

  }

  setInterval(digitalClock, 1000)
});
