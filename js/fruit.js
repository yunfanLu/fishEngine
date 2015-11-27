var fruitObj = function()
{
	this.alive = []; // bool
	this.x = [] ;
	this.y = [] ;
	this.l = [] ; // 图片的长度
	this.spd = [] ;
	this.fruitType = [] ;
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;

fruitObj.prototype.init = function()
{
	for(var i = 0 ; i < this.num ; i ++)
	{
		this.alive[i] = false;
		this.x[i] = 0 ;
		this.y[i] = 0 ;
		this.fruitType[i] = "" ;
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function()
{
	for(var i = 0 ; i < this.num ; i ++)
	{
		if(this.alive[i] == true)
		{		
			if(this.l[i] <= 14)
			{
				deltaTime = Math.min(deltaTime , 50) ;
				this.l[i] += 0.01 * deltaTime ;
			}
			else
			{
				this.y[i] -= this.spd[i] + 0.01 * deltaTime ;
			}
			if(this.fruitType[i] == "orange")
			{
				ctx2.drawImage(this.orange , this.x[i] - this.l[i] * 0.5 , this.y[i] - this.l[i] * 0.5 , this.l[i] , this.l[i]) ;
			}
			else
			{
				ctx2.drawImage(this.blue , this.x[i] - this.l[i] * 0.5 , this.y[i] - this.l[i] * 0.5 , this.l[i] , this.l[i]) ;				
			}
			if(this.y[i] < 100)
			{
				this.alive[i] = false ;
			}
		}
	}
}
fruitObj.prototype.born = function(i)
{
	var aneID = Math.floor( Math.random() * ane.num ) ;
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID] + Math.random() * 50;
	this.l[i] = 0 ;	
	this.spd[i] = Math.random() * 0.9 + 0.2;
	this.alive[i] = true ;

	var res = Math.random() ;
	if(res < 0.1)
	{
		this.fruitType[i]= "blue" ;
	}
	else
	{
		this.fruitType[i] = "orange" ;
	}
}

fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false ;
}

function fruitMonitor()
{
	var num = 0 ;
	for(var i = 0 ; i < fruit.num ; i ++)
	{
		if(fruit.alive[i] == true) num ++ ;
	}
	if(num < 15)
	{
		sendFruit() ;
	}
}

function sendFruit()
{
	for(var i = 0 ; i < fruit.num ; i ++)
	{
		if(fruit.alive[i] == false)
		{
			fruit.born(i) ;
			return ;
		}
	}
}

fruitObj.prototype.update = function()
{
	var num = 0 ;
	for(var i = 0 ; i < this.num ; i ++)
	{
		if(this.alive[i] == true) num ++ ;
	}
}