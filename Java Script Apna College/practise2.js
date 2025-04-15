 // Create a game where you start with any random game number . Ask the useer to keep 
 // guessing  the game number until the user enter correct value.

// let gameNum = 25;
// let userNum = prompt("Guess the game number");
// while (userNum != gameNum) {
//     userNum = promt("You entered wrong number");
// }
// console.log("you entered , right number");


//Prompt the username to enter their fullname . Generate a username for them based on the input . 
//Start username with@, followed by their full name and enditng with the fullname lengt
// eg : user name = "muqtdairqureshi", username should be "@muqtadirqureshi123"


// let fullName = prompt("Enter Full Name , without Space");
// userName = "@" + fullName +  fullName.length;
// console.log(userName);

// for loop
// let heroes = ["Ironman", "Hulk", "Antman", "Shaktiman"];
// for(let i = 0; i<=heroes.length; i++){
//     console.log(heroes[i]);
// }

//for of loop
// let heroes = ["Ironman", "Hulk", "Antman", "Shaktiman"];
// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }


//For a given array with marks of student  [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class

// The for...of loop gives each value of the array but doesn’t give you the index,The for...of loop gives each value of the array but doesn’t give you the index,The for...of loop gives each value of the array but doesn’t give you the index,

//For a given array with price of 5 items -> [250, 645, 300, 900, 50]


//All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];

// for(let i = 0; i<items.length; i++){
//       offer = items[i] / 10;
//     items[i] = items[i] - offer
// }

// console.log(items);



// let number = [1, 2, 3, 4, 5, 6,];
// for(let i=0; i<number.length; i++){
//     console.log(number[i]);
// }



// let marvelHeroes = ["thor", "spiderman", "ironman"]
// marvelHeroes.push();
// console.log(marvelHeroes);


//Create an Array to store companies  "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a.Remove the first company from the array
// b.Remove Uber & ADD Ola in its place 
// c. Add Amazon At the end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.splice(0,1);
// companies.splice(2,1,"Ola");
// companies.push("Amazon");
// console.log(companies);

// 


// arrowSum(5,3);



// const arrowSum = (a,b) =>{
//     console.log(a+b);
// }
// const arrowMul = (x,y) =>{
//     console.log(x*y);
// }
// arrowSum(5,3);
// arrowMul(4,5);



// const arrowSum = (a,b) => {
//     console.log(a+b);
// }
// arrowSum(3,1);


// let nums = [2,3,4,5,6];
// nums.forEach((num) =>{
//     console.log(num*num);
// })


//Filter method
// let arr = [1,2,3,4,5,6,7];

// let evenarr = arr.filter((val) =>{
//     return val % 2 === 0;
// })
// console.log(evenarr);



// let arr = [30,67,98,87,95,91];
// let scoredmark = arr.filter((val) =>{
//     return val>90;
// });
// console.log(scoredmark);


// let marks = [97,64,32,49,99,86];
// let scoredmark =marks.filter((val)=> {
//     return val>90;
// });
// console.log(scoredmark);



// let arr = [1,2,3,4];
// const output = arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(output)


// let num = [2,1,4,5,9,7];
// let Greaternum = num.reduce((prev,curr) =>{
//     return prev>curr ? prev:curr;
// });
// console.log(Greaternum);




// let marks = [90,92,78,45,99,87,96];
// let scoredmark = marks.filter((val) => {
//     return val > 90;
// });
// console.log(scoredmark);


//Map method

// let num = [1,2,3,4,5];
// let square = num.map((val) =>{
//     return val*val;
// });
// console.log(square);




// let n = prompt("Enter a number : ");

// let arr = [];                                 //1 se lekar n tak value store karna hai     so we kept an empty 
// for (let i = 1; i<=n; i++){
//     // arr[] = i                              i ki value 1 hogi to 1 store hoga , 2 hogi to 2 store hoga , and so on       1 2 3 4 5 6 7 8 
//     arr[i - 1] = i;                           //1(0)th index per store hoga ,  2(1)th index per store hoga ,  and so on     3(2) 4(3) 5(4)
// }
// console.log(arr);




//Take a number n as input from the user . Create an array from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array 
//Use the reduce method to calculate product of all numbers in the array 


// let n=prompt("Enter a number");
// let arr=[];
// for(let i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let Sum = arr.reduce((prev,curr) =>{
//     return prev+curr;
// });
// console.log("Sum = ", Sum);

// let product = arr.reduce((prev,curr) =>{
//     return prev+curr;
// });
// console.log("Product = ", product);





//filter method
// let marks = [97,86,72,99,91];
// let scoredMark = marks.filter((val) => {
//     return val>90;
// });
// console.log(scoredMark);

//Reduce Method

// let num = [1,2,3,4,5];
// let sum = num.reduce((prev,curr) =>{ 
//     return prev + curr;
// });
// console.log(sum);



//Create a H2 heading element with text "Hello JavaScript ". Append from "Apna College Students " to this text using JS

// let h2 = document.querySelector("h2");

// h2.innerText = h2.innerText + "From Apna Colege";

// console.log(h2innerText);



// let divs = document.querySelectorAll(".box");
// let idx=1;
// for(let div of divs){
//      div.innerText = `new unique value ${idx}`;
//      idx++
//      console.log(div.innerText);
// }



// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(let div of divs){
//      div.innerText = `Unique value ${idx}`;
//      idx++;
//      console.log(div.innerText);
// }



// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me !" ;
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);



// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me !";
// console.log(newBtn);
// newBtn.style.backgroundColor="green"
// newBtn.style.color="blue";

// document.querySelector("body").prepend(newBtn);



//Create a toggel button that changes the screen to dark mode when clicked and light mode when again clicked

// let modeBtn = document.querySelector("#Mode");
// let currMode = "Light";

// modeBtn.addEventListener("click" ,() => {
//      if(currMode == "Light") {
//           currMode = "dark";
//           document.querySelector("body").style.backgroundColor="black";
//      } else {
//           currMode = "Light";
//           document.querySelector("body").style.backgroundColor="white";
//      }
//      console.log(currMode);
// });




// let modeBtn = document.querySelector("#Mode");
// let currMode = "light";

// modeBtn.addEventListener("click" , () => {
//      if (currMode == "light"){
//      currMode = "dark";
//      document.querySelector("body").style.backgroundColor="black";
// }else{
//      currMode="light";
//      document.querySelector("body").style.backgroundColor="white"
// }
// console.log(currMode);
// });




// let ModeBtn = document.querySelector("#Mode");
// let currMode = "light";

// ModeBtn.addEventListener("click" , () => {
//      if (currMode == "light"){
//           currMode = "black";
//      document.querySelector("body").style.backgroundColor="black";
// } else {
//      currMode = "light";
//      document.querySelector('body').style.backgroundColor="white"
// }
// console.log(currMode);
// })


//Async Await

// function getData(data ID){
//      return new Promise ((resolve,reject) => {
//           setTimeout(() => {
//                console.log("data", dataId);
//                resolve("success");
//           }),2000
//      })
// }

















//Async await 

// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData() {
//     await api();
//     await api();
// }

// console.log(getAllData


// function getData(dataID) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataID);
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData() {
//     console.log("Fetching Data1.....");
//     await getData(1);
//     console.log("Fetching Data1.....");
//     await getData(2);
//     console.log("Fetching Data1.....");
//     await getData(3);
// }

// console.log(getAllData());



// function getData(dataID) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataID);
//             resolve("success");
//         },2000);
//     });
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
//     .then((res) => {
//         return getData(3)
//     })
//         .then((res) => {
//             return getData(4)
//         })
//             .then((res) => {});
        








   

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


// console.log("Fetching Data 1....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2....")
//     asyncFunc2().then((res) =>{});
//     });



// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("Fetching Data2.....");
//     asyncFunc2().then((res)=> {});
// });








//ASYNC AWAIT 


// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) +1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// console.log(demo());



//ASYNC FUNCTION 

// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() *10) +1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// console.log(demo());




// h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log("Color change to " , color);
//             resolve("success");
//         },delay);
//     })
// }

// async function demo() {
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("pink",1000);
//     await changeColor("blue",1000);
//     await changeColor("yellow",1000);

// }


//ASYNC FUNCTION 
// let h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log("color change to " , color);
//             resolve("color change");
//         },delay);
//     });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("pink", 1000);
//     await changeColor("magenta", 1000);

// }

// console.log(demo());



//FETCH API 

// let url = "https://catfact.ninja/fact";

// async function getfacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log("first data : ", data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("second data : ", data2.fact);
//     } catch(e) {
//         console.log("Error Occured ", e);
//     }
//     console.log("bye");
// }

// // console.log(getfacts);
// getfacts();


// let url = "https://catfact.ninja/fact";

// async function getfacts() {
//     try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("First Fact : ", data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log("Second Fact : ", data2.fact);
// } catch(e) {
//     console.log("Error Found : ", e);
// }
// console.log("bye");
// }

// getfacts();



// const url = "https://catfact.ninja/fact";

// const btn = document.querySelector("#btn");
// const factPara = document.querySelector("#fact");

// const getfacts = async() => {
//     console.log("getting data.....");
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     factPara.innerText =  (data.fact);
// }

// btn.addEventListener("click", getfacts);



// let modeBtn = document.querySelector("#mode");

// let currMode = "light";

// modeBtn.addEventListener("click", () => {
// if (currMode == "light") {
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
// } else {
//     currMode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
// }
// console.log(currMode);


// let modeBtn = document.querySelector("#mode");

// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currMode == "light"){
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
// } else {
//     currMode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
// }
// console.log(currMode);
// })



// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(200);
//             console.log("weather data");
//         }, 2000);
//     });
// }

// async function getweatherallData() {
//     await api();
//     await api();
// }

// console.log(getweatherallData());


// function getData(dataId) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// console.log(getAllData());



// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// console.log(getAllData());




// let h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color change to ${color}`);
//             resolve("color change");
//         }, delay);
//     });
// }

// async function finalchange() {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
// }

// console.log(finalchange());



//fetch api 

// let url = "https://catfact.ninja/fact";

// async function fact() {
//     try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("First fact : ", data.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log("second factc : ", data2.fact);
// } catch(e) {
// console.log("error occured", e);
// }
// console.log("bye");

// }

// fact();

// async function getAllFact() {

// }








// const url = "https://catfact.ninja/fact";

// let modebtn = document.querySelector("#btn");
// let factpara = document.querySelector("#fact");

// const getfacts = async() => {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("Fact of Data : ", data.fact);
//     factpara.innerText = data.fact;
// }

// btn.addEventListener("click", getfacts);
















// const url = "https://catfact.ninja/fact";

// let modebtn = document.querySelector("#btn");
// let factpara = document.querySelector("#fact");


// const getfacts = async() => {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log("Facts is : ", data.fact);
//     factpara.innerText = data.fact;
// }

// modebtn.addEventListener("click", getfacts);


let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    let res = await axios.get(url2);
    return res.data.message;
}

btn.addEventListener("click", async() => {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});
