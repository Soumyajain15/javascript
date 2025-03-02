/*const usermethods = {
    about: function(){
        return `${this.firstname} is ${this.age} years`;
    },
    is18: function(){
        return this.age >=18;

    },
    sing:function(){
        return 'hello';

    }
}
function createuser(firstname,lastname,email,age,address){
    const user=Object.create(usermethods);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=usermethods.about;
    user.is18=usermethods.is18;
    user.is18 =usermethods.is18;
return user;
}
const user1= createuser("soumya","jain","soumyaj470@gmail.com","18","old bus stand suwasara");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
console.log(user1)
const about=user1.about();
console.log(about);
*/




// same code using classes

class CreateUser{
    constructor(firstname,lastname,email,age,address){
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
}
about(){
    return `${this.firstname} is ${this.age} years`;
}
is18(){
    return this.age >=18;
}
sing(){
    return 'hello';
}
}
const user1=new CreateUser("soumya","jain","soumyaj470@gmail.com","18","old bus stand suwasara");
console.log(user1);
