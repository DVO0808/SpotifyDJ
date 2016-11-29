$( document ).ready(function() {


function currentTime() {
            var now = moment();
            timeNow = moment(now).format('h:mm')


            $("#display").html(timeNow);

}


var currentTimeInterval = setInterval(currentTime, 1000);


});








