$(document).ready(function() {






  var clockDiv = $('#clock');

  var offsetMST = 1;
  var offsetCST = 2;
  var offsetEST = 3;

  //  var timer= function(){
  //    var currentTime = new Date().toTimeString().split(' ')[0];
  //    var mountainST = new Date ((new Date().getTime() + offsetMST * hoursToMilliseconds )).toTimeString().split(' ')[0];
  //    var centralST = new Date ((new Date().getTime() + offsetCST * hoursToMilliseconds )).toTimeString().split(' ')[0];
  //    var easternST = new Date ((new Date().getTime() + offsetEST * hoursToMilliseconds )).toTimeString().split(' ')[0];
  //
  //     clockDiv.text(currentTime + ' PST\n' + mountainST + ' MST\n' + centralST + ' CST\n' + easternST +  ' EST\n');
  //     };




  var timer = function() {
    var today = new Date();

    //new Date() gets the current date and time stored internally as the number of millisecons since midnight Jan 1, 1970
    var today_array = today.toDateString().split(" ");

    document.getElementById("day").innerHTML = 'Date: ' + today_array[0] +', ' +today_array[1] +" "+ today_array[2] +', ' +today_array[3];

    document.getElementById("clock").innerHTML = today.toLocaleTimeString();
  };

  setInterval(timer, 1000);









});
