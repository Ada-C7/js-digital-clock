// Your code here
var time = function() {
  var dateTime = Date(Date.now());
  dateTime = dateTime.replace(' GMT-0700 (PDT)','');
  $('#clock').html(dateTime);
};

$(document).ready(function() {
  window.setInterval(time, 1000);
});
