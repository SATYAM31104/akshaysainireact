// // // let name='5';
// // // console.log(name);
// // // let numbers=[1,2,3,4,5];
// // // numbers.push(60);
// // // numbers.unshift(8);
// // // numbers.splice(2,0,'a','v','c');
// // // let courses=[
// // //     {no:1,name:'raja',sex:'addict'},
// // //     {no:2,name:'rani',sex:'slave'}
// // // ]
// // // let course=courses.find(course=>course.name=='raja'); //here the predicate function paramater can be any name 

// // // console.log(course);

// let array1=[1,2,3,4,5,6,7];
// let array2=[8,9,10,11,12];
// // // // let combined=array1.concat(array2);
// // // // let sliced=combined.slice(2,6); //last waala index exclude ho jaata hai
// let anothercombination=[...array1,'a','cunt',...array2]; //... are the spread operators
// console.log(anothercombination);

// // // console.log(sliced);

// //iterating an array
// let array=[10,20,30,40];
// // for(let value of array){
// //     console.log(array);
// // }

// array.forEach(number=>console.log(number));

//joining arrays
// let num=[10,-20,-40,30];
// let joined=num.join('/');
// let message="suryansh madharchod bsdka gawar loda";
// let spl=message.split(' ');
// console .log(spl[0]);
// console.log(joined);
// let rev =num.reverse();
// console.log(rev);
// let filtered= num.filter(value=> value<=0);
// console.log(filtered);
// let filtered=num.filter(num=> num>=0)
// let filtered = num.filter(num => num >= 0);
// console.log(filtered);

// let items = num
//              .filter(num => num > 0)
//              .map(num => ({ value: num }));
// console.log(items);
// function add(a,b){
//     let total=0;
//     for(let digits of arguments){
//         total =total +digits;
        
//     }
//     return total;
// };
// console.log(add(3,4,4,2,6));
// function sum(...args){ //yeh array form bana deta hai
//     console.log(args);
// }
// sum(1,2,3,4);
// let obj={
//  fname:'shashwat', 
//  lname:'srivastava'
// }
// // console.log(obj);

// function fullname(){
//     return `${obj.fname} ${obj.lname}`;
// }
// console.log(fullname()); //this is only readonnly

//getter setter douct
// let person={
//     fname:'shashwat',
//     lname:'srivastava',
//     get fullname(){
//         return `${person.fname} ${person.lname}`;
//     } ,
//     set fullname(value){
//         let parts =value.split('/');
//         this.fname=parts[0];
//         this.lname=parts[1];

//     }
// }

// console.log(person.fullname);

//try and catch doubt

let arr=[1,2,3,4];
let totalsum=arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);//here the 0 is the initaial value of the accumulator
console.log("printing thee total sum");//when the accumulator is not given the first element of the array is taken as the accumulator and second value is taken as the current value
console.log(totalsum);

