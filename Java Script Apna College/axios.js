//AXIOS 
//IN AXIOS YOU HAVE TO PUT 1 LINK IN HTML

let btn = document.querySelector("button");
let p = document.querySelector("#result");


let url = "https://catfact.ninja/fact";


btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);
    p.innerText = fact;
});

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e);
        return "No fact found";
    }
}




// When catch methos will apply 
// When the API URL is incorrect
// If you misspell the URL (https://catfact.ninja/fact), for example:









// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("error -", e);
//         return "No Image found";
//     }
// }