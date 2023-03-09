let color = "black";

const body = document.querySelector('.body');
const board = document.createElement('div');

board.classList.add("board")
for(let i =0;i<256;i++){
   let div = document.createElement('div');
   div.classList.add("board-item");
   div.id ="b"+i;
   board.appendChild(div);
}
body.appendChild(board);

let isDrawing = false;

function hov(button){
    if (isDrawing) {
        button.style.backgroundColor = color;
    }
}

let all_button = document.querySelectorAll('.board-item');
for(let i=0; i< all_button.length;i++){
    all_button[i].addEventListener('mousedown',()=>{
        isDrawing = true;
        hov(all_button[i]);
    });
    all_button[i].addEventListener('mouseup',()=>{
        isDrawing = false;
    });
    all_button[i].addEventListener('mouseover',()=>hov(all_button[i]));
}




function reset(){
    let all_button = document.querySelectorAll('.board-item');
    for(let i=0; i< all_button.length;i++){
        all_button[i].style.cssText = 'background-color: white';
    }
   
}

function dkmod(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.querySelector('.board').style.borderColor = "darkgrey";
    let btn_border =document.querySelectorAll('.bo');
    for (let i = 0; i< btn_border.length; i++){
        btn_border[i].style.borderColor = "grey";
        btn_border[i].style.color = "black";
    }
    document.querySelector('.color').style.borderColor = "grey";
    document.querySelector('.color').style.color = "black";
}
function limod(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector('.board').style.borderColor = "black";
    let btn_border =document.querySelectorAll('.bo');
    for (let i = 0; i< btn_border.length; i++){
        btn_border[i].style.borderColor = "black";
    }
    document.querySelector('.color').style.borderColor = "black";
    document.querySelector('.color').style.color = "black";
}
const btn_div =  document.createElement('div');

//Button
const btn = document.createElement('div');
const dkmode = document.createElement('div');
const limode = document.createElement('div');
btn.classList.add("bo");
dkmode.classList.add("bo");
limode.classList.add("bo");
dkmode.textContent = "Dark mode";
limode.textContent = "Light mode";
btn.id = 'reset';
btn.textContent = "Reset";
btn_div.style.cssText = "display:flex; flex-direction:column; justify-content:space-evenly; text-align:center;"
btn_div.appendChild(btn);
btn_div.appendChild(dkmode);
btn_div.appendChild(limode);

body.appendChild(btn_div);




const color_div = document.createElement('div');
color_div.classList.add('color_div');
let cr = ["red","orange","yellow","blue","green","pink","white","black"];
for(let i=0;i< cr.length;i++){
    let temp = document.createElement("div");
    temp.style.padding = "12px";
    let temp2 = document.createElement("div");
    temp2.id = cr[i]+"-color";
    temp2.style.cssText = `background-color:${cr[i]}; height:20px; width:20px; border:2px solid black;  border-radius: 15px;`
    temp.appendChild(temp2);
    color_div.appendChild(temp); 
}
const color_box  = document.querySelector('.color')
color_box.appendChild(color_div);

function chageColor(c){
    color = c;
}

document.querySelector('#red-color').addEventListener('click',()=>chageColor('red'));
document.querySelector('#orange-color').addEventListener('click',()=>chageColor('orange'));
document.querySelector('#yellow-color').addEventListener('click',()=>chageColor('yellow'));
document.querySelector('#blue-color').addEventListener('click',()=>chageColor('blue'));
document.querySelector('#green-color').addEventListener('click',()=>chageColor('green'));
document.querySelector('#pink-color').addEventListener('click',()=>chageColor('pink'));
document.querySelector('#white-color').addEventListener('click',()=>chageColor('white'));
document.querySelector('#black-color').addEventListener('click',()=>chageColor('black'));




btn.addEventListener('click',reset);
dkmode.addEventListener('click',dkmod);
limode.addEventListener('click',limod);

