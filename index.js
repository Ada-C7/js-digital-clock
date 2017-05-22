// Your code here
console.log("hello - you got this");
$(document).ready(function(){
  // time is assigned to the function date that will reterive the current date
  var intervalID = setInterval( function(){ displayTime() }, 1000 );

  function displayTime() {
    // new function getElementById
    // var clock = document.getElementById('clock');
    // new function - setting html to element you got by id above
    // clock.innerHTML = currentTime;

    var currentTime = new Date;

    // $('div#clock').html( currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() );
    $('div#clock').html( currentTime.toLocaleDateString() + "<div>" + currentTime.toLocaleTimeString() + '</div>'  );
    // $('div#clock').html(  );
  };

  // function clearTime() {
  //   clearInterval(intervalID);
  // };
});
