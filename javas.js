async function get() {
    // // fetich kyjib les contact mn api
    const response = await fetch("https://randomuser.me/api/");
    // Converting API to JSON
    const data = await response.json();
    // Targeting the container for cards
    const cardContainer = document.querySelector(".cartes");
    // Looping through the results from API
    data.results.forEach(user => {
        // creat div with classe="col-md-4" in list cart
        const card = document.createElement("div");
        card.classList.add("col-md-4");

        card.innerHTML = `
            <div class="card text-center card-color-1">
                <img src="${user.picture.large}" class="card-img-top profile-img mx-auto mt-3" alt="Image de profil">
                <div class="card-body">
                    <h5 class="card-title">${user.name.last} ${user.name.first}</h5>
                    <p class="card-text">Numéro de téléphone : ${user.phone}</p>
                    <p class="card-text">E-mail : ${user.email}</p>
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

function afficher() {
    
    for (let i = 0; i < 12; i++) {
        get();
    }
}

afficher();

function searchContact() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardName = card.querySelector('.card-title').innerText.toLowerCase();
        if (cardName.includes(searchValue)) {
            card.classList.remove('d-none'); 
        } else {
            card.classList.add('d-none'); 
        }
    });
}
