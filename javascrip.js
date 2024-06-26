//get elements
var container = document.getElementById('container');
var replayCon = document.getElementById('ree');
var result = document.getElementById('result');
var score = document.querySelectorAll('.score');
var butt;
var a = 0;
var b = 0;
var c = 0;
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
//creating boxes, add onclick funtion to boxes,give class name,and sellection to butt array
function start(){
    for (let i = 0; i < 9; i++) {
        const boxes = document.createElement("div");
        container.appendChild(boxes);
        //for adding on click functins withe value of index numbre of the div boxes
        boxes.onclick = function () {
            divClicked(i);
        }
        boxes.classList.add("box"); 
        butt = document.querySelectorAll('.box');   
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
              let v0 = butt[winningConditions[i][0]].textContent;
              let v1 = butt[winningConditions[i][1]].textContent;
              let v2 = butt[winningConditions[i][2]].textContent;
              if (v0 != "" && v0 === v1 && v0 === v2) {
                  for (let j = 0; j < 3; j++) {
                      butt[winningConditions[i][j]].style.backgroundColor = "green";
                    }
                  for (let k = 0; k < 9; k++) {
                      butt[k].onclick = null;                                      
                    }
                    replayCon.style.display ="inline";
                    if (a % 2 == 0) {
                        result.innerHTML ="O win"
                        b++
                        score[1].textContent =b;
                        removeContainerClickListener()
                    }else if(a % 2 !== 0){
                        result.innerHTML ="X win"
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
        butt[index].textContent = 'X';
        butt[index].onclick = null;
        console.log(a)
        a++;
    }else if (a % 2 !== 0) {
        butt[index].textContent = 'O';
        butt[index].onclick = null;
        a++
        if(a==8){
            replayCon.style.display ="inline";
        }
    }}
    //restart the game without removing the markes
function replay() {
    container.innerHTML = '';
    replayCon.style.display = "none";
    a = 0; // Reset the move counter
    result.innerHTML ="";
    removeContainerClickListener(); // Remove the old event listener
    start(); // Restart the game
    addContainerClickListener();
}
