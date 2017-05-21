$(document).ready(function() {



//};
var clock = function() {

var time = new Date();
var month = time.getMonth();
var date = time.getDate();
var year = time.getYear();

var hours = ('0'  + time.getHours()).slice(-2);
var minutes = ('0'  + time.getMinutes()).slice(-2);
var seconds = ('0' + time.getSeconds()).slice(-2);


var newTime = month + "/" + date + "/" +  year + " " + hours + ":" + minutes + ":" + seconds;

return $('#clock').html(newTime);
};

    setInterval(clock, 1000);

});
