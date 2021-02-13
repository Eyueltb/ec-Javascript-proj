class Zoo
{
   constructor(){
       this._carers=[];
       this._enclosures=[];
   } 

   get enclosures(){ return this._enclosures; }
   
   addCarer(fname,lname){
        const carer=new Carer(fname,lname);
        this._carers.push(carer);
        return carer;
   }
   
   getEnclosure(id){ return this._enclosures[id];}

   addEnclosure(name, carer, animals)
   {
       const enclosure=new Enclosure(name);
       enclosure.addCarer(carer);
   
       animals.forEach(a => {
           const animal=new Animal(a.type,a.name);
           enclosure.addAnimal(animal);
       });
       this._enclosures.push(enclosure);
   }
   
}