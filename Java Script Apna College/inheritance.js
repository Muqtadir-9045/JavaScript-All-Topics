class Person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person {
    work(){
        console.log("solve problem , build something");
    }
}

let muqtadirObj =new Engineer();

console.log(muqtadirObj.work());