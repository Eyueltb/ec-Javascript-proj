class Animal
{
    constructor(animalType, name){
        this._animalType=animalType;
        this._name=name;
    }

    get type(){ return this._animalType; }
    set type(value) { this._animalType=value; }

    get name(){return this._name ; }

    eat(food){
        return `The ${this._animalType } eats ${food}`;
    }
}