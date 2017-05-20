$(document).ready(function() {

  var clock_div = $('#clock');

  set_time = function(){
    var currentTime = new Date().toTimeString();
    var test = Date.now();
    clock_div.text(currentTime.split(' ')[0]);
  };

  setInterval(set_time, 1000);

});
