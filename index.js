// Your code here
$(document).ready(function() {
  var startTime = new Date(Date.now()).toLocaleTimeString();
  $("#clock").append('<p>' + startTime + '</p>');

  var displayTime = function () {
    var nowTime = new Date(Date.now()).toLocaleTimeString();
    $('p').replaceWith('<p>' + nowTime + '</p>');
  };

  var changeTime = setInterval(displayTime, 1000);

});
