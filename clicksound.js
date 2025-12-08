$( document.body ).mousedown(function() {
    $("#clickDownSound")[0].currentTime = 0;
    $("#clickDownSound")[0].play();
});



$( document.body ).mouseup(function() {
    $("#clickUpSound")[0].currentTime = 0;
    $("#clickUpSound")[0].play();
});