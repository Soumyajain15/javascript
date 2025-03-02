const obj1={
    key1:"value1",
    key2:"value2"  
}
const obj2=Object.create(obj1)
obj2.key3="value3"
console.log(obj2.key1);
//__proto__
//[[prototype]]
console.log(obj2.__proto__);
//address  will  get printed
//you can add your own properties in the function
function  hello(){
    console.log("hi");
}
console.log(hello.name);
hello.myownproperty="jai jinendra";
console.log(hello.myownproperty);
if(hello.prototype){
    console.log("prototype is present ")
}
else{
    console.log("prototype is not there")
}


