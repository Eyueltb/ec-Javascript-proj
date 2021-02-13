let dealerCards=document.getElementById('dealer-cards'),
    playerCards=document.getElementById('player-cards'),
    winnerArea=document.getElementById('winner-area'),
    newGameButton=document.getElementById('new-game-button'),
    newCardButton=document.getElementById('new-card-button'),
    stayButton=document.getElementById('stay-button');
    

//Event Listeners
newGameButton.addEventListener('click', function(){
    //output(dealerCards,'newGameButton: dealer cards');//step 01
    //output(playerCards,'newGameButton: player cards');//step 01
    showPlayButtons();//step 01
    //displayCards(playerCards,unshuffledDeck);//step 02
    shuffleDeck();//step 03
    //displayCards(playerCards, deck);//step 03
    clearHands();//step 04
    dealCard(dealer, 2);//step 04
    dealCard(player, 2);//step 04
    displayCards(dealerCards, dealer);//step 05
    displayCards(playerCards, player);//step 05

    output(winnerArea,''); //step 06
    const winner=determinWinner();//step 06
    if(winner!=outcomes.undecided){//step 06
        showNewGameButton();
        displayWinner(winner);
    }
});

newCardButton.addEventListener('click', function(){
    //output(playerCards,'newCardButton');//step 01
    dealCard(player);//step 04
    displayCards(playerCards, player);//step 05
    const winner=determinWinner();//step 06
    if(winner!=outcomes.undecided){//step 06
        showNewGameButton();
        displayWinner(winner);
    }
});

stayButton.addEventListener('click', function(){
   //output(winnerArea,'stayButton : winner');//step 01
   showNewGameButton();
   stay(); //step 07
});

output = (element, text)=> element.innerText=text; //step 01

showPlayButtons=()=>{
    newGameButton.style.display='none';
    newCardButton.style.display='inline';
    stayButton.style.display='inline';
}
showNewGameButton=()=>{
    newGameButton.style.display='inline';
    newCardButton.style.display='none';
    stayButton.style.display='none';
}
showNewGameButton();