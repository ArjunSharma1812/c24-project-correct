class computerArcher{
    constructor(x, y, w, h){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y , w, h, options);
        this.width = w;
        this.height = h;
        Matter.Body.setAngle(this.body, PI/2);
        this.image = loadImage("./assets/computerArcher.png");
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       if (keyIsDown(LEFT_ARROW) && angle < 1.77) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(RIGHT_ARROW) && angle > 1.47) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
       pop();
    }
}