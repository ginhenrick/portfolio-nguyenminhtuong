class Food{
    constructor () {
       this.newFood();
    }
    newFood(){
       this.x = Math.floor(random(width));
       this.y = Math.floor(random(height));
 
       this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
       this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
    }
    show(){
       fill(255, 40, 0);
       rect(this.x, this.y, GRID_SIZE, GRID_SIZE);
    }
 }