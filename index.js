// Your code here
$(document).ready(function() {
  var date = $('<h1>' + new Date() + '</h1>');
  // 	var currentHours = date.getHours();
  // 	var currentMinutes = date.getMinutes();
  // 	var currentSeconds = date.getSeconds();
  //   var num = 9;
  //   // console.log(date, currentHours, currentMinutes, currentSeconds);
  //
  // $('.clock').append(date);
  // $('h1').append(num);
  $('#clock').append(date);

  for (var i = 0; i < 5; i++) {
  // Will execute 5 times
  var listItem = $('<li>' + i + '</li>');
  $('.dynamic-list').append(listItem);
}


});




    // var listItem = $('<li>' + i + '</li>');

// new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
