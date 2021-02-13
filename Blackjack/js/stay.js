stay = () => {
    while (dealerScore <= playerScore 
          && playerScore <= 21
          && dealerScore < 17 ) {
            dealCard(dealer);
            displayCards(dealerCards,dealer);
            dealerScore=calculateHandValue(dealer);
      }  

    const winner=determinWinner(true);
    displayWinner(winner);
}