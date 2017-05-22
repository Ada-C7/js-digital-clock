var addZero = function(num) {
  if(num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};


var setTime = function() {
  date = new Date();
  h = addZero(date.getHours());
  m = addZero(date.getMinutes());
  s = addZero(date.getSeconds());
  time = h + ":" + m + ":" + s;
  $('#clock').text(time);
};


$(document).ready(function() {

  setInterval(setTime, 1000);

});
