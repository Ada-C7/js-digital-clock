// Your code here
$(document).ready(function() {

  var myVar = setInterval(function(){ time() }, 1000);

  function time() {
      var currentDate = new Date();
      var localTime = currentDate.toLocaleTimeString();
      document.getElementById("clock").innerHTML = localTime;
      $('#clock').html(localTime);
  }



});




    // var listItem = $('<li>' + i + '</li>');

// new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
