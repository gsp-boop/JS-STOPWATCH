let display = document.getElementById('display');

let seconds = 0;
let minutes = 0;
let hours = 0;

//display

let secondsDisplay = 0;
let minutesDisplay = 0;
let hoursDisplay = 0;

//start sop triggers
let interval = null;
let startStop = 'stop';

//Buttons
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function stopWatch (){

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 === 1){
        minutes = 0;
        hours++;
    }

    
    //leading zero
    
    seconds < 10 ? secondsDisplay = '0' + seconds.toString():
    secondsDisplay = seconds;
    
    minutes < 10 ? minutesDisplay = '0' + minutes.toString():
    minutesDisplay = minutes;
    
    hours < 10 ? hoursDisplay = '0' + hours.toString():
    hoursDisplay = hours;
    
    display.innerHTML = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}


function start(){
    if(startStop === 'stop'){
      interval = window.setInterval(stopWatch, 1000)
      startStop = 'start'
    }
}

function stop(){
    if(startStop === 'start'){
        interval = clearInterval(interval);
        startStop = 'stop'
    }
}
function reset (){
    interval = clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    startStop = 'stop'
    display.innerHTML = '00:00:00'
}
