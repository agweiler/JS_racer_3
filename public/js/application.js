$(document).ready(function() {
    var starttime=(new Date()).getTime();

   var Player = function(name, image){
       this.name = name;
       this.image = image;
       this.currentPosition = 0;

      function move(){
        if(name == "player1"){
         this.currentPosition += 2;
        }
        else {
          this.currentPosition++;
        }
          render(this.name, this.image, this.currentPosition);
      }

      this.move = move;
     };

  var Game = function(){

      this.length = length;
      this.length = 33;

  }

var player1 = new Player("player1", "01-03.jpeg");
var player2 = new Player("player2", "Super_Mario_16bit_by_schubacka.png");
var game1 = new Game();


   function render(player, image, position){

        var index = $('tr#' + player + '_strip td.active');
        var current_index = position;
        var length = game1.length + 1;
        console.log(length);
        $('tr#' + player + '_strip td').eq(current_index).replaceWith( "<td class='active'> <img src=images/"+ image + "> </td>");
        index.replaceWith("<td><img src='images/road.jpg' alt='Road' ></td>");

         gamesEnd(current_index, length, player);

        };


   function gamesEnd(currentPosition, length, player) {
        if (currentPosition == length) {
          var endtime=(new Date()).getTime();
          var time = ((endtime-starttime )/1000) - 4;
          alert ( player + "win!!!!");

        $.ajax({
          type: "POST",
          url: '/result',
          data: {"playerWon":player, "time_win":time},
          success: function(data){
              $("#finish").append(data);
           }

      });
       event.preventDefault();

      }
   };





  $(document).on('keyup', function(event) {
    if(event.which == 80) {
      player1.move();
  }
   if ( event.which == 81 ) {
      player2.move();
  }
  });


});