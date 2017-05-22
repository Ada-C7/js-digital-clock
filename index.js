// Your code here

var time = Date.now();
var target = document.getElementById('clock');  // Find the HTML element where the ID is js-lecture-target
target.innerHTML = '<p>' + time + '</p>'; // Put this HTML inside the div we retrieved above

// $(document).ready(function() {
//   var time = console.log("test");
//   var display = $('<p>' + time + '</p>');
//   $('.display').append(display);
// };
