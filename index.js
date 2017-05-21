$(document).ready(function() {



var clock = function() {

var time = new Date();

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var month = monthNames[time.getMonth()];
var date = time.getDate();
var year = time.getFullYear();

var convertedHour = (time.getHours() % 12 + 1);
var hours = ('0'  + convertedHour).slice(-2);
var minutes = ('0'  + time.getMinutes()).slice(-2);
var seconds = ('0' + time.getSeconds()).slice(-2);
var suffix = (time.getHours() >= 12)? 'pm' : 'am';


var newTime = month + " " + date + ", " +  year + " " +  hours + ":" + minutes + ":" + seconds + " " + suffix;

return $('#clock').html(newTime);
};
		clock();
    setInterval(clock, 1000);

});
