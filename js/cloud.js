var cloudObj = function()
{
    this.alive = [] ;
    this.x = [] ;
    this.y = [] ;
    this.spd = [] ;
    this.cloudType = [] ;
}
cloudObj.prototype.num = 5 ;
cloudObj.prototype.init = function()
{
    for(var i = 0 ; i < this.num ; i ++)
    {
        this.alive[i] = false ;
        this.x[i] = 700 ;
        this.y[i] = 0 ;
        this.spd[i] = 0 ;
        this.cloudType[i] = new Image() ;
        this.cloudType[i].src = "./src/could/cloud" + i + ".png" ;
    }
}
cloudObj.prototype.draw = function()
{
    for(var i = 0 ; i < this.num ; i ++)
    {
        if(this.alive[i] == true)
        {
            this.x[i] -= this.spd[i] ;
            ctx2.drawImage(this.cloudType[i] , this.x[i] - this.cloudType[i].width * 0.5 , this.y[i] - this.cloudType[i].height * 0.5 , this.cloudType[i].width * 1.1 , this.cloudType[i].height * 1.1 ) ;
        }
        if(this.x[i] <= 100)
        {
            this.alive[i] = false ;
        }
        console.log("x = " + this.x[i] + ", y = " + this.y[i] + ", spd = " + this.spd[i])  ;
    }
}
cloudObj.prototype.born = function(i)
{
    this.x[i] = 700 ;
    this.y[i] = 30 + Math.random() * 20 ;
    this.spd[i] = Math.random() * 0.9 + 0.3 ;
    this.alive[i] = true ;
}

cloudObj.prototype.dead = function(i)
{
    this.alive[i] = false ;
}
cloudObj.prototype.sendCloud = function()
{
    for(var i = 0 ; i < this.num ; i ++)
    {
        if(this.alive[i] == false)
        {
            this.born(i) ;
            return ;
        }
    }
}
cloudObj.prototype.aliveCount = function()
{
    var num = 0 ;
    for(var i = 0 ; i < this.num ; i ++)
    {
        if(this.alive[i] == true) num ++ ;
    }
    if(num < 4)
    {
        this.sendCloud();
    }
}
