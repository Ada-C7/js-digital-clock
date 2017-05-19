$(document).ready(function() {
  var Clock = function() {
    var referenceDate = [
      { date: new Date(), hours: new Date().getHours(), minutes: new Date().getMinutes(), seconds: new Date().getSeconds()}
    ];


    // new Date();
    // var hours = referenceDate.getHours();
    // var minutes = referenceDate.getMinutes();
    // var seconds = referenceDate.getSeconds();



    // var newDate = this.referenceDate.getTime();



};
var gs = new Clock();
var clock = $('#clock');
var show = $('<h1>' + console.log(gs) + '<h1>');
clock.append(show);
});





// module.exports = Clock;
