$(".rollover").mouseenter(function() {
    $("#rolloverSound")[0].currentTime = 0;
    $("#rolloverSound")[0].play();
});