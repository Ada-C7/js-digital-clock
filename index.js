// Your code here
console.log("hello - you got this");
$(document).ready(function(){

  var intervalID = setInterval( function(){ displayTime() }, 1000 );

  function displayTime() {
    var currentTime = new Date;

    $('div#clock').html(
      currentTime.toLocaleDateString()
      + "<div>" + currentTime.toLocaleTimeString() + '</div>' );
  };
});
