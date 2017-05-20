// Your code here
$(document).ready(function() {
  // var display = function() {
  var getRealTime = function() {
    var getDate = new Date();
    var time = getDate.toTimeString().split(' ')[0];
    // var currentTime = getDate.setInterval();
    // var printTime = $("<p>" + getDate.getHours() + ":" + getDate.getMinutes() +":"+ getDate.getSeconds() + "</p>");
    // var printTime = function() {
    //   var hour = getDate.getHours();
    //   var minute = getDate.getMinutes();
    //   var second = getDate.getSeconds();
    //
    // };
    $("#clock").text(time);
  };



  // $("#clock").append(printTime);
  // };
  var interval = setInterval(getRealTime, 1000);
});
