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
  stopLight.style.backgroundColor = 'red';
});
slowButton.addEventListener('click',function(e){
  slowLight.style.backgroundColor = 'yellow';
});
goButton.addEventListener('click',function(e){
  goLight.style.backgroundColor = 'green';
});

stopButton.addEventListener('dblclick',function(e){
  stopLight.style.backgroundColor = 'black';
});
slowButton.addEventListener('dblclick',function(e){
  slowLight.style.backgroundColor = 'black';
});
goButton.addEventListener('dblclick',function(e){
  goLight.style.backgroundColor = 'black';
});
