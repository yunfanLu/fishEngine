var garbageObj = function()
{
    this.alive = []; // bool
    this.x = [] ;
    this.y = [] ;
    this.spd = [] ;
    this.garbageType = [] ;
}
garbageObj.prototype.num = 7 ;
garbageObj.prototype.init = function ()
{
    for(var i = 0 ; i < this.num ; i ++)
    {
        this.alive[i] = false ;
        this.x[i] = 0 ;
        this.y[i] = 0 ;
        this.spd[i] = 0 ;
        this.garbageType[i] = new Image();
        this.garbageType[i].src = "./src/garbage/garbage" + i + ".png" ;
    }
}
garbageObj.prototype.draw = function()
{
    for(var i = 0 ; i < this.num ; i ++)
    {
        if(this.alive[i] == true)
        {
            this.y[i] += this.spd[i] ;
            ctx2.drawImage(this.garbageType[i] , this.x[i] - this.garbageType[i].width * 0.5 , this.y[i] - this.garbageType[i].height * 0.5 , this.garbageType[i].width , this.garbageType[i].height ) ;
        }
        if(this.y[i] >= canHeight - 10)
        {
            this.alive[i] = false ;
        }
    }
}
garbageObj.prototype.born = function(i)
{
    this.x[i] = Math.random() * 800 ;
    this.y[i] = 40 + Math.random() * 10 ;
    this.spd[i] = Math.random() * 0.9 + 0.2;
    this.alive[i] = true ;
}
garbageObj.prototype.dead = function(i)
{
    this.alive[i] = false ;
}

garbageObj.prototype.sendGarbage = function()
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

garbageObj.prototype.aliveCount = function()
{
    var num = 0 ;
    for(var i = 0 ; i < this.num ; i ++)
    {
        if( this.alive[i] == true ) num ++ ;
    }
    if(num < 5)
    {
        this.sendGarbage() ;
    }
}
