// Your code here
$(document).ready(function(){

  function showTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  }

  var clock = document.getElementById('clock');

  clock.innerText = hours + ":" + minutes + ":" + seconds;
}

showTime();
});
