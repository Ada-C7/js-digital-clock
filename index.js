
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  //will need to add leading zeros for single digit times

  $(document).ready(function() { // anonymous function
      var time = $('<p>' + h + ":" + m + ":" + s + '</p>');
      $('#clock').append(time);
  });


// use setInterval method to use findTime function to update each second

// var intervalID;
//
// function updateTime() {
//   intervalID = setInterval(findTime, 1000);
// }


//in html
// <body onload="updateTime();">
