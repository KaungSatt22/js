class Human{
    constructor(name,age){
        this._name = name;
        this._age = age; 
    }
    set age(NewAge){
        if(NewAge <0 && NewAge > 100){
            this._age = NewAge
        }
    }
    get age(){
        return this._age
    }
}
const obj = new Human('K',20)
obj._age = 200
console.log(obj.age)
