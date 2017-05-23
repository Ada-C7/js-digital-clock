$(document).ready(function() {

  var DateTime = function() {
    var date = new Date();

    this.monthNumber = date.getMonth();
    this.day = date.getDate();
    this.year = date.getFullYear();

    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  };

  DateTime.prototype = {

    determineDate: function() {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ];

      var monthName = monthNames[this.monthNumber];
      return monthName + " " + this.day + ", " +  this.year + " ";
    },

    determineTime: function() {
      var hour = this.twelveHourFormat(this.hours);
      var minutes = this.decideLeadingZero(this.minutes);
      var seconds = this.decideLeadingZero(this.seconds);

      var timeArray = [hour, minutes, seconds].join(":");
      var suffix = (this.hours >= 12)? 'pm' : 'am';

      return timeArray + " " + suffix;
    },

    twelveHourFormat: function(hour) {
      var twelveHourConversion = ((hour + 11) % 12 + 1);
      return this.decideLeadingZero(twelveHourConversion);
    },

    decideLeadingZero: function(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
  };

  var clock = function(newDateTime) {
    newDate = new DateTime();
    var date = newDate.determineDate();
    var time = newDate.determineTime();

    return $('#clock').html(date + time);
  };

  var initialDateTime = new DateTime();
  clock(initialDateTime);

  setInterval(clock, 1000, initialDateTime);

});
