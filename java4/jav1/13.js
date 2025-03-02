const number=[4,5,6,7];
function multiply(number,index){
    console.log("index is",index);
    console.log("number is",2*number);
}
/*for(let i=0;i<number.length;i++){
    multiply(number[i],i);
}
*/

//number.forEach(multiply);
//same output

/*const users = [
    {firstName:  "soumya",age:18},
    {firstName:  "fwfw",age:12},
    {firstName:  "sodaadasd",age:15},
    {firstName:  "sodadacw",age:15},
]
users.forEach(function(users){
    console.log(users.firstName);
})
*/

//map method


const numbers=[3,4,5,6,7];
const square=function(number){
      return number*number;
}
const squarenumber=numbers.map(square);
console.log(squarenumber);

const users = [
    {firstName:  "soumya",age:18},
    {firstName:  "fwfw",age:12},
    {firstName:  "sodaadasd",age:15},
    {firstName:  "sodadacw",age:15},
]
const newName=users.map((users)=>{
    return users.firstName;
})
console.log(newName);
   
