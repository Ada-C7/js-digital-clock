

$(document).ready(function() {

  // so something show up on the page right away
  // var date = new Date();
  // $('#clock').html(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

  var getTime = function(date) {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    // Change to meridian time
    var meridian = 'AM';
    if ( hours >= 12 ) {
      hours = hours - 12;
      meridian = 'PM';
    }

    var time = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
    time += ' ' + meridian;

    $('#clock').html(time);
  };

  var addZero = function(time) {
    return ( time < 10 ) ? "0" + time : time;
  };




  setInterval(getTime, 1000)

});
