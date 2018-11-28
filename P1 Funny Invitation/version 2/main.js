var noBut = document.querySelector('#noBut'); // get the button element
var yesBut = document.querySelector('#yesBut');
//var c = document.querySelector('#dsp'); // get the display element
var barney = document.querySelector('#barney');	// Barney's image
var count = 0;

// Event occurs when clicking the YES button
function yesButtonClick() {
	//c.innerHTML = "<h1>I KNOW YOU WOULD, ha ha ha!</h1>";
	barney.src = 'images/answer.jpg'
	yesBut.removeEventListener('click', buttonClick); //remove the event
}

// Event occurs when moving the mouse to the NO button
function noButtonClick() {
	var posx = Math.random()*300;
    var posy = Math.random()*90;

    console.log(posx);
    console.log(posy);

    noBut.style.postion = 'absolute';
	noBut.style.top = posx + 'px';
	noBut.style.left = posy + '%';

	count++;
	if (count%6 == 0){
		alert("Really? You really wanna do that to me?")
	}
}

yesBut.addEventListener('click', yesButtonClick);
noBut.addEventListener('mouseenter', noButtonClick);


