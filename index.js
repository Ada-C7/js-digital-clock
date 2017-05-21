// Your code here
$(document).ready(function() {
  "user strict";
  
  var updateTime = function(){
  var date = new Date();
  var time = date.toTimeString().split(" ")[0];

  //   var date = new Date();
  //  var hours = date.getHours();
  //  var minutes = date.getMinutes();
  //  var seconds = date.getSeconds();
   var ampm = date.getHours() < 12 ? 'AM' : 'PM';

  // var time = $("<p>" + hours + ":" + minutes + ":" +  seconds  + " " + ampm +"</p>");

  // var time = hours + ":" + minutes + ":" +  seconds + ampm;
  $("#clock").text(time + " " + ampm);

   };

  // $("#clock").append(time);
 setInterval(updateTime, 1000);
});

// var time = date.toTimeString().split(" ")[0]
// var timeZone = date.toTimeString().split(" ")[1]
