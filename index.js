$(document).ready(function() {
  var refresh = setInterval(function() {
    var rawTime = new Date(Date.now());

    console.log(rawTime);
    $('#clock').html(rawTime);
  }, 1000);

});
