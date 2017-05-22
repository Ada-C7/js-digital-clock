$(document).ready(function() {


  //
  // function timer() {
  //   //new Date() gets the current date and time stored internally as the number of millisecons since midnight Jan 1, 1970
  //     var timeNow = new Date();
  //     document.getElementById("clock").innerHTML = timeNow.toLocaleTimeString();
  // }


  //setInterval(timer, 1000);



  var today = new Date();
  var today_array = today.toDateString().split(" ");

  // var today_array = today_read.split(" ");
  var time = today.toTimeString();

  // var dd = today.getDate();
  // var mm = today.getMonth() + 1; //January is 0!
  // var yyyy = today.getFullYear();

  // if(dd<10) {
  //   dd='0'+dd;
  // }
  //
  // if(mm<10) {
  //   mm='0'+mm;
  // }

  //today = mm+':'+dd+':'+yyyy;
  //$('#clock').append(month);
   $('#day').append('Date: ' + today_array[0] +', ' +today_array[1] +" "+ today_array[2] +', ' +today_array[3]);
   //$('#day').append('Time:' + time);

});
