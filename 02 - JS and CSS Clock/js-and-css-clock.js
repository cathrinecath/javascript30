const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// flicker issues fixed
function reset(hand, degrees){
	if (degrees === 90) {
		hand.style.transition = 'all 0.0s';
	}
}

// get all those seconds, minutes, and hours as well as calculate the degrees
function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) * 360) +90;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes/60) * 360) + 90;

	const hours = now.getHours();
	const hoursDegrees = ((hours/12) * 360) +90;

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	reset(secondHand, secondsDegrees);
	reset(minHand, minutesDegrees);
	reset(hourHand, hoursDegrees);
}


setInterval(setDate, 1000);