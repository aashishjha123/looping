
// for (let i=0;i<=50;i++)
// console.log(i);


// let sum=0;
// let n =prompt("Enter the value");
// n=Number.parseInt(n);
// for (let i=0;i<n;i++){
// sum +=(i+1)
// }
// console.log("The sum of the n " + n  +" is" +sum);



//Factorial

// let i,fact=1;
// let f=prompt("Enter the n")
// for(let i=1;i<=f;i++){
// fact=fact*i;
// }
// console.log(fact);


//palindrome
// let r;
// let sum=0;
// let n=prompt("Enter the number")
// n=Number.parseInt(n);
// let temp=n;

// while(n>0)
// {
//     r=n%10;              //getting remainder  
//     sum=(sum*10)+r;    
//     n=n/10;    
    
// }
// if(temp==sum){
// console.log("the number "+ temp +" is palindrome");
// }
// else
// {
//     console.log("the number "+ temp +" is not palindrome");

// }


//fabonacci series

// let n1=0;
// let n2=1;
// let n3;
// console.log(n1);
// console.log(n2);
// let count=prompt("enter the series of number");
// count=Number.parseInt(count)

// for(let i=2;i<count;i++){
//     n3=n1+n2;
   
//     console.log(n3)
//     n1=n2;
//     n2=n3;
// }
// console.log("the series of the entered number" +count +" is " + n3)



// Advance for loop


// let obj={
//     aashish:"22",
//     aa:"23",
//     aash:"12",
//     aashi:"322",
//     aashis:"522",
// }

// for (let a in obj){
//     console.log(a + " " + obj[a] );
// 

// for(let b of "aashish")
// {
//     console.log(b);
// }



//normal while loop

// let n=prompt("enter the number")
// n=Number.parseInt(n)

// let i=0;
//  while(i<n)
// {
//     i++
//     console.log(i);
// }



//Strings using temp

// let n1=`Aashish`
// let n2=`Aas`

// //desired result is Aashish is the friend of aas

// let sent=`${n1} is the friend of ${n2}`
// console.log(sent);


//array sort

// let arr=[1,23,4345,545,3,234,4,3,423,42,34,23,4,234,24,324,234,23,42,34,23,4,564,68,8,9,0990,2]
// arr.sort()
// console.log(arr);

// let arr=[1,2,3,4,5]

// arr.forEach((element)=>{
//     console.log(element*element);
// })

//array from

// let nae="Aashish"+"jha" ;
// let arr=Array.from(nae);
// console.log(arr);


//map
// let arr=[1,3,4,5]
// let newArr=arr.map((value)=>{
//     console.log(value);
//     return value + 1;
// });
// console.log(newArr);


//filter

// let arr=[1,23,44,5,666,543,234]
// let news=arr.filter((a)=>{
//     return a<100
// })
// console.log("the number less then 100 are "+news.length + " that is "+news)


//reduce

// let a=[1,2,3,4,5,6]
// let n=a.reduce((s,d)=>{
//     return s*d
// })

// console.log(n); //o/p=720

//promise
// let number="this is me the new version of token which you can use ";

// let promise=new Promise((resolve , reject)=>{
//     const token=localStorage.setItem("number",number)
//     const tokenwe=localStorage.getItem("number",number)
//     setTimeout(()=>{
//         console.log(number);
//         resolve(true)
//     },1000)
//     console.log("hi this is a mariya "+ tokenwe);
//     const paragraph = document.getElementById("my-paragraph");
//     paragraph.textContent = tokenwe;
// })
// let promise1=new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log("I am a promise and i had failed it");
//         reject(new Error("it failed to resolve the promise"))
//     },1000)
// })

// console.log(promise,promise1);
// console,log(" the new line is "+tokenwe);



// promise chaining in a continous way
// let p1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("hii there we are doing well")
//         resolve(999)
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2 =new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//          resolve("promise 2")
//         },4000)
//     })
//     return p2;
// }).then((value)=>{
//     console.log("hii this is a new promise resolve");
//     let p3=new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//                 resolve("this is 3rd person")
//         },5000)
//     })
//     return p3
// }).then((value)=>{
//     console.log(value);
//     console.log("hi this is a 3dr person speaking")
// })
