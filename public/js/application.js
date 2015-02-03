$(document).ready(function() {
    var starttime=(new Date()).getTime();

    function gamestart(player, image){

        var index = $('tr#' + player + '_strip td.active');
        var current_index = index.index();
        var length = ($( "#race td" ).length)/4;
        var next_index = current_index + 1;
        $('tr#' + player + '_strip td').eq(next_index).replaceWith( "<td class='active'> <img src=images/"+ image + "> </td>");
        index.replaceWith("<td><img src='images/road.jpg' alt='Road' ></td>");

        if (next_index == length) {
          var endtime=(new Date()).getTime();
          var time = (endtime-starttime )/1000;
          alert ( player + "win!!!!");
      //     result = document.getElementById( 'result' );
      //     result.playerWon.value = player;
      //     result.time_win.value = time;
      //     result.submit();
      $.ajax({
      type: "POST",
      url: '/result',
      data: {"playerWon":player, "time_win":time},
      success: function(data){
        // console.log(data)
        $("#finish").append(data);
      }

    });
       event.preventDefault();

      }

        }

  $(document).on('keyup', function(event) {
    if(event.which == 80) {
      gamestart("player1", "01-03.jpeg");
  }
   if ( event.which == 81 ) {
      gamestart("player2", "Super_Mario_16bit_by_schubacka.png");
  }
  });


});
