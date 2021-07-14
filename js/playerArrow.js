class PlayerArrow {
    constructor(x, y, width, height, archerAngle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.archerAngle = archerAngle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }

     shoot(archerAngle) {
      this.velocity = p5.Vector.fromAngle(archerAngle + PI / 2.000123456789);
      this.velocity.mult(25);
  
      Matter.Body.setVelocity(this.body, {
        x: this.velocity.x,
        y: this.velocity.y
      });
  
      Matter.Body.setStatic(this.body, false);
    }

   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
