function gameEnds(){
    if(player1<player2) return 2;
    else if(player1>player2) return 1;
    else return 0;
 }

 function displayWinner(winner){
    var w,ws,l,ls;
    if(winner==1){
        w="Red" ;
        ws=player1;
        l="Blue";
        ls=player2;
    }else{
        w="Blue" ;
        ws=player2;
        l="Red";
        ls=player1;
    }
    ctx.clearRect(0,0,600,650);
    ctx.font='bold 30px Open Sans';
    ctx.fillText('winner:'+w,300,200);
    ctx.fillText('score:'+ws,300,300);
    ctx.fillText('Looser:'+l,300,400);
    ctx.fillText('score:'+ls,300,500);
 }