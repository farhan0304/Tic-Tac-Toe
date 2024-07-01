let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let newbtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".msg-container");
let mainContainer = document.querySelector(".container");
let playerO = true;
let count =0;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () =>{
    count = 0;
    for (let button of buttons){
        playerO = true;
        button.innerText = "";
        button.disabled = false;
    }
}

for (let button of buttons){
    button.addEventListener("click",() =>{
        if(playerO){
            button.innerText = "O";
            button.style.color = "rgb(115, 9, 34)";
            playerO = false;
            button.disabled = true;
            
        }else{
            button.innerText = "X";
            button.style.color = "rgb(8, 55, 108)";
            playerO = true;
            button.disabled = true;
            
        }
        count++;
        checkWinner();
        if(count==9){
            msg.innerText = "Draw";
            mainContainer.classList.toggle("hide");
            msgContainer.classList.toggle("hide");

        }
        
    })
    
    
}
const checkWinner = () => {
    for (let pattern of winPattern){
        let opt1 = buttons[pattern[0]].innerText;
        let opt2 = buttons[pattern[1]].innerText;
        let opt3 = buttons[pattern[2]].innerText;
        if (opt1 !="" && opt2 != "" && opt3 != "" ){
            if (opt1===opt2 && opt2===opt3){
                count = 0;
                console.log("Winner: "+opt1);
                msg.innerText = `Winner: ${opt1}`;
                mainContainer.classList.toggle("hide");
                msgContainer.classList.toggle("hide");
            }
        }

    }
}

reset.addEventListener("click", ()=>{
    resetGame();
})
newbtn.addEventListener("click", ()=>{
    resetGame();
    mainContainer.classList.toggle("hide");
    msgContainer.classList.toggle("hide");
})

