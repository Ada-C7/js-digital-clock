$(document).ready(function() {

  var clock = function() {

    var time = new Date();
    var month = time.getMonth();
    var date = time.getDate();
    var year = time.getYear();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();


    var newTime = month + "/" + date + "/" +  year + " " + hours + ":" + minutes + ":" + seconds;

    $('#clock').html(newTime);
  };
  setInterval(clock);
});
