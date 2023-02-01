//==========Exercise #1 ===========//
/*
Write a function that parses through the below dicect and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


// function favorites(dic) {
function favorites(dic) {
    let keys = [];
    for (let key in dic) {
        if (keys.includes(key)) continue;
        keys.push(key);
        if (Array.isArray(dic[key])) {
            console.log(`${key} : `)
            dic[key].forEach(element => {
                if (typeof element === 'object') {
                    favorites(element);
                } else {
                    console.log(`- ${element}`);
                }
            });
        } else if (typeof dic[key] === 'object') {
            favorites(dic[key]);
        } else {
            console.log(`${key} : ${dic[key]}`);
        }
    }
}
    
favorites(person3);
// }

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`${this.name} : ${this.age}`);
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = (num) => {
        this.age += num
    }

}

let victor = new Person('Victor', 31)
let samm = new Person('Samm', 30)
victor.printInfo()
samm.printInfo()
victor.addAge(3)
victor.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


function wordSize(string) {
    return  new Promise((resolve, reject) => {
    if (string.length > 10) {
        resolve("Big Word");
    } else {
        reject("Small Number");
    }
});
}
wordSize("Supercalifragilisticexpialidocious")
    .then(result => console.log(result))
    .catch(reject => console.log(reject));