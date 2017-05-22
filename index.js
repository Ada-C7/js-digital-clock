// Your code here
$(document).ready(function(){


  var intervalID = window.setInterval(clock, 500);

  function clock() {
    var unix_time = Date.now();

    var local = Date(unix_time);
    local = local.replace(' GMT-0700 (PDT)', '');
    $('#clock').html(local);
  }
});
