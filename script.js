/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');
var goButton = document.getElementById('goButton');

var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');

stopButton.addEventListener('click',function(e){
  var color;
  stopLight.style.backgroundColor === 'red' ? color =  "" : color = 'red';
  stopLight.style.backgroundColor = color;
});
slowButton.addEventListener('click',function(e){
  var color;
  slowLight.style.backgroundColor === 'yellow' ? color =  "" : color = 'yellow';
  slowLight.style.backgroundColor = color;
});
goButton.addEventListener('click',function(e){
  var color;
  goLight.style.backgroundColor === 'green' ? color =  "" : color = 'green';
  goLight.style.backgroundColor = color;
});
