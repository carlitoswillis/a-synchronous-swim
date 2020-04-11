
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});




// var randomMoves = function (data) {

//   var choices = ['left', 'right', 'up', 'down'];
//   if (data) {
//     var direction = choices[Math.floor(Math.random() * 4)];
//     var move = SwimTeam.move(direction);
//     console.log('move made!!')
//   }
// }

// setInterval(function(){

//   var settings = {
//     "url": "http://127.0.0.1:3000",
//     "method": "GET",
//     "timeout": 0,
//     "success": randomMoves
//   };

//   $.ajax(settings).done(function (data) {
//     console.log(data);
//   });

// }, 300);











console.log('Client is running in the browser!');
