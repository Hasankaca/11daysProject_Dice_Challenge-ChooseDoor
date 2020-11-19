const doorImage1 = document.querySelector('#door_a');
const doorImage2 = document.querySelector('#door_b');
const doorImage3 = document.querySelector('#door_c');
const numClosedDoor = 3;
let openDoor1 ;
let openDoor2 ;
let openDoor3;
let findfly = "./findfly.png" ;
let forest = "./forest.png" ;
let ocean = "./ocean.png" ;

const randomFindDoorGenerator = function() {
   let findDoor = Math.floor(Math.random()*numClosedDoor);
  if (findDoor === 0){
    findfly = openDoor1;
    forest = openDoor2
    ocean = openDoor3
  }else if (findDoor === 1){
    
      findfly = openDoor2;
      forest = openDoor1
      ocean = openDoor3
  }else {
          findfly = openDoor2;
      forest = openDoor1
      ocean = openDoor1
  }
}

doorImage1.onclick = function () {
    doorImage1.src = "./findfly.png";
}

doorImage2.onclick = function () {
    doorImage2.src = "./forest.png";
}

doorImage3.onclick = function () {
    doorImage3.src = "./ocean.png";
}