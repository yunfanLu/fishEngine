var momObj = function()
{
	this.x = 0 ;
	this.y = 0 ;
	this.angle = 0 ;
	this.bigEye = new Image() ;
	this.bigBody = new Image() ;
	this.bigTail = new Image() ;
}

momObj.prototype.init = function()
{
	this.x = canWidth * 0.5  ;
	this.y = canHeight * 0.5 ;
	this.angle = 0 ;
	this.bigBody.src = "./src/fish.png";
	this.bigEye.src = "./src/bigEye0.png";
	this.bigTail.src = "./src/bigTail7.png";
}
momObj.prototype.draw = function()
{
	this.x = lerpDistance(mx , this.x , 0.95) ;
	this.y = lerpDistance(my , this.y , 0.95) ;

	// delta angle Math.atan2(y,x) ;
	var deltaY = my - this.y ;
	var deltaX = mx - this.x ;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle( beta , this.angle , 0.6) ;


	ctx1.save();
	ctx1.translate(this.x , this.y) ;
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigBody, - this.bigBody.width * 0.5 , - this.bigBody.height * 0.5 ) ;
	ctx1.drawImage(this.bigEye, - this.bigEye.width * 0.5 , - this.bigEye.height * 0.5 ) ;
	ctx1.drawImage(this.bigTail, - this.bigTail.width * 0.5 + 25, - this.bigTail.height * 0.5 ) ;
	ctx1.restore() ;
}