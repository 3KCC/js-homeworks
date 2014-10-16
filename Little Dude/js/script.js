var dude = { 
	health: 10,
	love: 10,
	happiness: 10,
	
	feed: function() {
		this.health += randomInt(2,4);
		this.love -= randomInt(1,2);
		this.happiness -= randomInt(1,2);
		$('.mouth').addClass('feed');
		setTimeout(function () {
			$('.mouth').removeClass('feed');
		}, 700);
		this.updateStat();
		this.styleDude();
	},

	hug: function() {
		this.health -= randomInt(1,2);
		this.love += randomInt(2,4);
		this.happiness -= randomInt(1,2);
		$('.head').addClass('hug');
		setTimeout(function () {
			$('.head').removeClass('hug');
		}, 700);
		this.updateStat();
		this.styleDude();
	},

	play: function() {
		this.health -= randomInt(1,2);
		this.love -= randomInt(1,2);
		this.happiness += randomInt(2,4);
		$('#dude_container').addClass('play');
		setTimeout(function () {
			$('#dude_container').removeClass('play');
		}, 700);
		this.updateStat();
		this.styleDude();
	},

	updateStat: function() {
		if (this.health <= 0 || this.love <= 0 || this.happiness <= 0) {
    		$('#health').text('Health: XXX');
    		$('#love').text('Love: XXX');
    		$('#happiness').text('Happiness: XXX');
    		$('button').attr('disabled','disabled');
    	} else {
		$('#health').text('Health: ' + this.health);
		$('#love').text('Love: ' + this.love);
		$('#happiness').text('Happiness: ' + this.happiness);
		}
	},

	styleDude: function() {
    	if (this.health >= 23) {
    		$('.head').css({top: 80, left: 90, height:350, width:415});
    	} else if (this.health >= 18) {
    		$('.head').css({top: 130, left: 140, height:250, width:300});
    	} else if (this.health >= 12) {
    		$('.head').css({top: 150, left: 170, height:200, width:240});
    	} else {
    		$('.head').css({top: '12em', left: '14em', height:150, width:180});
    	}

    	if ((this.love < 6 )|| (this.happiness < 6) || (this.health < 6)) {
    		$('.mouth').addClass('frown');
    		$('.mouth').removeClass('smile');
    		$('.mouth').removeClass('joy');
    	} else if (this.happiness >= 14) {
    		$('.mouth').addClass('joy');
    		$('.mouth').removeClass('smile');
    	} else if (this.happiness < 14 && this.happiness >= 6) {
    		$('.mouth').addClass('smile');
    		$('.mouth').removeClass('joy');
    		$('.mouth').removeClass('frown');
    	} 

    	if (this.love >= 23) {
    		$('.head').css({backgroundColor: '#d6003d'});
    	} else if (this.love >=18) {
    		$('.head').css({backgroundColor: '#ff749c'});
    	} else if (this.love >= 14) {
    		$('.head').css({backgroundColor: '#ff749c'});	    		
    	} else if (this.love < 14 && this.love >= 6) {
    		$('.head').css({backgroundColor: '#FFFFFA'});	    			    		
    	} else {
    		$('.head').css({backgroundColor: '#d8e6d4'});	    			    			    		
    	}
	}
};

$(document).ready(function(){
	$("#btn_feed").click( function(){dude.feed();});
	$("#btn_hug").click( function(){dude.hug();});
	$("#btn_play").click( function(){dude.play();});
});


function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
