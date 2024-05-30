var butt = document.querySelectorAll('.box');
var container = document.getElementById('container');
let a = 0;
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
            setTimeout(function() {
                location.reload();
            }, 1000);}
        }
       
    }
