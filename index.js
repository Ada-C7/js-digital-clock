
//as soon as document is loaded

var toClockString = function(number) {
  var str_time = number.toString();
  if (str_time.length === 1) {
    return "0" + str_time;
  } else {
    return str_time;
  }
};

var showTime = function(now) {
  var hours = toClockString(now.getHours()),
      minutes = toClockString(now.getMinutes()),
      seconds = toClockString(now.getSeconds());

  var date = now.toDateString();
  $("#clock").html('<div>' + hours + ":" + minutes + ":" + seconds + '</div>' + '<p>' + date + '</p>');
};

$(document).ready(function(){
  setInterval(function(){
    var now = new Date();
    showTime(now);
  }, 1000);
});
