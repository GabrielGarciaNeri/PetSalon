function displayPet(){
    let cardSection = document.getElementById("petNames");
    let result = "";

    for(i=0; i<petlist.length; i++){
        let pet = petlist[i];
        //console.log(petlist[i])
        result += `
            <div id=${i} class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text">${pet.age}</p>
                    <p class="card-text">${pet.gender}</p>
                    <p class="card-text">${pet.breed}</p>
                    <p class="card-text">${pet.service}</p>
                    <p class="card-text">${pet.type}</p>
                </div>
            </div>
        `
    }
    cardSection.innerHTML = result;
}
function displayPetInfo(){
    document.getElementById("petsCount").innerHTML="Total pets " + petlist.length
}
function displayTable(){
    let petRows = document.getElementById("petRows");
    let rows=""
    for(i=0; i<petlist.length; i++){
        let pet = petlist[i]
        rows +=`
        <tr id=${i}>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button>
                <button class="btn btn-info btn-sm disabled">Edit</button>
            </td>
        <tr>
        `;
    }
    petRows.innerHTML=rows;
}