$(document).ready(function() {

  var clock = function() {

    var time = new Date();

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ];

    var month = monthNames[time.getMonth()];
    var date = time.getDate();
    var year = time.getFullYear();



    var decideLeadingZero = function(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    };

    var twelveHourFormat = ((time.getHours() + 11) % 12 + 1);
    var hours = decideLeadingZero(twelveHourFormat);
    var minutes = decideLeadingZero(time.getMinutes());
    var seconds = decideLeadingZero(time.getSeconds());
    var suffix = (time.getHours() >= 12)? 'pm' : 'am';


    var timeArray = [hours, minutes, seconds].join(":");

    var newTime = month + " " + date + ", " +  year + " " + timeArray + " " + suffix;

    $('#clock').html(newTime);
  };

  clock();
  setInterval(clock, 1000);

});
