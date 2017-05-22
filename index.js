$(document).ready(function () {
  window.setInterval(
    function () {
      $('#clock').html(new Date(Date.now()).toLocaleTimeString());
    }, 1000
  );
});
