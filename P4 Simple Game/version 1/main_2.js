var c = document.querySelector('#c');
var ctx = c.getContext('2d');
var fps, fpsInterval, startTime, now, then, elapsed;
var butt = document.querySelector('#skill');
var flag = true;

// Create a new image object
var img = new Image();

// Load an image
img.onload = function() {
	ctx.drawImage(img, 0, 0, 150, 128, 0, 0, c.width, c.height);
}
img.src = 'images/luffy.png'

// Animation
var mover = 0;
const diff = 150;
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
		ctx.fillRect(0, 0, 150, 400);

		if (mover <= 1700){
			mover = mover + 150;
			// Load an image
			img.onload = function() {
				ctx.drawImage(img, mover, 0, 150, 128, 0, 0, c.width, c.height);
			}
			img.src = 'images/luffy.png'
		}
		else{
			mover = 0;
			// Load an image
			img.onload = function() {
				ctx.drawImage(img, mover, 0, 150, 128, 0, 0, c.width, c.height);
			}
			img.src = 'images/luffy.png'
			flag = false;
		}
    }
    console.log(flag)

	if (flag == true) {
		requestAnimationFrame(animation);
	}
}

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animation();
}

function click_butt() {
	flag = true;
	startAnimating(10);
}

butt.addEventListener('click', click_butt);
