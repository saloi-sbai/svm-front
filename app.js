const api_url =
  "http://localhost/SVM-back/controllers/produits/getProducts.php";

const articles = document.querySelector(".section-center");
let filter = "";
let vueFiltree = [];
let data = [];
const plats = document.getElementById("plats");
const Dessert = document.getElementById("dessert");
const Entrée = document.getElementById("entrée");
const tous = document.getElementById("tous");
const user = document.getElementById("bonjour");
const visiteur = document.getElementById("visiteur");
const inscrit = document.getElementById("inscrit");
const logout = document.getElementById("logout");

// comment cacher le bouton lorsque l'on authentifié
if (localStorage.getItem("username")) {
  visiteur.classList.add("hide");
  inscrit.classList.remove("hide");
  user.innerHTML = "Bonjour " + localStorage.getItem("username");
} else {
  visiteur.classList.remove("hide");
  inscrit.classList.add("hide");
}

logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("username");
  location.href = "./index.html";
});

async function getapi(url) {
  // je mets le resultat dans la variable response
  const response = await fetch(url);

  // je convertis le resultat en forma json
  data = await response.json();
  afficher(data);
}

// j'appelle la fonction getapi avec l'url de mon back
getapi(api_url);

// il faut filter les resultats (data ) et afficher ce resultat en le donnant à la fonction affciher(data)

plats.addEventListener("click", (e) => {
  filter = "plats";
  vueFiltree = data.filter((item) => item.categorie === filter);
  afficher(vueFiltree);
  //location.reload();
});

Dessert.addEventListener("click", (e) => {
  filter = "dessert";
  vueFiltree = data.filter((item) => item.categorie === filter);
  afficher(vueFiltree);
  //location.reload();
});

Entrée.addEventListener("click", (e) => {
  filter = "entrée";
  vueFiltree = data.filter((item) => item.categorie === filter);
  afficher(vueFiltree);
  //location.reload();
});

tous.addEventListener("click", (e) => {
  afficher(data);
});

function afficher(data) {
  let article = data
    .map((item) => {
      return `
          <article class="menu-item">
          <img
            src="${item.img}"
            class="photo"
            alt=""
          />
          <div class="item-info">
            <header>
              <h4>${item.nom}</h4>
              <h4 class="price">${item.prix} €</h4>
              <button class="filter-btn" type="button">
                <a href="./panier.html"><i class="fa-solid fa-cart-plus"></i></a>
              </button>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>
  `;
    })
    .join("");

  articles.innerHTML = article;
}
