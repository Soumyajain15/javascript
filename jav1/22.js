/*function outerfunction(){
    function innerfunction(){
        console.log("hello  world")
    }
    return (innerfunction);

}
const ans=outerfunction();
ans();*/


/*
function printname(firstname,lastname){
    function value(){
        console.log(firstname,lastname);
    }
    return value;

}
const ans=printname("soumya","jain")
ans();
*/

/*
function hello(x){
    const a="varA";
    const b="varB";
    return function(){
        console.log(a,b,x);
    }
}
const ans=hello("arg");
ans();*/

function myfunction(power){
    return function(number){
        return number**power;
    }
}
const cube= myfunction(3);
const ans = cube(2);
console.log(ans);





function func(){
    let counter=0;
    return function(){
        if(counter<1){
            console.log("hi you called me");
            counter++;
        }
        else{
            console.log("mai already call ho");
        }
    }
}
const myfunc=func();
myfunc();
myfunc();
const myfunc2=func();
myfunc2();
myfunc2();



