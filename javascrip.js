//get elements
var container = document.getElementById('container');
var score = document.querySelectorAll('.score');
var game = document.getElementById("games");
var box;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
//creating winning conditions
const winningConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
]
//when browser open
window.onload = function () {
    start();
    addContainerClickListener();
}
//creating boxes, add onclick funtion to boxes,give class name,and sellection to box array
function start(){
    for (let i = 0; i < 9; i++) {
        const boxes = document.createElement("div");
        container.appendChild(boxes);
        //for adding on click functins withe value of index numbre of the div boxes
        boxes.onclick = function () {
            divClicked(i);
        }
        boxes.classList.add("box"); 
        box = document.querySelectorAll('.box');   
    }
    for (let i = 0; i < 9; i++) {
        box[i].classList.add("box"+i);
        box[i].style.display = "none";
    }
    for (let i = 0; i < 9; i++) {
        setTimeout(()=>{
            box[i].style.display = "inline";
        },100*i);
        
    }
}
//function for adding and removing the click event lisner for container
function addContainerClickListener() {
    container.addEventListener("click", containerClickListener);
}
function removeContainerClickListener() {
    container.removeEventListener("click", containerClickListener);
}
//cheaking the game status
function containerClickListener() {
          for (let i = 0; i < 8; i++) {
              let v0 = box[winningConditions[i][0]].textContent;
              let v1 = box[winningConditions[i][1]].textContent;
              let v2 = box[winningConditions[i][2]].textContent;
              if (v0 != "" && v0 === v1 && v0 === v2) {
                  for (let j = 0; j < 3; j++) {
                      box[winningConditions[i][j]].style.backgroundColor = "rgb(81, 29, 0)";
                    }
                  for (let k = 0; k < 9; k++) {
                      box[k].onclick = null;                                      
                    }
                    if (a % 2 == 0) {
                        b++
                        score[1].textContent =b;
                        removeContainerClickListener()
                    }else if(a % 2 !== 0){
                        c++
                        score[0].textContent =c;
                        removeContainerClickListener()
                    }   
                }
            }
}
//gaming when cliking on the boxes
function divClicked(index) {
    if(a % 2 == 0) {
        box[index].textContent = 'X';
        box[index].onclick = null;
        a++;
    }else if (a % 2 !== 0) {
        box[index].textContent = 'O';
        box[index].onclick = null;
        a++
    }}
    //restart the game without removing the markes
function replay() {
    container.innerHTML = '';
    a = 0; // Reset the move counter
    d++;
    game.innerHTML = d;
    removeContainerClickListener(); // Remove the old event listener
    start(); // Restart the game
    addContainerClickListener();
}
