async function get() {
    // fetich kyjib les contact mn api
    const response = await fetch("https://randomuser.me/api/");
//    chnager les ifo from api to json file
    const data = await response.json();
     console.log(data);
//les cartes
    const listcart=document.querySelector(".cartes");
    // results= array f api
data.results.forEach(user => {
// creat div with classe="col-md-4" in list cart
    const cart=document.createElement("div");
    cart.classList.add("col-md-4");
//    pour boucler les cart aymchi lcart ou ghyht fiha dkchi li jb mn api
    cart.innerHTML=`    
    <div class="card text-center card-color-1">
        <img src="${user.picture.large}" class="card-img-top profile-img mx-auto mt-3" alt="Image de profil">
        <div class="card-body">
            <h5 class="card-title">${user.name.last} ${user.name.first}</h5>
            <p class="card-text">Numéro de téléphone : ${user.phone}</p>
            <p class="card-text">E-mail : ${user.email}</p>
        </div>
    </div>
</div> `;


    listcart.appendChild(cart);
});

}
function boucler(){
    var i;
    for (i = 0; i < 12; i++) {
        get();
    }
}

boucler();
