$(document).ready(function(){
   
});

function drawShape(){
   // get the canvas element using the DOM
   var canvas = document.getElementById('mycanvas');
   // Make sure we don't execute when canvas isn't supported
   if (canvas.getContext){
      
      // use getContext to use the canvas for drawing
      var ctx = canvas.getContext('2d');
      
      for (i=0;i<10;i++){
         ctx.lineWidth = 1;
         ctx.beginPath();
         ctx.moveTo(5,5+i*20);
         ctx.lineTo(30,5+i*20);
         ctx.strokeStyle = '#434448';
         ctx.stroke();
      }
   }
}