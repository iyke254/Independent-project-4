//business logic
var game = function(png) {
  for (var i = 1; i <= png; i++) {
    if (i % 15 === 0) {
      $("#result").append("<li class='pgr'>PingPong</li>");
    } else if (i % 5 === 0) {
      $("#result").append("<li class='pgr'>Pong</li>");
    } else if (i % 3 === 0) {
      $("#result").append("<li class='pgr'>Ping</li>");
    } else {
      $("#result").append("<li class='pgr'>"+String(i)+"</li>");
      }
    }
  }

//user interface
$(document).ready(function() {
  $("form#game").submit(function(event) {
    $("li.pgr").remove();
    event.preventDefault();
    var png = parseInt($("input#png").val());
    game(png);

  });
});
