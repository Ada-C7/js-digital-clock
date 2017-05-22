$(document).ready(function(){

  var startTime = function(time_difference){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var h = today.getHours() + time_difference;
    if (h >= 24) {
      date = date + 1;
      h = h - 24;
    }
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    return (year + "/" + month + "/" + date + " " + h + ":" + m + ":" + s);
  } ;

  var checkTime = function(i) {
    if (i < 10) {i = "0" + i};
    return i;
  };

  // var time = startTime()
  // $('#clock').append(time);
  $('seoul').append(startTime(16));
  $('#seattle').append(startTime(0));
  $('#new_york').append(startTime(5)); //call the function and append
  $('#chicago').append(startTime(5));

  var liveClock = function(){
    // var clock = document.getElementById('clock');
    // var clock = $('#clock'); jquery
    $('#seoul').html(startTime(16));
    $('#seattle').html(startTime(0));
    $('#new_york').html(startTime(5));
    $('#chicago').html(startTime(5));
  };
  setInterval(liveClock, 1000);

});


//
// var checkTime(function(i) {
//   if (i < 10) {i = "0" + i};
//   return i;
// });
