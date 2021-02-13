const startButton=document.getElementById('start-button');
const drawButton=document.getElementById('draw-button');
const stayButton=document.getElementById('stay-button');
const clearButton=document.getElementById('clear-scoreboard-button');
const playerContent=document.getElementById('player-content');
const dealerContent=document.getElementById('dealer-content');
const resultContent=document.getElementById('result-content');
const deckContent=document.getElementById('deck-content');
const scoreboardContent=document.getElementById('scoreboard-content');

const table=new Table();

let scoreboard=new Scorebord(scoreboardContent);
if(localStorage.sboard!=null){
    scoreboardContent.innerHTML=localStorage.sboard;
}
let clearTable= ()=>{
    playerContent.innerHTML="";
    dealerContent.innerHTML="";
    resultContent.innerHTML="";
    deckContent.innerHTML="";
}
let disbaleButtons= (start=false, draw=true, stay=true)=> {
    if(start) startButton.setAttribute("disabled","disabled");
    else startButton.removeAttribute("disabled");

    if(draw) drawButton.setAttribute("disabled","disabled");
    else drawButton.removeAttribute("disabled");
    if(stay) stayButton.setAttribute("disabled","disabled");
    else stayButton.removeAttribute("disabled");
}
let displayOutput=(htmlContainer, output) => htmlContainer.innerHTML=output;
let displayWinner = (playerSytayed = false) => {
    let winner=table.findWinner(playerSytayed);

    displayOutput(resultContent, winner);

    if(winner.length > 0){
        disbaleButtons();
        scoreboard.addScore(table.getPlayerOutput(), table.getDealerOutput(), winner);
    }
    return winner;
}
startButton.onclick =()=>{
    console.log("start button clicked");
    clearTable();
    disbaleButtons(true,false,false);
    table.newGame();
    //displayOutput(dealerContent,table.displayRemainingCards());
    displayOutput(playerContent, table.getPlayerOutput());
    displayOutput(dealerContent,table.getDealerOutput());
    displayWinner();
};
drawButton.onclick = () =>{
    console.log("Draw button clicked");
    table.drawPlayerCard();
    displayOutput(playerContent,table.getPlayerOutput());
    displayOutput(deckContent,table.displayRemainingCards());
    displayWinner();
};
stayButton.onclick = () =>{
    console.log("Stay button clicked");
    disbaleButtons();
    table.drawDealerCard();
    displayOutput(dealerContent,table.getDealerOutput());
    displayWinner(true);
};
clearButton.onclick = () =>{
    console.log("clear button clicked");
    scoreboard.clearScoreboard();
};
