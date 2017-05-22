// Your code here
$(document).ready( function() {
  function showTime(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();


var meridiem = "AM";

if (hours === 0) {
    hours = 12;
}

    if (seconds < 10){
      seconds = "0" + seconds;
    }

  var digitalClock = document.getElementById('clock');

  digitalClock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  setInterval(showTime, 1000);

}


showTime();
});
