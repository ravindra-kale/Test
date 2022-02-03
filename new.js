console.log("New Js File from  ravi");
class A{

    constructor(name){
        this.name=name;
    }
}
class B extends A{
    constructor(name){
        this.name=name;
    }
}
let res= new B('ravi');
console.log(res);
