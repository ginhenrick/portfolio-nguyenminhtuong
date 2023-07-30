function Ma(id){
	var X = id.charAt(0);
	var Y = id.charAt(1);
	var iX = parseInt(X), iY = parseInt(Y);
	switch(isCoDo(X, Y))
	{
// Co do
		case true:
			if(!isBien(iX -2, iY -1) && !isCoDo(iX - 2, iY - 1)){
				DoiMau(iX -2, iY - 1);
			}
			
			if(!isBien(iX - 1, iY - 2) && !isCoDo(iX - 1, iY - 2)){
				DoiMau(iX - 1, iY - 2);
			}
			
			if(!isBien(iX + 1, iY - 2) && !isCoDo(iX + 1, iY - 2)){
				DoiMau(iX + 1, iY - 2);
			}
			
			if(!isBien(iX - 1, iY - 2) && !isCoDo(iX - 1, iY - 2)){
				DoiMau(iX - 1, iY - 2);
			}
			
			if(!isBien(iX + 2, iY - 1) && !isCoDo(iX + 2, iY - 1)){
				DoiMau(iX + 2, iY - 1);
			}
			
			if(!isBien(iX + 2, iY + 1) && !isCoDo(iX + 2, iY + 1)){
				DoiMau(iX + 2, iY + 1);
			}
			
			if(!isBien(iX + 1, iY + 2) && !isCoDo(iX + 1, iY + 2)){
				DoiMau(iX + 1, iY + 2);
			}
			
			if(!isBien(iX - 1, iY + 2) && !isCoDo(iX - 1, iY + 2)){
				DoiMau(iX - 1, iY + 2);
			}
			
			if(!isBien(iX - 2, iY + 1) && !isCoDo(iX - 2, iY + 1)){
				DoiMau(iX - 2, iY + 1);
			}
			
		break;
		
		case false:
			if(!isBien(iX -2, iY -1) && !isCoDen(iX - 2, iY - 1)){
				DoiMau(iX -2, iY - 1);
			}
			
			if(!isBien(iX - 1, iY - 2) && !isCoDen(iX - 1, iY - 2)){
				DoiMau(iX - 1, iY - 2);
			}
			
			if(!isBien(iX + 1, iY - 2) && !isCoDen(iX + 1, iY - 2)){
				DoiMau(iX + 1, iY - 2);
			}
			
			if(!isBien(iX - 1, iY - 2) && !isCoDen(iX - 1, iY - 2)){
				DoiMau(iX - 1, iY - 2);
			}
			
			if(!isBien(iX + 2, iY - 1) && !isCoDen(iX + 2, iY - 1)){
				DoiMau(iX + 2, iY - 1);
			}
			
			if(!isBien(iX + 2, iY + 1) && !isCoDen(iX + 2, iY + 1)){
				DoiMau(iX + 2, iY + 1);
			}
			
			if(!isBien(iX + 1, iY + 2) && !isCoDen(iX + 1, iY + 2)){
				DoiMau(iX + 1, iY + 2);
			}
			
			if(!isBien(iX - 1, iY + 2) && !isCoDen(iX - 1, iY + 2)){
				DoiMau(iX - 1, iY + 2);
			}
			
			if(!isBien(iX - 2, iY + 1) && !isCoDen(iX - 2, iY + 1)){
				DoiMau(iX - 2, iY + 1);
			}
		break;
		
		default:
		
	}
}