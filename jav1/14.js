/*const numbers=[1,5,6,7,8,9];


const even=function(number){
    return number%2===0;
}
const evennumber=numbers.filter(even);
console.log(evennumber);
*/


//reduce method
/*const number=[1,2,4,6];
const sum = number.reduce((accumulator,currentvalue)=>{
    
    return accumulator+currentvalue;
    
});
console.log(sum)


*/
/*const usercart = [
    {productid:1,productname:"shoes",price:5000},
    {productid:2,productname:"shirt",price:10000},
    {productid:3,productname:"pant",price:9000},
    ]
  const totalamount=usercart.reduce((totalprice,currentproduct)=>{
         return totalprice+currentproduct.price;
         
    },0)
    console.log(totalamount);
    */
    
    //sort
   /* const numbers=[2,4,5,7,10];
    numbers.sort((a,b)=>{;
          return a-b;
    })
    console.log(numbers);
    */
    //10 will be consider as 1 
    //sort done by ascii code
    /*
    0=>48
    1=>49
    2=>50
    3=>51
    4=>52
    5=>53
    6=>54
    7=>55
    8=>56
    9=>57
    */
    /*const usernames=["soumya","strot","abcd","virat","travis"];
    usernames.sort();
    console.log(usernames);
   */


   /*const product=[
   {productid:1,productname:"p1",price:3525},
   {productid:2,productname:"p2",price:300},
   {productid:3,productname:"p3",price:5000},
   {productid:4,productname:"p4",price:200},
]
product.sort((a,b)=>{
    return a.price-b.price

});
console.log(product)
product.sort((a,b)=>{
    return b.price-a.price

});
console.log(product)
*/




//find method
/*const myarray=["hello","hii","hola","como estas"];
function islength(string){

    return string.length ===3;
}
const ans=myarray.find(islength);
console.log(ans)

const my=["mango","banana","apple","orange"];
const fruit=my.find((string)=>string.length===5);
console.log(fruit);
*/


//every method
/*const numbers=[2,4,5,6,7];
const ans=numbers.every((number)=>number%2==0);
console.log(ans);
*/

//some method
const numbers=[2,3,4,6,7];
const ans=numbers.some(number=>number%2===0);
console.log(ans);

//fill method
const myarray =  new Array(10).fill(-1);
console.log(myarray);
//splice method
const val=["item1","item2","item3"];
//start,delete,insert
val.splice(1,1,"soumya");
console.log(val);
