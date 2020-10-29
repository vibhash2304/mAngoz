class tree extends BaseClass {
  constructor(x,y){
    super(x,y,200,500);
    this.image = loadImage("tree.png");
  }

  display() {
    //this.body.position.x = mouseX;
   // this.body.position.y = mouseY;
   
    super.display();
  }
}
