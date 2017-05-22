$(document).ready(function () {
  var clocks = function (){
  var now = new Date(),
    hours = now.getHours().toString().length === 1 ? '0' + now.getHours() : now.getHours(),
    minutes = now.getMinutes().toString().length === 1 ? '0' + now.getMinutes() : now.getMinutes(),
    seconds = now.getSeconds().toString().length === 1 ? '0' + now.getSeconds() : now.getSeconds(),
    clocks = ( hours + ':' + minutes + ':' + seconds)
$('.clock').text(clocks)
}
//
setInterval(clocks, 1000);



});
