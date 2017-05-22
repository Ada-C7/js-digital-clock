// Your code here
$(document).ready(function() {

  //sets the inteval to 1000 milliseconds (1 second).
  //this allows the time fucntion to be called every second.
  var secondsInterval = setInterval(function(){ time() }, 1000);


  function time() {
      //date class gets current date
      var currentDate = new Date();
      //toLocaleTimeString takes the current date and converts it
      var localTime = currentDate.toLocaleTimeString();
      //jquery calls the div where the id is 'clock' and inputs the localTime. The tim fucntion is being called every second and flashes on screen. 
      $('#clock').html(localTime);
  }

});




    // var listItem = $('<li>' + i + '</li>');

// new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
