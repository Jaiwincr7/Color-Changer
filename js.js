const hex= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const colorbg=document.querySelector("body");
const colortext=document.querySelector("span");

const btn=document.querySelector("button");

btn.addEventListener("click",colorchange);

function colorchange(){
    let hexcolor="#";
    for(let i=0;i<6;i++)
    {
        hexcolor=hexcolor+hex[randomnumber()];
    }
    console.log(hexcolor);
    colorbg.style.backgroundColor=hexcolor;
    colortext.style.color=hexcolor;
    colortext.textContent=hexcolor;
}

function randomnumber(){
    let number=Math.floor(Math.random() * hex.length);
    return number;
}

const simple=document.querySelector(".heading2");
simple.addEventListener("click",simplecolor);

function simplecolor(){
    colortext.textContent="#F7F5F2";
    colortext.style.color="#F7F5F2";
    colorbg.style.backgroundColor="#F7F5F2";
}
