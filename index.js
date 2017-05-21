// Your code here

$(document).ready(function() {



  var setTime = function() {
    date = new Date();
    time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    $('#clock').text(time);
  };

  setInterval(setTime, 1000);

});
