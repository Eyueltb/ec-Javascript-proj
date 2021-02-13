let dealer=[];
let player=[];

clearHands= () =>{
    dealer=[];
    player=[];
}

dealCard = (person,  count = 1) =>{
    //person is an array of cards: deck,dealer, or player
    // Add the first element of an array(shift) to another array(push)
    for(let i=0; i < count; i++)
        person.push(deck.shift());
}