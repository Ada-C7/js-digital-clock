$(document).ready(function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = date.getHours() < 12 ? 'AM' : 'PM';
    var time = $("<p>" + hours + ":" + minutes + ":" + seconds + " " + ampm + "</p>");
    $('#clock').append(time);
  // var timer = setInterval(updateTime, 1000);
});
