can = document.getElementById("can");
ctx = can.getContext("2d")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
	if(keyPressed == '82'){
		fabric.Image.fromURL("rr.jpg",function(Img){
			block_image_object= Img;
			block_image_object.scaleToWidth(150);
			block_image_object.scaleToHeight(140);
			block_image_object.set({
				top:block_x,
				left:block_y
			});
			canvas.add(block_image_object);
		}
	};
	if(keyPressed == '71'){
		block_x = 200;
		block_y = 200;
		fabric.Image.fromURL("gr.png",function(Img){
			block_image_object= Img;
			block_image_object.scaleToWidth(150);
			block_image_object.scaleToHeight(140);
			block_image_object.set({
				top:block_x,
				left:block_y;
			});
			canvas.add(block_image_object);
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	}
	
}
