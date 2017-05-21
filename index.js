$(document).ready(function() {

  var getTime = function() {
    var referenceDate = new Date();
    var hours = referenceDate.getHours();
    var minutes = referenceDate.getMinutes();
    var seconds = referenceDate.getSeconds();
    var time = "AM";


    // var newDate = this.referenceDate.getTime();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours > 12) {
      hours = hours - 12;
      time = 'PM';
    }

    if (hours === 0) {
      hours = 12;
    }

    var clock = $('#clock');
    var show = (hours + " " + minutes + " " + seconds + " " + time);
    clock.append(show);

    var intervalID = scope.setInterval(getTime, 1000);
  };
});






// get timer
//time won't update

// change append to text


// module.exports = Clock;
