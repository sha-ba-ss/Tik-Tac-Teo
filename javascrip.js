var butt = document.querySelectorAll('.box');
var container = document.getElementById('container');
var replayCon = document.getElementById('ree');
var result = document.getElementById('result');
let a = 0;
let gameISOver = false;
const winningConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
]
function replay() {
    for (let k = 0; k < 8; k++) {
        butt[k].onclick = null;
        location.reload();
    }
}
container.addEventListener("click",function () {
    for (let i = 0; i < winningConditions.length; i++) {
        let v0 = butt[winningConditions[i][0]].innerHTML;
        let v1 = butt[winningConditions[i][1]].innerHTML;
        let v2 = butt[winningConditions[i][2]].innerHTML;
        if (v0 != "" && v0 === v1 && v0 === v2) {
            gameISOver = true;
            for (let j = 0; j < 3; j++) {
                butt[winningConditions[i][j]].style.backgroundColor = "green";
                    for (let k = 0; k < 8; k++) {
                    butt[k].onclick = null;
                    replayCon.style.display ="inline";
                    if (a % 2 == 0) {
                        result.innerHTML ="O win"
                    }else if(a % 2 !== 0){
                        result.innerHTML ="X win"
                    }
                }
                
            }
        }
       
    }
})
function add(x) {
    if(a % 2 == 0) {
        butt[x].textContent = 'X';
        butt[x].onclick = null;
        a++;
    }else if (a % 2 !== 0) {
        butt[x].textContent = 'O';
        butt[x].onclick = null;
        a++
        if(a==8){
            replayCon.style.display ="inline";
        
        }
       
    }}
