var aneObj = function()
{
	this.x = [] ;
	this.len = [] ;

}
aneObj.prototype.num = 70;
aneObj.prototype.init = function()
{
	for(var i = 0 ; i < this.num ; i ++ )
	{
		this.x[i] = i * 16 + Math.random() * 20 ; // [0,1)
		this.len[i] = 150 + Math.random() * 50 ;
	}
}
aneObj.prototype.draw = function()
{
	ctx2.save();
	ctx2.globalAlpha = 0.5;
	ctx2.lineWidth = 13 ;
	ctx2.lineCap = "round" ;
	for(var i = 0 ; i < this.num ; i ++)
	{
		if(i % 3 == 0)
		{
			ctx2.strokeStyle = "#008B45" ;
		}
		else if(i % 2 == 1)
		{
			ctx2.strokeStyle = "#006400" ;
		}
		else
		{
			ctx2.strokeStyle = "#4EEE94"
		}
		// beginPath , moveTo , lineTo , strokeTtyle , lineWidth , lineCap , globalAlpha
		ctx2.beginPath() ;
		this.x[i] = (this.x[i] - deltaTime/40 + 800)%800;
		ctx2.moveTo( this.x[i] , canHeight);
		ctx2.lineTo( this.x[i] , canHeight - this.len[i]);
		// 所有的配置信息要做绘制前设置好
		ctx2.stroke();
	}
	ctx2.restore();
}