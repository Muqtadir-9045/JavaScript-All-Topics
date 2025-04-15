//Write a code which can give grades to student according to their score
// 90-100,A
// 70-89,B
// 60-69,C
// 50-59,D
// 0-49,F 


// let score = 65;
// let grade;
// if (score >=90 && score<=100){
//     console.log("Grade A");
// } else if (score >=70 && score <= 89){
//     console.log("Grade B");
// } else if (score >= 60 && score <= 69){
//     console.log("grade C");
// } else if( score >= 50 && score <= 59){
//     console.log("Frade F");
// } else  {
//     console.log("Your Grade Was According To your Score is " , grade);
// }


// Print all even number from 0 to 100

// for(let num = 0; num <= 100; num++){
// if (num % 2 === 0){
//     console.log(num);
// }
// }

// Divisible 5 or not ?

// let num = prompt("Enter a number");
// if (num % 5 === 0) {
//     console.log(num , "is Multiple of 5");
// } else {
//     console.log(num , "is Not Multiple of 5")
// }


// Create a game where you start with any random game number . Ask the useer to keep 
// guessing  the game number until the user enter correct value.

// let gameNum = 25;
// let userNum = prompt("Enter A Number");
// if (gameNum != userNum){
//     console.log("You Enterd Wrong Number , Guess Again");
// } else {
//     console.log("You Entered Right Number");
// }



//Prompt the username to enter their fullname . Generate a username for them based on the input . 
//Start username with@, followed by their full name and enditng with the fullname lengt
// eg : user name = "muqtdairqureshi", username should be "@muqtadirqureshi123"

// let userName = prompt("Enter your Name , Without Space");
// FullName = "@" + userName + userName.length;
// console.log(FullName);


//For a given array with marks of student  [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//     // sum = 0;
//     sum = sum + val;

// }

// let avg = sum / marks.length;
// console.log(`Average marks of the entire class is ${avg}`);


//For a given array with price of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.

// let price = [250, 645, 300, 900, 50];
// for(let i=0; i<price.length; i++){
//     let offer = price[i]/10;
//     price[i] = price[i]-offer;
// }
// // console.log(`Final Price After Applying Offer is ${price}`);
// console.log(price);

//Create an Array to store companies  "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a.Remove the first company from the array
// b.Remove Uber & ADD Ola in its place 
// c. Add Amazon At the end

// let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Companies.splice(0,1);
// Companies.splice(1,1,"Ola");
// Companies.push("Amazon");
// console.log(Companies);


//Create a H2 heading element with text "Hello JavaScript ". Append from "Apna College Students " to this text using JS

// let h2 = document.querySelector("h2");

// h2.innerText = h2.innerText + "From Apna College ";

// console.log(h2.innerText);


// let arr = [1,2,3,4,5,6,7];
// let evenarr = arr.filter ((val)  => {
//     return val%2===0;
// });

// console.log(evenarr);

// let num = [1,2,3,4,5];
// let square = num.map((val) => {
//     return val*val;
// });

// console.log(square);


//Reduce Method 
 
// let num = [3,4,1,2,9,4,6];
// let GreaterNum = num.reduce((prev,curr) => {
//     return prev>curr ? prev:curr;
// });
// console.log(GreaterNum);


// We are given array of marks of student . Filter out of the marks of student that score 90+ [97, 64, 32, 49, 99, 96, 86];

// let marks = [97, 64, 32, 49, 99, 96, 86];
// let scoredMarks = marks.filter((val) => {
//     return val > 90;
// });
// console.log(scoredMarks);



//Take a number n as input from the user . Create an array from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array 
//Use the reduce method to calculate product of all numbers in the array 


// let n = prompt("Enter a number");
// let arr = [];
// for(let i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum = arr.reduce((prev,curr) => {
//     return prev+curr;
// });
// console.log("sum = ", sum);

// let product = arr.reduce((prev,curr) => {
//     return prev*curr;
// });
// console.log("product = ", product);



//Create 3 divs with common class name . Access them and add some unique text to each of them 

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(let div of divs){
//     div.innerText = `unique value${idx}`;
//     idx++;
//     console.log(div.innerText);
// }




//Create a new button element . GIve it a text "click me " , background color of red and text color of white 
//Insert the button as the first element inside the body tag 

// let newBtn = document.createElement("button");
// newBtn.innerText= "click me";
// newBtn.style.backgroundColor="red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend(newBtn);

//Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again

// let Btn = document.querySelector("#btn");
// let currMode = "light";
// Btn.addEventListener("click", () =>{
//     if(currMode == "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);    
// });

















//Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again


// let modeBtn = document.querySelector("#btn");
// let currMode = "light";

// modeBtn.addEventListener(("click"), () => {
//     if(currMode == "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     } else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// });



//Then and catch method 
// const getpromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a Promise");
//         resolve("success");
//     });
// };

// let promise = getpromise();

// promise.then((res) => {
//     console.log("Pomise FullFilled", res);
// });



// function getData(dataId) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         },2000);
//     });
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })


// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncFunc3() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data 3");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("Fetching Data2.....");
//     asyncFunc2().then((res)=> {
//         console.log("Fetching Data3....");
//         asyncFunc3().then((res) => {});
//     })
// });









// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("Fetching Data2.....");
//     asyncFunc2().then((res)=> {});
// });




// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather Data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getweatherData(){
//     await api();
//     await api();
// }

// console.log(getweatherData());



// function getData(dataId){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         console.log("Data",dataId);
//         resolve("success");
//     },2000);
// });
// }

// async function getAllData() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
// }

// console.log(getAllData());



//Async-Await
// function getData(dataId) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log("getting data1.......");
//     await getData(1);
//     console.log("getting data2.......");
//     await getData(2);
//     console.log("getting data3.......");
//     await getData(3);
//     console.log("getting data4.......");
//     await getData(4);
//     console.log("getting data5.......");
//     await getData(5);
// }

// console.log(getAllData());