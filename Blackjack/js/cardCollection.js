//https://unicode-table.com/en/search/?q=player+cards
let unshuffledDeck = [
    {card:'🂡', value:1},{card:'🂢', value:2},{card:'🂣', value:3},{card:'🂤', value:4}, {card:'🂥', value:5},{card:'🂦', value:6},{card:'🂧', value:7},{card:'🂨', value:8}, {card:'🂩', value:9},{card:'🂪', value:10},{card:'🂫', value:10},{card:'🂭', value:10},{card:'🂮', value:10},
    {card:'🂱', value:1},{card:'🂲', value:2},{card:'🂳', value:3},{card:'🂴', value:4}, {card:'🂵', value:5},{card:'🂶', value:6},{card:'🂷', value:7},{card:'🂸', value:8}, {card:'🂹', value:9},{card:'🂺', value:10},{card:'🂻', value:10},{card:'🂽', value:10},{card:'🂾', value:10},
    {card:'🃁', value:1},{card:'🃂', value:2},{card:'🃃', value:3},{card:'🃄', value:4}, {card:'🃅', value:5},{card:'🃆', value:6},{card:'🃇', value:7},{card:'🃈', value:8}, {card:'🃉', value:9},{card:'🃊', value:10},{card:'🃋', value:10},{card:'🃍', value:10},{card:'🃎', value:10},
    {card:'🃑', value:1},{card:'🃒', value:2},{card:'🃓', value:3},{card:'🃔', value:4}, {card:'🃕', value:5},{card:'🃖', value:6},{card:'🃗', value:7},{card:'🃘', value:8}, {card:'🃙', value:9},{card:'🃚', value:10},{card:'🃛', value:10},{card:'🃝', value:10},{card:'🃞', value:10},
];

displayCards=(element, person)=>{
    let result='';
    person.forEach(function(card) {
        result += `${card.card} `;
    });

    const value=calculateHandValue(person);
    result += `${ value }`; //step 05

    output(element, result);
}
