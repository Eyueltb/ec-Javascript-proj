
calculateHandValue =  (person)=>
{
    let score=0;
    let hasAce=person.find(card=>card.value===1)!== undefined;

    //calculate person's sum
    person.forEach(card => score += card.value );
    if( hasAce && score + 10 <=21)
        score +=10;

    return score;
}