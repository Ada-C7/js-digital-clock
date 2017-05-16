// Your code here
$(document).ready(function() {

  var getMonthName = function(month){
    var month_arrays = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    return month_arrays[month];
  };

  var dateTime = new Date();
  var day = dateTime.getDate();
  var month = getMonthName(dateTime.getMonth());
  var year = dateTime.getFullYear();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second =  dateTime.getSeconds();
  $('#date').append( day + "   " +  month + "   " + year );

  var add_zeroes = function(num) {
    return ('0' + num).slice(-2);
  };

  var second = 1000;

  var updateClock =  function() {
    var clock = document.getElementById('clock');
    date = new Date();
    $('#clock').html(add_zeroes(date.getHours()) + ':' + add_zeroes(date.getMinutes()) + ':' + add_zeroes(date.getSeconds()));
  };
  setInterval(updateClock, second);




});
