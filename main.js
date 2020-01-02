$(document).ready(function() {
  " use strict ";
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  //TODO
<<<<<<< HEAD
 
  var colorCircle = ["red", "green", "blue", "black"];
=======
  /*var c=Shape.Circle(0,200,50);
    c.fillColor="green";*/

  /*var c;
    for (let x = 25; x < 400; x+=50) {
        for (let y = 25; y < 400; y+=50) {
            c=Shape.Circle(x,y,20);
            c.fillColor="green";
        }
    }*/

  var colorCircle=["red","green","blue","black"];
>>>>>>> parent of 4a7605b... Update main.js
  var fillColor;
  var i=0;
  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = "black";
  var text = new PointText(200, 200);
  text.justification = "center";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "Hello WORLD!";

  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 20);
      
    fillColor=colorCircle[i]
    console.log(i+" "+fillColor+" начало обработки");
    c.fillColor = fillColor;

    if (i<colorCircle.length-1) {
      i++;
    }   
    else i=0;
    console.log(i+" "+fillColor+" конец обработки");
  };

  paper.view.draw();
  console.log("main.js loaded");
});

console.log("main.js loaded");
