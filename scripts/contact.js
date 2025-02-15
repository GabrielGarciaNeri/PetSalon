let inputName = document.getElementById("txtName2");
let inputEmail = document.getElementById("txtEmail");
let inputPhone = document.getElementById("txtPhone");
let inputQuestions = document.getElementById("txtArea");

function Msg(name,email,phone,questions){
    //properties = values
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.questions = questions;
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
function clearInputs(){
    inputEmail.value = "";
    inputName.value = "";
    inputPhone.value = "";
    inputQuestions.value = "";
}

function send(){
    //get the values from the input
    //create the object using the constructor
    //push the object into the array
    let newMsg = new Msg(inputName.value, inputEmail.value, inputPhone.value, inputQuestions.value)
    console.log(newMsg);
    if(isValid2(newMsg)){
        showAlert("Message was sent succesfully!","success")
        clearInputs();
    }else{
        showAlert("Please, fill all the information","warning");
    }
}

function isValid2(msg){
    let validation = true;

    // reset style
    inputName.classList.remove("error");
    inputEmail.classList.remove("error");
    inputPhone.classList.remove("error");
    inputQuestions.classList.remove("error");
    document.getElementById("alert-error").classList.add("hide")


    if(msg.name ===""){
        validation = false;
        inputName.classList.add("error")
    }
    if(msg.email === ""){
        validation = false;
        inputEmail.classList.add("error")
    }
    if(msg.phone ===""){
        validation = false;
        inputPhone.classList.add("error")
    }
    if(msg.questions ===""){
        validation = false;
        inputQuestions.classList.add("error")
    }
    return validation
}


function init(){
    document.getElementById("alert-error").classList.add("hide")
}

window.onload=init;