function paint(){
	ctx.clearRect(0,0,600,50);
	for(var x=0;x<10;x++){
		for(var y=0;y<10;y++){
			ctx.drawImage(imageList[balls[x][y].color], x*60, y*60+50, 60, 60 );
		}
	}
	ctx.font='h3 bold , 400px, Open Sans';
	ctx.textAlign='center';
	ctx.font.remove;
	ctx.fillText('Player1 :'+ player1,150 ,20);
	ctx.fillText('Player2 :'+ player2,150 ,40);
	ctx.fillText(playerName+' Turn', 450, 25);
}