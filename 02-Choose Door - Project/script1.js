let doorImage1 = document.getElementById("door_a");
let doorImage2 = document.getElementById("door_b");
let doorImage3 = document.getElementById("door_c");
let startButton = document.getElementById("start");
let flyDoorPath = "findfly.png";
let oceanDoorPath = "ocean.png";
let forestDoorPath = "forest.png";
let closedDoorPath = "door_closed.png";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
​
​
function asd() {
  let x = [flyDoorPath,oceanDoorPath,forestDoorPath]
  x.sort(() => Math.random() - 0.5);
​
  door1 =x[0]
  door2=x[1]
  door3=x[2]
  console.log(x[0])
​
​
  doorImage1.onclick = () => {  
    if(x[0]!==flyDoorPath) { 
    doorImage1.src =x[0]
    }else {
      doorImage1.src =flyDoorPath 
      startButton.innerHTML="Game Over"
      doorImage2.onclick = () => {  
      }
      doorImage3.onclick = () => {  
      }
     }
  }
​
  doorImage2.onclick = () => {  
    if(x[1]!==flyDoorPath) { 
    doorImage2.src =x[1]
    }else {
      doorImage2.src =flyDoorPath 
      startButton.innerHTML="Game Over"
      doorImage1.onclick = () => {  
      }
      doorImage3.onclick = () => {  
      }
     }
  }
​
  doorImage3.onclick = () => {  
    if(x[2]!==flyDoorPath) { 
    doorImage3.src =x[2]
    } else {
      doorImage3.src =flyDoorPath 
      startButton.innerHTML="Game Over"
       doorImage1.onclick = () => {  
       }
       doorImage2.onclick = () => {  
      }
    }
  }
}
asd()