
function hasMove(turn){
    for(var x=0;x<10;x++){
        for(var y=0;y<10;y++){
             if(validMove(x,y,turn, 0)==1) return 1;
        }
    }
    return 0;
 }

function validMove(x, y, turn, modify){
	if(turn%2==0){
	   return validMoveOf_player(x,y,1, modify);
	}else{
	   return validMoveOf_player(x,y,2, modify);
	}
	
}

function validMoveOf_player(a, b, p, modify){
	var x, y, i,j ,flag=0;
	var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0;
	var entity;
   
	x = a;  y = b;
	if (x<0 || y<0 || x > 10 || y > 10) return 0;
   
	if (p == 1) entity = 1;
	if (p == 2) entity = 2;
   
	if (balls[x][y].color == 0){
	   
		//check  forword
		if (x-1!= -1){
			if (balls[x-1][y].color != 0){
				if (balls[x - 1][y].color != entity){
					i = x - 1;
					while (balls[i][y].color != entity){
						if (i - 1 == -1 || balls[i][y].color == 0){
							c1 = 0;
							break;
						}
						else{
							i--;  c1++;
						}
					}
					if (balls[i][y].color == entity ){
						flag = 1;
						while (i != x && modify==1){
							++i;
							balls[i][y].color = entity;
						}
						
					}
				}
			}
		}

		//check  downward
		
		if (x + 1 != 10){
			if (balls[x+1][y].color != 0){
				if (balls[x + 1][y].color != entity){
					i = x + 1;
					while (balls[i][y].color != entity){
						if (i +1 == 10 || balls[i][y].color == 0){
							c2 = 0;
							break;
						}
						else{
							i++;  c2++;
						}
					}
					if (balls[i][y].color == entity){
						flag = 1;
						while (i != x  && modify==1){
							--i;
							balls[i][y].color = entity;
						}
					}
				}
			}
		}

		//check left
		
		if (y - 1 != -1){
			if (balls[x ][y-1].color != 0){
				if (balls[x][y-1].color != entity){
					i = y - 1;
					while (balls[x][i].color !=entity){
						if (i - 1 == -1 || balls[x][i].color == 0){
							c3 = 0;
							break;
						}
						else{
							--i;  c3++;
						}
					}
					if (balls[x][i].color == entity ) {
						flag = 1;
						while (i != y && modify==1){
							++i;
							balls[x][i].color = entity;
						}
					}
				}
			}
		}

		//check right
		
		if (y + 1 != 10){
			if (balls[x][y + 1].color != 0){
				if (balls[x][y + 1].color != entity){
					i = y + 1;
					while (balls[x][i].color != entity){
						if (i + 1 == 10 || balls[x][i].color == 0){
							c4 = 0;
							break;
						}
						else{
							i++;  c4++;
						}
					}
					if (balls[x][i].color == entity ){
						flag = 1;
						while (i != y  && modify==1){
							--i;
							balls[x][i].color = entity;
						}
					}
				}
			}
		}

		//check top-left
		if (y - 1 != -1&& x-1!=-1){
			if (balls[x-1][y - 1].color != 0){
				if (balls[x-1][y - 1].color != entity){
					i = x- 1; j = y - 1;
					while (balls[i][j].color != entity){
						if (i - 1 == -1 || j-1== -1 || balls[i][j].color == 0){
							c5 = 0;
							break;
						}
						else{
							i--; j--;  c5++;
						}
					}
					if (balls[i][j].color == entity  ){
						flag = 1;
						while (i !=x && j!=y && modify==1){
							++i; ++j;
							balls[i][j].color = entity;
						}
					}
				}
			}
		}

		//check top-right
		if (y + 1 != 10 && x - 1 != -1){
			if (balls[x - 1][y + 1].color != 0){
				if (balls[x - 1][y + 1].color != entity){
					i = x - 1; j = y + 1;
					while (balls[i][j].color != entity){
						if (i - 1 == -1 || j + 1 == 10 || balls[i][j].color == 0){
							c6 = 0;
							break;
						}
						else{
							i--; j++;  c6++;
						}
					}
					if (balls[i][j].color == entity ){
						flag = 1;
						while (i != x && j != y  && modify==1){
							++i; --j;
							balls[i][j].color = entity;
						}
					}
				}
			}
		}

		//check bottom-left
		if (y - 1 != -1 && x + 1 != 10){
			if (balls[x + 1][y - 1].color != 0){
				if (balls[x + 1][y - 1].color != entity){
					i = x + 1; j = y - 1;
					while (balls[i][j].color != entity){
						if (i + 1 == 10 || j - 1 == -1 ||balls[i][j].color == 0){
							c7 = 0;
							break;
						}
						else{
							i++; j--;  c7++;
						}
					}
					if (balls[i][j].color == entity  ){
						flag = 1;
						while (i != x && j != y && modify==1){
							--i; ++j;
							balls[i][j].color = entity;
						}
					}
				}
			}
		}

		//check bottom-right
		if (y + 1 != 10 && x + 1 != 10){
			if (balls[x + 1][y + 1].color != 0){
				if (balls[x + 1][y + 1].color != entity){
					i = x + 1; j = y + 1;
					while (balls[i][j].color != entity){
						if (i + 1 == 10 ||j + 1 == 10 || balls[i][j].color == 0){
							c8 = 0;
							break;
						}
						else{
							i++; j++;  c8++;
						}
					}
					if (balls[i][j].color == entity  ){
						flag = 1;
						while (i != x && j != y && modify==1){
							--i; --j;
							balls[i][j].color = entity;
						}
					}
				}
			}
		}

	}

	// flag ==1  for valid
	// console.log(flag);
	if(flag==1&&modify==0) return 1;
	if (flag){

		if (p == 1){

			player1 += c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + 1;
			player2 -= c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;

		}
		else{

			player2 += c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + 1;
			player1 -= c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;

		}
		return 1;
	}
	// not valid for 0
	return 0;
}