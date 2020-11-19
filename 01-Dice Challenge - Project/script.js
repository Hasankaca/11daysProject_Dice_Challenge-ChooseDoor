let randomNumber = () => {return Math.floor(Math.random()*6) + 1};
// console.log(randomNumer());
let startButton = document.querySelector('#start');
let dice1 = document.querySelector('#dice_A');
let dice2 = document.querySelector('#dice_B');
startButton.onclick = function () {
let randomNum1 = randomNumber();
let randomNum2 = randomNumber();
dice1.src = "images/dice"+randomNum1+".png";
dice2.src = "images/dice"+randomNum2+".png";
if(randomNum1>randomNum2){
  document.querySelector('h1').innerHTML = "Player1 Wins";
  document.getElementById('player_2').style.color = "red";
  document.getElementById('player_1').style.color = "#4ECCA3";
}
else if(randomNum2>randomNum1){
  document.querySelector('h1').innerHTML = "Player2 Wins";
  document.getElementById('player_1').style.color = "red";
  document.getElementById('player_2').style.color = "#4ECCA3";
}
else {document.querySelector('h1').innerHTML = "Draw"
document.getElementById('player_1').style.color = "#4ECCA3"
document.getElementById('player_2').style.color = "#4ECCA3"
;
}
}
;