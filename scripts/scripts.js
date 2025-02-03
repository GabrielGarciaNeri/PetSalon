let pet1 = {
    name: "Jon",
    age: 3,
    Gender: "Male",
    Service: "",
    Breed: "Chihuahua",
    image: `<img src="Images/Chihuahua.jpg"></img>`
}
let pet2 = {
    name: "Mo",
    age: 7,
    Gender: "Male",
    Service:"",
    Breed: "Pitbull",
    image: `<img src="Images/Pitbull.jpg"></img>`
}
let pet3 = {
    name: "Parz",
    age: 1,
    Gender: "Male",
    Service: "",
    Breed: "Mancoon",
    image: `<img src="Images/Mancoon.jpg"></img>`
}

let petlist = [pet1, pet2, pet3]

document.getElementById("petCount").innerHTML=`We have a total of  ${petlist.length} pets`

function getPetNames(){
    let p = document.getElementById("petNames");

    for(i=0; i<petlist.length; i++){
        console.log(petlist[i].name);
        
        p.innerHTML += `<div>${petlist[i].name} ${petlist[i].image}</div>`
        
    }
}
getPetNames()
