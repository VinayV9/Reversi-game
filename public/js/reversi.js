
var imageList=[white, red, blue, green, grey, purple];

var balls=[],ctx,moves=4,player1=2,player2=2,playerName="Red";
var clicker=document.getElementById('clicker');


var socket=io();
function initialize(){
	
	createGameBoard();
	var canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");
	paint();
	initialBoard();
	paint();
	canvas.addEventListener('click', beginGame, false);
}

function beginGame(e){
	
	var x=Math.floor(e.offsetX/60);
	var y=Math.floor((e.offsetY-50)/60);

	var turn;
	if(moves%2==0)turn=2;
	else turn =1;
	
	if(balls[x][y].color===0){
		if(hasMove(turn)==1){
			if(validMove(x,y, turn, 1)==1) {
				++moves;
				if(turn==2){
				  playerName="Blue";
			    }else{
				   playerName="Red";
			    } 
				if(moves==100){
					var winner=gameEnds();
					displayWinner(winner);
					return;
				}
				socket.emit('updateBoard',balls);
				socket.on('updateBoard', function(soBalls){
					balls=soBalls;
					paint();
                    clicker.play();
				});	
			}
		}else{
			var winner=gameEnds();
			displayWinner(winner);
			return;
		}	
	}
	paint();

}





	