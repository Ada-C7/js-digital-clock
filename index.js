$(document).ready(function() {

  var getTime = function() {
    var currentDate = new Date();
    var hours = currentDate.getHours() % 12;
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    $("#clock").append(hours + " : " + minutes + " : " + seconds);
  };
  getTime();
});
