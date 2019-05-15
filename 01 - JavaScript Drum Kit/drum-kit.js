function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
	
	if(!audio) return; //stop the function from running al together
	audio.currentTime = 0; //rewind to start

	audio.play();

	key.classList.add('playing');
	//This is the same thing as key.addClass('playing') in jquery
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; //skip if it is not transform
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);