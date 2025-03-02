//new keyword
function createuser(firstname,age){
this.firstname=firstname;
this.age=age;
}
createuser.prototype.about=function(){
    console.log(this.firstname,this.age)
}
const user1=new createuser("soumya",18);
console.log(user1.about());

let numbers=[1,2,3];
console.log(Object.getPrototypeOf(numbers));
console.log(numbers);

function hello(){
    console.log("hello");
}
//prototype
