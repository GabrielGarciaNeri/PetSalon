console.log("welcome to FSDI 104");

//Global variables
let globalVariable = "I am a global variable"
let localVariable = "I am local variable"

function exampleFunction(){
    //local variable
    let localVariable = "I am local variable"

    console.log(globalVariable)
    console.log(localVariable)
}
exampleFunction()

console.log(globalVariable)
console.log(localVariable)

//arrays
let fruits = ["apple","banana","orange"];
console.log(`this is an array ${fruits[2]}`)

console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[0])

fruits[1]="Cherry"
console.log(fruits)

//arrays length
console.log(fruits.length)

//adding and removing elements
fruits.push("Watermelon", "melon", "pear")// adding to the end
console.log(fruits)

fruits.pop()//remove from the end
console.log(fruits)

fruits.unshift("grape","kiwi")//add to the beginning
console.log(fruits)

fruits.shift()//removing from the beginning
console.log(fruits)

//challenge
/*
1. Create an array of student names
2. Use a for loop to iterate through the array
3. Log each students name
*/

let students = ["Gabriel", "James","leo","Mike","Sonny"]
for(i=0; i<students.length; i++){
    console.log(students[i])
}

console.log("======OBJECTS======")
//objects
//an object is a collection of key value pairs it allows you to group related data together in a structure way
/*
let objectname={
key1: value1,
key2: value2,
key3: Value3
}
*/

let person = {
    name: "Michael",
    lastName: "Scott",
    age: 40,
    isStudent: false
}

console.log(`The persons name is ${person.name}`)
console.log(`The persons last name is ${person.lastName}`)
console.log(`The persons age is ${person.age}`)
console.log(`Is the person a student ${person.isStudent}`)

let student1 = {
    name: "Scott",
    email: "studnet@aol",
    age: 24,
    address: "Antartica"
}

let student2 = {
    name: "Santa",
    email: "studnet@aol",
    age: 27,
    address: "north Pole"
}

let student3 = {
    name: "Panda",
    email: "studnet@aol",
    age: 21,
    address: "South Pole"
}

let studentlist = [student1,student2,student3];
console.log(studentlist[1].email)

document.getElementById("studentCounter").innerHTML=`We have a total of ${studentlist.length} students`



function getStudentNames(){
    let list = document.getElementById("studentNames");
    

    for(i=0; i<studentlist.length; i++){
        console.log(studentlist[i].name);
        
        list.innerHTML += `<div>${studentlist[i].name}</div>`
    }
}
getStudentNames()