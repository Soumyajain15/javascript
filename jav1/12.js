//hoisting
 /*function hello(){
    console.log("hello world");
 }
 hello();
 */
//function inside function
/*function app(){
    const myfun = () => {
        console.log("hi");
    }
    console.log("inside app");
    myfun();
}
app();
*/
function myfunc(a,b,c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)

}
myfunc(4,5,6);


function add(...numbers){
    let total=0;
      for(let number of numbers){
        total=total+number;
      }
      return total;
}
const ans=add(4,5,6);
console.log(ans);


const person = {
    firstname:"soumya",
      gender:"male",
}
function details(obj){
   console.log(obj.firstname);
   console.log(obj.gender);
}
details(person);