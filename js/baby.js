var babyObj = function()
{
	this.x = 0 ;
	this.y = 0 ;
    this.angle = 0 ;
	this.babyEye = new Image() ;
	this.babyBody = new Image() ;
	this.babyTail = new Image() ;

    this.babyTailTimer = 0 ;
    this.babyTailCount = 0 ;

    this.babyEyeTimer = 0 ;
    this.babyEyeCount = 0 ;
    this.babyEyeTimeLen = 0;

    this.babyBodyTimer = 0 ;
    this.babyBodyCount = 0 ;
}

babyObj.prototype.init = function()
{
	this.x = canWidth * 0.5 - 50 ;
	this.y = canHeight * 0.5 + 50 ;
    this.angle = 0 ;
    this.babyEyeTimer = 0 ;
    this.babyEyeCount = 0 ;
    this.babyEyeTimeLen = 1500;
    this.babyBodyTimer = 0 ;
    this.babyEyeCount = 0 ;
    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";
    this.babyTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function()
{
    // lerpdistance(x, y)
    this.x = lerpDistance(mom.x , this.x , 0.93 ) ;
    this.y = lerpDistance(mom.y , this.y , 0.93 ) ;

    // lerpAngle
    var deltaY = mom.y - this.y ;
    var deltaX = mom.x - this.x ;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle( beta , this.angle , 0.6) ;

    // baby tail count
    this.babyTailTimer += deltaTime ;
    if(this.babyTailTimer > 50)
    {
        this.babyTailCount = (this.babyTailCount + 1) % 8 ;
        this.babyTailTimer = 0 ;
    }
    //baby body
    this.babyBodyTimer += deltaTime ;
    if(this.babyBodyTimer > 300)
    {
        this.babyBodyCount = Math.min(  this.babyBodyCount + 1 , 19 ) ;
        this.babyBodyTimer = 0 ;
    }

    //baby Eye count
    this.babyEyeTimer += deltaTime ;
    if(this.babyEyeTimer > this.babyEyeTimeLen)
    {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2 ;
        if(this.babyEyeCount == 0)
        {
            this.babyEyeTimeLen = 1500 + Math.random() * 500 ;
        }
        else
        {
            this.babyEyeTimeLen = 200 + Math.random() * 100 ;
        }
        this.babyEyeTimer = 0 ;
    }

    ctx1.save();
    ctx1.translate(this.x , this.y) ;
    ctx1.rotate(this.angle);
    var babyTailcount = this.babyTailCount ;
    ctx1.drawImage(babyTail[babyTailcount], -babyTail[babyTailcount].width * 0.5 + 23, -babyTail[babyTailcount].height * 0.5) ;

    var babyBodyIndex = this.babyBodyCount ;
    ctx1.drawImage(babyBody[babyBodyIndex], - babyBody[babyBodyIndex].width * 0.5 , - babyBody[babyBodyIndex].height * 0.5) ;

    var babyEyeIndex = this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeIndex], - babyEye[babyEyeIndex].width * 0.5 , - babyEye[babyEyeIndex].height * 0.5 ) ;
    ctx1.restore();
}