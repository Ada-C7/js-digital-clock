$(document).ready(function() {



//};
var clock = function() {

var time = new Date();
var month = time.getMonth();
var date = time.getDate();
var year = time.getFullYear();

var hours = ((('0'  + time.getHours()).slice(-2) + 11) %12 + 1);
var minutes = ('0'  + time.getMinutes()).slice(-2);
var seconds = ('0' + time.getSeconds()).slice(-2);
var suffix = (time.getHours() >= 12)? 'pm' : 'am';


var newTime = month + "/" + date + "/" +  year + " " + hours + ":" + minutes + ":" + seconds + " " + suffix;

return $('#clock').html(newTime);
};

    setInterval(clock, 1000);

});
