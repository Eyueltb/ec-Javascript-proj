let deck=[];


shuffleDeck= () =>{
    //similar to function shuffleDeck(){}
    let tmpDeck=unshuffledDeck.slice(0);
    deck=[];

    while(tmpDeck.length > 0)
    {
        let pos=Math.trunc(Math.random() * tmpDeck.length);
        let card=tmpDeck.splice(pos,1);
        deck.push(...card);
    }

}