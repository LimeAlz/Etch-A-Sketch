const body = document.querySelector('.body');
const board = document.createElement('div');
// board.style.cssText = "display:grid;"
board.classList.add("board")
for(let i =0;i<256;i++){
   let div = document.createElement('div');
   div.classList.add("board-item");
   div.id ="b"+i;
   board.appendChild(div);
}
body.appendChild(board);

function changeColor(selector,i){

}

let all_button = document.querySelectorAll('.board-item');
for(let i=0; i< all_button.length;i++){
    all_button[i].addEventListener('mouseover',()=> {all_button[i].style.cssText = "background-color:red;"});
}