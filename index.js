
$(document).ready(function() {
  "user strict";

  var updateTime = function(){
    var timePST = new Date().getTime();
    var timeMST = timePST + 1*60*60*1000;
    var timeCST = timePST + 2*60*60*1000;
    var timeEST = timePST + 3*60*60*1000;
    var textPST = new Date(timePST).toTimeString().split(' ')[0];
    var textMST = new Date(timeMST).toTimeString().split(' ')[0];
    var textCST = new Date(timeCST).toTimeString().split(' ')[0];
    var textEST = new Date(timeEST).toTimeString().split(' ')[0];


    $("#clock").html(textPST + ' PST\n' + textMST + ' MST\n' + textCST + ' CST\n' + textEST + ' EST');
  };

 setInterval(updateTime, 1000);

});


// var timeZone = date.toTimeString().split(" ")[1]
