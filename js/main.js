var can1 ;
var can2 ;

var ctx1 ;
var ctx2 ;

var lastTime ;
var deltaTime ;

var backgroundPicture = new Image() ;

var canWidth ;
var canHeight ;

var ane ;
var fruit ;
var garbage ;

var mom ;
var baby ;

var mx ;
var my ;

var babyTail = [] ;
var babyEye = [] ;
var babyBody = [] ;

var socore ;

var cloud ;

var data ;

document.body.onload = game;
function game()
{
	// 程序的入口
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}
function init()
{
	// 获得 canvas context
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');				
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove' , onMouseMove , false) ;

	backgroundPicture.src = "./src/background.png"

	canHeight = can1.height;
	canWidth = can1.width

	ane = new aneObj() ;
	ane.init() ;

	fruit = new fruitObj() ;
	fruit.init() ;

	garbage = new garbageObj();
	garbage.init() ;

	mom = new momObj() ;
	mom.init() ;

	baby = new babyObj() ;
	baby.init();

	mx = canWidth * 0.5 ;
	my = canHeight * 0.5 ;

	for(var i = 0 ; i < 8 ; i ++)
	{
		babyTail[i] = new Image() ;
		babyTail[i].src = "./src/bigTail" + i + ".png" ;
	}
	for(var i = 0 ; i < 2 ; i ++)
	{
		babyEye[i] = new Image() ;
		babyEye[i].src = "./src/babyEye" + i + ".png" ;
	}
    for(var i = 0 ; i < 20 ; i ++)
    {
        babyBody[i] = new Image() ;
        babyBody[i].src = "./src/babyFade" + i + ".png" ;
    }

	socore = 100 ;

	cloud = new cloudObj() ;
	cloud.init() ;

	ctx1.fillStyle = "white" ;
	ctx1.fonr = "50px" ;
	data = 100 ;
}

function gameloop()
{
	requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	drawBackground();
	cloud.draw();
	cloud.aliveCount() ;

	ane.draw() ;
	fruitMonitor() ;
	fruit.draw() ;
	garbage.aliveCount() ;
	garbage.draw() ;

	ctx1.clearRect(0 , 0 , canWidth , canHeight) ;
	mom.draw() ;
    baby.draw() ;
    momFruitsCollision();
    monBabyCollision() ;
	momGarbageCollision() ;
	datadraw() ;
}

function onMouseMove(e)
{
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX == undefined ? e.layerX : e.offSetX ;
		my = e.offSetY == undefined ? e.layerY : e.offSetY ;
	}
}