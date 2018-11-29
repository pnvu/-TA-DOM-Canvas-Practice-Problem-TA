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

// Create the right image
// ----------------------
var r_c = document.querySelector('#c2');
var r_ctx = r_c.getContext('2d');

var r_img = new Image()
// Load an image
r_img.onload = function() {
	r_ctx.drawImage(r_img, 0, 0, 0, 200, 0, 0, 500, 10);
}
r_img.src = 'images/lufface.png'

// Create the left image
// ---------------------
var l_c = document.querySelector('#c3');
var l_ctx = l_c.getContext('2d');

var l_img = new Image()
// Load an image
l_img.onload = function() {
	l_ctx.drawImage(l_img, 0, 0, 0, 200, 0, 0, 500, 10);
}
l_img.src = 'images/lufface2.png'

// Animation
var mover = 0;
var r_mover = 0;
var l_mover = 0;
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

		// ---------------------------
		// Lufface 1
		if (r_mover <= 204){
		    // Clear the canvas
			r_ctx.fillStyle = "white";
			r_ctx.fillRect(0, 0, 500, 300);
			r_mover = r_mover + 20;
			// Load an image
			r_img.onload = function() {
				r_ctx.drawImage(r_img, 0, 0, 500, r_mover, 0, 0, 500, r_mover);
			}
			r_img.src = 'images/lufface.png'
		}
		else{
			// Clear the canvas
			r_ctx.fillStyle = "white";
			r_ctx.fillRect(0, 0, 500, 300);
			r_mover = 0;
			// Load an image
			r_img.onload = function() {
				r_ctx.drawImage(r_img, 0, 0, 0, 0, 0, 0, 500, r_mover);
			}
			r_img.src = 'images/lufface.png'
		}

		// -----------------------------
		// Lufface 2
		if (l_mover <= 204){
		    // Clear the canvas
			l_ctx.fillStyle = "white";
			l_ctx.fillRect(0, 0, 500, 300);
			l_mover = l_mover + 20;
			// Load an image
			l_img.onload = function() {
				l_ctx.drawImage(l_img, 0, 0, 500, l_mover, 0, 0, 500, l_mover);
			}
			l_img.src = 'images/lufface2.png'
		}
		else{
			// Clear the canvas
			l_ctx.fillStyle = "white";
			l_ctx.fillRect(0, 0, 500, 300);
			l_mover = 0;
			// Load an image
			l_img.onload = function() {
				l_ctx.drawImage(l_img, 0, 0, 0, 0, 0, 0, 500, l_mover);
			}
			l_img.src = 'images/lufface2.png'
		}
    }
    //console.log(flag)

	if (flag == true) {		
		requestAnimationFrame(animation);
	}
	else {
		// Load an image
		r_img.onload = function() {
			r_ctx.drawImage(r_img, 0, 0, 0, 0, 0, 0, 500, r_mover);
		}
		r_img.src = 'images/lufface.png'

		// Load an image
		l_img.onload = function() {
			l_ctx.drawImage(l_img, 0, 0, 0, 0, 0, 0, 500, l_mover);
		}
		l_img.src = 'images/lufface.png'
		r_mover = 0;
		l_mover = 0;
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
	r_flag = true;
	startAnimating(5);
}

butt.addEventListener('click', click_butt);
