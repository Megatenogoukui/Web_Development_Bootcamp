$("h1").css("color", "red");
$(document).keydown(function(event){
    var keypressed = event.key;
    $("h1").text(keypressed);
})