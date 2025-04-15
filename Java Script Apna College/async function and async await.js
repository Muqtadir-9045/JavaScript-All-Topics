


//ASYNC FUNCTION 

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data 2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("Fetching data1.....");
// asyncFunc1().then((res)=> {
//     console.log("Fetching Data 2.....");
//     asyncFunc2().then((res)  => {});
// });







// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// //Promise Chain

// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// })




//ASYNC FUNCTION 
//kisi bhi normal function ko hum async function bana sakte hai 


// async function hello(){
//     console.log("hello");
// }








//Async-Await
// function api() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200); // success
//         }, 2000);
//     });
// }

// async function getWeatherData(){
//     await api();
//     await api();
// }

// console.log(getWeatherData());






 







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






//ASYNC FUNCTION PAID COURSE

// async function greet() {
//     // throw "404 page not found";
//     return "hello";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err : ", err);
// });

//// Return the value in result 
// let demo = async () => {
//     return 5;
// };




//ASYNC AWAIT PAID COURSE

// function getNum() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             num=Math.floor(Math.random() * 10)+1;
 //   // Math.random() generates a random number between 0 and 1
   // // 0.123, then Math.random() * 10 is 1.23, and Math.floor(1.23) is 1. Adding 1 gives 2.
//             console.log(num);
//             resolve("success");
//         }, 1000)
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// console.log(demo());






// h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changes to ${color}`);
//             resolve("color Changed");
//         }, delay);
//     });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("pink", 1000);
// }

// console.log (demo());



//HANDLING REJECTION WITH AWAIT  

// h1 = document.querySelector("h1");

// function changeColor(color,delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             console.log("Generated number:", num);
//             if (num > 3) {
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changes to ${color}`);
//             resolve("color Changed");
//         }, delay);
//     });
// }

// async function demo() {
//     try{
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("pink", 1000);
// } catch (err) {
//     console.log("eror caught");
//     console.log(err);
// }

// let a = 5;
// console.log(a);
// console.log("new nmumber = ", a+ 3);
// }

// console.log (demo());












//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
//ASYNC FUNCTION WITHOUT CALLING A FUNCTION   , IT IS IMMEDIATELY INVOKED                 LIKE console.log(getAllData());
//DUBARA USE NAHI KAR PAYENGE YE CODE KO , PHIR COPY PASTE HI KARNA PADEGA BAAR BAAR 

// function getData(dataId) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// (async function() {
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
// })();

