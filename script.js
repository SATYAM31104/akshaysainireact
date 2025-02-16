let newbtn=document.querySelector("#btn1");

// newbtn.onclick=()=>{
// console.log("the button was pressed");
// }
newbtn.addEventListener("click", ()=>{
    console.log("the button was pressed handler 1");
})

newbtn.addEventListener("click", ()=>{
    console.log("the button was pressed handler 2");
})

const handler3 = ()=>{
    console.log("the button was pressed handler 3");
};
newbtn.addEventListener("click",handler3);

newbtn.addEventListener("click", ()=>{
    console.log("the button was pressed handler 4");
})

newbtn.removeEventListener("click",handler3);