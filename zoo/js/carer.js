class Carer extends Person
{
    constructor(fname,lname){
        super(fname,lname);
    }
    feedAnimal(animal, food){
        return animal.eat(food);
    }
}