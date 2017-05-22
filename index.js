$(document).ready(function() {
     var days = [
          ['Sunday', 'Sun'],
          ['Monday', 'Mon'],
          ['Tuesday', 'Tue'],
          ['Wednesday', 'Wed'],
          ['Thursday', 'Thu'],
          ['Friday', 'Fri'],
          ['Saturday', 'Sat']
     ];

     var months = [
          ['January'],
          ['February'],
          ['March'],
          ['April'],
          ['May'],
          ['June'],
          ['July']
          ['August'],
          ['September'],
          ['October'],
          ['November'],
          ['December']
     ];

     var radioButton = $("input[name=clock]:radio")

     var squatter = setInterval(function() { refreshSquatterTime () }, 1000);
     var trotter = setInterval(function() { refreshTrotterTime () }, 1000);


     function refreshColor() {
          var today = new Date(),
          hours = today.getHours();
          switch(true) {
               case (hours > 18) :
                    $('body').css('background', 'linear-gradient(to top right, #58105b, #105a5b)');
                    break;
               case (hours > 16 && hours < 19) :
                    $('body').css('background', 'linear-gradient(to top right, #b04708, #105a5b)');
                    break;
               default:
                    $('body').css('background', 'linear-gradient(to top right, #e9d659, #105a5b)');
          }
     }

     function refreshDay(){

          var today = new Date(),
               currentDay = today.getDate(),
               currentWeekday = today.getDay(),
               currentMonth = today.getMonth(),
               currentYear = today.getFullYear();

          if (matchMedia) {
               var screenSize = window.matchMedia('(max-width: 767px)');
               screenSize.addListener(WidthChange);
               WidthChange(screenSize);
          }

          function WidthChange(screenSize) {
               if (screenSize.matches) {
                    $('p').remove();
                    for (i = 0; i < 7; i++) {
                         if (currentWeekday == [i]) {
                              $('p').css('background', 'rgba(255, 255, 255, 0.3)');
                              var weekday = '<p>' + days[i][1] + '</p>';
                         } else {
                              var weekday = '<p>' + days[i][1] + '</p>';
                         }
                         $('#days').append(weekday);
                    }
               } else {
                    $(  'p' ).remove();
                    for (i = 0; i < 7; i++) {
                         if (currentWeekday == [i]) {
                              $( 'p' ).css( 'color', 'rgba(255, 255, 255, 0.3)');
                              var weekday = '<p>' + days[i][0] + '</p>';
                         } else {
                              var weekday = '<p>' + days[i][0] + '</p>';
                         }
                         $('#days').append(weekday);
                    }
               }
          }

          var currentDate = currentDay + ' ' + months[currentMonth] + ' ' + currentYear;
          $('#date').html(currentDate);
     };

     function refreshTrotterTime() {

          var today = new Date(),
               hours = today.getHours(),
               minutes = today.getMinutes(),
               seconds = today.getSeconds();

          if (hours.toString().length < 2) {
                    hours = '0' + hours;
          }

          if (minutes.toString().length < 2) {
               minutes = '0' + minutes;
          }

          if (seconds.toString().length < 2) {
                    seconds = '0' + seconds;
          }
               var currentTime = '<span>' + hours + ':</span><span>' + minutes + ':</span> <span>' + seconds + '</span>';
               $('#time').html(currentTime);
     };

     function refreshSquatterTime() {

          var today = new Date(),
               hours = today.getHours(),
               minutes = today.getMinutes(),
               seconds = today.getSeconds();

          if (hours > 12) {
                    hours = hours - 12;
          }

          if (minutes.toString().length < 2) {
              minutes = '0' + minutes;
          }

          if (seconds.toString().length < 2) {
                    seconds = '0' + seconds;
          }
              var currentTime = '<span>' + hours + ':</span><span>' + minutes + ':</span> <span>' + seconds + '</span>';
              $('#time').html(currentTime);
     };

     var refreshTime = radioButton.change(function () {

          if ($('input[name=clock]:checked').val() == "24-hour") {
               clearInterval(squatter)
               refreshTrotterTime();
               trotter = setInterval(function() { refreshTrotterTime () }, 1000);

          } else if ($('input[name=clock]:checked').val() == "12-hour") {
               clearInterval(trotter)
               refreshSquatterTime();
               squatter = setInterval(function() { refreshSquatterTime () }, 1000);
         }
    });

    refreshColor();
    window.setInterval(refreshColor, 1000);

    refreshDay();
    window.setInterval(refreshDay, 60000);

});
