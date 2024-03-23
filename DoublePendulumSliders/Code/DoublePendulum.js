/// <reference path="../TSDef/p5.global-mode.d.ts" />
/// <reference path="../TSDef/p5play.d.ts" />

"use strict";

let center, pendulumOne, pendulumTwo, jointOne, jointTwo, gravitySlider, pendulumSizeSlider;

function setup() {

  new Canvas(700, 700);

  pendulumSizeSlider = createSlider(30, 80, 50, 5);
  pendulumSizeSlider.position(10, 10);
  pendulumSizeSlider.size(80);

  gravitySlider = createSlider(0, 10, 3, 0.3);
  gravitySlider.position(10, 50);
  gravitySlider.size(80);

  //Gravity
  world.gravity.y = 3;

  //Center
  center = new Sprite(width / 2, height / 2, 50);
  center.collider = 'static';
  center.colour = "lime";

  //First pendulum
  pendulumOne = new Sprite((width / 2), 550, 50);
  pendulumOne.vel.y = 50;
  pendulumOne.colour = "lime";

  //Second pendulum
  pendulumTwo = new Sprite((width / 2) - 100, 500, 50);
  pendulumTwo.vel.y = 50;
  pendulumTwo.colour = "lime";

  //Joints between center and pendulumOne / pendulumOne and pendulumTwo
  stroke(0, 255, 0);
  strokeWeight(5)
  jointOne = new DistanceJoint(center, pendulumOne);
  jointTwo = new DistanceJoint(pendulumOne, pendulumTwo);

}

function draw() {

  background(0, 30);

  //Text
  textSize(25);
  text('Pendulum-Size', 100, 25);
  text('Gravity', 100, 65);



  if (mouse.dragging()) {

    //Grab the middle-pendulum to give it momentum
    pendulumOne.moveTowards(mouse);

    //Adjust world-gravity
    world.gravity.y = gravitySlider.value();

    //Adjust Pendulum mass
    center.d = pendulumSizeSlider.value();
    pendulumOne.d = pendulumSizeSlider.value();
    pendulumTwo.d = pendulumSizeSlider.value();
  }
}




