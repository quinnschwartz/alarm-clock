function Alarm(alarmTime) {
  console.log(alarmTime);
  // this is a string. "12:30"
  this.alarmTime = alarmTime;
}

Alarm.prototype.activateAlarm = function() {
  var currentTime = moment().format("HH:mm");
  var setTime = this.alarmTime;
  console.log(currentTime, setTime);

  if (currentTime === setTime) {
    var sound = new Audio('party.mp3');
    sound.play();
    alert("it's party time!");
  }
};






exports.alarmModule = Alarm;
