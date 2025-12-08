
$(".playTooltipSound").mouseenter(function() {
  $("#tooltipHover")[0].currentTime = 0;
  $("#tooltipHover")[0].play();
});