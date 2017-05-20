$(document).ready(function() {

var getTime = function() {
  var referenceDate = new Date();
  var hours = referenceDate.getHours();
  var minutes = referenceDate.getMinutes();
  var seconds = referenceDate.getSeconds();
  var time = undefined;


  // var newDate = this.referenceDate.getTime();
if (hours > 12) {
   time = 'AM';
} else if (hours < 12) {
  time = 'PM';
}

  var clock = $('#clock');
  var show = (hours + " " + minutes + " " + seconds + " " + time);
  clock.append(show);

  var intervalID = scope.setInterval(getTime, 1000);
});






// get timer
//time won't update

// change append to text


// module.exports = Clock;
