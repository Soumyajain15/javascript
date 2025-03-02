/*function birthday(){
console.log("happy birthday"); 
}
birthday();





function add(){
    console.log(2+4);
}
add();



function sum(num1,num2){
    return num1+num2;

}
const sumvalue=sum(5,6);
console.log(sumvalue);
*/

/*function even(num1){
    if(num1 % 2 ===0){
     return true;

    }
    else{
       return false;
    }
}
const number=even(10);
console.log(number);
*/




function ftarget(array,target){
   for (let i=0;i<array.length;i++){
    if(array[i]===target){
        return i;
    }
    }
    return -1;
     }
const array=[1,2,4,6];
console.log(ftarget(array,2));




























