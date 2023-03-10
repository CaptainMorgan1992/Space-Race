import { Entity, Position, Velocity, context } from "./components.js"
import { generateNumberBetween, isCircleOutside, circleCollision } from "./utility.js"
import { player1, player2 } from "./player.js"

export let enemies = [];
let side = 0;

export class Enemy extends Entity {
    constructor(position, radius, velocity) {
      super(position,radius)
      this.velocity = velocity;
      this.color = "Wheat";
    }
  
    draw() {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      context.fill();
      context.closePath();
    }
  
    handleMovement(deltaTime) {
      this.position.x += this.velocity.dx * deltaTime;
    }
  
    respawn(deltaTime){
    for (let i = 0; i < enemies.length; i++) {
      let enemy = enemies[i];
      enemy.draw();
      enemy.handleMovement(deltaTime);
      
      if (isCircleOutside(enemy)) {
        enemies.splice(i, 1)
      }  
      circleCollision(enemy)
    }
  }
  }
  
  export let enemy = new Enemy()
  
  export function generateEnemyPosition() {
    side = generateNumberBetween(1, 2);
    
    if(side === 1) {                                      
     let enemy = new Enemy(new Position(0, generateNumberBetween(0, canvas.height - 80)), generateNumberBetween(3, 10), new Velocity(100))
     enemy.draw();  
     enemies.push(enemy);
    }
    else if(side === 2) {
     let enemy = new Enemy(new Position(canvas.width, generateNumberBetween(0, canvas.height -80)), generateNumberBetween(3, 10), new Velocity(-100))
     enemy.draw();
     enemies.push(enemy);
    }
  }