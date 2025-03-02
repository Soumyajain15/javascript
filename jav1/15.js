const  firstname="Soumya";
for(let char of firstname){
    console.log(char)
}
const item=["item1","item2","item3"];
for(let char of item){
 console.log(char)
       }
//sets
const numbers=new Set(); 
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(["item1","item2"])     
numbers.add(["item1","item2"])    
/*if (numbers.has(1)){
   console.log("1 is there")
}
else{
    console.log("1 is not there")
}
console.log(numbers)
//no duplicate value allowed in set
*/

for(let number of numbers){
    console.log(number)
}



const myarray=[1,2,3,4,4,4,4,4,4,6,7,8,9];
const unique=new Set(myarray);
console.log(unique);
let length=0;
for(let element of unique){
    length++;
}
console.log(length);

