//methods
//function inside object

 /*function personinfo(){
        console.log(`person name is ${this.firstname} and age is ${this.age}`);
        console.log(this);
 }
        // this is the object of person 
    const person1={
        firstname:"soumya",
        age:8,
        about: personinfo
    }
      const person2={
        firstname:"somu",
        age:19,
        about:personinfo
    }
      const person3={
        firstname:"ram",
        age:20,
        about:personinfo
    }

 person1.about();
person2.about();
*/

/*function myfunc(){
    "use strict"
    console.log(this);
}
myfunc();
//use strict mode so that it give you undefined output for printing the  .... this 
*/
/*function hello(){
    console.log("hello world");
}
hello.call();
//you can also use "call" for calling the function
*/


function about(hobby,favmusic){
        console.log(this.firstname,this.age,hobby,favmusic);
    }

const user4 = {
    firstname:"soumya",
    age:8,
    
}
const user2={
    firstname:"somu",
    age:9,
    }
    //call method
about.call(user2,"guitar","heat waves");
//apply method 
about.apply(user4,["guitar","heat waves"]);
//bind
const func=about.bind(user4,"guitar","love nwantiti");
func();




//function (that function create object)
function createuser(firstname,lastname,email,age,address){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstname} is ${this.age} years`
    }
    user.is18 = function(){
        return this.age >= 18;
}
return user;
}
const user1= createuser("soumya","jain","soumyaj470@gmail.com","18","old bus stand suwasara");
console.log(user1);
const is18 = user1.is18();
console.log(is18);

const about=user1.about();
console.log(about);
