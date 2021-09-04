class rope{
	constructor(body1,body2,pointB)
	{

	//create rope constraint here
	
	this.pointA=this.pointA
	this.pointB=pointB

	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA, y:this.pointB}

	}


    //create display() here 
	show() 
	    //var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
		
		push();
		storkeWeight(2);
		//write line() code below to show line between roof and bob
		stroke(255);
		line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
		line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
		pop();
    }	
}		

	




	


