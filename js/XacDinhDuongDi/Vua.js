function Vua(id){
		var X = id.toString().charAt(0);
		var Y = id.toString().charAt(1);
		
		var X_ = parseInt(X);
		var Y_ = parseInt(Y);

		switch(isCoDo(X, Y))
		{
//Cờ đỏ
			case true:
				//Đi xuống
				if( !isBien(X_ - 1, Y_) && !isCoDo(X_ - 1, Y_)) {
					DoiMau(X_ - 1, Y);
				}
				
				//Đi xuống phải 
				if( !isBien(X_ - 1, Y_ + 1) && !isCoDo(X_ - 1,Y_ + 1)) {
					DoiMau(X_ - 1, Y_ + 1);
				}
				
				// Đi xuống trái			
				if( !isBien(X_ - 1, Y_ - 1) && !isCoDo(X_ - 1,Y_ - 1)) {
					DoiMau(X_ - 1, Y_ - 1);
				}

				
				//Đi lên	
				if( !isBien(X_ + 1, Y_) && !isCoDo(X_ + 1, Y_)) {
					DoiMau(X_ + 1, Y_);
				}
				
				// Đi lên phải
				if( !isBien(X_ + 1, Y_ + 1) && !isCoDo(X_ + 1, Y_ + 1)) {
					DoiMau(X_ + 1, Y_ + 1);
				}

				// Đi lên trái
				if( !isBien(X_ + 1, Y_ - 1) && !isCoDo(X_ + 1, Y_ - 1)) {
					DoiMau(X_ + 1, Y_ - 1);
				}
				
				//qua trái
				if(!isBien(X_, Y_ - 1) && !isCoDo(X_, Y_ - 1)){
				DoiMau(X_, Y_- 1); 
				}
				
				// qua phai 
				if(!isBien(X_, Y_ + 1) && !isCoDo(X_, Y_ + 1)){
				DoiMau(X_, Y_ + 1);
			}
			break;
//Cờ Đen
			case false:

				// Đi xuống
				if( !isBien(X_ - 1, Y_) && !isCoDen(X_ - 1, Y_)) {
					DoiMau(X_ - 1, Y);
				}
				
				//Đi xuống phải 
				if( !isBien(X_ - 1, Y_ + 1) && !isCoDen(X_ - 1,Y_ + 1)) {
					DoiMau(X_ - 1, Y_ + 1);
				}
				
				// Đi xuống trái			
				if( !isBien(X_ - 1, Y_ - 1) && !isCoDen(X_ - 1,Y_ - 1)) {
					DoiMau(X_ - 1, Y_ - 1);
				}

				
				//Đi lên	
				if( !isBien(X_ + 1, Y_) && !isCoDen(X_ + 1, Y_)) {
					DoiMau(X_ + 1, Y_);
				}
				
				// Đi lên phải
				if( !isBien(X_ + 1, Y_ + 1) && !isCoDen(X_ + 1, Y_ + 1)) {
					DoiMau(X_ + 1, Y_ + 1);
				}

				// Đi lên trái
				if( !isBien(X_ + 1, Y_ - 1) && !isCoDen(X_ + 1, Y_ - 1)) {
					DoiMau(X_ + 1, Y_ - 1);
				}
				
				//qua trái
				if(!isBien(X_, Y_ - 1) && !isCoDen(X_, Y_ - 1)){
					DoiMau(X_, Y_- 1); 
				}
				
				// qua phai 
				if(!isBien(X_, Y_ + 1) && !isCoDen(X_, Y_ + 1)){
					DoiMau(X_, Y_ + 1);
				}
				break;
	}
}
		
		
		
	