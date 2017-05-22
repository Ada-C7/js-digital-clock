$(document).ready(function() {

  var timer = function() {
    var today = new Date();
    //new Date() gets the current date and time stored internally as the number of millisecons since midnight Jan 1, 1970
    var today_array = today.toDateString().split(" ");

    document.getElementById("day").innerHTML = 'DATE: ' + today_array[0] +', ' +today_array[1] +" "+ today_array[2] +', ' +today_array[3];

    var hoursInMilliseconds = (60 * 60 * 1000);
    var offsetEST = 3 * hoursInMilliseconds;
    var offsetSwiss = 9 * hoursInMilliseconds;

    var pacificST =  today.toLocaleTimeString();
    var easternST = new Date ((today.getTime() + offsetEST )).toLocaleTimeString();
    var switzerland = new Date ((today.getTime() + offsetSwiss )).toLocaleTimeString();

    document.getElementById("clock").innerHTML = 'TIME:'+ "<br />" + 'Ada HQ: ' +  pacificST + "<br />" + 'Dad & Friends, aka EST: ' +  easternST + "<br />" + 'Land of Clocks, aka Switzerland, : ' +switzerland;

    // ALTERNATE WAY OF ASSIGNING NEW TEXT TO #clock
    // $('#clock').text('TIME:\n ADA HQ: ' + today.toLocaleTimeString());
  };

  setInterval(timer, 1000);

});
