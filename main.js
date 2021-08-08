function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kills=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	mario_gameover=loadSound("gameover.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("webcam");
	

	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotposes);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("Model is loaded");

}
function gotposes(results){
	if(results.length>0){
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
	}
}






