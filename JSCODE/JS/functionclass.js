function Human(name,age){
    this.name = name
    this.age = age 
    this.display = function(){
        console.log(this.name,this.age)
    }
}
function Teacher(){
    this.teach = function(){
        console.log(this.name)
    }
}
Teacher.prototype = new Human('K',21)
teacher = new Teacher()
teacher.display()
teacher.teach()