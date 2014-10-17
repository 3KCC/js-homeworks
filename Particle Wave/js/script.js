var numOfPars = 532;

function createParticle() {
	var myParticles = [];
	var container = $( ".container" );
	for ( var i = 0; i < numOfPars; i++ ) {
		myParticles.push('<div class="particles" id="p' + i +'" ></div>');
	}
	container.append( myParticles.join( "" ) );
}

function makeFlip(pos) {
	$("#p"+ pos).addClass('wave');
	setTimeout(function(){$('#p'+ pos).removeClass('wave')},400);
}

function makeWave(pos) {
	makeFlip(pos);
	setTimeout(function() {
		$('#p' + (pos + 1)).trigger('click');
		$('#p' + (pos - 1)).trigger('click');
		$('#p' + (pos - 28)).trigger('click');
		$('#p' + (pos + 28)).trigger('click');
	},50);
	setTimeout(function () {
		$('#p' + pos).on('click', function (event) {
			$(this).off('click');
			makeFlip(pos);
		});
	}, 800);
}

function waving(event) {
	var id = $(this).attr('id');
	$(this).off('click');
	makeWave(getPosition(id));
}

function getPosition(id) {
	return parseInt(id.substr(1));
}

//used $( document ).ready( handler ) to ensure element is selected after DOM is ready
$(function(){
    createParticle();
    $(".particles").on('click', waving);
});