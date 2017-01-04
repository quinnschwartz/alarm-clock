$(document).ready(function(){
  // $('#time').text(moment());

  var update;
  (update = function() {
      document.getElementById("time")
      .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
})();
  setInterval(update, 1000);

});
