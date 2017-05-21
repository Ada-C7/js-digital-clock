// 24-hour clock (no AM or PM)
$(document).ready(function() {

  function changeSecond() {
    var nIntervID = setInterval(gimmieTime, 1000);
  }

  var gimmieTime = function() {
    var now = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    $('#clock').text(now);
  };

  var work = changeSecond();
});

// 12-hour clock with AM and PM

// $(document).ready(function() {
//   var displayTime = function() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var meridiem = "AM";
//
//     var clockDiv = document.getElementById('clock');
//
//     if(seconds < 10){
//       seconds = "0" + seconds;
//     }
//
//     if(minutes < 10){
//       minutes = "0" + minutes;
//     }
//
//     if(hours > 12){
//       hours = hours - 12;
//       meridiem = "PM";
//     }
//
//     if(hours ===0){
//       hours = 12;
//     }
//
//     clockDiv.textContent = hours + ":" + minutes + ":" + seconds + " " + meridiem;
//   };
//
//   displayTime();
//   setInterval(displayTime, 1000);
// });
