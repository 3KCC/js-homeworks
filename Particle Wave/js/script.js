function createParticle() {
	var myParticles = [];
	var container = $( ".container" );
	for ( var i = 0; i < 560; i++ ) {
		myParticles.push('<div class="particles" id="p' + i +'"></div>');
	}
	container.append( myParticles.join( "" ) );
}

function makeFlip(id) {
	$("#"+ id).addClass('wave');
	setTimeout(function(){$('.particles').removeClass('wave')},400);
}

function makeWave(position) {
	$("#p1").trigger('click');
	/*setTimeout(function () {
		$('#p' + (pos + 1)).trigger('click');
		$('#p' + (pos - 1)).trigger('click');
		$('#p' + (pos - 28)).trigger('click');
		$('#p' + (pos + 28)).trigger('click');
	}, 50);*/
}

function waving(event) {
	var id = $(this).attr('id');
	makeFlip(id);
	makeWave(getPosition(id));
}

function getPosition(id) {
	return id.substr(1);
}

//used $( document ).ready( handler ) to ensure element is selected after DOM is ready
$(function(){
    createParticle();
    $('.particles').on('click', waving);
});