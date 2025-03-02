let random= Math.random()
let a = prompt("Enter First Number")
let b = prompt("Enter second Number")
let c = prompt("Enter operation Number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random > 0.1) {
    alert('the result is ${eval(', $, { a }, $, { c }, $, { b }, ')}');
}

else {
    c = obj[c];
    alert('the result is ${eval(', $, { a }, $, { c }, $, { b }, ')}');
}
