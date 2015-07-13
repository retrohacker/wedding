/*
Get time until wedding and begin clock render loop.
*/
var thedate = moment.tz("2016-05-29T18:00:00","America/Phoenix").toDate()
$('div.wedding-title-clock').countdown(thedate,function(event) {
  $(this).text(
    event.strftime('%D:%H:%M:%S')
  )
})

/*
Setup header render loop
*/
var $sunpath = $('#wedding-sunpath path')
var sunpathLength = $sunpath[0].getTotalLength()
console.log(sunpathLength)
var $sun = $('#wedding-sun')
var color1 = "#D43B08"
var color2 = "#D11919"
var color3 = "#17B9E4"
var color4 = "#001848"

var suntween = new TWEEN.Tween({length:0})
    .to({length:sunpathLength},10000)
    .onUpdate(function() {
      var point = $sunpath[0].getPointAtLength(this.length)
      var screenWidth = $(window).width()
      var sunWidth = $sun.width()
      var start = 0 - sunWidth*2
      var end = screenWidth + sunWidth*2
      var progress = this.length / sunpathLength
      var x = start + (end - start) * progress
      var y = point.y
      $sun.css({
        'transform':'translate('+x+'px,'+y+'px)',
      })
    })
    .repeat(9007199254740991)
    .start()

// animate loop
animate = function(){
  requestAnimationFrame(animate);
  // update tweens
  TWEEN.update();
}
animate();
