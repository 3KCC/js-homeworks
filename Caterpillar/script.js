var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
});


// cache the selector
for(i = 0; i < 20; i++){
	var follower = $("#spot" + i);
	moveIt(follower, i + 1);
}

function moveIt(elm, speed) {
	var xp = 0, yp = 0;
	var loop = setInterval(function () {
		xp += (mouseX - xp) / speed;
		yp += (mouseY - yp) / speed;
		$(elm).css({left:xp, top:yp});
		}, 30);
};