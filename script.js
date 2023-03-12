//Dark Mode
const dkmode = document.querySelector('#darkmode');
const bt = document.querySelectorAll('.bt');
dkmode.addEventListener('change', function() {
    if(this.checked){
        document.body.classList.add('dark-theme');
        for (let i = 0; i < bt.length; i++) {
            bt[i].classList.add('dark-theme');
        }
       
    }
    else{
        document.body.classList.remove('dark-theme');
        for(let i=0;i<bt.length;i++){
            bt[i].classList.remove('dark-theme');
        }
    }
   
});

let color = "black";

let number=16;

const slider = document.querySelector("#boardrange");
slider.addEventListener('mouseup',(event)=>{
 number = event.target.value;
 createBoard(number);
})


let colorInput =  document.querySelector("#clwheel");
colorInput.addEventListener('input',()=>{
    color = colorInput.value;
}
)

const board = document.querySelector('.board');
function createBoard(number){
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    for(let i =0;i<number* number;i++){
        let temp  = document.createElement('div');
        temp.classList.add("grid-item");
        board.appendChild(temp);
    } 
    addEventListeners();  
    resetListner(); 
}
createBoard(number);


function paint(selector){
    selector.style.backgroundColor =color;
}

function addEventListeners() {
    const pixel = document.querySelectorAll('.grid-item');
    for (let i = 0; i < pixel.length; i++) {
      pixel[i].addEventListener('mousedown', () => {
        isMD = true;
      });
      pixel[i].addEventListener('mouseup', () => {
        isMD = false;
      });
      pixel[i].addEventListener('mouseover', () => {
        if (isMD) {
          paint(pixel[i]);
        }
      });
    }
  }

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click',()=>{
    color = "white";
})



function resetListner(){
    const reset = document.querySelector('.reset');
    const pixel = document.querySelectorAll('.grid-item');
    reset.addEventListener('click',()=>{
        for(let i=0;i<pixel.length;i++){
            pixel[i].style.backgroundColor ="white";
        }
    });
}
