// Your code here
$(document).ready(function() {

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var getTime = function() {

    var time = new Date();

    var hour = ( time.getHours() > 12 ? (time.getHours() - 12) : time.getHours() );
    var minute = ( time.getMinutes() < 10 ? "0" : "" ) + time.getMinutes();
    var second = ('0' + time.getSeconds()).slice(-2);
    var timeOfDay = ( time.getHours() >= 12 ? " PM" : " AM");

    var div2 = $("#clock");

    div2.html(hour + ":" + minute + ":" + second + timeOfDay);
    // div.append(h1);
    // div.append(hour, ":", minute, ":", second);
    // div.append();

    var d = new Date();
    var dayOfWeek = days[d.getDay()];
    var month = months[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();

    var p = $("<p></p>");
    p.html(dayOfWeek + ", " + month + " " + day + ", " + year);

    div2.prepend(p);
    // div2.html(p);

  };

  var interval = setInterval(function(){ getTime()}, 1000);

});

  // var interval2 = setInterval(function() { getDate()}, 1000);


    // var getDate = function() {
    //   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     var d = new Date();
    //     var dayOfWeek = days[d.getDay()];
    //     var month = months[d.getMonth()];
    //     var day = d.getDate();
    //     var year = d.getFullYear();
    //
    //     var div1 = $("#date").html(dayOfWeek + ", " + month + " " + day + ", " + year);
    // };
//
//
// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
// }

  // console.log(time.hour);

  // var h1 = $("<h1></h1>");
  // // var hour = time.hour;
  // // var minute = time.minute;
  // // var second = time.second;
  //
  // // div.append(hour, minute, second);
  //
  //
  // var h1 = $("<h1>" + time.hour + ":" + time.minute + ":" + time.second + "</h1>");
  // div.append(h1);

  // var h1 = $("<h1></h1>");
  // var hour = time.hour;
  // var minute = time.minute;
  // var second = time.second;
  //
  // // div.append(h1);
  //
  // div.append(hour, ":", minute, ":", second);

// var intervalID = scope.setInterval(getTime(), 1000);

  // var intervalID = time.setInterval(Clock, 1000);

  // var Clock = function() {
  //   var currentDate = new Date();
  //   // this.hour = currentDate.getHours();
  //   // this.minute = currentDate.getMinutes();
  //   // this.second = currentDate.getSeconds();
  // };


  // var h1 = $("<h1></h1>");
