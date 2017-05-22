$(document).ready(function() {


  var timer = function() {
    var today = new Date();
    //new Date() gets the current date and time stored internally as the number of millisecons since midnight Jan 1, 1970
    var today_array = today.toDateString().split(" ");

    document.getElementById("day").innerHTML = 'DATE: ' + today_array[0] +', ' +today_array[1] +" "+ today_array[2] +', ' +today_array[3];


    var hoursToMilliseconds = (60 * 60 * 1000);
    var offsetEST = 3 * hoursToMilliseconds;

    var pacificST =  today.toLocaleTimeString();

    // var easternST = today.toLocaleTimeString();
  var easternST = new Date ((today.getTime() + offsetEST )).toTimeString().split(' ')[0];


    document.getElementById("clock").innerHTML = 'TIME:'+ "<br />" + 'ADA HQ: ' +  pacificST + "<br />" + 'Back East: ' +  easternST;

    // ALTERNATE WAY OF ASSIGNING NEW TEXT TO #clock
    // $('#clock').text('TIME:\n ADA HQ: ' + today.toLocaleTimeString());




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





  };


  setInterval(timer, 1000);

});
