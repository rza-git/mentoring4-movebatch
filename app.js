// ARRAY

const arrayNum = [20, 40, 50, 10, 23]
// ------------->  0   1   2   3   4

// LOOPING

const randArray = []

for(let i = 0; i < 50; i++) {
    // Random 1 - 20
    // Math.random() * 20 ==> 0 - 19.9999999
    // 1 - 20
    const randNumber = Math.floor(Math.random() * 20) + 1; 

    randArray.push(randNumber)
}


let number = 10;

// Pola 1

for(let i = 0; i < number; i++) {
    // string kosong
    let star = ""
    
    for(let j = 0; j <= i; j++) {
        star += "*"
    }

    console.log(star)
    
}

console.log("===================")
console.log("===================")
console.log("===================")

// Pola 2

for(let i = 10; i > 0; i--) {
    let star = ""

    for(let j = 0; j < i; j++) {
        star += "*"
    }

    console.log(star)
}


console.log("===================")
console.log("===================")
console.log("===================")

// Pola 3
// Kotak

for(let i = 0; i < number; i++) {
    let star = ""

    for(let j = 0; j < number; j++) {
        star += "*"
    }

    console.log(star)
}

console.log("===================")
console.log("===================")
console.log("===================")

// Pola 4
// Kotak kosong tengahnya

// ***** ==> i = 0
// *   *
// *   *
// *   *
// ***** ===> i = 4

// number = 10
for(let i = 0; i < number; i++) {
    let star = ""
    for(let j = 0; j < number; j++) {

        if(i === 0 || i === number - 1 || j === 0 || j === number - 1) {
            star += "*"
        } else {
            star += " "
        }

    }
    console.log(star)
}

console.log("===================")
console.log("===================")
console.log("===================")


// For each ==> looping value
randArray.forEach((element) => {
    console.log(element)
})

// Map ==> looping value && transform value

const newArr = randArray.map((element) => {
    return (
        `Angka: ${element}`
    )
})

// Function

// Syntax lama ==> ES5

function printLine() {
    console.log("===================")
    console.log("===================")
    console.log("===================")
}

// Syntax baru ==> ES6 = arrow function

printLine();

const arrowFunction = () => {
    console.log("TEST ARROW")
}

arrowFunction();

printLine();

const simpleCalc = (firstNum, secondNum, operator) => {

    // if else
    // switch case
    let result = 0;
    switch(operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        default:
            result = 0;
            break;
    } 

    return result;
}

console.log("Pertambahan: " + simpleCalc(10, 5, "+"))
console.log("Pengurangan: " + simpleCalc(50, 25, "-"))
console.log("Perkalian: " + simpleCalc(20, 5, "*"))
console.log("Pembagian: " + simpleCalc(81, 9, "/"))











