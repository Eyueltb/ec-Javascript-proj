class Person
{
    constructor(fname, lname){
        this._fname=fname;
        this._lname=lname;
    }
    get name(){ return `${ this._fname } ${ this._lname }`; }
 
}