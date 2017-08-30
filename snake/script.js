var canv = document.getElementById('myCanvas'),
    ctx = canv.getContext('2d'),s,scl=10;
	var food;
	food=pickLocation();
	
	s=new Snake();
	
function pickLocation(){
	var cols=Math.floor(canv.width/scl);
	var rows=Math.floor(canv.height/scl);
	return {x:((Math.random(cols)))*canv.width,y:((Math.random(rows)))*canv.height};
}
console.log(food);	
document.onkeydown = keyPressedEvt;
function keyPressedEvt(e){
	 e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
		s.dir(0,-1);
    }
    else if (e.keyCode == '40') {
        // down arrow
		s.dir(0,1);
    }
    else if (e.keyCode == '37') {
       // left arrow
	   s.dir(-1,0);
    }
    else if (e.keyCode == '39') {
       // right arrow
	   s.dir(1,0);
    }
	
}
function valBetween(v, min, max) {
    return (Math.min(max, Math.max(min, v)));
}	
function Snake(){
	this.x=0;
	this.y=0;
	this.xspeed=1;
	this.yspeed=0;
	
	this.update=function(){
		this.x=this.x+this.xspeed*scl;	
		this.y=this.y+this.yspeed*scl;
		this.x=valBetween(this.x,0,canv.width-scl);
		this.y=valBetween(this.y,0,canv.height-scl);
	}
	this.show=function(){
		ctx.clearRect(0, 0, canv.width, canv.height);
		ctx.fillStyle="#FF0000";
		ctx.fillRect(this.x,this.y,scl,scl);		
	}
	this.dir=function(x,y){
		this.xspeed=x;
		this.yspeed=y;
	}
	this.eat=function(x,y){
		var dist = Math.sqrt( Math.pow((this.x-this.y), 2) + Math.pow((pos.x-pos.y), 2) );
		if(dist<2) {
			return true;
		}
		else{
			return false;
		}
	}
}	


function executeFrame(){
	s.show();
	s.update();
	ctx.fillStyle="#FFf000";
	food.x=valBetween(food.x,0,canv.width-scl);
	food.y=valBetween(food.y,0,canv.height-scl);
	ctx.fillRect(food.x,food.y,scl,scl);
	s.eat();
    //requestAnimFrame(executeFrame);
	
}

// Start animation
setInterval(executeFrame, 90);
//executeFrame();

 //canv.addEventListener('mousemove', function(e){
 //   bubbles.push(new Bubble(e.pageX,e.pageY))
  //});