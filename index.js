// // // function eventfunction(){
// // //     console.log("i have pressed the button");
// // // }
// // // document.addEventListener('click',eventfunction);
// // // document.removeEventListener('click',eventfunction);

// // // const content= document.querySelector('#wrapper');

// // // console.log(content);

// // // content.addEventListener('click',function(potty){
// // //     console.log(potty);

// // // })
 

// // let mydiv=document.createElement('div');

// // function parastatus(event){
// //    console.log('para',event.target.textContent);
// // }
// // mydiv.addEventListener('click',parastatus);

// // for(let i=1;i<100;i++){
// //     let newelement=document.createElement('p');
// //     newelement.textContent='This is para'+i;
// //     mydiv.appendChild(newelement);
// // }
// // document.body.appendChild(mydiv);
// let element=document.querySelector("#wrapper2");
// element.addEventListener('click',function(event){
//     if(event.target.nodeName==='SPAN'){
//     console.log("we have clicked on span tag"+event.target.textContent); 
// }
// })

// let t1=performance.now();
// for(let i=0;i<1000;i++){
//    let newelement= document.createElement('p');
//    newelement.textContent= 'i am a paragraph'+i;



// document.body.appendChild(newelement);
// }
// let t2=performance.now();
// console.log("this took "+(t2-t1)+"ms");
 
//code using fragments
// let fragment=document.createDocumentFragment();
// for(let i=0;i<1000;i++){
//        let newelement= document.createElement('p');
//        newelement.textContent= 'i am a paragraph'+i;
    
    
    
//     fragment.appendChild(newelement);
//     }
//     document.body.appendChild(fragment); //1 reflow and 1 repaint
document.body.style.backgroundColor="grey"
let content=document.querySelector("#wrapper2");
// content.style.backgroundColor="green";

// let merapromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside the promise")
//     },5000);
//     // resolve(2244); 
//     reject("i am an error");

// });
// merapromise.then((value)=>{console.log(value)},(error)=>{console.log("bhai aagaya error")});//handling the value aftetr the succesful execution of the code
// merapromise.catch((error)=>{console.log("bhai aagaya error")}); //handling the error after the rejection or when we get an error in our code


// let merapromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside the promise1")
//     },1000);
//     // resolve(2244); 
//     // reject("new error");
// });

// let wada1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("settimeout1 started");
        
//     }, 5000);
//     resolve(true); 
// });

// let output=wada1.then((()=>{
//     let wada2= new Promise(function(resolve,reject){
//        setTimeout(()=>{
//         console.log("settimeout 2 sarted")
//     },10000);
//     resolve("wada 2 resolved");
//     })
//     return wada2;//returning a promise and returns a value which is applied in then function later this scope
// }))
// output.then((value)=>console.log(value)); //here output is also a promise only



// ASYNC-AWAIT
// async function abcd(){
//     return "sex";
// }
// console.log(abcd)
// async function utility(){


// let delhimausam= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("delhi mai bohot garmi hai");
//     },10000);
// });
// let hydmausam= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hyd mai bohot garmi hai");
//     },20000);
// });
// let DM= delhimausam;
// let HM=await hydmausam;
// return [DM,HM];
// }

//get or fetch API()
// async function utility(){
//     let cont=await fetch('https://jsonplaceholder.typicode.com/posts/1'); //jab tak fetch nahi ho jaata tab tak ruko yahan par next line par nahi jaana hai
//     let output=await cont.json(); //converting into java script object notation
//     console.log(output);
// }

// async function helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'babbar',
//             body: 'bhai ki jai',
//             userId: 1994,
//             weight:33,
//         }),
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//         },
//     };
//     let lauda= await fetch('https://jsonplaceholder.typicode.com/posts',options);
//    let response=lauda.json();
//    return response;

// }
// async function utility(){
//     let ans=await helper();
//     console.log(ans);

// }
// utility();



//closures
// jab bhi nested functions  waala case aayega humesha closure use karenege and ispe refrences wala pass by refrences waal refrrence lagega
// naakki copy waala 



