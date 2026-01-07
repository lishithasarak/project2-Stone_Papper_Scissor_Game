let userscore = 0;
let comptscore = 0;
const choices = document.querySelectorAll(".choice");
const userscoreboard = document.querySelector("#user-score");
const comptscoreboard = document.querySelector("#computer-score");
const resultbar = document.querySelector("#result");
const drawGame = () =>{
    resultbar.innerText = "The Game was Draw";
    resultbar.style.backgroundColor ="blueviolet";
}
const showWinner = (userWin , userchoice, comptchoice) =>{
    if(userWin){
        userscore++;
        userscoreboard.innerText = userscore;
        resultbar.innerText = `You won!, Your ${userchoice} beats Computer ${comptchoice}`;
        resultbar.style.backgroundColor = "green";
    }else{
        comptscore++;
        comptscoreboard.innerText = comptscore;
        resultbar.innerText = `You lose!, Computer ${comptchoice} beats Your ${userchoice}`; 
        resultbar.style.backgroundColor ="red";       
    }
}

const playGame = (userchoice) =>{
    const comptchoice = gencomptchoice();
    if(userchoice === comptchoice){
        drawGame();
    }else{
        let userWin;
        if(userchoice == "rock"){
            userWin = comptchoice == "paper" ? false: true;
        }
        else if(userchoice == "paper"){
            userWin = comptchoice == "scissor" ? false: true;
        }
        else{
            userWin = comptchoice == "rock" ? false: true;
        }
        showWinner(userWin, userchoice, comptchoice);
    }   
};

const gencomptchoice = () =>{
    const options = ["rock" , "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })

})
