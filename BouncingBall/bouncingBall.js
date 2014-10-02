var currentLevel = 1, currentSpeed = 10;

function next_level(){
	var e = document.getElementById('notice');
	var b = document.getElementById('ball');
	e.style.display = 'block';
	e.innerHTML = "Awesome! Next Level: " + currentLevel;
	b.style.display = 'none';
	var moveOn = function(){
		currentLevel += 1;
		currentSpeed -= 1;
		e.style.display = 'none';
		b.style.display = 'block';
		b.style.animationDuration = currentSpeed + 's';
		};
	if (currentSpeed > 1){
		setTimeout(moveOn,1000);
	}else{
		e.innerHTML = "Ranh qua pa!!!! =)) ";
	}
}
