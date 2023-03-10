export const canvas = document.getElementById("canvas");
export const context = canvas.getContext("2d");

export class Entity {
    constructor(position, radius) {
      this.position = position;
      this.radius = radius;
  
    }
      draw() {}
      respawn1() {}
      respawn2() {}
      handleMovement() {}
  }

export class Position {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Velocity {
    constructor (dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
}

export class Keys {
    constructor() {
        this.up = false;
        this.down = false;
        this.shoot = false;
    }
}