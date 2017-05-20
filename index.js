// Your code here
$("document").ready(function() {

setInterval(rightNow, 1000);

  function rightNow() {
    var currentTime = "";
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    currentTime += hour + ":" + minute + ":" + second;


    $("#clock").text(currentTime);

  }

















});
