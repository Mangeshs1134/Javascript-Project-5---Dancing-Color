function randomColor() {
  let hexCodes = `ABCDEF1234567890`;
  let color = `#`;

  let x;
  for (let i = 0; i < 6; i++) {
    x = parseInt(Math.random() * 16);
    color += hexCodes[x];
  }
  document.body.style.backgroundColor = color;
}

let start = document.querySelector(`#start`);
let stop = document.querySelector(`#stop`);
let intervalId;

const startChangingColor = function(){
    if (intervalId !== null) {
        intervalId = setInterval (randomColor , 1000)
    console.log(intervalId);
    }
    
}  
const stopChangingColor = function(){
   
    clearInterval(intervalId)
    
   
    // intervalId = null 
    
} 

start.addEventListener(`click`, startChangingColor )
stop.addEventListener(`click`,stopChangingColor)




