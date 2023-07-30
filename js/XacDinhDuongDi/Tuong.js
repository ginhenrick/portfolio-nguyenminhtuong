function Tuong(id){
		var X = id.charAt(0);
		var Y = id.charAt(1);
		
		var iX = 0, iY = 0;
		switch (isCoDo(X, Y)){
// Co do
			case true:
				// Đi lên trên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				while (!isBien(iX - 1, iY + 1) && !isCoDo(iX - 1, iY + 1)){
					DoiMau(iX - 1, iY + 1);
					if(isCoDen(iX - 1, iY + 1))
						break;
					iX -= 1;
					iY += 1;
				}
				
				// Đi lên trên bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				while (!isBien(iX - 1, iY - 1) && !isCoDo(iX - 1, iY - 1)){
					DoiMau(iX - 1, iY - 1);
					if(isCoDen(iX - 1, iY - 1))
						break;
					iX -= 1;
					iY -= 1;
				}
				
				// Đi xuống bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				while (!isBien(iX + 1 , iY - 1)  && !isCoDo(iX + 1, iY - 1)){
					DoiMau(iX + 1, iY - 1);
					if(isCoDen(iX + 1, iY - 1))
						break;
					iX += 1;
					iY -= 1;
				}
				
				// Đi xuống dưới bên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX + 1, iY + 1) && !isCoDo(iX + 1, iY + 1)){
					DoiMau(iX + 1, iY + 1);
					if(isCoDen(iX + 1, iY + 1))
						break;
					iX += 1;
					iY += 1;
				}
				
			break;
			
// Co den
			case false:
			
				// Đi lên bên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				while( !isBien(iX - 1, iY + 1) && !isCoDen(iX - 1, iY + 1)){
					DoiMau(iX - 1, iY + 1);
					if(isCoDo(iX -1, iY +1))
						break;
					iX--;
					iY++;
				} 
				
				// Đi lên bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX - 1, iY - 1) && !isCoDen(iX - 1, iY -1)){
					DoiMau(iX -1, iY -1);
					if(isCoDo(iX -1, iY -1))
						break;
					iX--;
					iY--;
				}
			
				// Đi dưới bên trái
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX + 1, iY - 1) && !isCoDen(iX + 1, iY - 1)){
					DoiMau(iX + 1, iY - 1);
					if(isCoDo(iX + 1, iY - 1))
						break;
					iX++;
					iY--;
				}
				
				//Đi dưới bên phải
				iX = parseInt(X);
				iY = parseInt(Y);
				while(!isBien(iX + 1, iY + 1) && !isCoDen(iX + 1, iY + 1)){
					DoiMau(iX + 1, iY + 1);
					if(isCoDo(iX + 1, iY + 1))
						break;
					iX++;
					iY++;
				}			
			break;
		}
		
}