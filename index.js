$(document).ready(function(){
        var getDate = function(){
            var stringDate = new Date();
            var h = stringDate.getHours();
            var m = stringDate.getMinutes();
            var s = stringDate.getSeconds();
            var time = "am";

            if (h > 12) {
                h -= 12;
                time = "pm";
            }


            // would be nice to DRY this up if there's a way
            if (m < 10) {
                var mTensDigit = "0";
            } else {
                var mTensDigit = "";
            }

            if (s < 10) {
                var sTensDigit = "0";
            } else {
                var sTensDigit = "";
            }

            var jqueryDate = h + ":" + mTensDigit + m + ":" + sTensDigit + s + " " + time;
            $("#clock").text(jqueryDate);
        }

        var intervalID = window.setInterval(getDate, 1000);
});
