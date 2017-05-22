// console.log("TEST, TEST");
$(document).ready(function() { // anonymous function

  console.log("ANOTHER TEST");

  var getTime = function(){
    console.log("Hey I'm in a clock");
    timenow = $('<div id = "clock" >' + new Date() + '</div>');
    $('#clock').replaceWith(timenow);
  };


  var myTimer = setInterval(getTime, 1000);
});
