class boy extends BaseClass {
  constructor(x,y){
    super(x,y,100,300);
    this.image = loadImage("boy.png");
  }

  display() {
    //this.body.position.x = mouseX;
   // this.body.position.y = mouseY;
   
    super.display();
  }
}
