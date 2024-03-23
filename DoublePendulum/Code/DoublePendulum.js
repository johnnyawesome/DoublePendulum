/// <reference path="../TSDef/p5.global-mode.d.ts" />
/// <reference path="../TSDef/p5play.d.ts" />

"use strict";

let center, pendulumOne, pendulumTwo, jointOne, jointTwo;

function setup() {

  new Canvas(700, 700);

  //Gravity
  world.gravity.y = 10;

  //Center
  center = new Sprite(width / 2, height / 2, 100);
  center.collider = 'static';
  center.colour = "lime";

  //First pendulum
  pendulumOne = new Sprite(width / 2 + 100, 500, 70);
  pendulumOne.vel.y = 50;
  pendulumOne.colour = "lime";

  //Second pendulum
  pendulumTwo = new Sprite(width / 2 + 10, 500, 50);
  pendulumTwo.vel.y = 50;
  pendulumTwo.colour = "lime";

  //Joints between center and pendulumOne / pendulumOne and pendulumTwo
  stroke(0, 255, 0);
  strokeWeight(5)
  jointOne = new DistanceJoint(center, pendulumOne);
  jointTwo = new DistanceJoint(pendulumOne, pendulumTwo);

}

function draw() {
  background(0, 30)
  if (mouse.dragging()) pendulumOne.moveTowards(mouse);
}




