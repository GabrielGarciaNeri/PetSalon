let pet1 = {
    name: "Jon",
    age: 3,
    Gender: "Male",
    Service: "",
    Breed: "Chihuahua",
    image: "Images/Chihuahua.jpg"
}
let pet2 = {
    name: "Mo",
    age: 7,
    Gender: "Male",
    Service:"",
    Breed: "Pitbull",
    image: "Images/Pitbull.jpg"
}
let pet3 = {
    name: "Parz",
    age: 1,
    Gender: "Male",
    Service: "",
    Breed: "Mancoon",
    image: "Images/Mancoon.jpg"
}

let petlist = [pet1, pet2, pet3]

document.getElementById("petCount").innerHTML=`We have a total of  ${petlist.length} pets`

function getPetNames(){
    let p = document.getElementById("petNames");

    for(i=0; i<petlist.length; i++){
        console.log(petlist[i].name);
        
        p.innerHTML += `
        <div class="pet">
            <p>${petlist[i].name}</p>
            <img src="${petlist[i].image}">
        
        </div>`
        
    }
}
getPetNames()
