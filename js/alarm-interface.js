var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  $('#alarm').submit(function(event) {
    event.preventDefault();
    var alarmTime = $('#alarmTime').val();
    var alarmObject = new Alarm(alarmTime);
    var alarmSet = setInterval(function() {
      alarmObject.activateAlarm();
    }, 1000);

    $('#alarmOn').text(alarmTime);
  });
});
