const outcomes = {
    undecided : { value : null, output:''},
    player :  { value: 1, output:'You Win!' },
    dealer :  { value: 2, output:'Dealer Win' },
    draw :  { value: 3, output:'Draw' },
}

let playerScore=null;
let dealerScore=null;

displayWinner= (outcome) =>output(winnerArea, outcome.output);

hasBlackJack = (person, score) =>person.length === 2 && score===21;

isBust= (score) => score > 21;

determinWinner = ( stayed=false )=>{
    playerScore=calculateHandValue(player);
    dealerScore=calculateHandValue(dealer);

    //player or dealer are bust
    if(isBust(playerScore)) return outcomes.dealer;
    else if(isBust(dealerScore)) return outcomes.player;

    //Black Jack Hand
    let dealerBJ=hasBlackJack(dealer,dealerScore);
    let playerBJ=hasBlackJack(player,playerScore);
    if(playerBJ && dealerBJ) return outcomes.player;
    if(playerBJ) return outcomes.player;
    if(dealerBJ) return outcomes.dealer;
    
    //Dealer wins if they draw 5 cards <= 21
    if(dealerScore <=21 && dealer.length===5) return outcomes.dealer;
    else if(dealerScore===playerScore && dealerScore >= 17 && stayed) return outcomes.draw;
    else if(dealerScore > playerScore && dealerScore >= 17 && stayed) return outcomes.dealer;
    else if(dealerScore < playerScore && dealerScore >= 17 && stayed) return outcomes.player;

    return outcomes.undecided;
}

