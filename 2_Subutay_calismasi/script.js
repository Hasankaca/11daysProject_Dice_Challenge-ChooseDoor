const doorImage1 = document.querySelector('#door_a');
const doorImage2 = document.querySelector('#door_b');
const doorImage3 = document.querySelector('#door_c');

doorImage1.onclick = function () {
    doorImage1.src = "./findfly.png";
}

doorImage2.onclick = function () {
    doorImage2.src = "./forest.png";
}

doorImage3.onclick = function () {
    doorImage3.src = "./ocean.png";
}