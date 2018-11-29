var c = document.querySelector('#c');
var ctx = c.getContext('2d');
var div = document.querySelector('#oppa');
var fps, fpsInterval, startTime, now, then, elapsed;

// Create a new image object
var img = new Image();

// Load an image
img.onload = function() {
	ctx.drawImage(img, 0, 0, 225, 400, 0, 0, c.width, c.height);
}
img.src = 'images/psy.png'

// Generate random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Animation
var mover = 0;
const diff = 225;
function animation() {
	now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here
        // Clear the canvas
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, 225, 400);

		div.style.backgroundColor = getRandomColor();

		if (mover <= 4725){
			mover = mover + 225;
			// Load an image
			img.onload = function() {
				ctx.drawImage(img, mover, 0, 225, 400, 0, 0, c.width, c.height);
			}
			img.src = 'images/psy.png'
		}
		else{
			mover = 450;
			// Load an image
			img.onload = function() {
				ctx.drawImage(img, mover, 0, 225, 400, 0, 0, c.width, c.height);
			}
			img.src = 'images/psy.png'
		}
    }

	requestAnimationFrame(animation);
}

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animation();
}

startAnimating(8);
