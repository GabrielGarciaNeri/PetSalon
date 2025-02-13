// constructor
function Service(title, price){
    this.title = title
    this.price = price
}

function validService(service){
    let isValidTitle = true;
    let isValidPrice = true;
    if(service.title==""){
        isValidTitle=false;
        $("#txtTitle").css("border","1px solid red");
        $(`#titleRequirementText`).show().css("color","red")
    }else{
        $("#txtTitle").css("border","1px solid black");
        $(`#titleRequirementText`).hide()
    }

    if(service.price==""){
        isValidPrice=false;
        $("#txtPrice").css("border","1px solid red");
        $(`#priceRequirementText`).show().css("color","red")
    }else{
        $("#txtPrice").css("border","1px solid black");
        $(`#priceRequirementText`).hide()
    }

    return isValidTitle && isValidPrice;
}
function showAlert(msg,type){
    let alertContainer = document.getElementById("#titleRequirementText")
    alertContainer.innerHTML = `
    <div id="alert-error" class="alert alert-${type}" role="alert">
        ${msg}
    </div>
    `
    setTimeout(()=>{
        document.getElementById("alert-error").remove();
    },3000) //1000 = 1 second
}
let input = $("input");
input.css("cursor", "pointer");

function register(){
    
    // get the value from the input
    let inputTitle =  $("#txtTitle").val(); // get and store value
    let inputPrice = $(`#txtPrice`).val();

    let newService = new Service(inputTitle,inputPrice);
    $("#results").append(`<li>${inputTitle}, ${inputPrice}</li>`) // append (jQuery) = input html (JS)
    if(validService(newService)==true){
        saveService(newService); 
        console.log(newService);//fn in Store Manager
    }

    
}


function init(){
    //event handler
    //...on click...
    $("#btnRegister").on("click", register);

    //hide the element
    $(`#titleRequirementText`).hide();
    $(`#priceRequirementText`).hide();

    let service = new Service("Grooming",30)
    let service2 = new Service("Vaccines",20)
    console.log(service, service2)
}

window.onload=init; // wait to render html
