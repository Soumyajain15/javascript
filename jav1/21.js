class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating and his age is ${this.age}`;

    }
    isSupercute(){
        return this.age<=1;

    }
    isCute(){
        return true;
    }
}
const animall=new animal("tiger",2)
console.log(animall);
console.log(animall.eat())
console.log(animall.isSupercute())
class dog extends animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}`
    }
}
const tommy=new dog("tommy",5,45);
console.log(tommy)





class person{
    constructor(firstname,lastname,age){
   this.firstname=firstname;
   this.lastname=lastname;
   this.age=age;
    }
   get fullname(){
        return`${this.firstname} ${this.lastname}`
    }
    setname(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
}
const person1= new person("soumya","jain",5);
console.log(person1)
person1.setname("somu","jain");
console.log(person1)
