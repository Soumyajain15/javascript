//DOM
/*
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header=document.querySelector(".header");
console.log(header);
const navitem=document.querySelector(".nav-item");
console.log(navitem);

//change text
//textcontent and innertext
const mainHeadings=document.getElementById("main-heading");
console.log(mainHeadings.textContent);
mainHeading.textContent="this is something else";

//change the styles of elements
const mainHeadingss=document.querySelector("div");
console.log(mainHeadingss.style);
mainHeading.style.color="blue";
mainHeading.style.backgroundColor="black";

*/
/*
// get the style of elements
const link=document.querySelector("a");
console.log(link.getAttribute("href"));
const form=document.querySelector(".form-todo input");
console.log(form.getAttribute("type"));
*/
/*
//get multiple elements using getelments by class name 
const navitems=document.getElementsByTagName("a");
console.log(navitems);
//arrray like object 
console.log(navitems[0]);
*/

/*
//loop
for(let i=0;i<navitems.length;i++){
    //console.log(navitems[i]);
    const navitem=navitems[i];
    navitem.style.backgroundColor="#fff";
    navitem.style.color="green";
    navitem.style.fontWeight="bold";
}
for(let navitem of navitem){
    navitem.style.backgroundColor="#fff";
    navitem.style.color="green";
    navitem.style.fontWeight="bold";
}
// you can use any of the for loop for styling but can not use forEach

//innerHTML
const headline=document.querySelector(".headline");
console.log(headline);
headline.innerHTML="<h1>inner html changed </h1>";
headline.innerHTML+="<button>Learn More</button>";
*/
/*
const sectiontodo=document.querySelector(".section-todo");
console.log(sectiontodo.classList);
sectiontodo.classList.toggle("bg-dark");
const header=document.querySelector(".header");
console.log(header.classList);
header.classList(header);
const todolist=document.querySelector(".todo-list");
*/


const todolist=document.querySelector(".todo-list");
todolist.insertAdjacentHTML("beforeend","<li>Teach student</li>");

//clone nodes
const ul=document.querySelector(".todo-list");
const li=document.querySelector("li");
li.textContent="new todo";
const li2=li.cloneNode(true);
ul.append(li);
ul.prepend(li);







