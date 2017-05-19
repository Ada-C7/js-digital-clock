
  var findTime = function() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  //will need to add leading zeros for single digit times
  var time = $('<p>' + h + ":" + m + ":" + s + '</p>');
  $('#clock').empty();
  $('#clock').append(time);

};


  $(document).ready(function() {

    setInterval(findTime, 1000);

  });
