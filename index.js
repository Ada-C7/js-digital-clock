// Your code here
console.log("hello - you got this");
$(document).ready(function(){
  // time is assigned to the function date that will reterive the current date
  var current_time = window.setInterval(displayTime, 1000);

    function displayTime() {
      $('div').append(Date);

    };


  // $('div').append(time.getHours());
  // $('div').append(time.getMinutes());
  // $('div').append(time.getSeconds());

});
