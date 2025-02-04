let petSalon={
    name:"The Pet Salon",
    address:{
        street:"Palm ave",
        zip:"12345"
    }
}
let petlist=[]

// getting html elements
let inputName = document.getElementById("txtName")
let inputAge = document.getElementById("txtAge")
let inputGender = document.getElementById("txtGender")
let inputBreed = document.getElementById("txtBreed")
let inputService = document.getElementById("txtService")
let inputType =  document.getElementById("txtType")

function Pet(name,age,gender,breed,service,type){
    //properties = values
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed
    this.service = service
    this.type = type
}

function register(){
    //get the values from the input
    //create the object using the constructor
    //push the object into the array
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputType.value)
    console.log(newPet)
    petlist.push(newPet)
    clearInputs()
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
    petlist.push(Pet1,Pet2,Pet3)
}

window.onload=init;

// creating the object

// let objName = new Constructor("value1","value2","value3");







