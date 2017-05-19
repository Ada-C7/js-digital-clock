
$(document).ready(function() {

console.log('Working script');

  // var today = new Date();
  // $('#clock').append(today);

  var start = new Date();
  var seconds = start.getSeconds();

  setInterval(function() {
      $('#clock').text(new Date(), seconds);
});
});
