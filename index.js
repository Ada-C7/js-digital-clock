// Your code here

var intervalID = window.setInterval(myCallback, 1000);

function myCallback() {
  var unix_time = Date.now();

  var dateTime = Date(unix_time);
  dateTime = dateTime.replace(' GMT-0700 (PDT)','');
  console.log(dateTime);
}
