let a = [1,2,3,4,6,5,7]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
let obj ={
   b:1,
   c:2,
   d:3
}
for (const key in object) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = object[key];
        console.log(key,element)
        
    }
}
