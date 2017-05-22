$(document).ready(function () {
  var date = new Date(Date.now());
  var dateString = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  $('#clock').append(dateString);
});
