$(document).ready(function() {
  var startTime = new Date(Date.now()).toLocaleTimeString();
  $("#clock").append('<p>' + startTime + '</p>');

  var updateTime = function () {
    var updatedTime = new Date(Date.now()).toLocaleTimeString();
    $('p').replaceWith('<p>' + updatedTime + '</p>');
  };

  var changeTime = setInterval(updateTime, 1000);
});
