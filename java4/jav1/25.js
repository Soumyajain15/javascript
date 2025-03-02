const h1=document.querySelector("hi");
const div=h1.parentNode;
div.style.color="red";
div.style.backgroundColor="yellow";

const body=h1.parentNode.parentNode;
body.style.color="red";
body.style.backgroundColor="yellow";
const head=document.querySelector("head");
console.log(head);
const title=head.querySelector("title");
console.log(title.childNodes);
const container= document.querySelector(".container");
console.log(container.childNodes);