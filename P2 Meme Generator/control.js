var c = document.querySelector('#c');
ctx = c.getContext('2d');

var img_num = true;

// background for memes
ctx.fillRect(0, 0, 700, 700);

// configuration for content
ctx.font = "42px Impact";
ctx.strokeStyle = "white";

function clickFile1() {
	img_num = true;
	console.log(img_num);
}

function clickFile2() {
	img_num = false;
	console.log(img_num);
}

function loadImage(e) {
	//global img_num;
	var file = e.target.files[0];

	var reader = new FileReader();
	reader.onload = function(fileObject) {

		var data = fileObject.target.result;

		var img = new Image();

		img.onload = function() {
			if(img_num == true){
				console.log(img_num);
				ctx.drawImage(img, 30, 30, 280, 300);
			}
			else {
				console.log(img_num);
				ctx.drawImage(img, 30, 360, 280, 300);
			}
		}

		img.src = data;
	};
	reader.readAsDataURL(file);
}

// Event handler for loading image
var file1 = document.getElementById('file1');
file1.addEventListener('click', clickFile1);
file1.addEventListener('change', loadImage);

var file2 = document.getElementById('file2');
file2.addEventListener('change', loadImage);
file2.addEventListener('click', clickFile2);

function loadText1(e) {
	var text = e.target.value;

	ctx.fillStyle = "black";
	ctx.fillRect(340, 0, 700 -  350, 300);
	ctx.fillStyle = "white";
	ctx.fillText(text, 350, 150);
}

function loadText2(e) {
	var text = e.target.value;

	ctx.fillStyle = "black";
	ctx.fillRect(340, 400, 700 -  380, 200);
	ctx.fillStyle = "white";
	ctx.fillText(text, 350, 480);
}

// Event handler for generating content
var meme1 = document.getElementById('meme1');
meme1.addEventListener('input', loadText1);

var meme2 = document.getElementById('meme2');
meme2.addEventListener('input', loadText2);
