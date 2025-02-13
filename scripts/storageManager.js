function saveService(service){
    let data = read(); //[] or data
    data.push(service); // add the new service to the array
    let val = JSON.stringify(data);
    
    localStorage.setItem("services", val);
}

function read(){
    let list = localStorage.getItem("services");
    console.log(list)
    if(!list){ // IF EMPTY?
        return[]; // create an empty array
    }else{
        let data = JSON.parse(list); //converts string into a array
        return data;
    }
    
}