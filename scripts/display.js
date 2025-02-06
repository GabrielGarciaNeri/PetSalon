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