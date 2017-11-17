function Ball(x, y){
	this.x=x;
	this.y=y;
}

function createGameBoard(){
	for(var x=0;x<10;x++){
		balls[x]=[];
		for(var y=0;y<10;y++){
			balls[x][y]=new Ball(x,y);
			balls[x][y].color=0;
			//console.log(balls[x][y]);
		}
	}
}

function initialBoard(){
	balls[4][4].color=1;
	balls[5][4].color=1;
	balls[4][5].color=2;
	balls[5][5].color=2;
}
