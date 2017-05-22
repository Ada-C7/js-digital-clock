$(document).ready(function() {
  var checkTime = setInterval(function() {
    var today = new Date(Date.now());

    console.log(today);
    $('#clock').html(today);
  }, 1000);
});
