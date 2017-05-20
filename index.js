$(document).ready(function() {

  // var intervalID = window.setInterval(ticking, 1000);
  var tick = window.setInterval(function(){ticking()}, 1000);

  var ticking = function() {
    var clock = new Date();
    var hours = ((clock.getHours() < 10) ? '0' : '') + clock.getHours()
    var minutes = ((clock.getMinutes() < 10) ? '0' : '') + clock.getMinutes()
    var seconds = ((clock.getSeconds() < 10) ? '0' : '') + clock.getSeconds()
    var timeNow = $('<p>' + hours + ':' + minutes+ ':' + seconds+ '</p>');
    $('#clock').html(timeNow);
  }

});
