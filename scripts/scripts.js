let petSalon={
    name:"The Pet Salon",
    address:{
        street:"Palm ave",
        zip:"12345"
    }
}
let petlist=[]

// getting html elements
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType =  document.getElementById("txtType");

function Pet(name,age,gender,breed,service,type){
    //properties = values
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

function register(){
    //get the values from the input
    //create the object using the constructor
    //push the object into the array
    let newPet = new Pet(inputName.value, Number(inputAge.value), inputGender.value, inputBreed.value, inputService.value, inputType.value);
    console.log(newPet);
    if(isValid(newPet)){
        petlist.push(newPet)
        displayPet();
        clearInputs();
    }    
}

//validations
function isValid(pet){
    let validation = true;
    if(pet.name ===""){
        validation = false;
        alert("The name of the pet should not be empty"); 
    }
    if(typeof(pet.name) ==="number"){
        validation = false;
        alert("The name of the pet should not be a number"); 
    }
    if(pet.age ===""){
        validation = false;
        alert("The age of the pet should not be empty"); 
    }
    if(typeof(pet.age) ==="string"){
        validation = false;
        alert("The age of the pet should not be text"); 
    }else{

    }
    if(pet.gender ===""){
        validation = false;
        alert("The gender of the pet should not be empty"); 
    }
    if(pet.breed ===""){
        validation = false;
        alert("The breed of the pet should not be empty"); 
    }
    return validation
}

function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
}


function init(){
    let Pet1 = new Pet("Leo",80, "male","Chihuahua","Cleaning","Dog");
    let Pet2 = new Pet("May",40, "female","Pitbull","Cleaning","Dog");
    let Pet3 = new Pet("Tay",50, "male","Mancoon","Cleaning","Cat");
    petlist.push(Pet1,Pet2,Pet3);
    displayPet();
}

window.onload=init;




// creating the object

// let objName = new Constructor("value1","value2","value3");







