class Enclosure
{
    constructor(enclosureName){
        this._enclosureName=enclosureName;
        this._animals=[];
        this._carer;
    }
    get name(){ return this._enclosureName; }
    get animals(){ return this._animals; }
    get carer(){ return this._carer; }

    addCarer(carer) { this._carer=carer; }
    addAnimal(animal){ this._animals.push(animal);}
    getAnimal(name){ return this.animals.forEach(a=>a.name===name); }
}