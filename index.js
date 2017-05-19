// Your code here
console.log("hello - you got this");
$(document).ready(function(){
  // time is assigned to the function date that will reterive the current date
  var intervalID = setInterval( function(){ displayTime() }, 1000 );

  function displayTime() {
    var clock = document.getElementById('clock');
    var currentTime = new Date;

    clock.innerHTML = currentTime;

    // $('div').append( currentTime.getHours() + currentTime.getMinutes() + currentTime.getSeconds() );
    // $('div').append(Date);
  };

  function clearTime() {
    clearInterval(intervalID);
  };

  //

});
