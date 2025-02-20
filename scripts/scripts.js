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
        displayTable();
        displayPetInfo();
        showAlert("New pet was added","success")
        clearInputs();
    }else{
        showAlert("Please, add all the information","warning");
    }
}

//validations
function isValid(pet){
    let validation = true;

    // reset style
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGender.classList.remove("error");
    inputBreed.classList.remove("error");
    document.getElementById("alert-error").classList.add("hide")


    if(pet.name ===""){
        validation = false;
        inputName.classList.add("error")
    }
    if(typeof(pet.name) ==="number"){
        validation = false;
        inputAge.classList.add("error")
    }
    if(pet.age ===""){
        validation = false;
        inputName.classList.add("error")
    }
    if(typeof(pet.age) ==="string"){
        validation = false;
        inputAge.classList.add("error")
    }else{

    }
    if(pet.gender ===""){
        validation = false;
        inputGender.classList.add("error")
    }
    if(pet.breed ===""){
        validation = false;
        inputBreed.classList.add("error")
    }
    return validation
}

function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
}


function deletePet(petId){
    //remove from html
    document.getElementById(petId).remove();

    //remove from the array splice()
    petlist.splice(petId,1);

    //re-display the table
    displayTable();
    displayPetInfo();

    //show the notification
    showAlert("The Pet was deleted", "danger");
}

function showAlert(msg,type){
    let alertContainer = document.getElementById("alertContainer")
    alertContainer.innerHTML = `
    <div id="alert-error" class="alert alert-${type}" role="alert">
        ${msg}
    </div>
    `
    setTimeout(()=>{
        document.getElementById("alert-error").remove();
    },3000) //1000 = 1 second
}
function getServices(){
    let list = read(); //read the srvices from LS
    let option=""
    for(i=0; i<list.length; i++){
        let service = list[i];
        option += `<option value="${service.title}">${service.title} - $ ${service.price}</option>`
    }
    inputService.innerHTML = option
}
function init(){
    let Pet1 = new Pet("Leo",80, "male","Chihuahua","Cleaning","Dog");
    let Pet2 = new Pet("May",40, "female","Pitbull","Cleaning","Dog");
    let Pet3 = new Pet("Tay",50, "male","Mancoon","Cleaning","Cat");
    petlist.push(Pet1,Pet2,Pet3);
    displayTable();
    displayPetInfo();
    getServices();
    document.getElementById("alert-error").classList.add("hide")
}


window.onload=init;




// creating the object

// let objName = new Constructor("value1","value2","value3");







