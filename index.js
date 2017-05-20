$(document).ready(function() {

  var clockDiv = $('#clock');


  var hoursToMilliseconds = (60 * 60 * 1000);
  var offsetMST = 1;
  var offsetCST = 2;
  var offsetEST = 3;



  var setTime = function(){
    var currentTime = new Date().toTimeString().split(' ')[0];
    var mountainST = new Date ((new Date().getTime() + offsetMST * hoursToMilliseconds )).toTimeString().split(' ')[0];
    var centralST = new Date ((new Date().getTime() + offsetCST * hoursToMilliseconds )).toTimeString().split(' ')[0];
    var easternST = new Date ((new Date().getTime() + offsetEST * hoursToMilliseconds )).toTimeString().split(' ')[0];

    clockDiv.text(currentTime + ' PST\n' + mountainST + ' MST\n' + centralST + ' CST\n' + easternST +  ' EST\n');
    };

  setInterval(setTime, 1000);

>>>>>>> timezones


});
