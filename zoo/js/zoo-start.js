const enclosures=document.getElementById('enclosures');
const enclosureElement=document.getElementById('enclosure');
const animalsElement=document.getElementById('animals');
const feedAnimalButton=document.getElementById('feedAnimal');
const inputElement=document.getElementById('input');
const messageElement=document.getElementById('message');


const zoo=new Zoo();

enclosures.onchange=(event)=>{
    const id=event.target.value;
    localStorage.enclosureId=id;

    const enclosure = zoo.getEnclosure(id);
    enclosureElement.innerHTML+=`${enclosure.name} (${enclosure.carer.name})`;

    animalsElement.innerHTML+='';
    enclosure.animals.forEach((animal, index) =>{
        animalsElement.innerHTML+=`<option value="${index}">${animal.name}</option>'>`;
    });
    localStorage.animal=enclosure.animals[0].name;
    showElements();
}
animalsElement.onchange=(event)=>{
 const id=event.target.value;
 const selectedAnimal=event.target.childNodes[id].innerHTML;
 localStorage.animal=selectedAnimal;

}
feedAnimalButton.onclick=()=>{
    const id=localStorage.enclosureId;
    const enclosure=zoo.getEnclosure(id);
    const animal=enclosure.getAnimal(localStorage.animal);
    const food=inputElement.value;
    console.log(food +" "+ animal);
    messageElement.innerHTML = food;
    const message=enclosure.carer.feedAnimal(animal,food);
    messageElement.innerHTML = message;

};
createZoo = () =>{
    //Add carers to the Zoo
    const carer1 =zoo.addCarer('John','Doe');
    const carer2 =zoo.addCarer('Jane','Doe');
    const carer3 =zoo.addCarer('Clar','Mark');

    //Add enclosures to the Zoo
    zoo.addEnclosure("Djungle World",carer1, [ {type:'Elephant',name:'Dumbo'} , {type:'Tiger',name:'Share khan'} ]);
    zoo.addEnclosure("Desert World",carer2, [  {type:'Camel',name:'Daisy'} , {type:'Scorpion',name:'Scorpius'} ]);
    zoo.addEnclosure("Arctic World",carer3, [  {type:'penguin',name:'Pongo'}, {type:'Whale',name:'Willy'}]);
    
    enclosures.innerHTML+='';
    
    zoo.enclosures.forEach((enclosure, index) => enclosures.innerHTML+=`<option value="${index}">${enclosure.name}</option>'>`);
    console.log(carer1,carer2,carer3);
}
hideElements = ()=>{
    animalsElement.style.display='none';
    feedAnimalButton.style.display='none';
    inputElement.style.display='none';
    messageElement.style.display='none';
}
showElements = ()=>{
    animalsElement.style.display='inline-block';
    feedAnimalButton.style.display='inline-block';
    inputElement.style.display='inline-block';
    messageElement.style.display='block';
}
createZoo();