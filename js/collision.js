function momFruitsCollision()
{
    for(var i = 0 ; i < fruit.num ; i ++)
    {
        if(fruit.alive[i] == true)
        {
            var len = calLength2(fruit.x[i] , fruit.y[i] , mom.x , mom.y);
        	if(len < 900)
        	{
        		fruit.dead(i) ;
                data += 10 ;
                console.log(socore);
            }
        }
    }
}

function momGarbageCollision()
{
    for(var i = 0 ; i < garbage.num ; i ++)
    {
        if(garbage.alive[i] == true)
        {
            var len = calLength2(garbage.x[i] , garbage.y[i] , mom.x , mom.y) ;
            if(len < 900)
            {
                garbage.dead(i) ;
                data -= 50 ;
                console.log(socore) ;
            }
        }
    }
}
function monBabyCollision()
{
    var l = calLength2(mom.x , mom.y , baby.x , baby.y) ;
    if(l < 900)
    {
        baby.babyBodyCount = 0 ;
    }
}