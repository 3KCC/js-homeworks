// number of drops created.
var nbDrop = 500; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain(i) {
    if(i>0) {
        setTimeout(function(){
            var dropLeft = randRange(535,780);
            $('#rain_container').append('<div class="drop" id="drop'+i+'"></div>');
            $('#drop'+i).css('left',dropLeft);
            i--;
            createRain(i);},150);
    }
}
// Make it rain
createRain(nbDrop);