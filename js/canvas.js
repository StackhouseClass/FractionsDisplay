var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// centre or center for US :) the drawing
var x = canvas.width / 2;
var y = canvas.height / 2;

// number of days
var days = 1;

// number of hours
var hours = 24;

// one segment represents an hour so divide degrees by hours
var segmentWidth = 360 / hours;

// begin at 0 and end at one segment width
var startAngle = 0;
var endAngle = segmentWidth;

// how thick you want a segment
var segmentDepth = 150;

function init(){
    for(var i=1; i <= days; i++) {
        drawSegments(i*segmentDepth);
    } 
}

function drawSegments(radius) {   
    for(var i = 0; i < hours; i++){         
      context.beginPath();
      context.arc(x, y, radius, (startAngle * Math.PI / 180), (endAngle * Math.PI / 180), false);
      context.lineWidth = segmentDepth;
      context.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      context.stroke();

      // increase per segment        
      startAngle += segmentWidth;
      endAngle += segmentWidth;
    }
}

// start drawing our chart
init();
