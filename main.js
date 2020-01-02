$(document).ready(function() {
  " use strict ";
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  //TODO

  var colorCircle = ["red", "green", "blue", "black"];
  var fillColor;
  var i = 0;
  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = "black";
  var text = new PointText(200, 200);
  text.justification = "center";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "Hello МИР!";

  tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point, 10);

    fillColor = colorCircle[i];
    c.fillColor = fillColor;
    if (i < colorCircle.length - 1) {
      i++;
    } else i = 0;

    var b="request";
  };

  paper.view.draw();

});


