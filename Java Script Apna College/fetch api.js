// const URL = "https://cat-fact.herokuapp.com/facts";

// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const getFacts = async () => {
//     console.log("getting data......");      
//     let response = await fetch(URL);            //FETCH API KUCH DATA LEKAR AATI HAI , 
//     console.log(response);     //JSON FORMAT    //YE DATA READABLE FORMAT ME NAHI AHAI ,
//     let data = await response.json();          //ISKO READABLE FORMAT ME KARNE KE LIYE HUM .json method ko call lagate  hai  , .json method readbale format me banata hai
//     factPara.innerText = data[1].text;        //jisko hum use kar sakte hai , html page per
// };

// btn.addEventListener("click", getFacts);





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









//FETCH API PAID COURSE


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log("First fact:", data.fact);

//         let res2 = await fetch(url);  
//         let data2 = await res2.json(); 
//         console.log("Second fact:", data2.fact);
//     } catch (e) {
//         console.log("Error occurred: ", e);  
//     }

//     console.log("bye");
// }

// getFacts();















// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2)=> {
//     console.log("data2 = ", data2.fact);
// })

// .catch((err) => {
//     console.log("ERROR -", err);
// });










