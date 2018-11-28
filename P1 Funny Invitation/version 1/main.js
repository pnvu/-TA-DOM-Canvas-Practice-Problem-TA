var noBut = document.querySelector('#noBut'); // get the button element
var yesBut = document.querySelector('#yesBut');

var c = document.querySelector('#dsp'); // get the display element

function yesButtonClick() {
	c.innerHTML = "<h1>I know you would, ha ha ha!</h1>";
	yesBut.removeEventListener('click', buttonClick); //remove the event
}

function noButtonClick() {
	var posx = Math.random()*500;
    var posy = Math.random()*90;

    console.log(posx);
    console.log(posy);

    noBut.style.postion = 'absolute';
	noBut.style.top = posx + 'px';
	noBut.style.left = posy + '%';
}

yesBut.addEventListener('click', yesButtonClick);
noBut.addEventListener('mouseenter', noButtonClick);

