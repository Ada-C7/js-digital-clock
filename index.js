// Your code here

$(document).ready(function() {

  setInterval(function(){
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var month = date.getUTCMonth() + 1;
    var day = date.getDate();
    var weekday = date.getDay();
    var year = date.getFullYear();
    var amPm = 'AM';



    var twelveHour = function(hour){
      if(hour > 12 ){
        hour = hour - 12;
        amPM = 'PM';
      }
      return hour;
    };

    var twoNums = function(component) {
      if (component < 10) {
        display = "0" + component;
      } else {
        display = component;
      }
      return display;
  };


    var time = twelveHour(hours) + ":" + twoNums(minutes) + ":" + twoNums(seconds) + " " + amPM;
    var currentDate = month + "/" + day + "/" + year;
    $('#date').text(currentDate);
    $('#clock').text(time);
  }, 1000);


});
