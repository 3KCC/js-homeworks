var numOfImg = 14;

$(function(){
	$('.container').on('click', addThrobbers)
})

function change_msg() {
	var lstMsg = ['Click anywhere to begin!',"That's odd. Try clicking somewhere else.",
					'So weird! Maybe try the other side?', "Welp. I got nothing else for you. You're on your own right now."]
	var msg = $('#message');
	var pos = lstMsg.indexOf(msg.text());
	if(pos < lstMsg.length - 1) {
		msg.text(lstMsg[pos+1]);
		if(pos == (lstMsg.length - 2)) {
			setTimeout(function () {
				msg.fadeOut('2000');
			}, 4000);
		}
	}
}

function addThrobbers(event) {
	var x = event.pageX;
	var y = event.pageY;
	var src = getRandomImg();
	if(src.slice(-3) != 'png'){
		$('<img src="'+ src + '" style="width: auto; height: auto; position: absolute; ' +
	        'left:' + x + 'px; top:'+ y +'px">').appendTo('.container');
	} else {
		$('<img class="spin" src="'+ src + '" style="width: auto; height: auto; position: absolute; ' +
	        'left:' + x + 'px; top:'+ y +'px">').appendTo('.container');
	}
	change_msg();
}

function getRandomImg() {
	var randIndex = parseInt(Math.random() * numOfImg + 1, 10);
	var imgsrc = 'img/t' + randIndex;
	if(randIndex != 14) {
		imgsrc += '.gif';
	} else {
		imgsrc += '.png';
	}
	return imgsrc;
}