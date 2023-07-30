function Tot(id){
	var X = id.charAt(0);
	var Y = id.charAt(1);
	var iX = parseInt(X);
	var iY = parseInt(Y);
	
	switch(isCoDo(X, iY)){
		
// Dòng 2 cờ do
		case true:
			if(iX == 2){
				
				for(i = iX + 1; i <= iX + 2; i ++){
					if(isRong(i, iY))
						DoiMau(i, iY);
					if(isCoDen(i, iY))
						break;
				}
				
				// Ben trai
				if(!isBien(iX + 1, iY -1) && isCoDen(iX + 1, iY -1))
					DoiMau(iX + 1, iY -1);
				
				// Ben phải
				if(!isBien(iX + 1, iY + 1) && isCoDen(iX + 1, iY + 1))
					DoiMau(iX + 1, iY + 1);
			}else{
				if(!isBien(iX + 1, iY) && isRong(iX + 1, iY))
					DoiMau(iX + 1, iY);
						
				// Ben trai
				if(!isBien(iX + 1, iY -1) && isCoDen(iX + 1, iY - 1))
					DoiMau(iX + 1, iY -1);
					
				// Ben phai
				if(!isBien(iX + 1, iY + 1) && isCoDen(iX + 1, iY + 1))
					DoiMau(iX + 1, iY + 1);
			}
			break;
		
// Dong 2 cờ đen
		case false:
			iX = parseInt(X);
			iY = parseInt(Y);
			
			if(iX == 7){
				for(i = iX - 1; i >= iX - 2; i--){
					if(isRong(i, iY))
						DoiMau(i, iY);
					if(isCoDo(i, iY))
						break;
				}
				// Ben trai
				if(!isBien(iX - 1, iY -1) && isCoDo(iX - 1, iY -1))
					DoiMau(iX - 1, iY -1);
					
				// Ben trai
				if(!isBien(iX - 1, iY + 1) && isCoDo(iX - 1, iY + 1))
					DoiMau(iX - 1, iY + 1);
			}else{
				if(!isBien(iX - 1, iY) && isRong(iX - 1, iY))
					DoiMau(iX - 1, iY);
						
				// Ben trai
				if(!isBien(iX - 1, iY - 1) && isCoDo(iX - 1, iY - 1))
					DoiMau(iX - 1, iY - 1);
					
				// Ben phai
				if(!isBien(iX - 1, iY + 1) && isCoDo(iX - 1, iY + 1))
					DoiMau(iX - 1, iY + 1);
			}
			break;	
	}
}